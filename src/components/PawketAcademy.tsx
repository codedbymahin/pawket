
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Thermometer, Utensils, Stethoscope } from "lucide-react";

const PawketAcademy = () => {
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

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins" style={{ color: '#333333' }}>
              🎓 Pawket Academy
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-nunito max-w-2xl mx-auto">
            Essential knowledge for every pet parent in Bangladesh
          </p>
        </div>

        {/* Academy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
};

export default PawketAcademy;
