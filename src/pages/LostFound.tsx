import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LostFound = () => {
  const navigate = useNavigate();
  const [showGuestModal, setShowGuestModal] = useState(false);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleContactClick = () => {
    setShowGuestModal(true);
  };

  const handleCardClick = (petId: number, status: string) => {
    const type = status === 'Lost' ? 'lost' : 'lost';
    navigate(`/pet/${type}/${petId}`);
  };

  const listings = [
    {
      id: 1,
      petName: "Tommy",
      type: "Dog",
      status: "Lost",
      breed: "Golden Retriever",
      lastSeen: "Mirpur DOHS",
      date: "2 days ago",
      ownerName: "Rashida Khan",
      description: "Very friendly dog, responds to his name. He was wearing a red collar when he went missing.",
      contactInfo: "01712345678",
      image: "🐕"
    },
    {
      id: 2,
      petName: "Mitu",
      type: "Cat",
      status: "Found",
      breed: "Persian",
      lastSeen: "Dhanmondi 27",
      date: "1 day ago",
      ownerName: "Karim Ahmed",
      description: "Beautiful white cat with blue eyes. Found near the lake area, very calm and well-fed.",
      contactInfo: "01823456789",
      image: "🐱"
    },
    {
      id: 3,
      petName: "Buddy",
      type: "Dog",
      status: "Lost",
      breed: "German Shepherd",
      lastSeen: "Chittagong Port Area",
      date: "5 days ago",
      ownerName: "Fatima Begum",
      description: "Large brown and black dog, very protective. Missing since last Friday evening.",
      contactInfo: "01934567890",
      image: "🐕‍🦺"
    },
    {
      id: 4,
      petName: "Whiskers",
      type: "Cat",
      status: "Found",
      breed: "Street Cat",
      lastSeen: "Sylhet Zindabazar",
      date: "3 days ago",
      ownerName: "Hassan Ali",
      description: "Orange tabby cat, appears to be well-cared for. Found near the market area.",
      contactInfo: "01645678901",
      image: "🐈"
    },
    {
      id: 5,
      petName: "Bella",
      type: "Dog",
      status: "Lost",
      breed: "Labrador Mix",
      lastSeen: "Uttara Sector 7",
      date: "1 week ago",
      ownerName: "Nasir Uddin",
      description: "Black and white dog, very energetic. She loves children and is missed dearly by our family.",
      contactInfo: "01756789012",
      image: "🐶"
    },
    {
      id: 6,
      petName: "Shadow",
      type: "Cat",
      status: "Lost",
      breed: "British Shorthair",
      lastSeen: "Gulshan 2",
      date: "4 days ago",
      ownerName: "Salma Rahman",
      description: "Gray cat with green eyes, indoor cat who accidentally escaped. Very timid with strangers.",
      contactInfo: "01867890123",
      image: "🐾"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold" style={{ color: '#00AEEF' }}>
              🔍 Lost & Found Pets
            </h1>
            <p className="text-gray-600 mt-2">
              Help reunite pets with their families in Bangladesh
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4 rounded-2xl shadow-md" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-2xl font-bold" style={{ color: '#00AEEF' }}>12</div>
            <div className="text-sm text-gray-600">Active Cases</div>
          </Card>
          <Card className="text-center p-4 rounded-2xl shadow-md" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-2xl font-bold" style={{ color: '#28A745' }}>8</div>
            <div className="text-sm text-gray-600">Reunited</div>
          </Card>
          <Card className="text-center p-4 rounded-2xl shadow-md" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-2xl font-bold" style={{ color: '#FFC107' }}>4</div>
            <div className="text-sm text-gray-600">Found Pets</div>
          </Card>
          <Card className="text-center p-4 rounded-2xl shadow-md" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-2xl font-bold" style={{ color: '#DC3545' }}>8</div>
            <div className="text-sm text-gray-600">Still Missing</div>
          </Card>
        </div>
      </div>

      {/* Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((pet) => (
              <Card 
                key={pet.id}
                className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#F8F9FA' }}
              >
                <div onClick={() => handleCardClick(pet.id, pet.status)} className="cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-4xl">{pet.image}</div>
                      <Badge 
                        variant="outline"
                        className={`px-3 py-1 text-xs font-semibold ${
                          pet.status === 'Lost' 
                            ? 'bg-red-100 text-red-700 border-red-200' 
                            : 'bg-green-100 text-green-700 border-green-200'
                        }`}
                      >
                        {pet.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold" style={{ color: '#333333' }}>
                      {pet.petName}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {pet.breed} • {pet.type}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        <span>Last seen: {pet.lastSeen}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={16} className="mr-2 text-orange-500" />
                        <span>{pet.date}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Eye size={16} className="mr-2 text-purple-500" />
                        <span>Contact: {pet.ownerName}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {pet.description}
                    </p>
                  </CardContent>
                </div>
                
                <CardContent className="pt-0">
                  <Button 
                    onClick={handleContactClick}
                    className="w-full text-white font-semibold py-2 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
                  >
                    <Phone size={16} className="mr-2" />
                    Contact {pet.status === 'Lost' ? 'Owner' : 'Finder'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Guest Access Modal */}
      <Dialog open={showGuestModal} onOpenChange={setShowGuestModal}>
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
              onClick={() => setShowGuestModal(false)}
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

export default LostFound;
