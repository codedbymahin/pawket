
import PageHeader from "@/components/PageHeader";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, DollarSign, Shield, Phone } from "lucide-react";
import { useVets } from "@/hooks/useVets";
import { Skeleton } from "@/components/ui/skeleton";

const Vet = () => {
  const { data: vets, isLoading, error } = useVets();

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <PageHeader
          title="Find Veterinarians"
          subtitle="Professional pet healthcare services"
          backPath="/dashboard"
          gradientFrom="from-blue-400"
          gradientTo="to-purple-500"
          titleGradientFrom="from-blue-600"
          titleGradientTo="to-purple-600"
        />
        <div className="px-4 py-8">
          <div className="text-center">
            <p className="text-red-600">Error loading veterinarians. Please try again later.</p>
          </div>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <PageHeader
        title="Find Veterinarians"
        subtitle="Professional pet healthcare services"
        backPath="/dashboard"
        gradientFrom="from-blue-400"
        gradientTo="to-purple-500"
        titleGradientFrom="from-blue-600"
        titleGradientTo="to-purple-600"
      />

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="space-y-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Skeleton className="h-20 w-20 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-3 w-1/2" />
                        <Skeleton className="h-3 w-2/3" />
                        <Skeleton className="h-8 w-24" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : vets && vets.length > 0 ? (
            <div className="space-y-6">
              {vets.map((vet) => (
                <Card key={vet.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {vet.name?.charAt(0) || 'V'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{vet.name}</h3>
                            {vet.verified && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                <Shield size={12} className="mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-blue-600 font-medium">{vet.specialty}</p>
                          <p className="text-sm text-gray-600 mt-2">{vet.bio}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} className="text-blue-500" />
                            <span>{vet.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={16} className="text-green-500" />
                            <span>{vet.availability}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign size={16} className="text-purple-500" />
                            <span>৳{vet.consultation_fee} consultation</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star size={16} className="fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{vet.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">• {vet.experience}</span>
                          </div>
                          
                          <Button className="bg-blue-500 hover:bg-blue-600">
                            <Phone size={16} className="mr-2" />
                            Book Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Shield size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No veterinarians available</h3>
              <p className="text-gray-500">We're working on verifying more veterinarians. Check back soon!</p>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Vet;
