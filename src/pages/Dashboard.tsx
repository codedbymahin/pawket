
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Dog, Cat, ShoppingCart, Siren } from "lucide-react";
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

  const features = [
    {
      id: "adopt",
      title: "Adopt a Pet",
      description: "Find your perfect companion",
      icon: <Dog size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      cardBg: "bg-yellow-50",
      borderColor: "border-yellow-200",
      buttonText: "See Pets →",
      emoji: "🐶"
    },
    {
      id: "sharing",
      title: "Pet Sharing",
      description: "Share care with neighbors",
      icon: <PawPrint size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-pawket-primary to-teal-600",
      cardBg: "bg-teal-50",
      borderColor: "border-teal-200",
      buttonText: "Find Caregivers",
      emoji: "🐕"
    },
    {
      id: "vet",
      title: "Virtual Vet",
      description: "Online veterinary care",
      icon: <Cat size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-green-400 to-emerald-500",
      cardBg: "bg-green-50",
      borderColor: "border-green-200",
      buttonText: "Find a Vet",
      emoji: "🧑‍⚕️"
    },
    {
      id: "shop",
      title: "Pet Shop",
      description: "Food, toys & accessories",
      icon: <ShoppingCart size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
      cardBg: "bg-purple-50",
      borderColor: "border-purple-200",
      buttonText: "Shop Now",
      emoji: "🛍️"
    },
    {
      id: "emergency",
      title: "Emergency",
      description: "24/7 urgent pet care",
      icon: <Siren size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      cardBg: "bg-red-50",
      borderColor: "border-red-200",
      buttonText: "Get Help Now",
      emoji: "🚨"
    },
    {
      id: "matchmaking",
      title: "Pet Matchmaking",
      description: "Find compatible pets",
      icon: <PawPrint size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-500",
      cardBg: "bg-pink-50",
      borderColor: "border-pink-200",
      buttonText: "Find Matches",
      emoji: "💞"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-white to-pawket-neutral relative overflow-hidden">
      {/* Paw Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <PawPrint size={60} className="text-pawket-primary rotate-12" />
        </div>
        <div className="absolute top-40 right-16 animate-pulse delay-1000">
          <PawPrint size={45} className="text-pawket-accent -rotate-12" />
        </div>
        <div className="absolute top-60 left-1/3 animate-pulse delay-500">
          <PawPrint size={50} className="text-pawket-primary rotate-45" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse delay-700">
          <PawPrint size={40} className="text-pawket-accent -rotate-45" />
        </div>
        <div className="absolute bottom-60 left-20 animate-pulse delay-300">
          <PawPrint size={55} className="text-pawket-primary rotate-12" />
        </div>
        <div className="absolute top-80 right-10 animate-pulse delay-900">
          <PawPrint size={35} className="text-pawket-accent rotate-90" />
        </div>
      </div>

      {/* Header with Guest Badge */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1"></div>
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-pawket-neutral text-gray-600 shadow-sm">
            👤 Guest User
          </Badge>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-3 rounded-full shadow-lg">
              <PawPrint size={28} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent">
              🐾 Pawket Dashboard
            </h1>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            Guest Mode • <span className="text-pawket-primary">Browse Freely</span>
          </p>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden backdrop-blur-sm bg-opacity-80`}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <CardHeader className="text-center pb-4 relative">
                <div className="flex justify-center mb-4">
                  <div className={`${feature.bgColor} p-4 rounded-full shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-2xl">
                  {feature.emoji}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <Button 
                  className="w-full bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold rounded-xl py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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

      {/* Decorative bottom element */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex space-x-3 opacity-60">
          <div className="w-3 h-3 bg-pawket-accent rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pawket-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-pawket-accent rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoonModal} onOpenChange={setShowComingSoonModal}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              🚧 Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4">
              This feature is coming soon. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowComingSoonModal(false)}
              className="bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white rounded-xl"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
