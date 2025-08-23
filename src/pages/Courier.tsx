
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNavigation from "@/components/BottomNavigation";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import BookingWizard from "@/components/courier/BookingWizard";
import TrustIndicators from "@/components/courier/TrustIndicators";
import FloatingPetElements from "@/components/courier/FloatingPetElements";

const Courier = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleBooking = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FAF3E0' }}>
      <FloatingPetElements />
      
      <PageHeader
        title="Pet Courier"
        subtitle="Safe and reliable transportation for your beloved pets"
        backPath="/dashboard"
        gradientFrom="from-cyan-400"
        gradientTo="to-sky-500"
        titleGradientFrom="from-cyan-600"
        titleGradientTo="to-sky-600"
      />

      <div className="px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main Booking Interface */}
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <BookingWizard onBooking={handleBooking} />
          </div>

          {/* Trust Indicators */}
          <TrustIndicators />
        </div>
      </div>

      <BottomNavigation />
      
      <LoginRequiredModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default Courier;
