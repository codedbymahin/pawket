import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Dog, Cat, Search, ShoppingBag, Heart, AlertTriangle, UserRound, ArrowLeft, Home, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PetCareTips from "@/components/PetCareTips";
import PawkoChatbot from "@/components/PawkoChatbot";
import PawketLogo from "@/components/PawketLogo";
import PawketAcademy from "@/components/PawketAcademy";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleFeatureClick = (feature: string) => {
    if (feature === "emergency" || feature === "matchmaking") {
      setShowComingSoonModal(true);
    } else {
      navigate(`/${feature}`);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const features = [
    {
      id: "adopt",
      title: "Adopt a Pet",
      description: "Find loving homes for pets through verified adoption.",
      icon: <Dog size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-sky-50",
      borderColor: "border-blue-200",
      buttonText: "See Pets →",
      emoji: "🐶",
      available: true,
      highlight: "bg-blue-100"
    },
    {
      id: "sharing",
      title: "Pet Sharing",
      description: "Temporarily share your pet with other pet parents when you travel.",
      icon: <PawPrint size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-500",
      cardBg: "bg-gradient-to-br from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      buttonText: "Find Caregivers →",
      emoji: "🐾",
      available: true,
      highlight: "bg-teal-100"
    },
    {
      id: "lost-found",
      title: "Lost & Found",
      description: "Report or discover lost pets around your area.",
      icon: <Search size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
      cardBg: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      buttonText: "Search Pets →",
      emoji: "🔍",
      available: true,
      highlight: "bg-purple-100"
    },
    {
      id: "vet",
      title: "Virtual Vet",
      description: "Browse local vets and book virtual appointments.",
      icon: <UserRound size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-600",
      cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      buttonText: "Find Vets →",
      emoji: "👩‍⚕️",
      available: true,
      highlight: "bg-green-100"
    },
    {
      id: "shop",
      title: "Pet Shop",
      description: "Buy food, clothes, toys, and accessories for your pet.",
      icon: <ShoppingBag size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500",
      cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      buttonText: "Shop Now →",
      emoji: "🛍️",
      available: true,
      highlight: "bg-orange-100"
    },
    {
      id: "emergency",
      title: "Emergency Help",
      description: "Instant aid in pet emergencies.",
      icon: <AlertTriangle size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-red-400 via-red-500 to-pink-500",
      cardBg: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      buttonText: "Coming Soon",
      emoji: "🚨",
      available: false,
      highlight: "bg-red-100"
    },
    {
      id: "matchmaking",
      title: "Pet Matchmaking",
      description: "Match pets for responsible breeding.",
      icon: <Heart size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      buttonText: "Coming Soon",
      emoji: "💞",
      available: false,
      highlight: "bg-pink-100"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      {/* Header Section with enhanced background */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Top row with Back button and Guest badge */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Button>
          
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-600 shadow-sm px-5 py-2.5 rounded-full">
            👤 Guest Mode
          </Badge>
        </div>

        {/* Welcome Header with enhanced styling */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <PawketLogo size={50} />
            </div>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins"
              style={{ color: '#00AEEF' }}
            >
              Pawket Dashboard
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 font-poppins" style={{ color: '#333333' }}>
              Your Pet Care Hub
            </h2>
            <p className="text-lg text-gray-600 font-nunito">
              Welcome, Guest!
            </p>
            <p className="text-gray-600 text-lg mt-2 font-nunito">
              Explore all features designed for pet lovers in Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid with enhanced cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 relative ${!feature.available ? 'opacity-80' : ''}`}
                style={{ backgroundColor: '#F8F9FA' }}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardHeader className="text-center pb-6 relative px-8 pt-8">
                  {/* Feature Icon with larger size */}
                  <div className="flex justify-center mb-6">
                    <div className={`${feature.bgGradient} p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${!feature.available ? 'opacity-75' : ''}`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Emoji in top right */}
                  <div className="absolute top-6 right-6 text-3xl">
                    {feature.emoji}
                  </div>
                  
                  {/* Coming Soon Badge */}
                  {!feature.available && (
                    <div className="absolute top-6 left-6">
                      <Badge 
                        variant="outline" 
                        className="text-xs font-semibold rounded-full px-3 py-1"
                        style={{ backgroundColor: '#FFD166', borderColor: '#FFC107', color: '#B8860B' }}
                      >
                        Soon
                      </Badge>
                    </div>
                  )}
                  
                  <CardTitle className="text-xl font-bold mb-3 font-poppins" style={{ color: '#333333' }}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-nunito px-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 pb-8 px-8">
                  <Button 
                    className={`w-full ${feature.available 
                      ? 'text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
                    } rounded-2xl py-4 text-base transform transition-all duration-300 font-poppins`}
                    style={feature.available ? { 
                      background: 'linear-gradient(135deg, #00AEEF, #0099CC)',
                    } : {}}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFeatureClick(feature.id);
                    }}
                  >
                    {feature.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Section: Pet Care Tip & Why Pawket */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pet Care Tip with rotating content */}
            <PetCareTips />

            {/* Why Pawket with enhanced styling */}
            <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 border-2 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4 px-8 pt-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-500 p-4 rounded-full shadow-lg">
                    <Heart size={28} className="text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold font-poppins" style={{ color: '#333333' }}>
                  💙 Why Pawket?
                </CardTitle>
                {/* Survey CTA in dashboard Why Pawket section */}
                <a
                  href="https://forms.gle/WhBDKy8DLKqM7XxK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white px-6 py-2 rounded-2xl font-semibold shadow transition-all text-base"
                >
                  Take The Survey
                </a>
              </CardHeader>
              <CardContent className="pt-0 pb-8 px-8">
                <p className="text-gray-700 text-sm leading-relaxed text-center font-nunito">
                  We're building a kinder pet community in Bangladesh — where sharing, adoption, and care come together in one safe, digital space.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pawket Academy Section */}
      <PawketAcademy />

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-t-3xl shadow-lg z-50">
        <div className="flex justify-around items-center py-4 px-6">
          <button 
            onClick={handleBackToHome}
            className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Home size={24} className="text-gray-600" />
            <span className="text-xs text-gray-600 font-nunito">Home</span>
          </button>
          
          <button className="flex flex-col items-center space-y-1 p-2 rounded-xl bg-blue-50 border border-blue-200">
            <PawPrint size={24} style={{ color: '#00AEEF' }} />
            <span className="text-xs font-nunito" style={{ color: '#00AEEF' }}>Dashboard</span>
          </button>
          
          <button className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            <User size={24} className="text-gray-600" />
            <span className="text-xs text-gray-600 font-nunito">Profile</span>
          </button>
        </div>
      </div>

      {/* Decorative bottom element with padding for sticky nav */}
      <div className="flex justify-center pb-24">
        <div className="flex space-x-3 opacity-60">
          <div className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#00AEEF' }}></div>
          <div className="w-4 h-4 rounded-full animate-bounce delay-100" style={{ backgroundColor: '#FFD166' }}></div>
          <div className="w-4 h-4 rounded-full animate-bounce delay-200" style={{ backgroundColor: '#00AEEF' }}></div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoonModal} onOpenChange={setShowComingSoonModal}>
        <DialogContent className="sm:max-w-md rounded-3xl" style={{ backgroundColor: '#F8F9FA' }}>
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold font-poppins" style={{ color: '#333333' }}>
              🚧 Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 font-nunito">
              This exciting feature is coming soon to make your pet care journey even better. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowComingSoonModal(false)}
              className="text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
            >
              Got it! 🐾
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Pawko Chatbot */}
      <PawkoChatbot />
    </div>
  );
};

export default Dashboard;
