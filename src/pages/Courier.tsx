
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Truck, MapPin, Clock, Shield, Star, Phone, Calendar as CalendarIcon, PawPrint } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/PageHeader";
import BottomNavigation from "@/components/BottomNavigation";
import LoginRequiredModal from "@/components/LoginRequiredModal";

const Courier = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    petType: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
    fromLocation: "",
    toLocation: "",
    serviceType: "",
    specialNeeds: ""
  });

  const calculatePrice = () => {
    let basePrice = 800;
    
    // Service type multiplier
    if (formData.serviceType === "express") basePrice *= 1.5;
    if (formData.serviceType === "premium") basePrice *= 2;
    
    // Pet size adjustment
    if (formData.petWeight) {
      const weight = parseInt(formData.petWeight);
      if (weight > 25) basePrice += 300; // Large pets
      else if (weight > 10) basePrice += 150; // Medium pets
    }
    
    return basePrice;
  };

  const getDeliveryTime = () => {
    if (formData.serviceType === "express") return "2-4 hours";
    if (formData.serviceType === "premium") return "1-2 hours";
    return "4-6 hours";
  };

  const handleBooking = () => {
    setShowLoginModal(true);
  };

  const isFormValid = () => {
    return formData.petType && formData.fromLocation && formData.toLocation && formData.serviceType && date;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      <PageHeader
        title="Pet Courier"
        subtitle="Safe and reliable transportation for your beloved pets"
        backPath="/dashboard"
        gradientFrom="from-cyan-400"
        gradientTo="to-sky-500"
        titleGradientFrom="from-cyan-600"
        titleGradientTo="to-sky-600"
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
                <p className="text-gray-600 font-nunito">Professional Pawket drivers with pet handling experience</p>
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

          {/* Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-poppins flex items-center gap-3">
                    <PawPrint className="text-cyan-500" size={28} />
                    Book Your Pet Transport
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-nunito">
                    Fill in the details below to schedule your pet's safe journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pet Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="petType" className="font-poppins text-gray-700">Pet Type *</Label>
                      <Select value={formData.petType} onValueChange={(value) => setFormData({...formData, petType: value})}>
                        <SelectTrigger className="rounded-xl border-cyan-200">
                          <SelectValue placeholder="Select pet type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="rabbit">Rabbit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="petBreed" className="font-poppins text-gray-700">Breed</Label>
                      <Input
                        id="petBreed"
                        placeholder="e.g., Golden Retriever"
                        value={formData.petBreed}
                        onChange={(e) => setFormData({...formData, petBreed: e.target.value})}
                        className="rounded-xl border-cyan-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="petAge" className="font-poppins text-gray-700">Age</Label>
                      <Input
                        id="petAge"
                        placeholder="e.g., 3 years"
                        value={formData.petAge}
                        onChange={(e) => setFormData({...formData, petAge: e.target.value})}
                        className="rounded-xl border-cyan-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="petWeight" className="font-poppins text-gray-700">Weight (kg)</Label>
                      <Input
                        id="petWeight"
                        placeholder="e.g., 15"
                        type="number"
                        value={formData.petWeight}
                        onChange={(e) => setFormData({...formData, petWeight: e.target.value})}
                        className="rounded-xl border-cyan-200"
                      />
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fromLocation" className="font-poppins text-gray-700">From Location *</Label>
                      <Select value={formData.fromLocation} onValueChange={(value) => setFormData({...formData, fromLocation: value})}>
                        <SelectTrigger className="rounded-xl border-cyan-200">
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dhaka-gulshan">Dhaka - Gulshan</SelectItem>
                          <SelectItem value="dhaka-dhanmondi">Dhaka - Dhanmondi</SelectItem>
                          <SelectItem value="dhaka-uttara">Dhaka - Uttara</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="toLocation" className="font-poppins text-gray-700">To Location *</Label>
                      <Select value={formData.toLocation} onValueChange={(value) => setFormData({...formData, toLocation: value})}>
                        <SelectTrigger className="rounded-xl border-cyan-200">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dhaka-gulshan">Dhaka - Gulshan</SelectItem>
                          <SelectItem value="dhaka-dhanmondi">Dhaka - Dhanmondi</SelectItem>
                          <SelectItem value="dhaka-uttara">Dhaka - Uttara</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date & Service Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-poppins text-gray-700">Pickup Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-xl border-cyan-200",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="font-poppins text-gray-700">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                        <SelectTrigger className="rounded-xl border-cyan-200">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard (4-6 hours)</SelectItem>
                          <SelectItem value="express">Express (2-4 hours) +50%</SelectItem>
                          <SelectItem value="premium">Premium (1-2 hours) +100%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Special Needs */}
                  <div className="space-y-2">
                    <Label htmlFor="specialNeeds" className="font-poppins text-gray-700">Special Instructions</Label>
                    <Textarea
                      id="specialNeeds"
                      placeholder="Any special care instructions, medical needs, or behavioral notes..."
                      value={formData.specialNeeds}
                      onChange={(e) => setFormData({...formData, specialNeeds: e.target.value})}
                      className="rounded-xl border-cyan-200 min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200 border-2 rounded-2xl sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 font-poppins flex items-center gap-2">
                    <Truck className="text-cyan-500" size={24} />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Driver Info */}
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">PD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 font-poppins">Pawket Driver</h4>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.9 • Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Breakdown */}
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
                        <span className="text-gray-600">Large Pet:</span>
                        <span className="font-semibold text-blue-600">+৳300</span>
                      </div>
                    )}
                    {formData.petWeight && parseInt(formData.petWeight) > 10 && parseInt(formData.petWeight) <= 25 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Medium Pet:</span>
                        <span className="font-semibold text-blue-600">+৳150</span>
                      </div>
                    )}
                    <hr className="border-cyan-200" />
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-800">Total:</span>
                      <span className="font-bold text-xl text-cyan-600">৳{calculatePrice()}</span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-2 p-4 bg-white rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-cyan-500" />
                      <span className="text-sm font-semibold text-gray-700">Estimated Time:</span>
                    </div>
                    <p className="text-sm text-gray-600">{getDeliveryTime()}</p>
                  </div>

                  {/* Book Button */}
                  <Button 
                    onClick={handleBooking}
                    disabled={!isFormValid()}
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-poppins rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Phone size={18} className="mr-2" />
                    Book Pawket Courier
                  </Button>
                  
                  {!isFormValid() && (
                    <p className="text-xs text-gray-500 text-center">
                      Please fill all required fields to continue
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators */}
          <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200 border-2 rounded-3xl p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">Why Choose Pawket Courier?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Trusted Service</h3>
                  <p className="text-gray-600 text-sm font-nunito">All drivers are background checked and pet care trained</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">Live Tracking</h3>
                  <p className="text-gray-600 text-sm font-nunito">Monitor your pet's journey in real-time via the app</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-poppins">5-Star Service</h3>
                  <p className="text-gray-600 text-sm font-nunito">Rated #1 pet transport service in Bangladesh</p>
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
      />
    </div>
  );
};

export default Courier;
