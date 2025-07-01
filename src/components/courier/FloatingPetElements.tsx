
import { PawPrint, Heart, Star } from "lucide-react";

const FloatingPetElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Paw Prints */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <PawPrint size={24} className="text-cyan-400" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <PawPrint size={18} className="text-sky-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-25" style={{ animationDelay: '2s' }}>
        <Heart size={20} className="text-pink-400" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <Star size={16} className="text-yellow-400" />
      </div>
      <div className="absolute top-60 left-1/3 animate-float opacity-15" style={{ animationDelay: '1.5s' }}>
        <PawPrint size={22} className="text-green-400" />
      </div>
      <div className="absolute top-80 right-1/4 animate-float opacity-25" style={{ animationDelay: '3s' }}>
        <Heart size={18} className="text-purple-400" />
      </div>
      
      {/* Floating Circles */}
      <div className="absolute top-32 right-1/3 w-6 h-6 bg-cyan-200 rounded-full animate-float opacity-30" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-60 left-1/4 w-4 h-4 bg-sky-200 rounded-full animate-float opacity-20" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-pink-200 rounded-full animate-float opacity-25" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
};

export default FloatingPetElements;
