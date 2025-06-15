
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Utensils,
  Stethoscope,
  Thermometer,
  Heart
} from "lucide-react";

interface AcademyCard {
  id: number;
  title: string;
  icon: string;
  bgGradient: string;
  cardBg: string;
  borderColor: string;
  tips: string[];
}

interface AcademyOverviewCardsProps {
  cards: AcademyCard[];
}

const iconMap = {
  Utensils,
  Stethoscope,
  Thermometer,
  Heart
};

const AcademyOverviewCards = ({ cards }: AcademyOverviewCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
      {cards.map((card) => {
        const IconComponent = iconMap[card.icon as keyof typeof iconMap];
        return (
          <Card
            key={card.id}
            className={`${card.cardBg} ${card.borderColor} border-2 hover:shadow-xl transform hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 h-full`}
            style={{ backgroundColor: '#F8F9FA' }}
          >
            <CardHeader className="text-center pb-4 px-6 pt-6">
              <div className="flex justify-center mb-4">
                <div className={`${card.bgGradient} p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {IconComponent ? <IconComponent size={32} className="text-white" /> : null}
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
        );
      })}
    </div>
  );
};

export default AcademyOverviewCards;
