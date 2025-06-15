import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Thermometer, Utensils, Stethoscope, ArrowLeft, BookOpen, Award, AlertTriangle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import PetCareQuiz from "@/components/PetCareQuiz";
import BreedGuide from "@/components/BreedGuide";
import EmergencyGuide from "@/components/EmergencyGuide";
import PetNameGenerator from "@/components/PetNameGenerator";
import AcademyHeader from "@/components/AcademyHeader";
import AcademyNavigationTabs from "@/components/AcademyNavigationTabs";
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
              {academyCards.map((card) => (
                <Card 
                  key={card.id}
                  className={`${card.cardBg} ${card.borderColor} border-2 hover:shadow-xl transform hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 h-full`}
                  style={{ backgroundColor: '#F8F9FA' }}
                >
                  <CardHeader className="text-center pb-4 px-6 pt-6">
                    <div className="flex justify-center mb-4">
                      <div className={`${card.bgGradient} p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}>
                        {card.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold mb-3 font-poppins" style={{ color: '#333333' }}>
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 px-6">
                    <div className="space-y-3">
                      {card.tips.map((tip: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00AEEF' }}></div>
                          <p className="text-gray-700 text-sm leading-relaxed font-nunito">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
