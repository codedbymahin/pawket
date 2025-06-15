
import { Dog, Cat, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";
import { pets } from "@/constants/mockData";
import SkeletonCard from "@/components/SkeletonCard";
import PullToRefresh from "@/components/PullToRefresh";
import ToastSystem from "@/components/ToastSystem";
import { useToastSystem } from "@/hooks/useToast";

const Adopt = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toasts, removeToast, showSuccess, showHeart } = useToastSystem();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    showSuccess("Refreshed! Found new pets waiting for adoption 🐾");
  };

  const handleContactOwner = () => {
    setShowLoginModal(true);
    showHeart("Ready to give a pet a loving home? ❤️");
  };

  const handleCardClick = (petId: number | string) => {
    navigate(`/pet/adopt/${petId}`);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <PageHeader
          title="Available Pets for Adoption"
          subtitle="Find your perfect companion in Bangladesh"
          backPath="/dashboard"
          gradientFrom="from-blue-100"
          gradientTo="to-cyan-100"
          titleGradientFrom="from-pawket-primary"
          titleGradientTo="to-pawket-accent"
        />

        {/* Enhanced Pet Listings */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : pets.length > 0
              ? pets.map((pet) => (
                  <ItemCard
                    key={pet.id}
                    id={pet.id}
                    onClick={handleCardClick}
                    category="adopt"
                    title={pet.name}
                    subtitle={`${pet.breed} • ${pet.age}`}
                    icon={
                      pet.type === "dog" ? (
                        <Dog size={48} className="text-white" />
                      ) : (
                        <Cat size={48} className="text-white" />
                      )
                    }
                    details={[{ icon: MapPin, text: pet.location, colorClass: 'text-cyan-500' }]}
                    description={`${pet.description}. Owner: ${pet.owner}`}
                    buttonText="Contact Owner"
                    onButtonClick={handleContactOwner}
                  />
                ))
              : <div className="col-span-full text-center py-16">
                  <p className="text-xl text-gray-600">No pets found for adoption at the moment. 🐾</p>
                </div>
            }
          </div>
        </div>

        {/* Toast System */}
        <ToastSystem toasts={toasts} onRemoveToast={removeToast} />

        {/* Login Required Modal */}
        <LoginRequiredModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          buttonClassName="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
        />
      </div>
    </PullToRefresh>
  );
};

export default Adopt;
