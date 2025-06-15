import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PawketLogo from "@/components/PawketLogo";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section className="relative bg-gradient-to-br from-[#fdfcfb] via-[#f7f8fc] to-[#f3f6f9] py-16 px-6 sm:px-8 lg:px-12">
      {/* Decorative paw prints for background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-8 right-12 animate-pulse">
          <PawPrint size={32} className="text-[#00AEEF]/20 rotate-12" />
        </div>
        <div className="absolute top-20 right-24 animate-pulse delay-500">
          <PawPrint size={28} className="text-[#FFD166]/20 -rotate-12" />
        </div>
        <div className="absolute bottom-8 right-16 animate-pulse delay-1000">
          <PawPrint size={36} className="text-[#00AEEF]/15 rotate-45" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border-2 border-white/30">
              <PawketLogo size={56} />
            </div>
            <div className="flex items-baseline space-x-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00AEEF] tracking-tight font-['Nunito',sans-serif]">
                Pawket
              </h1>
              <span className="text-lg sm:text-xl lg:text-2xl font-light text-gray-500 italic">
                (Demo)
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xl sm:text-2xl font-semibold text-[#333333] leading-relaxed font-['Nunito',sans-serif]">
              Bangladesh's First All-in-one Pet Solution in Your Pocket
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-lg text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
              Now available in Dhaka, Mymensingh, Sylhet, and more! Pawket offers pet sharing, adoption, virtual vet care, and a full pet shop — all in one simple platform.
            </p>
          </div>

          <div className="pt-6">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="px-12 py-6 text-xl bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <PawPrint size={22} className="mr-3" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
