
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Thermometer, Utensils, Stethoscope, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PawketLogo from "@/components/PawketLogo";
import InteractiveFAQ from "@/components/InteractiveFAQ";

const Academy = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const academyCards = [
    {
      id: 1,
      title: "Nutrition Basics",
      icon: <Utensils size={32} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-600",
      cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      tips: [
        "Feed your pet at regular intervals to maintain healthy digestion",
        "Always provide fresh water and avoid giving human food as treats",
        "Choose age-appropriate food for puppies, adults, and senior pets"
      ]
    },
    {
      id: 2,
      title: "Health Monitoring",
      icon: <Stethoscope size={32} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-sky-50",
      borderColor: "border-blue-200",
      tips: [
        "Check your pet's nose, ears, and eyes regularly for any changes",
        "Monitor eating habits and energy levels for signs of illness",
        "Schedule annual vet checkups for preventive health care"
      ]
    },
    {
      id: 3,
      title: "Temperature Safety",
      icon: <Thermometer size={32} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500",
      cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      tips: [
        "Never leave pets in hot cars - temperatures rise dangerously fast",
        "Provide shade and cool water during summer months",
        "Watch for signs of overheating like excessive panting or drooling"
      ]
    },
    {
      id: 4,
      title: "Love & Bonding",
      icon: <Heart size={32} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      tips: [
        "Spend quality time playing and exercising with your pet daily",
        "Use positive reinforcement for training and good behavior",
        "Create a comfortable, safe space where your pet feels secure"
      ]
    }
  ];

  const petCareFAQs = [
    {
      question: "How often should I feed my dog?",
      answer: "Adult dogs should typically be fed twice a day - once in the morning and once in the evening. Puppies under 6 months may need 3-4 meals per day. Always follow the feeding guidelines on your dog food package and consult with your vet for personalized advice.",
      category: "Nutrition"
    },
    {
      question: "What vaccines does my cat need in Bangladesh?",
      answer: "In Bangladesh, core vaccines for cats include rabies, FVRCP (feline viral rhinotracheitis, calicivirus, and panleukopenia). Your vet may also recommend FeLV (feline leukemia) depending on your cat's lifestyle. Kittens need a series of vaccinations starting at 6-8 weeks.",
      category: "Health"
    },
    {
      question: "How do I keep my pet cool in Bangladesh's hot weather?",
      answer: "Provide plenty of fresh water, ensure good ventilation, avoid walking during the hottest parts of the day (10am-4pm), use fans or AC when possible, and never leave pets in vehicles. Consider cooling mats and frozen treats for extra relief.",
      category: "Weather"
    },
    {
      question: "What should I do if my pet gets lost in Dhaka?",
      answer: "Immediately contact local animal shelters, post on social media groups like 'Lost and Found Pets Bangladesh', put up posters in your neighborhood, inform local vets, and check with the city corporation. Having a collar with ID tags greatly increases chances of recovery.",
      category: "Safety"
    },
    {
      question: "How often should I groom my pet?",
      answer: "Dogs typically need bathing every 4-6 weeks, but this varies by breed and lifestyle. Cats usually groom themselves but may need occasional baths. Brush regularly (daily for long-haired breeds), trim nails monthly, and clean ears weekly.",
      category: "Grooming"
    },
    {
      question: "What human foods are toxic to pets?",
      answer: "Never give pets chocolate, onions, garlic, grapes, raisins, avocado, caffeine, alcohol, or xylitol (artificial sweetener). Also avoid spicy foods, bones that can splinter, and anything with high salt content. When in doubt, stick to pet food.",
      category: "Nutrition"
    },
    {
      question: "How do I introduce a new pet to my current pet?",
      answer: "Take it slow! Keep them separated initially, let them smell each other's scents, feed them on opposite sides of a door, gradually allow supervised meetings, and ensure each pet has their own space. The process can take several weeks.",
      category: "Behavior"
    },
    {
      question: "When should I take my pet to the vet?",
      answer: "Regular check-ups annually for healthy adult pets, twice yearly for seniors. Emergency signs include difficulty breathing, repeated vomiting, lethargy, loss of appetite for 24+ hours, difficulty urinating, or any sudden behavior changes.",
      category: "Health"
    }
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

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <PawketLogo size={50} />
            </div>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins"
              style={{ color: '#00AEEF' }}
            >
              Pawket Academy
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold font-poppins" style={{ color: '#333333' }}>
                Essential Pet Care Knowledge
              </h2>
            </div>
            <p className="text-lg text-gray-600 font-nunito">
              Learn the fundamentals of responsible pet ownership in Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Academy Cards Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {academyCards.map((card) => (
              <Card 
                key={card.id}
                className={`${card.cardBg} ${card.borderColor} border-2 hover:shadow-xl transform hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 h-full`}
                style={{ backgroundColor: '#F8F9FA' }}
              >
                <CardHeader className="text-center pb-4 px-6 pt-6">
                  {/* Icon */}
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
                    {card.tips.map((tip, index) => (
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

          {/* Interactive FAQ Section */}
          <InteractiveFAQ
            title="Pet Care Questions & Answers"
            faqs={petCareFAQs}
            className="mb-8"
          />
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-8"></div>
    </div>
  );
};

export default Academy;
