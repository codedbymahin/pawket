
-- 1) Profiles (linked to Supabase Auth) + trigger on signup
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- RLS: profiles - users can manage their own profile
do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and policyname = 'Users can select own profile'
  ) then
    create policy "Users can select own profile"
      on public.profiles for select
      to authenticated
      using (id = auth.uid());
  end if;
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and policyname = 'Users can update own profile'
  ) then
    create policy "Users can update own profile"
      on public.profiles for update
      to authenticated
      using (id = auth.uid())
      with check (id = auth.uid());
  end if;
  -- Allow inserting own row (the signup trigger also inserts)
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and policyname = 'Users can insert own profile'
  ) then
    create policy "Users can insert own profile"
      on public.profiles for insert
      to authenticated
      with check (id = auth.uid());
  end if;
end $$;

-- Create or replace the new user handler (safe if already exists)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Attach trigger if not exists
do $$ begin
  if not exists (
    select 1
    from pg_trigger
    where tgname = 'on_auth_user_created'
  ) then
    create trigger on_auth_user_created
      after insert on auth.users
      for each row execute procedure public.handle_new_user();
  end if;
end $$;

-- 2) Roles: enum + user_roles table + helper fn
do $$ begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type public.app_role as enum ('admin', 'seller', 'vet', 'user');
  end if;
end $$;

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  role public.app_role not null,
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

-- Helper function to check roles
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;

-- RLS for user_roles
do $$ begin
  -- Users can see own roles; admins can see all (via using clause)
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='user_roles' and policyname='Users can view own roles'
  ) then
    create policy "Users can view own roles"
      on public.user_roles for select
      to authenticated
      using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;

  -- Users can self-assign basic 'user' role; admin manages everything else
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='user_roles' and policyname='Users can add self user role'
  ) then
    create policy "Users can add self user role"
      on public.user_roles for insert
      to authenticated
      with check (user_id = auth.uid() and role = 'user');
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='user_roles' and policyname='Admins manage roles'
  ) then
    create policy "Admins manage roles"
      on public.user_roles for all
      to authenticated
      using (public.has_role(auth.uid(),'admin'))
      with check (public.has_role(auth.uid(),'admin'));
  end if;
end $$;

-- 3) Products (for sellers) + public read of published only
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10,2) not null,
  original_price numeric(10,2),
  category text,
  brand text,
  rating numeric(2,1) not null default 0,
  in_stock boolean not null default true,
  is_published boolean not null default false,
  image_urls text[] not null default '{}',
  created_at timestamptz not null default now()
);
alter table public.products enable row level security;

-- RLS for products
do $$ begin
  -- Public/anon can see only published products
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='products' and policyname='Public can view published products'
  ) then
    create policy "Public can view published products"
      on public.products for select
      using (is_published = true);
  end if;

  -- Sellers can see their own products (even if unpublished)
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='products' and policyname='Sellers can view own products'
  ) then
    create policy "Sellers can view own products"
      on public.products for select
      to authenticated
      using (seller_id = auth.uid());
  end if;

  -- Sellers with role can create their own products
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='products' and policyname='Sellers can insert own products'
  ) then
    create policy "Sellers can insert own products"
      on public.products for insert
      to authenticated
      with check (seller_id = auth.uid() and public.has_role(auth.uid(),'seller'));
  end if;

  -- Owners or admin can update/delete
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='products' and policyname='Owners or admin can modify products'
  ) then
    create policy "Owners or admin can modify products"
      on public.products for update using (seller_id = auth.uid() or public.has_role(auth.uid(),'admin'))
      with check (seller_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='products' and policyname='Owners or admin can delete products'
  ) then
    create policy "Owners or admin can delete products"
      on public.products for delete
      to authenticated
      using (seller_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;
end $$;

-- 3a) Storage bucket for product images + policies
do $$ begin
  if not exists (select 1 from storage.buckets where id = 'product-images') then
    insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true);
  end if;
end $$;

