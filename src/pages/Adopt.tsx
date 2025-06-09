
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Dog, Cat, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
            Adopt a Pet
          </h1>
          <p className="text-gray-600 text-lg">Find your perfect companion in Bangladesh</p>
        </div>
      </div>

      {/* Pet Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <Card key={pet.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  {pet.type === "dog" ? (
                    <Dog size={40} className="text-orange-500" />
                  ) : (
                    <Cat size={40} className="text-blue-500" />
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {pet.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {pet.breed} • {pet.age}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-2 text-orange-500" />
                  {pet.location}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {pet.description}
                </p>
                
                <div className="text-sm text-gray-600">
                  <strong>Owner:</strong> {pet.owner}
                </div>
                
                <Button 
                  onClick={handleContactOwner}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg"
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

export default Adopt;
