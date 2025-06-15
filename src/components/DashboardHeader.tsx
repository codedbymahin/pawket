
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PawketLogo from "@/components/PawketLogo";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
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
  );
};

export default DashboardHeader;