-- Storage RLS policies for product-images
do $$ begin
  -- Public read
  if not exists (
    select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='Public read for product-images'
  ) then
    create policy "Public read for product-images"
      on storage.objects for select
      using (bucket_id = 'product-images');
  end if;

  -- Authenticated upload
  if not exists (
    select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='Authenticated users can upload to product-images'
  ) then
    create policy "Authenticated users can upload to product-images"
      on storage.objects for insert to authenticated
      with check (bucket_id = 'product-images');
  end if;

  -- Owners can update/delete their files
  if not exists (
    select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='Owners can update own product-images'
  ) then
    create policy "Owners can update own product-images"
      on storage.objects for update to authenticated
      using (bucket_id = 'product-images' and owner = auth.uid())
      with check (bucket_id = 'product-images' and owner = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='Owners can delete own product-images'
  ) then
    create policy "Owners can delete own product-images"
      on storage.objects for delete to authenticated
      using (bucket_id = 'product-images' and owner = auth.uid());
  end if;
end $$;

-- 4) Vets (only verified + published appear publicly)
create table if not exists public.vets (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  name text,
  specialty text,
  bio text,
  consultation_fee numeric(10,2),
  rating numeric(2,1) not null default 0,
  experience text,
  location text,
  availability text,
  verified boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.vets enable row level security;

-- Only admins can change verification status (trigger enforces this)
create or replace function public.enforce_verified_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (new.verified is distinct from old.verified)
     and not public.has_role(auth.uid(),'admin') then
    raise exception 'Only admin can change verification status';
  end if;
  return new;
end;
$$;

do $$ begin
  if not exists (
    select 1 from pg_trigger where tgname = 'vets_verify_admin'
  ) then
    create trigger vets_verify_admin
      before update on public.vets
      for each row execute procedure public.enforce_verified_admin();
  end if;
end $$;

-- RLS for vets
do $$ begin
  -- Public can view only verified & published vets
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='vets' and policyname='Public can view verified & published vets'
  ) then
    create policy "Public can view verified & published vets"
      on public.vets for select
      using (verified = true and is_published = true);
  end if;

  -- Owners can view their own vet profile too
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='vets' and policyname='Owners can view own vet profile'
  ) then
    create policy "Owners can view own vet profile"
      on public.vets for select
      to authenticated
      using (profile_id = auth.uid());
  end if;

  -- Vets can create their vet profile
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='vets' and policyname='Vets can insert own vet profile'
  ) then
    create policy "Vets can insert own vet profile"
      on public.vets for insert
      to authenticated
      with check (profile_id = auth.uid() and public.has_role(auth.uid(),'vet'));
  end if;

  -- Owners or admin can update their vet profile (verification change restricted by trigger)
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='vets' and policyname='Owners or admin can update vets'
  ) then
    create policy "Owners or admin can update vets"
      on public.vets for update
      to authenticated
      using (profile_id = auth.uid() or public.has_role(auth.uid(),'admin'))
      with check (profile_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;

  -- Admins can delete vet profiles
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='vets' and policyname='Admins can delete vets'
  ) then
    create policy "Admins can delete vets"
      on public.vets for delete
      to authenticated
      using (public.has_role(auth.uid(),'admin'));
  end if;
end $$;

-- 5) Courier bookings (users manage their own, admin sees all)
create table if not exists public.courier_bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  pet_type text not null,
  pet_breed text,
  pet_age text,
  pet_weight numeric(10,2),
  special_needs text,
  from_location text not null,
  to_location text not null,
  service_date date not null,
  time_slot text not null,
  service_type text not null,
  price numeric(10,2) not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
alter table public.courier_bookings enable row level security;

-- RLS for courier_bookings
do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='courier_bookings' and policyname='Users can view own bookings or admin all'
  ) then
    create policy "Users can view own bookings or admin all"
      on public.courier_bookings for select
      to authenticated
      using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='courier_bookings' and policyname='Users can insert own booking'
  ) then
    create policy "Users can insert own booking"
      on public.courier_bookings for insert
      to authenticated
      with check (user_id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='courier_bookings' and policyname='Owners or admin can update bookings'
  ) then
    create policy "Owners or admin can update bookings"
      on public.courier_bookings for update
      to authenticated
      using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'))
      with check (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;

  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='courier_bookings' and policyname='Owners or admin can delete bookings'
  ) then
    create policy "Owners or admin can delete bookings"
      on public.courier_bookings for delete
      to authenticated
      using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
  end if;
end $$;
