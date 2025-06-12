
-- Create a storage bucket for logos
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true);

-- Create policy to allow public read access to logos
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'logos');

-- Create policy to allow anyone to upload logos
CREATE POLICY "Anyone can upload logos" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'logos');

-- Create policy to allow anyone to update logos
CREATE POLICY "Anyone can update logos" ON storage.objects
FOR UPDATE USING (bucket_id = 'logos');

-- Create policy to allow anyone to delete logos
CREATE POLICY "Anyone can delete logos" ON storage.objects
FOR DELETE USING (bucket_id = 'logos');
