
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, UserRound, MapPin, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Vet = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const vets = [
    {
      id: 1,
      name: "Dr. Mahmuda Islam",
      specialty: "General Pet Care",
      location: "Dhanmondi, Dhaka",
      experience: "8 years",
      rating: 4.9,
      consultation: "৳800",
      availability: "Mon-Fri 9AM-6PM",
      description: "Experienced veterinarian specializing in cats and dogs"
    },
    {
      id: 2,
      name: "Dr. Rafiqul Alam",
      specialty: "Pet Surgery",
      location: "Gulshan, Dhaka",
      experience: "12 years",
      rating: 4.8,
      consultation: "৳1200",
      availability: "Tue-Sat 10AM-5PM",
      description: "Expert in advanced pet surgical procedures"
    },
    {
      id: 3,
      name: "Dr. Fatema Khatun",
      specialty: "Pet Dermatology",
      location: "Mymensingh",
      experience: "6 years",
      rating: 4.7,
      consultation: "৳600",
      availability: "Mon-Wed-Fri 2PM-8PM",
      description: "Specialist in pet skin and allergy treatments"
    },
    {
      id: 4,
      name: "Dr. Habibur Rahman",
      specialty: "Emergency Care",
      location: "Sylhet",
      experience: "10 years",
      rating: 4.9,
      consultation: "৳1000",
      availability: "24/7 Emergency",
      description: "Available for urgent pet medical emergencies"
    },
    {
      id: 5,
      name: "Dr. Nasir Ahmed",
      specialty: "Pet Nutrition",
      location: "Chittagong",
      experience: "5 years",
      rating: 4.6,
      consultation: "৳500",
      availability: "Thu-Sun 11AM-4PM",
      description: "Expert in pet diet and nutritional planning"
    },
    {
      id: 6,
      name: "Dr. Salma Begum",
      specialty: "Behavioral Therapy",
      location: "Rangpur",
      experience: "7 years",
      rating: 4.8,
      consultation: "৳700",
      availability: "Mon-Fri 3PM-7PM",
      description: "Specialist in pet behavioral issues and training"
    }
  ];

  const handleBookAppointment = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (vetId: number) => {
    navigate(`/vet/${vetId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Professional Veterinarians
          </h1>
          <p className="text-gray-600 text-xl font-nunito">Professional veterinary care from home</p>
        </div>
      </div>

      {/* Enhanced Vet Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vets.map((vet) => (
            <Card key={vet.id} className="bg-white/90 backdrop-blur-sm border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl">
              <div onClick={() => handleCardClick(vet.id)} className="cursor-pointer">
                <CardHeader className="text-center px-8 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full shadow-lg bg-gradient-to-br from-green-400 to-emerald-500">
                      <UserRound size={48} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
                    {vet.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base font-nunito">
                    {vet.specialty}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 px-8">
                  <div className="flex items-center text-gray-600 text-base">
                    <MapPin size={18} className="mr-3 text-emerald-500" />
                    <span className="font-nunito">{vet.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-base">
                    <Clock size={18} className="mr-3 text-green-500" />
                    <span className="font-nunito">{vet.availability}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-base">
                    <Star size={18} className="mr-3 text-yellow-500 fill-current" />
                    <span className="font-nunito">{vet.rating} • {vet.experience} experience</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed font-nunito">
                    {vet.description}
                  </p>
                  
                  <div className="text-lg font-bold text-green-600 text-center bg-green-50 p-3 rounded-2xl font-poppins">
                    Consultation: {vet.consultation}
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="pt-0 pb-8 px-8">
                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins"
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Login Required Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold font-poppins">
              ⚠️ Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed font-nunito">
              Login required to access this feature. Guest access is view-only. (Only early access users approved by the Pawket Team can log in and use these services.)
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300"
            >
              Understood
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Vet;
