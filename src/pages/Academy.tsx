
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Heart,
  Thermometer,
  Utensils,
  Stethoscope,
  ArrowLeft,
  BookOpen,
  Award,
  AlertTriangle,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import PetCareQuiz from "@/components/PetCareQuiz";
import BreedGuide from "@/components/BreedGuide";
import EmergencyGuide from "@/components/EmergencyGuide";
import PetNameGenerator from "@/components/PetNameGenerator";
import AcademyHeader from "@/components/AcademyHeader";
import AcademyNavigationTabs from "@/components/AcademyNavigationTabs";
import AcademyOverviewCards from "@/components/AcademyOverviewCards";
import { academyCards, petCareFAQs } from "@/constants/academyData";

const Academy = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const navigationTabs = [
    { id: "overview", label: "Overview", icon: <BookOpen size={16} /> },
    { id: "quiz", label: "Pet Quiz", icon: <Award size={16} /> },
    { id: "names", label: "Name Generator", icon: <Sparkles size={16} /> },
    { id: "breeds", label: "Breed Guide", icon: <Heart size={16} /> },
    { id: "emergency", label: "Emergency Guide", icon: <AlertTriangle size={16} /> },
    { id: "faq", label: "FAQ", icon: <GraduationCap size={16} /> }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3E0' }}>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Back button */}
        <div className="flex justify-start mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToDashboard}
            className="text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <AcademyHeader
          title="Pawket Academy"
          subtitle="Learn the fundamentals of responsible pet ownership in Bangladesh"
        />

        <AcademyNavigationTabs
          tabs={navigationTabs}
          activeTab={activeSection}
          setActiveTab={setActiveSection}
        />
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {activeSection === "overview" && (
            <AcademyOverviewCards cards={academyCards} />
          )}

          {activeSection === "quiz" && (
            <PetCareQuiz
              title="Test Your Pet Knowledge & Discover Personality"
              className="mb-8"
            />
          )}

          {activeSection === "names" && (
            <PetNameGenerator
              title="Pet Name Generator"
              className="mb-8"
            />
          )}

          {activeSection === "breeds" && (
            <BreedGuide
              title="Pet Breed Guide for Bangladesh"
              className="mb-8"
            />
          )}

          {activeSection === "emergency" && (
            <EmergencyGuide
              title="Pet Emergency First Aid Guide"
              className="mb-8"
            />
          )}

          {activeSection === "faq" && (
            <InteractiveFAQ
              title="Pet Care Questions & Answers"
              faqs={petCareFAQs}
              className="mb-8"
            />
          )}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-8"></div>
    </div>
  );
};

export default Academy;
