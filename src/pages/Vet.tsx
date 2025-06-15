
import { UserRound, MapPin, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import ItemCard from "@/components/ItemCard";

const Vet = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const vets = [
    {
      id: 1,
      name: "Dr. Mahmuda Islam",
      specialty: "General Pet Care",
      location: "Dhanmondi, Dhaka",
      experience: "8 years",
      rating: 4.9,
      consultation: "৳800",
      availability: "Mon-Fri 9AM-6PM",
      description: "Experienced veterinarian specializing in cats and dogs"
    },
    {
      id: 2,
      name: "Dr. Rafiqul Alam",
      specialty: "Pet Surgery",
      location: "Gulshan, Dhaka",
      experience: "12 years",
      rating: 4.8,
      consultation: "৳1200",
      availability: "Tue-Sat 10AM-5PM",
      description: "Expert in advanced pet surgical procedures"
    },
    {
      id: 3,
      name: "Dr. Fatema Khatun",
      specialty: "Pet Dermatology",
      location: "Mymensingh",
      experience: "6 years",
      rating: 4.7,
      consultation: "৳600",
      availability: "Mon-Wed-Fri 2PM-8PM",
      description: "Specialist in pet skin and allergy treatments"
    },
    {
      id: 4,
      name: "Dr. Habibur Rahman",
      specialty: "Emergency Care",
      location: "Sylhet",
      experience: "10 years",
      rating: 4.9,
      consultation: "৳1000",
      availability: "24/7 Emergency",
      description: "Available for urgent pet medical emergencies"
    },
    {
      id: 5,
      name: "Dr. Nasir Ahmed",
      specialty: "Pet Nutrition",
      location: "Chittagong",
      experience: "5 years",
      rating: 4.6,
      consultation: "৳500",
      availability: "Thu-Sun 11AM-4PM",
      description: "Expert in pet diet and nutritional planning"
    },
    {
      id: 6,
      name: "Dr. Salma Begum",
      specialty: "Behavioral Therapy",
      location: "Rangpur",
      experience: "7 years",
      rating: 4.8,
      consultation: "৳700",
      availability: "Mon-Fri 3PM-7PM",
      description: "Specialist in pet behavioral issues and training"
    }
  ];

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
          {vets.map((vet) => (
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
          ))}
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
