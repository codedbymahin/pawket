
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Dog, Cat, ShoppingBag, Siren, Map } from "lucide-react";
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

  const todayCareFeatures = [
    {
      id: "adopt",
      title: "Adopt a Pet",
      description: "Find your forever friend",
      icon: <Dog size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400",
      cardBg: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      buttonText: "See Pets →",
      emoji: "🐶",
      stats: "12 pets in Mirpur",
      available: true
    },
    {
      id: "sharing",
      title: "Pet Sharing",
      description: "Community pet care network",
      icon: <PawPrint size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-pawket-primary via-teal-500 to-emerald-400",
      cardBg: "bg-gradient-to-br from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      buttonText: "Find Caregivers →",
      emoji: "🤝",
      stats: "8 caregivers nearby",
      available: true
    },
    {
      id: "vet",
      title: "Virtual Vet",
      description: "Expert veterinary consultation",
      icon: <Cat size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400",
      cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      buttonText: "Find a Vet →",
      emoji: "🧑‍⚕️",
      stats: "3 vets online",
      available: true
    }
  ];

  const exploreFeatures = [
    {
      id: "shop",
      title: "Pet Shop",
      description: "Everything for your furry friends",
      icon: <ShoppingBag size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400",
      cardBg: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      buttonText: "Shop Now →",
      emoji: "🛍️",
      stats: "200+ products available",
      available: true
    },
    {
      id: "emergency",
      title: "Emergency Care",
      description: "24/7 urgent pet assistance",
      icon: <Siren size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-red-400 via-red-500 to-pink-500",
      cardBg: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      buttonText: "Coming Soon",
      emoji: "🚨",
      stats: "Feature in development",
      available: false
    },
    {
      id: "matchmaking",
      title: "Pet Matchmaking",
      description: "Find perfect pet companions",
      icon: <Map size={36} className="text-white" />,
      bgColor: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      buttonText: "Coming Soon",
      emoji: "💞",
      stats: "Launching Q2 2025",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-white to-cream-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <PawPrint size={80} className="text-pawket-primary rotate-12" />
        </div>
        <div className="absolute top-60 right-16 animate-pulse delay-1000">
          <PawPrint size={60} className="text-pawket-accent -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-1/3 animate-pulse delay-500">
          <PawPrint size={70} className="text-pawket-primary rotate-45" />
        </div>
        <div className="absolute bottom-20 right-1/4 animate-pulse delay-700">
          <PawPrint size={50} className="text-pawket-accent -rotate-45" />
        </div>
        <div className="absolute top-80 right-10 animate-pulse delay-300">
          <PawPrint size={65} className="text-pawket-primary rotate-90" />
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 p-6">
        {/* Guest Badge */}
        <div className="flex justify-end mb-6">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-pawket-neutral text-gray-600 shadow-sm px-4 py-2">
            👤 Guest Mode
          </Badge>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-4 rounded-full shadow-lg">
              <PawPrint size={32} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pawket-primary via-teal-600 to-pawket-accent bg-clip-text text-transparent">
              🐾 Pawket Dashboard
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              Welcome to Pawket — Bangladesh's First All-in-One Pet Companion Platform
            </h2>
            <p className="text-gray-600 text-lg">
              Discover a loving community of pet parents, caregivers, and veterinarians right in your neighborhood
            </p>
          </div>

          {/* Header Illustration */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-pawket-light to-cream-100 rounded-3xl p-8 shadow-lg border border-cream-200">
              <div className="flex items-center justify-center space-x-6 text-6xl">
                <span className="animate-bounce delay-100">🐕</span>
                <span className="animate-bounce delay-300">🏠</span>
                <span className="animate-bounce delay-500">🐱</span>
                <span className="animate-bounce delay-700">🌳</span>
                <span className="animate-bounce delay-900">🛺</span>
              </div>
              <p className="text-sm text-gray-500 mt-4 font-medium">Your Digital Pet Village Awaits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Care Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
              <span className="bg-gradient-to-r from-pawket-primary to-teal-500 p-2 rounded-full">
                <PawPrint size={20} className="text-white" />
              </span>
              <span>Today's Care</span>
            </h3>
            <p className="text-gray-600">Essential services for your pet's daily needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {todayCareFeatures.map((feature) => (
              <Card 
                key={feature.id}
                className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 relative`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="flex justify-center mb-4">
                    <div className={`${feature.bgColor} p-5 rounded-full shadow-xl`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">
                    {feature.emoji}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </CardDescription>
                  <div className="bg-white/70 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold rounded-2xl py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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

          {/* Explore & Coming Soon Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
              <span className="bg-gradient-to-r from-pawket-accent to-yellow-500 p-2 rounded-full">
                <PawPrint size={20} className="text-white" />
              </span>
              <span>Explore & Coming Soon</span>
            </h3>
            <p className="text-gray-600">Discover more features and exciting updates on the horizon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreFeatures.map((feature) => (
              <Card 
                key={feature.id}
                className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 relative ${!feature.available ? 'opacity-80' : ''}`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="flex justify-center mb-4">
                    <div className={`${feature.bgColor} p-5 rounded-full shadow-xl ${!feature.available ? 'opacity-75' : ''}`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">
                    {feature.emoji}
                  </div>
                  {!feature.available && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-yellow-100 border-yellow-300 text-yellow-800 text-xs">
                        Soon
                      </Badge>
                    </div>
                  )}
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </CardDescription>
                  <div className="bg-white/70 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button 
                    className={`w-full ${feature.available 
                      ? 'bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400'
                    } text-white font-semibold rounded-2xl py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
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
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex space-x-3 opacity-60">
          <div className="w-4 h-4 bg-pawket-accent rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-pawket-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-pawket-accent rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoonModal} onOpenChange={setShowComingSoonModal}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              🚧 Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4">
              This exciting feature is coming soon to make your pet care journey even better. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowComingSoonModal(false)}
              className="bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white rounded-2xl px-8"
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
