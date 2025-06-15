
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, MapPin, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";

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

  const handleCardClick = (offerId: number) => {
    navigate(`/pet/sharing/${offerId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      <PageHeader
        title="Pet Sharing Opportunities"
        subtitle="Help neighbors care for their beloved pets"
        backPath="/dashboard"
        gradientFrom="from-teal-100"
        gradientTo="to-emerald-100"
        titleGradientFrom="from-teal-600"
        titleGradientTo="to-emerald-600"
      />

      {/* Enhanced Sharing Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sharingOffers.map((offer) => (
            <Card key={offer.id} className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl">
              <div onClick={() => handleCardClick(offer.id)} className="cursor-pointer">
                <CardHeader className="text-center px-8 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full shadow-lg bg-gradient-to-br from-teal-400 to-emerald-500">
                      <PawPrint size={48} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
                    {offer.petName}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base font-nunito">
                    {offer.breed}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 px-8">
                  <div className="flex items-center text-gray-600 text-base">
                    <MapPin size={18} className="mr-3 text-emerald-500" />
                    <span className="font-nunito">{offer.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-base">
                    <Clock size={18} className="mr-3 text-teal-500" />
                    <span className="font-nunito">{offer.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-base">
                    <User size={18} className="mr-3 text-green-500" />
                    <span className="font-nunito">{offer.owner}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed font-nunito">
                    <strong>Reason:</strong> {offer.reason}
                  </p>
                  
                  <div className="text-center">
                    <Badge 
                      variant="outline" 
                      className={`${offer.status === 'Available' 
                        ? 'bg-green-50 border-green-300 text-green-600' 
                        : 'bg-orange-50 border-orange-300 text-orange-600'
                      } px-4 py-2 rounded-full font-nunito`}
                    >
                      {offer.status}
                    </Badge>
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="pt-0 pb-8 px-8">
                <Button 
                  onClick={handleApplyToHelp}
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins"
                  disabled={offer.status === 'Temporarily Shared'}
                >
                  {offer.status === 'Available' ? 'Offer to Help' : 'Currently Shared'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Login Required Modal */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        buttonClassName="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
      />
    </div>
  );
};

export default Sharing;
