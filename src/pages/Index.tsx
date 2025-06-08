
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-pulse">
          <PawPrint size={40} className="text-orange-400 rotate-12" />
        </div>
        <div className="absolute top-40 right-16 animate-pulse delay-1000">
          <PawPrint size={32} className="text-blue-400 -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-20 animate-pulse delay-500">
          <PawPrint size={36} className="text-orange-400 rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-700">
          <PawPrint size={28} className="text-blue-400 -rotate-45" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* App name with paw icon */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-3 rounded-full shadow-lg">
              <PawPrint size={32} className="text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Pawket
            </h1>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mt-2">
              (Demo)
            </span>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl lg:text-2xl font-light italic text-gray-700 leading-relaxed">
              Bangladesh's First All-in-one Pet Solution
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-light italic text-gray-700">
              in Your Pocket
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
              Now available in Dhaka, Mymensingh, Sylhet, and more! Pawket offers pet sharing, adoption, virtual vet care, and a full pet shop — all in one simple platform.
            </p>
          </div>

          {/* Get Started Button */}
          <div className="pt-8">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="px-8 py-4 text-lg sm:text-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <PawPrint size={24} className="mr-2" />
              Get Started
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="pt-12 opacity-60">
            <div className="flex justify-center space-x-8">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200 to-transparent rounded-full blur-3xl opacity-30 translate-x-48 translate-y-48"></div>
    </div>
  );
};

export default Index;
