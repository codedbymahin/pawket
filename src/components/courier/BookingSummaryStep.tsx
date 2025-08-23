import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, Shield, MapPin, Clock, Phone, CheckCircle, 
  Truck, PawPrint, Calendar, CreditCard, Award,
  Heart, User, Navigation
} from "lucide-react";
import { format } from "date-fns";
import { BookingData } from "./BookingWizard";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface BookingSummaryStepProps {
  formData: BookingData;
  onBooking: () => void;
}

const BookingSummaryStep = ({ formData, onBooking }: BookingSummaryStepProps) => {
  const { user } = useAuth();
  const { toast } = useToast();

  const calculatePrice = () => {
    let basePrice = 800;
    
    if (formData.serviceType === "express") basePrice *= 1.5;
    if (formData.serviceType === "premium") basePrice *= 2;
    
    if (formData.petWeight) {
      const weight = parseInt(formData.petWeight);
      if (weight > 25) basePrice += 300;
      else if (weight > 10) basePrice += 150;
    }
    
    return basePrice;
  };

  const handleBooking = async () => {
    if (!user) {
      onBooking(); // This will show the login modal
      return;
    }

    try {
      const bookingData = {
        user_id: user.id,
        pet_type: formData.petType,
        pet_breed: formData.petBreed,
        pet_age: formData.petAge,
        pet_weight: formData.petWeight ? parseFloat(formData.petWeight) : null,
        special_needs: formData.specialNeeds,
        from_location: formData.fromLocation,
        to_location: formData.toLocation,
        service_date: formData.date?.toISOString().split('T')[0],
        time_slot: formData.timeSlot,
        service_type: formData.serviceType,
        price: calculatePrice(),
        status: 'pending'
      };

      const { error } = await supabase
        .from('courier_bookings')
        .insert(bookingData);

      if (error) throw error;

      toast({
        title: "Booking confirmed!",
        description: "Your pet courier booking has been successfully created.",
      });

      // You could redirect to dashboard or show success modal here
      
    } catch (error: any) {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getDeliveryTime = () => {
    if (formData.serviceType === "express") return "2-4 hours";
    if (formData.serviceType === "premium") return "1-2 hours";
    return "4-6 hours";
  };

  const getServiceName = () => {
    switch (formData.serviceType) {
      case "express": return "Express Service";
      case "premium": return "Premium Service";
      default: return "Standard Service";
    }
  };

  const getPetTypeDisplay = () => {
    return formData.petType.charAt(0).toUpperCase() + formData.petType.slice(1);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-2">
          Almost there! Review your booking
        </h3>
        <p className="text-gray-600 font-nunito">
          Double-check the details before confirming
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Details */}
        <div className="space-y-6">
          {/* Pet Information */}
          <Card className="border-cyan-200 shadow-lg rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-t-2xl">
              <CardTitle className="text-lg font-poppins flex items-center gap-2">
                <PawPrint className="text-cyan-500" size={20} />
                Pet Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-semibold">{getPetTypeDisplay()}</span>
                </div>
                {formData.petBreed && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Breed:</span>
                    <span className="font-semibold">{formData.petBreed}</span>
                  </div>
                )}
                {formData.petAge && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-semibold">{formData.petAge}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-semibold">{formData.petWeight} kg</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Journey Details */}
          <Card className="border-cyan-200 shadow-lg rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-t-2xl">
              <CardTitle className="text-lg font-poppins flex items-center gap-2">
                <Navigation className="text-cyan-500" size={20} />
                Journey Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">From</p>
                    <p className="text-gray-600 text-sm">{formData.fromLocation.replace('-', ' - ')}</p>
                  </div>
                </div>
                <div className="border-l-2 border-dashed border-gray-300 ml-1.5 h-6"></div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">To</p>
                    <p className="text-gray-600 text-sm">{formData.toLocation.replace('-', ' - ')}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Calendar size={16} />
                      Date & Time:
                    </span>
                    <div className="text-right">
                      <p className="font-semibold">{formData.date ? format(formData.date, "PPP") : ""}</p>
                      <p className="text-sm text-gray-600">{formData.timeSlot}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Type */}
          <Card className="border-cyan-200 shadow-lg rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-t-2xl">
              <CardTitle className="text-lg font-poppins flex items-center gap-2">
                <Truck className="text-cyan-500" size={20} />
                Service Type
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{getServiceName()}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <Clock size={14} />
                    Estimated time: {getDeliveryTime()}
                  </p>
                </div>
                <Badge variant="outline" className="bg-cyan-50 text-cyan-600 border-cyan-200">
                  Selected
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Driver & Pricing */}
        <div className="space-y-6">
          {/* Assigned Driver */}
          <Card className="border-green-200 shadow-lg rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-2xl">
              <CardTitle className="text-lg font-poppins flex items-center gap-2">
                <User className="text-green-500" size={20} />
                Your Pawket Driver
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 font-poppins">Muhammad Rahman</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-600 border-green-200">
                      Pet Certified
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="text-green-500" size={16} />
                  <span>Background verified & Pet handling trained</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="text-blue-500" size={16} />
                  <span>500+ successful pet transports</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Heart className="text-pink-500" size={16} />
                  <span>Loves all animals, has 2 cats at home</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Breakdown */}
          <Card className="border-purple-200 shadow-lg rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl">
              <CardTitle className="text-lg font-poppins flex items-center gap-2">
                <CreditCard className="text-purple-500" size={20} />
                Price Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Price:</span>
                  <span className="font-semibold">৳800</span>
                </div>
                {formData.serviceType === "express" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Express Service:</span>
                    <span className="font-semibold text-orange-600">+৳400</span>
                  </div>
                )}
                {formData.serviceType === "premium" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Premium Service:</span>
                    <span className="font-semibold text-purple-600">+৳800</span>
                  </div>
                )}
                {formData.petWeight && parseInt(formData.petWeight) > 25 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Large Pet Surcharge:</span>
                    <span className="font-semibold text-blue-600">+৳300</span>
                  </div>
                )}
                {formData.petWeight && parseInt(formData.petWeight) > 10 && parseInt(formData.petWeight) <= 25 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Medium Pet Surcharge:</span>
                    <span className="font-semibold text-blue-600">+৳150</span>
                  </div>
                )}
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-800">Total:</span>
                  <span className="font-bold text-2xl text-cyan-600">৳{calculatePrice()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <Shield size={16} />
                  <span className="font-semibold">Fully Insured Journey</span>
                </div>
                <p className="text-green-600 text-xs mt-1">
                  Your pet is covered up to ৳50,000 during transport
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Book Button */}
          <Button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins rounded-xl py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} className="mr-2" />
            {user ? `Complete Booking - ৳${calculatePrice()}` : 'Sign In to Book'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryStep;
