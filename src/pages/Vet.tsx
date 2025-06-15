
import { UserRound, MapPin, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";
import { vets } from "@/constants/mockData";
import SkeletonCard from "@/components/SkeletonCard";

const Vet = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookAppointment = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (vetId: number | string) => {
    navigate(`/vet/${vetId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <PageHeader
        title="Professional Veterinarians"
        subtitle="Professional veterinary care from home"
        backPath="/dashboard"
        gradientFrom="from-green-100"
        gradientTo="to-emerald-100"
        titleGradientFrom="from-green-600"
        titleGradientTo="to-emerald-600"
      />

      {/* Enhanced Vet Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
            : vets.length > 0
            ? vets.map((vet) => (
                <ItemCard
                  key={vet.id}
                  id={vet.id}
                  onClick={handleCardClick}
                  category="vet"
                  title={vet.name}
                  subtitle={vet.specialty}
                  icon={<UserRound size={48} className="text-white" />}
                  details={[
                    { icon: MapPin, text: vet.location, colorClass: 'text-emerald-500' },
                    { icon: Clock, text: vet.availability, colorClass: 'text-green-500' },
                    { icon: Star, text: `${vet.rating} • ${vet.experience} experience`, colorClass: 'text-yellow-500 fill-current' },
                  ]}
                  description={vet.description}
                  footerText={`Consultation: ${vet.consultation}`}
                  buttonText="Book Appointment"
                  onButtonClick={handleBookAppointment}
                />
              ))
            : <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-600">No veterinarians found. 🐾</p>
              </div>
          }
        </div>
      </div>

      {/* Login Required Modal */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        buttonClassName="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
      />
    </div>
  );
};

export default Vet;
