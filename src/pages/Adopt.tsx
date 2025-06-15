
import { Dog, Cat, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";

const Adopt = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      location: "Dhanmondi, Dhaka",
      description: "Friendly and energetic dog, great with kids",
      owner: "Ahmed Hassan",
      type: "dog"
    },
    {
      id: 2,
      name: "Mimi",
      breed: "Persian Cat",
      age: "1.5 years",
      location: "Gulshan, Dhaka",
      description: "Calm and affectionate, perfect lap cat",
      owner: "Fatima Khan",
      type: "cat"
    },
    {
      id: 3,
      name: "Rocky",
      breed: "German Shepherd",
      age: "3 years",
      location: "Mymensingh",
      description: "Loyal guard dog, well-trained",
      owner: "Rashed Ahmed",
      type: "dog"
    },
    {
      id: 4,
      name: "Whiskers",
      breed: "Bengali Cat",
      age: "6 months",
      location: "Sylhet",
      description: "Playful kitten, loves to explore",
      owner: "Nazma Begum",
      type: "cat"
    },
    {
      id: 5,
      name: "Max",
      breed: "Labrador Mix",
      age: "4 years",
      location: "Chittagong",
      description: "Active and loving, great running partner",
      owner: "Karim Rahman",
      type: "dog"
    },
    {
      id: 6,
      name: "Luna",
      breed: "Siamese Cat",
      age: "2 years",
      location: "Rangpur",
      description: "Elegant and intelligent, loves attention",
      owner: "Salma Khatun",
      type: "cat"
    }
  ];

  const handleContactOwner = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (petId: number | string) => {
    navigate(`/pet/adopt/${petId}`);
  };

  return (
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
          {pets.map((pet) => (
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
              details={[
                { icon: MapPin, text: pet.location, colorClass: 'text-cyan-500' },
              ]}
              description={`${pet.description}. Owner: ${pet.owner}`}
              buttonText="Contact Owner"
              onButtonClick={handleContactOwner}
            />
          ))}
        </div>
      </div>

      {/* Login Required Modal */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        buttonClassName="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
      />
    </div>
  );
};

export default Adopt;
