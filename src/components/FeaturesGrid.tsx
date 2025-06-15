
import { Dog, Cat, Search, ShoppingBag, Heart, AlertTriangle, UserRound, PawPrint } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface FeaturesGridProps {
  onFeatureClick: (featureId: string) => void;
}

const FeaturesGrid = ({ onFeatureClick }: FeaturesGridProps) => {
  const features = [
    {
      id: "adopt",
      title: "Adopt a Pet",
      description: "Find loving homes for pets through verified adoption.",
      icon: <Dog size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-sky-50",
      borderColor: "border-blue-200",
      buttonText: "See Pets →",
      emoji: "🐶",
      available: true,
      highlight: "bg-blue-100"
    },
    {
      id: "sharing",
      title: "Pet Sharing",
      description: "Temporarily share your pet with other pet parents when you travel.",
      icon: <PawPrint size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-500",
      cardBg: "bg-gradient-to-br from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      buttonText: "Find Pet Helpers →",
      emoji: "🐾",
      available: true,
      highlight: "bg-teal-100"
    },
    {
      id: "lost-found",
      title: "Lost & Found",
      description: "Report or discover lost pets around your area.",
      icon: <Search size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
      cardBg: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      buttonText: "Search Pets →",
      emoji: "🔍",
      available: true,
      highlight: "bg-purple-100"
    },
    {
      id: "vet",
      title: "Virtual Vet",
      description: "Browse local vets and book virtual appointments.",
      icon: <UserRound size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-600",
      cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      buttonText: "Find Vets →",
      emoji: "👩‍⚕️",
      available: true,
      highlight: "bg-green-100"
    },
    {
      id: "shop",
      title: "Pet Shop",
      description: "Buy food, clothes, toys, and accessories for your pet.",
      icon: <ShoppingBag size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500",
      cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      buttonText: "Shop Now →",
      emoji: "🛍️",
      available: true,
      highlight: "bg-orange-100"
    },
    {
      id: "emergency",
      title: "Emergency Help",
      description: "Instant aid in pet emergencies.",
      icon: <AlertTriangle size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-red-400 via-red-500 to-pink-500",
      cardBg: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      buttonText: "Coming Soon",
      emoji: "🚨",
      available: false,
      highlight: "bg-red-100"
    },
    {
      id: "matchmaking",
      title: "Pet Matchmaking",
      description: "Match pets for responsible breeding.",
      icon: <Heart size={40} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      buttonText: "Coming Soon",
      emoji: "💞",
      available: false,
      highlight: "bg-pink-100"
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              feature={feature}
              onFeatureClick={onFeatureClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
