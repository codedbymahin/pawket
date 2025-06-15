
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PetCareTips from "@/components/PetCareTips";
import PawkoChatbot from "@/components/PawkoChatbot";
import PawketAcademy from "@/components/PawketAcademy";
import DashboardHeader from "@/components/DashboardHeader";
import FeaturesGrid from "@/components/FeaturesGrid";
import BottomNavigation from "@/components/BottomNavigation";
import ComingSoonModal from "@/components/ComingSoonModal";

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      {/* Header Section */}
      <DashboardHeader />

      {/* Features Grid */}
      <FeaturesGrid onFeatureClick={handleFeatureClick} />

      {/* Pawket Academy Section */}
      <PawketAcademy />

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

      {/* Sticky Bottom Navigation */}
      <BottomNavigation />

      {/* Decorative bottom element with padding for sticky nav */}
      <div className="flex justify-center pb-24">
        <div className="flex space-x-3 opacity-60">
          <div className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#00AEEF' }}></div>
          <div className="w-4 h-4 rounded-full animate-bounce delay-100" style={{ backgroundColor: '#FFD166' }}></div>
          <div className="w-4 h-4 rounded-full animate-bounce delay-200" style={{ backgroundColor: '#00AEEF' }}></div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={showComingSoonModal} 
        onClose={() => setShowComingSoonModal(false)} 
      />

      {/* Floating Pawko Chatbot */}
      <PawkoChatbot />
    </div>
  );
};

export default Dashboard;
