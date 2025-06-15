
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  phone TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create pets table
CREATE TABLE public.pets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('dog', 'cat', 'bird', 'rabbit', 'fish', 'other')),
  breed TEXT,
  age INTEGER,
  gender TEXT CHECK (gender IN ('male', 'female', 'unknown')),
  description TEXT,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'adopted', 'fostered', 'lost', 'found')),
  location TEXT,
  contact_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create favorites table for users to save pets
CREATE TABLE public.favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  pet_id UUID REFERENCES public.pets(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, pet_id)
);

-- Create veterinarians table
CREATE TABLE public.veterinarians (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  clinic_name TEXT NOT NULL,
  specialization TEXT[],
  location TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  rating DECIMAL(2,1) DEFAULT 0.0,
  review_count INTEGER DEFAULT 0,
  description TEXT,
  image_url TEXT,
  availability JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table for shop
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  brand TEXT,
  image_urls TEXT[],
  stock_quantity INTEGER DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 0.0,
  review_count INTEGER DEFAULT 0,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.veterinarians ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for pets
CREATE POLICY "Anyone can view available pets" ON public.pets FOR SELECT USING (status = 'available' OR auth.uid() = owner_id);
CREATE POLICY "Users can manage own pets" ON public.pets FOR ALL USING (auth.uid() = owner_id);

-- RLS Policies for favorites
CREATE POLICY "Users can manage own favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for veterinarians (public read)
CREATE POLICY "Anyone can view veterinarians" ON public.veterinarians FOR SELECT USING (true);

-- RLS Policies for products (public read)
CREATE POLICY "Anyone can view products" ON public.products FOR SELECT USING (true);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert sample data for testing
INSERT INTO public.veterinarians (name, clinic_name, specialization, location, phone, email, rating, review_count, description) VALUES
('Dr. Sarah Ahmed', 'Pet Care Plus', ARRAY['Dogs', 'Cats'], 'Dhanmondi, Dhaka', '+8801712345678', 'sarah@petcareplus.bd', 4.8, 127, 'Experienced veterinarian with 10+ years in pet care'),
('Dr. Karim Rahman', 'Animal Hospital Gulshan', ARRAY['Birds', 'Exotic Pets'], 'Gulshan, Dhaka', '+8801798765432', 'karim@animalhospital.bd', 4.6, 89, 'Specialist in exotic animals and birds'),
('Dr. Fatima Khan', 'Uttara Vet Clinic', ARRAY['Dogs', 'Cats', 'Surgery'], 'Uttara, Dhaka', '+8801634567890', 'fatima@uttaravet.bd', 4.9, 156, 'Expert in surgical procedures and emergency care');

INSERT INTO public.products (name, description, price, category, subcategory, brand, image_urls, stock_quantity, rating, tags) VALUES
('Premium Dog Food - Chicken & Rice', 'High-quality nutrition for adult dogs', 2500.00, 'Food', 'Dog Food', 'Royal Canin', ARRAY['https://images.unsplash.com/photo-1589924691995-400dc9ecc119'], 50, 4.5, ARRAY['nutritious', 'adult-dogs', 'chicken']),
('Cat Litter - Clumping Clay', 'Odor control clumping cat litter', 800.00, 'Accessories', 'Hygiene', 'Fresh Step', ARRAY['https://images.unsplash.com/photo-1573824480-8b5ad0f4f405'], 30, 4.2, ARRAY['clumping', 'odor-control', 'clay']),
('Interactive Dog Toy', 'Mental stimulation puzzle toy for dogs', 1200.00, 'Toys', 'Interactive', 'Nina Ottosson', ARRAY['https://images.unsplash.com/photo-1601758228041-f3b2795255f1'], 25, 4.7, ARRAY['puzzle', 'interactive', 'mental-stimulation']);
