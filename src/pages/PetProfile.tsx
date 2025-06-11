
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, User, PawPrint, Dog, Cat } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const PetProfile = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Mock data for different pet types
  const petData: { [key: string]: any } = {
    // Adoption pets
    "adopt-1": {
      name: "Buddy",
      type: "Golden Retriever",
      age: "2 years",
      location: "Dhanmondi, Dhaka",
      owner: "Ahmed Hassan",
      datePosted: "2 days ago",
      description: "Buddy is a friendly and energetic dog who loves playing with children. He's well-trained, vaccinated, and looking for a loving family. He enjoys long walks and playing fetch in the park.",
      status: "Available",
      listingType: "Adoption",
      photo: "🐕"
    },
    "adopt-2": {
      name: "Mimi",
      type: "Persian Cat",
      age: "1.5 years",
      location: "Gulshan, Dhaka",
      owner: "Fatima Khan",
      datePosted: "1 day ago",
      description: "Mimi is a calm and affectionate Persian cat who loves to curl up on laps. She's perfect for apartment living and gets along well with other pets. She's spayed and up to date on vaccinations.",
      status: "Available",
      listingType: "Adoption",
      photo: "🐱"
    },
    // Sharing pets
    "sharing-1": {
      name: "Charlie",
      type: "Beagle",
      age: "3 years",
      location: "Banani, Dhaka",
      owner: "Rashida Akter",
      datePosted: "3 hours ago",
      description: "Charlie is a well-behaved Beagle who needs temporary care during weekend trips. He's house-trained, loves walks, and is very social with other dogs and people.",
      status: "Available",
      listingType: "Sharing",
      photo: "🐕"
    },
    "sharing-2": {
      name: "Fluffy",
      type: "British Shorthair",
      age: "4 years",
      location: "Uttara, Dhaka",
      owner: "Mohammad Ali",
      datePosted: "1 day ago",
      description: "Fluffy is an independent but loving cat who needs care for 3 days due to a family emergency. She's litter trained and very low maintenance.",
      status: "Available",
      listingType: "Sharing",
      photo: "🐱"
    },
    // Lost & Found pets
    "lost-1": {
      name: "Tommy",
      type: "Golden Retriever",
      age: "5 years",
      location: "Mirpur DOHS",
      owner: "Rashida Khan",
      datePosted: "2 days ago",
      description: "Tommy is a very friendly dog who responds to his name. He was wearing a red collar when he went missing. He's microchipped and loves treats. Please contact if you've seen him.",
      status: "Lost",
      listingType: "Lost",
      photo: "🐕"
    },
    "lost-2": {
      name: "Mitu",
      type: "Persian",
      age: "3 years",
      location: "Dhanmondi 27",
      owner: "Karim Ahmed",
      datePosted: "1 day ago",
      description: "Beautiful white Persian cat with blue eyes found near the lake area. Very calm and appears well-fed. Wearing a pink collar with bell. Looking for the owner.",
      status: "Found",
      listingType: "Found",
      photo: "🐱"
    }
  };

  const pet = petData[`${type}-${id}`];

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Pet not found</h1>
          <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  const handleContact = () => {
    setShowLoginModal(true);
  };

  const getBackRoute = () => {
    if (type === "adopt") return "/adopt";
    if (type === "sharing") return "/sharing";
    if (type === "lost") return "/lost-found";
    return "/dashboard";
  };

  const getStatusColor = () => {
    switch (pet.status) {
      case "Available": return "bg-green-100 text-green-700 border-green-200";
      case "Lost": return "bg-red-100 text-red-700 border-red-200";
      case "Found": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Temporarily Shared": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Button
          variant="ghost"
          onClick={() => navigate(getBackRoute())}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to {pet.listingType} Listings
        </Button>
      </div>

      {/* Pet Profile */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl shadow-xl" style={{ backgroundColor: '#F8F9FA' }}>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="text-8xl">{pet.photo}</div>
              </div>
              <div className="flex justify-center mb-4">
                <Badge variant="outline" className={`px-4 py-2 text-sm font-semibold ${getStatusColor()}`}>
                  {pet.status}
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold" style={{ color: '#333333' }}>
                {pet.name}
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">{pet.type}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <PawPrint size={20} className="mr-3 text-blue-500" />
                    <span><strong>Age:</strong> {pet.age}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="mr-3 text-orange-500" />
                    <span><strong>Location:</strong> {pet.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <User size={20} className="mr-3 text-green-500" />
                    <span><strong>Owner:</strong> {pet.owner}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Calendar size={20} className="mr-3 text-purple-500" />
                    <span><strong>Posted:</strong> {pet.datePosted}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-gray-700">
                    <strong>Listing Type:</strong> {pet.listingType}
                  </div>
                  
                  <div className="text-gray-700">
                    <strong>Status:</strong> {pet.status}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#333333' }}>Description</h3>
                <p className="text-gray-700 leading-relaxed">{pet.description}</p>
              </div>
              
              <div className="flex justify-center pt-6">
                <Button 
                  onClick={handleContact}
                  className="px-8 py-3 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
                >
                  Contact {pet.listingType === "Found" ? "Finder" : "Owner"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Login Required Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md rounded-3xl" style={{ backgroundColor: '#F8F9FA' }}>
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold" style={{ color: '#333333' }}>
              🔒 Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed">
              Login required. Guest access does not allow interaction. Only early-access users approved by the Pawket team can use this feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="text-white rounded-2xl px-8"
              style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
            >
              Got it! 🐾
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PetProfile;
