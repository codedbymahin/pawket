
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { lostFoundListings as listings } from "@/data/profileData";
import SkeletonCard from "@/components/SkeletonCard";

const LostFound = () => {
  const navigate = useNavigate();
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleContactClick = () => {
    setShowGuestModal(true);
  };

  const handleCardClick = (petId: number, status: string) => {
    // The profile page uses 'lost' for both lost and found pets.
    const type = 'lost';
    navigate(`/pet/${type}/${petId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-purple-100 to-blue-100 px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mr-4 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold font-poppins" style={{ color: '#00AEEF' }}>
              Lost & Found Pets
            </h1>
            <p className="text-gray-600 mt-3 text-lg font-nunito">
              Help reunite pets with their families in Bangladesh
            </p>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-3xl font-bold font-poppins" style={{ color: '#00AEEF' }}>12</div>
            <div className="text-sm text-gray-600 font-nunito">Active Cases</div>
          </Card>
          <Card className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-3xl font-bold font-poppins" style={{ color: '#28A745' }}>8</div>
            <div className="text-sm text-gray-600 font-nunito">Reunited</div>
          </Card>
          <Card className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-3xl font-bold font-poppins" style={{ color: '#FFC107' }}>4</div>
            <div className="text-sm text-gray-600 font-nunito">Found Pets</div>
          </Card>
          <Card className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-3xl font-bold font-poppins" style={{ color: '#DC3545' }}>8</div>
            <div className="text-sm text-gray-600 font-nunito">Still Missing</div>
          </Card>
        </div>
      </div>

      {/* Enhanced Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : listings.length > 0
              ? listings.map((pet) => (
                  <Card 
                    key={pet.id}
                    className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2"
                    style={{ backgroundColor: '#F8F9FA' }}
                  >
                    <div onClick={() => handleCardClick(pet.id, pet.status)} className="cursor-pointer">
                      <CardHeader className="pb-4 px-8 pt-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-5xl">{pet.image}</div>
                          <Badge 
                            variant="outline"
                            className={`px-4 py-2 text-sm font-semibold rounded-full ${
                              pet.status === 'Lost' 
                                ? 'bg-red-100 text-red-700 border-red-200' 
                                : 'bg-green-100 text-green-700 border-green-200'
                            }`}
                          >
                            {pet.status}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold font-poppins" style={{ color: '#333333' }}>
                          {pet.petName}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base font-nunito">
                          {pet.breed} • {pet.type}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4 px-8">
                        <div className="space-y-4">
                          <div className="flex items-center text-base text-gray-600">
                            <MapPin size={18} className="mr-3 text-blue-500" />
                            <span className="font-nunito">Last seen: {pet.lastSeen}</span>
                          </div>
                          
                          <div className="flex items-center text-base text-gray-600">
                            <Clock size={18} className="mr-3 text-orange-500" />
                            <span className="font-nunito">{pet.date}</span>
                          </div>
                          
                          <div className="flex items-center text-base text-gray-600">
                            <Eye size={18} className="mr-3 text-purple-500" />
                            <span className="font-nunito">Contact: {pet.ownerName}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 leading-relaxed font-nunito">
                          {pet.description}
                        </p>
                      </CardContent>
                    </div>
                    
                    <CardContent className="pt-0 pb-8 px-8">
                      <Button 
                        onClick={handleContactClick}
                        className="w-full text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-poppins"
                        style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
                      >
                        <Phone size={18} className="mr-2" />
                        Contact {pet.status === 'Lost' ? 'Owner' : 'Finder'}
                      </Button>
                    </CardContent>
                  </Card>
                ))
              : <div className="col-span-full text-center py-16">
                  <p className="text-xl text-gray-600">No lost or found pets reported. 🐾</p>
                </div>
            }
          </div>
        </div>
      </div>

      {/* Guest Access Modal */}
      <Dialog open={showGuestModal} onOpenChange={setShowGuestModal}>
        <DialogContent className="sm:max-w-md rounded-3xl" style={{ backgroundColor: '#F8F9FA' }}>
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold font-poppins" style={{ color: '#333333' }}>
              🔒 Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed font-nunito">
              Login required. Guest access does not allow interaction. Only early-access users approved by the Pawket team can use this feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowGuestModal(false)}
              className="text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300"
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
