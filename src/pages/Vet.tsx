
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SearchFilters from '@/components/SearchFilters';
import { MapPin, Phone, Mail, Star, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Veterinarian {
  id: string;
  name: string;
  clinic_name: string;
  specialization: string[] | null;
  location: string;
  phone: string | null;
  email: string | null;
  rating: number | null;
  review_count: number | null;
  description: string | null;
  image_url: string | null;
  availability: any;
}

const Vet = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<any>({});

  const { data: veterinarians, isLoading, error } = useQuery({
    queryKey: ['veterinarians', searchQuery, filters],
    queryFn: async () => {
      let query = supabase.from('veterinarians').select('*');

      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,clinic_name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
      }

      if (filters.location) {
        query = query.ilike('location', `%${filters.location}%`);
      }

      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'rating':
            query = query.order('rating', { ascending: false });
            break;
          case 'newest':
            query = query.order('created_at', { ascending: false });
            break;
          case 'oldest':
            query = query.order('created_at', { ascending: true });
            break;
          default:
            query = query.order('rating', { ascending: false });
        }
      } else {
        query = query.order('rating', { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Veterinarian[];
    },
  });

  const availableFilters = {
    locations: veterinarians ? [...new Set(veterinarians.map(v => v.location))] : [],
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00AEEF]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error loading veterinarians</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#00AEEF] mb-2">Find Veterinarians</h1>
            <p className="text-xl text-gray-600">Quality pet healthcare in Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchFilters
          onSearch={setSearchQuery}
          onFilter={setFilters}
          availableFilters={availableFilters}
        />
      </div>

      {/* Veterinarians Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {veterinarians?.length || 0} Veterinarians Found
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {veterinarians?.map((vet) => (
            <Card key={vet.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {vet.name}
                    </CardTitle>
                    <CardDescription className="text-[#00AEEF] font-medium">
                      {vet.clinic_name}
                    </CardDescription>
                  </div>
                  {vet.rating && (
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{vet.rating}</span>
                      <span className="text-xs text-gray-500">({vet.review_count})</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">{vet.location}</span>
                </div>

                {vet.specialization && vet.specialization.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {vet.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                )}

                {vet.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">{vet.description}</p>
                )}

                <div className="flex flex-col gap-2 pt-2">
                  {vet.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={14} />
                      <span>{vet.phone}</span>
                    </div>
                  )}
                  {vet.email && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={14} />
                      <span>{vet.email}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => navigate(`/vet/${vet.id}`)}
                  >
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Clock size={14} />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {veterinarians?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <h3 className="text-lg font-medium mb-2">No veterinarians found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vet;
