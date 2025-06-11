import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Cat, MapPin, Star, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Header */}
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
            Virtual Vet
          </h1>
          <p className="text-gray-600 text-lg">Professional veterinary care from home</p>
        </div>
      </div>

      {/* Vet Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => (
            <Card key={vet.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div onClick={() => handleCardClick(vet.id)} className="cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <Cat size={40} className="text-green-500" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {vet.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {vet.specialty}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    {vet.location}
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock size={16} className="mr-2 text-blue-500" />
                    {vet.availability}
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <Star size={16} className="mr-2 text-yellow-500 fill-current" />
                    {vet.rating} • {vet.experience} experience
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {vet.description}
                  </p>
                  
                  <div className="text-lg font-bold text-green-600 text-center bg-green-50 p-2 rounded-lg">
                    Consultation: {vet.consultation}
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="pt-0">
                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg"
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              ⚠️ Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed">
              Login required to access this feature. Guest access is view-only. (Only early access users approved by the Pawket Team can log in and use these services.)
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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
