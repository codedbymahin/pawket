-- Create pets table
CREATE TABLE public.pets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  breed TEXT,
  age TEXT,
  weight NUMERIC,
  color TEXT,
  gender TEXT,
  description TEXT,
  medical_info TEXT,
  image_urls TEXT[] DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on pets
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;

-- Create adoption_listings table
CREATE TABLE public.adoption_listings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  pet_id UUID NOT NULL REFERENCES public.pets(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  adoption_fee NUMERIC DEFAULT 0,
  location TEXT,
  contact_info TEXT,
  requirements TEXT,
  status TEXT NOT NULL DEFAULT 'available',
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on adoption_listings
ALTER TABLE public.adoption_listings ENABLE ROW LEVEL SECURITY;

-- Create lost_found_listings table
CREATE TABLE public.lost_found_listings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('lost', 'found')),
  pet_name TEXT,
  pet_type TEXT NOT NULL,
  pet_breed TEXT,
  pet_color TEXT,
  pet_size TEXT,
  description TEXT NOT NULL,
  last_seen_location TEXT NOT NULL,
  last_seen_date DATE,
  contact_info TEXT NOT NULL,
  reward_amount NUMERIC DEFAULT 0,
  image_urls TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'active',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on lost_found_listings
ALTER TABLE public.lost_found_listings ENABLE ROW LEVEL SECURITY;

-- Create orders table
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  buyer_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total_amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  shipping_address TEXT NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price NUMERIC NOT NULL,
  total_price NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on order_items
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Add missing columns to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_pets_updated_at
  BEFORE UPDATE ON public.pets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_adoption_listings_updated_at
  BEFORE UPDATE ON public.adoption_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lost_found_listings_updated_at
  BEFORE UPDATE ON public.lost_found_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create RLS policies for pets
CREATE POLICY "Pet parents can view own pets"
  ON public.pets
  FOR SELECT
  USING (owner_id = auth.uid());

CREATE POLICY "Pet parents can manage own pets"
  ON public.pets
  FOR ALL
  USING (owner_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'))
  WITH CHECK (owner_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'));

-- Create RLS policies for adoption_listings
CREATE POLICY "Public can view published adoption listings"
  ON public.adoption_listings
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Owners can view own adoption listings"
  ON public.adoption_listings
  FOR SELECT
  USING (owner_id = auth.uid());

CREATE POLICY "Pet parents can manage own adoption listings"
  ON public.adoption_listings
  FOR ALL
  USING (owner_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'))
  WITH CHECK (owner_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'));

-- Create RLS policies for lost_found_listings
CREATE POLICY "Public can view published lost/found listings"
  ON public.lost_found_listings
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Reporters can view own listings"
  ON public.lost_found_listings
  FOR SELECT
  USING (reporter_id = auth.uid());

CREATE POLICY "Pet parents can manage own listings"
  ON public.lost_found_listings
  FOR ALL
  USING (reporter_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'))
  WITH CHECK (reporter_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'));

-- Create RLS policies for orders
CREATE POLICY "Buyers can view own orders"
  ON public.orders
  FOR SELECT
  USING (buyer_id = auth.uid());

CREATE POLICY "Merchants can view orders for their products"
  ON public.orders
  FOR SELECT
  USING (
    public.has_role(auth.uid(), 'merchant') AND
    EXISTS (
      SELECT 1 FROM public.order_items oi
      JOIN public.products p ON oi.product_id = p.id
      WHERE oi.order_id = orders.id AND p.seller_id = auth.uid()
    )
  );

CREATE POLICY "Pet parents can create orders"
  ON public.orders
  FOR INSERT
  WITH CHECK (buyer_id = auth.uid() AND public.has_role(auth.uid(), 'pet_parent'));

CREATE POLICY "Users can update own orders"
  ON public.orders
  FOR UPDATE
  USING (buyer_id = auth.uid())
  WITH CHECK (buyer_id = auth.uid());

-- Create RLS policies for order_items
CREATE POLICY "Users can view order items for their orders"
  ON public.order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.orders o
      WHERE o.id = order_items.order_id AND o.buyer_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM public.orders o
      JOIN public.products p ON order_items.product_id = p.id
      WHERE o.id = order_items.order_id AND p.seller_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items for their orders"
  ON public.order_items
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders o
      WHERE o.id = order_items.order_id AND o.buyer_id = auth.uid()
    )
  );

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('pet-images', 'pet-images', true),
  ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for pet images
CREATE POLICY "Pet images are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'pet-images');

CREATE POLICY "Pet parents can upload pet images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'pet-images' AND
    auth.uid()::text = (storage.foldername(name))[1] AND
    public.has_role(auth.uid(), 'pet_parent')
  );

CREATE POLICY "Pet parents can update own pet images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'pet-images' AND
    auth.uid()::text = (storage.foldername(name))[1] AND
    public.has_role(auth.uid(), 'pet_parent')
  );

CREATE POLICY "Pet parents can delete own pet images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'pet-images' AND
    auth.uid()::text = (storage.foldername(name))[1] AND
    public.has_role(auth.uid(), 'pet_parent')
  );

-- Create storage policies for avatars
CREATE POLICY "Avatars are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload own avatar"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update own avatar"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete own avatar"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );