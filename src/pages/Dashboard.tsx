
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
      icon: <Dog size={32} className="text-pawket-accent" />,
      bgColor: "bg-pawket-light",
      borderColor: "border-pawket-neutral"
    },
    {
      id: "sharing",
      title: "Pet Sharing",
      description: "Share care with neighbors",
      icon: <PawPrint size={32} className="text-pawket-primary" />,
      bgColor: "bg-pawket-light",
      borderColor: "border-pawket-neutral"
    },
    {
      id: "vet",
      title: "Virtual Vet",
      description: "Online veterinary care",
      icon: <Cat size={32} className="text-pawket-accent" />,
      bgColor: "bg-pawket-light",
      borderColor: "border-pawket-neutral"
    },
    {
      id: "shop",
      title: "Pet Shop",
      description: "Food, toys & accessories",
      icon: <ShoppingCart size={32} className="text-pawket-primary" />,
      bgColor: "bg-pawket-light",
      borderColor: "border-pawket-neutral"
    },
    {
      id: "emergency",
      title: "Emergency",
      description: "24/7 urgent pet care",
      icon: <Siren size={32} className="text-red-500" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: "matchmaking",
      title: "Pet Matchmaking",
      description: "Find compatible pets",
      icon: <PawPrint size={32} className="text-pink-500" />,
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-pawket-neutral to-white">
      {/* Header */}
      <div className="p-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-2 rounded-full shadow-lg">
            <PawPrint size={24} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent">
            Pawket Dashboard
          </h1>
        </div>
        <p className="text-gray-600 text-lg">Guest Mode - Explore all features</p>
      </div>

      {/* Feature Cards Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className={`${feature.bgColor} ${feature.borderColor} border-2 cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeatureClick(feature.id);
                  }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoonModal} onOpenChange={setShowComingSoonModal}>
        <DialogContent className="sm:max-w-md">
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
              className="bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white"
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
