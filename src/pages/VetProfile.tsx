import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Clock, Star, GraduationCap, Stethoscope } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { vetData } from "@/data/profileData";

const VetProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const vet = vetData[id || ""];

  if (!vet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Vet not found</h1>
          <Button onClick={() => navigate("/vet")}>Back to Vet Listings</Button>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/vet")}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Vet Listings
        </Button>
      </div>

      {/* Vet Profile */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="text-8xl">{vet.photo}</div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">
                {vet.name}
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">{vet.specialty}</p>
              <div className="flex items-center justify-center mt-3">
                <Star size={20} className="mr-1 text-yellow-500 fill-current" />
                <span className="text-lg font-semibold text-gray-700">{vet.rating}</span>
                <span className="text-gray-600 ml-2">({vet.experience} experience)</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="mr-3 text-orange-500" />
                    <span><strong>Location:</strong> {vet.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Clock size={20} className="mr-3 text-blue-500" />
                    <span><strong>Available:</strong> {vet.availability}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <GraduationCap size={20} className="mr-3 text-purple-500" />
                    <span><strong>Experience:</strong> {vet.experience}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {vet.consultation}
                    </div>
                    <div className="text-sm text-gray-600">Per Consultation</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">About</h3>
                  <p className="text-gray-700 leading-relaxed">{vet.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    <GraduationCap size={20} className="mr-2 text-purple-500" />
                    Qualifications
                  </h3>
                  <p className="text-gray-700">{vet.qualifications}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    <Stethoscope size={20} className="mr-2 text-green-500" />
                    Areas of Specialization
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {vet.specializations.map((spec: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Contact Method</h3>
                  <p className="text-gray-700">{vet.contactMethod}</p>
                </div>
              </div>
              
              <div className="flex justify-center pt-6">
                <Button 
                  onClick={handleBookAppointment}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg"
                >
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
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
              Login required. Guest access does not allow interaction. Only early-access users approved by the Pawket team can use this feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Got it! 🐾
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VetProfile;
