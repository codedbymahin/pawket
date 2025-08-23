
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  consultation_fee: number;
  rating: number;
  experience: string;
  location: string;
  availability: string;
  verified: boolean;
  is_published: boolean;
  created_at: string;
}

export const useVets = () => {
  return useQuery({
    queryKey: ['vets'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vets')
        .select('*')
        .eq('verified', true)
        .eq('is_published', true)
        .order('rating', { ascending: false });

      if (error) throw error;
      return data as Vet[];
    },
  });
};

export const useVetProfile = () => {
  return useQuery({
    queryKey: ['vet-profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vets')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data as Vet | null;
    },
  });
};
