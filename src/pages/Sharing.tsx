
import { PawPrint, MapPin, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";

const Sharing = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sharingOffers = [
    {
      id: 1,
      petName: "Charlie",
      breed: "Beagle",
      location: "Banani, Dhaka",
      duration: "Weekend trip",
      reason: "Owner traveling for work",
      owner: "Rashida Akter",
      status: "Available"
    },
    {
      id: 2,
      petName: "Fluffy",
      breed: "British Shorthair",
      location: "Uttara, Dhaka",
      duration: "3 days",
      reason: "Family emergency",
      owner: "Mohammad Ali",
      status: "Available"
    },
    {
      id: 3,
      petName: "Daisy",
      breed: "Golden Retriever Puppy",
      location: "Mymensingh",
      duration: "2 hours morning",
      reason: "Owner works early shifts",
      owner: "Sadia Rahman",
      status: "Available"
    },
    {
      id: 4,
      petName: "Tiger",
      breed: "German Shepherd",
      location: "Sylhet",
      duration: "Evening walks",
      reason: "Owner has mobility issues",
      owner: "Aminul Islam",
      status: "Available"
    },
    {
      id: 5,
      petName: "Mittens",
      breed: "Persian Mix",
      location: "Chittagong",
      duration: "Daily playtime",
      reason: "Owner working long hours",
      owner: "Nasreen Sultana",
      status: "Temporarily Shared"
    },
    {
      id: 6,
      petName: "Bruno",
      breed: "Labrador",
      location: "Comilla",
      duration: "Full weekend",
      reason: "Owner traveling to village",
      owner: "Rafiq Ahmed",
      status: "Available"
    }
  ];

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
          {sharingOffers.map((offer) => (
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
          ))}
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
