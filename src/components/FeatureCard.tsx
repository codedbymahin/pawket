
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    bgGradient: string;
    cardBg: string;
    borderColor: string;
    buttonText: string;
    emoji: string;
    available: boolean;
    highlight: string;
  };
  onFeatureClick: (featureId: string) => void;
}

const FeatureCard = ({ feature, onFeatureClick }: FeatureCardProps) => {
  return (
    <Card 
      className={`${feature.cardBg} ${feature.borderColor} border-2 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 relative ${!feature.available ? 'opacity-80' : ''}`}
      style={{ backgroundColor: '#F8F9FA' }}
      onClick={() => onFeatureClick(feature.id)}
    >
      <CardHeader className="text-center pb-6 relative px-8 pt-8">
        {/* Feature Icon with larger size */}
        <div className="flex justify-center mb-6">
          <div className={`${feature.bgGradient} p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${!feature.available ? 'opacity-75' : ''}`}>
            {feature.icon}
          </div>
        </div>
        
        {/* Emoji in top right */}
        <div className="absolute top-6 right-6 text-3xl">
          {feature.emoji}
        </div>
        
        {/* Coming Soon Badge */}
        {!feature.available && (
          <div className="absolute top-6 left-6">
            <Badge 
              variant="outline" 
              className="text-xs font-semibold rounded-full px-3 py-1"
              style={{ backgroundColor: '#FFD166', borderColor: '#FFC107', color: '#B8860B' }}
            >
              Soon
            </Badge>
          </div>
        )}
        
        <CardTitle className="text-xl font-bold mb-3 font-poppins" style={{ color: '#333333' }}>
          {feature.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm leading-relaxed font-nunito px-2">
          {feature.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 pb-8 px-8">
        <Button 
          className={`w-full ${feature.available 
            ? 'text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105' 
            : 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
          } rounded-2xl py-4 text-base transform transition-all duration-300 font-poppins`}
          style={feature.available ? { 
            background: 'linear-gradient(135deg, #00AEEF, #0099CC)',
          } : {}}
          onClick={(e) => {
            e.stopPropagation();
            onFeatureClick(feature.id);
          }}
        >
          {feature.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
