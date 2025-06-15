
import { Heart, PawPrint, Star } from "lucide-react";

const FloatingElements = () => {
  const floatingElements = [
    { icon: <PawPrint size={20} className="text-[#00AEEF]/30" />, delay: "0s", duration: "6s" },
    { icon: <Heart size={16} className="text-red-400/30" />, delay: "2s", duration: "8s" },
    { icon: <Star size={18} className="text-[#FFD166]/30" />, delay: "4s", duration: "7s" },
    { icon: <PawPrint size={14} className="text-green-400/30" />, delay: "1s", duration: "9s" },
    { icon: <Heart size={22} className="text-purple-400/30" />, delay: "3s", duration: "5s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
