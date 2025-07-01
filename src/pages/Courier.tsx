
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock, Shield, Star, Phone } from "lucide-react";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNavigation from "@/components/BottomNavigation";
import LoginRequiredModal from "@/components/LoginRequiredModal";

const Courier = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const courierServices = [
    {
      id: 1,
      name: "SafePaws Express",
      rating: 4.9,
      completedTrips: 250,
      price: "৳800-1200",
      distance: "Within Dhaka",
      estimatedTime: "2-4 hours",
      specialization: "Small to Medium Pets",
      verified: true,
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "PetMove BD",
      rating: 4.8,
      completedTrips: 180,
      price: "৳1000-1800",
      distance: "Intercity",
      estimatedTime: "4-8 hours",
      specialization: "All Pet Sizes",
      verified: true,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "ComfortRide Pets",
      rating: 4.7,
      completedTrips: 320,
      price: "৳600-1000",
      distance: "Local Area",
      estimatedTime: "1-3 hours",
      specialization: "Cats & Small Dogs",
      verified: true,
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop"
    }
  ];

  const handleBooking = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      <PageHeader
        title="Pet Courier"
        subtitle="Safe and reliable transportation for your beloved pets"
        icon={<Truck size={32} className="text-white" />}
        bgGradient="bg-gradient-to-br from-cyan-400 via-cyan-500 to-sky-500"
      />

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-cyan-200 border-2 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <Shield size={32} className="mx-auto text-cyan-500 mb-2" />
                <CardTitle className="text-lg font-poppins text-gray-800">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-nunito">Verified couriers with pet handling experience</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-cyan-200 border-2 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <Clock size={32} className="mx-auto text-cyan-500 mb-2" />
                <CardTitle className="text-lg font-poppins text-gray-800">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-nunito">Track your pet's journey every step of the way</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-cyan-200 border-2 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <MapPin size={32} className="mx-auto text-cyan-500 mb-2" />
                <CardTitle className="text-lg font-poppins text-gray-800">Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-nunito">Available across Bangladesh's major cities</p>
              </CardContent>
            </Card>
          </div>

          {/* Available Couriers */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Available Couriers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courierServices.map((courier) => (
                <Card key={courier.id} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={courier.image} 
                      alt={courier.name}
                      className="w-full h-full object-cover"
                    />
                    {courier.verified && (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-poppins text-gray-800">{courier.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{courier.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-cyan-600 font-medium">
                      {courier.specialization}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold text-gray-800">{courier.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-semibold text-gray-800">{courier.distance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Est. Time:</span>
                      <span className="font-semibold text-gray-800">{courier.estimatedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-semibold text-gray-800">{courier.completedTrips} trips</span>
                    </div>
                    
                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-poppins rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Phone size={18} className="mr-2" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200 border-2 rounded-3xl p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">How Pet Courier Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Choose Courier</h3>
                  <p className="text-gray-600 text-sm font-nunito">Select from verified pet transport services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Book & Pay</h3>
                  <p className="text-gray-600 text-sm font-nunito">Schedule pickup and secure payment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Track Journey</h3>
                  <p className="text-gray-600 text-sm font-nunito">Real-time updates on your pet's trip</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Safe Delivery</h3>
                  <p className="text-gray-600 text-sm font-nunito">Your pet arrives safely at destination</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
      
      <LoginRequiredModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        feature="Pet Courier"
      />
    </div>
  );
};

export default Courier;
