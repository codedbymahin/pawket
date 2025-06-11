
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PawPrint, MapPin, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sharing = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sharingOffers = [
    {
      id: 1,
      petName: "Charlie",
      breed: "Beagle",
      location: "Banani, Dhaka",
      duration: "Weekend trip",
      reason: "Owner traveling for work",
      owner: "Rashida Akter",
      status: "Available"
    },
    {
      id: 2,
      petName: "Fluffy",
      breed: "British Shorthair",
      location: "Uttara, Dhaka",
      duration: "3 days",
      reason: "Family emergency",
      owner: "Mohammad Ali",
      status: "Available"
    },
    {
      id: 3,
      petName: "Daisy",
      breed: "Golden Retriever Puppy",
      location: "Mymensingh",
      duration: "2 hours morning",
      reason: "Owner works early shifts",
      owner: "Sadia Rahman",
      status: "Available"
    },
    {
      id: 4,
      petName: "Tiger",
      breed: "German Shepherd",
      location: "Sylhet",
      duration: "Evening walks",
      reason: "Owner has mobility issues",
      owner: "Aminul Islam",
      status: "Available"
    },
    {
      id: 5,
      petName: "Mittens",
      breed: "Persian Mix",
      location: "Chittagong",
      duration: "Daily playtime",
      reason: "Owner working long hours",
      owner: "Nasreen Sultana",
      status: "Temporarily Shared"
    },
    {
      id: 6,
      petName: "Bruno",
      breed: "Labrador",
      location: "Comilla",
      duration: "Full weekend",
      reason: "Owner traveling to village",
      owner: "Rafiq Ahmed",
      status: "Available"
    }
  ];

  const handleApplyToHelp = () => {
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
            Pet Sharing
          </h1>
          <p className="text-gray-600 text-lg">Help neighbors care for their beloved pets</p>
        </div>
      </div>

      {/* Sharing Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharingOffers.map((offer) => (
            <Card key={offer.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <PawPrint size={40} className="text-blue-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {offer.petName}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {offer.breed}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-2 text-orange-500" />
                  {offer.location}
                </div>
                
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock size={16} className="mr-2 text-blue-500" />
                  {offer.duration}
                </div>
                
                <div className="flex items-center text-gray-600 text-sm">
                  <User size={16} className="mr-2 text-green-500" />
                  {offer.owner}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Reason:</strong> {offer.reason}
                </p>
                
                <div className="text-center">
                  <Badge 
                    variant="outline" 
                    className={`${offer.status === 'Available' 
                      ? 'bg-green-50 border-green-300 text-green-600' 
                      : 'bg-orange-50 border-orange-300 text-orange-600'
                    } px-3 py-1`}
                  >
                    {offer.status}
                  </Badge>
                </div>
                
                <Button 
                  onClick={handleApplyToHelp}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg"
                  disabled={offer.status === 'Temporarily Shared'}
                >
                  {offer.status === 'Available' ? 'Apply to Help' : 'Currently Shared'}
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

export default Sharing;
