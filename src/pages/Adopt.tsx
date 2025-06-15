
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Dog, Cat, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageGallery from "@/components/ImageGallery";

const Adopt = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      location: "Dhanmondi, Dhaka",
      description: "Friendly and energetic dog, great with kids",
      owner: "Ahmed Hassan",
      type: "dog"
    },
    {
      id: 2,
      name: "Mimi",
      breed: "Persian Cat",
      age: "1.5 years",
      location: "Gulshan, Dhaka",
      description: "Calm and affectionate, perfect lap cat",
      owner: "Fatima Khan",
      type: "cat"
    },
    {
      id: 3,
      name: "Rocky",
      breed: "German Shepherd",
      age: "3 years",
      location: "Mymensingh",
      description: "Loyal guard dog, well-trained",
      owner: "Rashed Ahmed",
      type: "dog"
    },
    {
      id: 4,
      name: "Whiskers",
      breed: "Bengali Cat",
      age: "6 months",
      location: "Sylhet",
      description: "Playful kitten, loves to explore",
      owner: "Nazma Begum",
      type: "cat"
    },
    {
      id: 5,
      name: "Max",
      breed: "Labrador Mix",
      age: "4 years",
      location: "Chittagong",
      description: "Active and loving, great running partner",
      owner: "Karim Rahman",
      type: "dog"
    },
    {
      id: 6,
      name: "Luna",
      breed: "Siamese Cat",
      age: "2 years",
      location: "Rangpur",
      description: "Elegant and intelligent, loves attention",
      owner: "Salma Khatun",
      type: "cat"
    }
  ];

  const handleContactOwner = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (petId: number) => {
    navigate(`/pet/adopt/${petId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-4">
            Available Pets for Adoption
          </h1>
          <p className="text-gray-600 text-xl font-nunito">Find your perfect companion in Bangladesh</p>
        </div>
      </div>

      {/* Enhanced Pet Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <Card key={pet.id} className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl">
              <div onClick={() => handleCardClick(pet.id)} className="cursor-pointer">
                <CardHeader className="text-center px-8 pt-8">
                  <ImageGallery 
                    images={[]} 
                    alt={pet.name}
                    className="mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500">
                      {pet.type === "dog" ? (
                        <Dog size={48} className="text-white" />
                      ) : (
                        <Cat size={48} className="text-white" />
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
                    {pet.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base font-nunito">
                    {pet.breed} • {pet.age}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 px-8">
                  <div className="flex items-center text-gray-600 text-base">
                    <MapPin size={18} className="mr-3 text-cyan-500" />
                    <span className="font-nunito">{pet.location}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed font-nunito">
                    {pet.description}
                  </p>
                  
                  <div className="text-sm text-gray-600 font-nunito">
                    <strong>Owner:</strong> {pet.owner}
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="pt-0 pb-8 px-8">
                <Button 
                  onClick={handleContactOwner}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins"
                >
                  Contact Owner
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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300"
            >
              Understood
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Adopt;
