import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Dog, Cat, Search, ShoppingBag, Heart, AlertTriangle, UserRound, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      icon: <Dog size={32} className="text-white" />,
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
      icon: <PawPrint size={32} className="text-white" />,
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
      icon: <Search size={32} className="text-white" />,
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
      icon: <UserRound size={32} className="text-white" />,
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
      icon: <ShoppingBag size={32} className="text-white" />,
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
      icon: <AlertTriangle size={32} className="text-white" />,
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
      icon: <Heart size={32} className="text-white" />,
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
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        {/* Top row with Back button and Guest badge */}
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Button>
          
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-600 shadow-sm px-4 py-2">
            👤 Guest Mode
          </Badge>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="p-3 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}>
              <PawPrint size={28} className="text-white" />
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: '#00AEEF' }}
            >
              🐾 Pawket Dashboard
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: '#333333' }}>
              Your Pet Care Hub
            </h2>
            <p className="text-gray-600 text-lg">
              Explore all features designed for pet lovers in Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 relative ${!feature.available ? 'opacity-80' : ''}`}
                style={{ backgroundColor: '#F8F9FA' }}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardHeader className="text-center pb-4 relative">
                  {/* Feature Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`${feature.bgGradient} p-4 rounded-full shadow-xl ${!feature.available ? 'opacity-75' : ''}`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Emoji in top right */}
                  <div className="absolute top-4 right-4 text-2xl">
                    {feature.emoji}
                  </div>
                  
                  {/* Coming Soon Badge */}
                  {!feature.available && (
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ backgroundColor: '#FFD166', borderColor: '#FFC107', color: '#B8860B' }}
                      >
                        Soon
                      </Badge>
                    </div>
                  )}
                  
                  <CardTitle className="text-lg font-bold mb-2" style={{ color: '#333333' }}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 pb-6">
                  <Button 
                    className={`w-full ${feature.available 
                      ? 'text-white font-semibold shadow-lg hover:shadow-xl' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
                    } rounded-2xl py-3 transform hover:scale-105 transition-all duration-200`}
                    style={feature.available ? { 
                      background: 'linear-gradient(135deg, #00AEEF, #0099CC)',
                      ...(feature.available && {
                        ':hover': {
                          background: 'linear-gradient(135deg, #0099CC, #007BB8)'
                        }
                      })
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

      {/* Decorative bottom element */}
      <div className="flex justify-center pb-8">
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
            <DialogTitle className="text-center text-xl font-bold" style={{ color: '#333333' }}>
              🚧 Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4">
              This exciting feature is coming soon to make your pet care journey even better. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowComingSoonModal(false)}
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

export default Dashboard;
