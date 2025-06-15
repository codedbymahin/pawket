
import { PawPrint, MapPin, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";
import { sharingOffers } from "@/constants/mockData";
import SkeletonCard from "@/components/SkeletonCard";

const Sharing = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyToHelp = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (offerId: number | string) => {
    navigate(`/pet/sharing/${offerId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      <PageHeader
        title="Pet Sharing Opportunities"
        subtitle="Help neighbors care for their beloved pets"
        backPath="/dashboard"
        gradientFrom="from-teal-100"
        gradientTo="to-emerald-100"
        titleGradientFrom="from-teal-600"
        titleGradientTo="to-emerald-600"
      />

      {/* Enhanced Sharing Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
            : sharingOffers.length > 0
            ? sharingOffers.map((offer) => (
                <ItemCard
                  key={offer.id}
                  id={offer.id}
                  onClick={handleCardClick}
                  category="share"
                  title={offer.petName}
                  subtitle={offer.breed}
                  icon={<PawPrint size={48} className="text-white" />}
                  details={[
                    { icon: MapPin, text: offer.location, colorClass: 'text-emerald-500' },
                    { icon: Clock, text: offer.duration, colorClass: 'text-teal-500' },
                    { icon: User, text: offer.owner, colorClass: 'text-green-500' },
                  ]}
                  description={`Reason: ${offer.reason}`}
                  badge={{
                    text: offer.status,
                    variant: offer.status === 'Available' ? 'available' : 'unavailable',
                  }}
                  buttonText={offer.status === 'Available' ? 'Offer to Help' : 'Currently Shared'}
                  onButtonClick={handleApplyToHelp}
                  buttonDisabled={offer.status === 'Temporarily Shared'}
                />
              ))
            : <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-600">No pet sharing opportunities found. 🐾</p>
              </div>
          }
        </div>
      </div>

      {/* Login Required Modal */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        buttonClassName="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
      />
    </div>
  );
};

export default Sharing;
