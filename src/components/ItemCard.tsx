
import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import EnhancedButton from "@/components/EnhancedButton";

type ItemCardDetail = {
  icon: React.ElementType;
  text: string;
  colorClass: string;
};

export interface ItemCardProps {
  id: number | string;
  onClick: (id: number | string) => void;
  category: 'adopt' | 'share' | 'vet' | 'shop';
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  details: ItemCardDetail[];
  description?: string;
  footerText?: string;
  price?: string;
  originalPrice?: string;
  badge?: {
    text: string;
    variant: 'available' | 'unavailable';
  };
  buttonText: string;
  onButtonClick: () => void;
  buttonDisabled?: boolean;
}

const categoryStyles = {
  adopt: {
    border: 'border-blue-200',
    iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    buttonBg: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
    footerBg: '',
  },
  share: {
    border: 'border-teal-200',
    iconBg: 'bg-gradient-to-br from-teal-400 to-emerald-500',
    buttonBg: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600',
    footerBg: '',
  },
  vet: {
    border: 'border-green-200',
    iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
    buttonBg: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    footerBg: 'bg-green-50',
  },
  shop: {
    border: 'border-orange-200',
    iconBg: '', // Not used for shop with images
    buttonBg: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
    footerBg: '',
  },
};

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  onClick,
  category,
  title,
  subtitle,
  icon,
  image,
  details,
  description,
  footerText,
  price,
  originalPrice,
  badge,
  buttonText,
  onButtonClick,
  buttonDisabled = false,
}) => {
  const styles = categoryStyles[category];
  const [isFavorited, setIsFavorited] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onButtonClick();
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Card 
      className={`bg-white/90 backdrop-blur-sm border-2 ${styles.border} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl flex flex-col relative overflow-hidden ${
        isHovered ? 'shadow-[0_0_30px_rgba(0,174,239,0.3)]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Favorite button */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-200"
      >
        <Heart
          size={20}
          className={`transition-all duration-200 ${
            isFavorited
              ? 'text-red-500 fill-current scale-110'
              : 'text-gray-400 hover:text-red-400'
          }`}
        />
      </button>

      <div onClick={() => onClick(id)} className="cursor-pointer flex-grow">
        <CardHeader className="text-center px-8 pt-8">
          <div className="flex justify-center mb-4">
            {image ? image : (
              icon && (
                <div className={`p-4 rounded-full shadow-lg ${styles.iconBg} transform transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-6' : ''
                }`}>
                  {icon}
                </div>
              )
            )}
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 text-base font-nunito">
            {subtitle}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 px-8">
          {details.map((detail, index) => (
            <div key={index} className="flex items-center justify-center text-gray-600 text-base">
              <detail.icon size={18} className={`mr-3 ${detail.colorClass}`} />
              <span className="font-nunito">{detail.text}</span>
            </div>
          ))}
          
          {description && (
            <p className="text-gray-700 text-sm leading-relaxed font-nunito pt-2 text-center">
              {description}
            </p>
          )}

          {badge && (
             <div className="text-center pt-2">
              <Badge 
                variant="outline" 
                className={`${badge.variant === 'available' 
                  ? 'bg-green-50 border-green-300 text-green-600' 
                  : 'bg-orange-50 border-orange-300 text-orange-600'
                } px-4 py-2 rounded-full font-nunito`}
              >
                {badge.text}
              </Badge>
            </div>
          )}

          {(price || originalPrice) && (
             <div className="text-center pt-2">
              <div className="text-2xl font-bold text-green-600 font-poppins">
                {price}
              </div>
              {originalPrice && (
                <div className="text-sm text-gray-500 line-through font-nunito">
                  {originalPrice}
                </div>
              )}
            </div>
          )}

          {footerText && (
            <div className={`text-lg font-bold text-green-600 text-center ${styles.footerBg} p-3 rounded-2xl font-poppins mt-4`}>
              {footerText}
            </div>
          )}
        </CardContent>
      </div>
      
      <CardContent className="pt-4 pb-8 px-8">
        <EnhancedButton 
          onClick={handleButtonClick}
          className={`w-full ${styles.buttonBg} text-white font-semibold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins`}
          disabled={buttonDisabled}
        >
          {buttonText}
        </EnhancedButton>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
