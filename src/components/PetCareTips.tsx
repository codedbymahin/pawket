
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const PetCareTips = () => {
  const tips = [
    "Never leave your pet in a parked car — even with windows down, it can overheat quickly.",
    "Keep fresh water available at all times for your pet's health.",
    "Brush your dog's coat regularly to prevent matting and reduce shedding.",
    "Avoid giving chocolate to dogs — it's toxic and can be dangerous.",
    "Visit the vet at least once a year for regular health checkups.",
    "Provide clean bedding daily to keep your pet comfortable and healthy."
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        setIsVisible(true);
      }, 300);
    }, 5000); // Changed from 2000 to 5000 (5 seconds)

    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200 border-2 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-3">
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-3 rounded-full shadow-lg">
            <Lightbulb size={24} className="text-white" />
          </div>
        </div>
        <CardTitle className="text-lg font-bold font-poppins" style={{ color: '#333333' }}>
          Pet Care Tip
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-6">
        <div className="min-h-[60px] flex items-center justify-center">
          <p 
            className={`text-gray-700 text-sm leading-relaxed text-center transition-all duration-300 ease-in-out font-nunito ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {tips[currentTipIndex]}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCareTips;
