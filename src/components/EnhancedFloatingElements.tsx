import { Heart, PawPrint, Star, Sparkles } from "lucide-react";

const EnhancedFloatingElements = () => {
  const floatingElements = [
    { icon: <PawPrint size={20} className="text-[#00AEEF]/20" />, delay: "0s", duration: "8s" },
    { icon: <Heart size={16} className="text-red-400/25" />, delay: "2s", duration: "10s" },
    { icon: <Star size={18} className="text-[#FFD166]/20" />, delay: "4s", duration: "9s" },
    { icon: <Sparkles size={14} className="text-purple-400/20" />, delay: "1s", duration: "11s" },
    { icon: <PawPrint size={22} className="text-green-400/15" />, delay: "3s", duration: "7s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-30"
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

export default EnhancedFloatingElements;
