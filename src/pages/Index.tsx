
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PawPrint, Dog, Heart, Search, Stethoscope, ShoppingBag, AlertTriangle, Users, ChevronDown, MapPin, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const features = [
    {
      icon: <Dog size={32} className="text-pawket-primary" />,
      title: "Pet Adoption",
      description: "Connect with loving families and help pets find homes."
    },
    {
      icon: <PawPrint size={32} className="text-pawket-accent" />,
      title: "Pet Sharing",
      description: "Temporarily share your pet with other pet parents when you travel."
    },
    {
      icon: <Search size={32} className="text-pawket-primary" />,
      title: "Lost & Found",
      description: "Report or discover lost pets in your community."
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Virtual Vet",
      description: "Instantly consult with expert vets through online chat."
    },
    {
      icon: <ShoppingBag size={32} className="text-pawket-accent" />,
      title: "Pet Shop",
      description: "Buy pet food, clothes, toys & accessories easily."
    }
  ];

  const comingSoon = [
    {
      icon: <AlertTriangle size={32} className="text-red-400" />,
      title: "Emergency Help",
      description: "Request urgent assistance for medical emergency and more. (Coming Soon)"
    },
    {
      icon: <Heart size={32} className="text-pink-400" />,
      title: "Pet Matchmaking",
      description: "Match pets for responsible breeding (Coming Soon)"
    }
  ];

  const faqItems = [
    {
      question: "What is Pawket?",
      answer: "Pawket is Bangladesh's first all-in-one pet solution platform that combines adoption, sharing, healthcare, and community features for pet lovers."
    },
    {
      question: "Is it available everywhere?",
      answer: "Currently available in Dhaka, Mymensingh, Sylhet, and expanding to more cities across Bangladesh."
    },
    {
      question: "Can I adopt a pet today?",
      answer: "Yes! Browse available pets and connect with loving families looking to rehome their pets."
    },
    {
      question: "Who built this app?",
      answer: "Pawket is built by a passionate team of young innovators from Bangladesh dedicated to improving pet welfare."
    },
    {
      question: "Will you add more features?",
      answer: "Absolutely! We're constantly working on new features like emergency services and pet matchmaking."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-white to-pawket-neutral font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-br from-pawket-light/80 via-white to-pawket-neutral/60">
        {/* Enhanced decorative paw prints */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-10 animate-pulse">
            <PawPrint size={48} className="text-pawket-accent/30 rotate-12" />
          </div>
          <div className="absolute top-40 right-16 animate-pulse delay-1000">
            <PawPrint size={40} className="text-pawket-primary/30 -rotate-12" />
          </div>
          <div className="absolute bottom-32 left-20 animate-pulse delay-500">
            <PawPrint size={44} className="text-pawket-accent/25 rotate-45" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-700">
            <PawPrint size={36} className="text-pawket-primary/25 -rotate-45" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-pulse delay-300">
            <PawPrint size={32} className="text-pawket-accent/20 rotate-90" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-pulse delay-1200">
            <PawPrint size={28} className="text-pawket-primary/20 -rotate-90" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10 animate-fade-in">
          {/* App name with paw icon */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-4 rounded-full shadow-xl border-4 border-white/30">
              <PawPrint size={40} className="text-white" />
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pawket-primary via-pawket-accent to-pawket-primary bg-clip-text text-transparent tracking-tight">
              Pawket
            </h1>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-500 mt-3 italic">
              (Demo)
            </span>
          </div>

          {/* Tagline */}
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed tracking-wide">
              Bangladesh's First All-in-one Pet Solution
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 italic">
              in Your Pocket
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-normal">
              Now available in Dhaka, Mymensingh, Sylhet, and more! Pawket offers pet sharing, adoption, virtual vet care, and a full pet shop — all in one simple platform.
            </p>
          </div>

          {/* Enhanced Get Started Button */}
          <div className="pt-10">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="px-12 py-6 text-xl sm:text-2xl bg-gradient-to-r from-pawket-accent to-amber-400 hover:from-amber-400 hover:to-pawket-accent text-gray-800 font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0 hover:rotate-1"
            >
              <PawPrint size={28} className="mr-3" />
              Get Started
            </Button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ChevronDown size={36} className="text-pawket-primary" />
          </div>
        </div>

        {/* Enhanced background decorative gradient circles */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pawket-accent/15 to-transparent rounded-full blur-3xl opacity-40 -translate-x-60 -translate-y-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-pawket-primary/15 to-transparent rounded-full blur-3xl opacity-40 translate-x-60 translate-y-60"></div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white to-pawket-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-6">
              What We Offer
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive pet care solutions designed for Bangladesh's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-pawket-light/20 rounded-3xl transform hover:scale-105 hover:rotate-1">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pawket-light to-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-lg">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pawket-neutral/20 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-700 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
              Exciting features we're working on for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {comingSoon.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/80 opacity-90 rounded-3xl transform hover:scale-102 transition-all duration-300">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-600 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-gray-500 text-center leading-relaxed text-lg">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Pawket Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white to-pawket-light/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-10">
            About Pawket
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Pawket is a youth-led innovation from Bangladesh. It brings together adoption, sharing, health care, and community compassion in one digital platform — for both pet lovers and stray welfare.
          </p>
        </div>
      </section>

      {/* Experience Now Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pawket-primary/8 to-pawket-accent/8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-8">
            Experience Now
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
            Want to explore our demo? See how Pawket works, built by passionate young innovators for real pet needs.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="px-12 py-6 text-xl sm:text-2xl bg-gradient-to-r from-pawket-accent to-amber-400 hover:from-amber-400 hover:to-pawket-accent text-gray-800 font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0 hover:rotate-1"
          >
            <PawPrint size={28} className="mr-3" />
            Get Started
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white to-pawket-light/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-10">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            To bridge the pet care gap in Bangladesh with digital tools, community-driven features, and a heart for animals.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pawket-light/40 to-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-10">
            Our Vision
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            A future where every pet gets love, care, and support — powered by local youth and technology.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white to-pawket-light/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl bg-gradient-to-br from-white to-pawket-light/20">
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pawket-neutral/20 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              The passionate minds behind Pawket
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-16">
            {/* Founder */}
            <Card className="w-full max-w-lg border-0 shadow-xl bg-gradient-to-br from-white to-pawket-light/30 rounded-3xl transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-8 pt-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pawket-primary to-pawket-accent rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
                  <Users size={40} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  Md Sifat Al Mahin
                </CardTitle>
                <CardDescription className="text-pawket-primary font-bold text-lg">
                  Founder & Core Ideator of Pawket
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-pawket-light/30 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-8 pt-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pawket-accent to-pawket-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
                    <Users size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    Hasib Ashfaq Saad
                  </CardTitle>
                  <CardDescription className="text-pawket-primary font-bold text-lg">
                    Marketing & Outreach Lead
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-pawket-light/30 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-8 pt-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pawket-accent to-pawket-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
                    <Users size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    Ebrahim Islam Asif
                  </CardTitle>
                  <CardDescription className="text-pawket-primary font-bold text-lg">
                    Logistics & Communication Lead
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pawket-primary/10 to-pawket-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-3 rounded-full shadow-lg border-2 border-white/30">
                <PawPrint size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent">
                Pawket
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-600">
              <span className="hover:text-pawket-primary cursor-default transition-colors text-lg font-medium">About</span>
              <span className="hover:text-pawket-primary cursor-default transition-colors text-lg font-medium">Contact</span>
              <span className="hover:text-pawket-primary cursor-default transition-colors text-lg font-medium">Quick Links</span>
            </div>

            <Separator className="mb-10 bg-pawket-neutral" />
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Built with ❤️ by Team Pawket Force for a better pet ecosystem in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
