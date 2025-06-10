
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
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-white to-pawket-neutral">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative paw prints */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-pulse">
            <PawPrint size={40} className="text-pawket-accent rotate-12" />
          </div>
          <div className="absolute top-40 right-16 animate-pulse delay-1000">
            <PawPrint size={32} className="text-pawket-primary -rotate-12" />
          </div>
          <div className="absolute bottom-32 left-20 animate-pulse delay-500">
            <PawPrint size={36} className="text-pawket-accent rotate-45" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-700">
            <PawPrint size={28} className="text-pawket-primary -rotate-45" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* App name with paw icon */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-3 rounded-full shadow-lg">
              <PawPrint size={32} className="text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pawket-primary via-pawket-accent to-pawket-primary bg-clip-text text-transparent">
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
              className="px-8 py-4 text-lg sm:text-xl bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <PawPrint size={24} className="mr-2" />
              Get Started
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-pawket-primary opacity-70" />
        </div>

        {/* Background decorative gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pawket-accent/20 to-transparent rounded-full blur-3xl opacity-30 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pawket-primary/20 to-transparent rounded-full blur-3xl opacity-30 translate-x-48 translate-y-48"></div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pet care solutions designed for Bangladesh's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-gradient-to-br from-white to-pawket-light/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pawket-light to-white rounded-full flex items-center justify-center shadow-md">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pawket-neutral/30 to-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-500">
              Exciting features we're working on for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoon.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md bg-gradient-to-br from-white to-gray-50 opacity-80">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Pawket Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-8">
            About Pawket
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pawket is a youth-led innovation from Bangladesh. It brings together adoption, sharing, health care, and community compassion in one digital platform — for both pet lovers and stray welfare.
          </p>
        </div>
      </section>

      {/* Experience Now Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pawket-primary/10 to-pawket-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Experience Now
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Want to explore our demo? See how Pawket works, built by passionate young innovators for real pet needs.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="px-8 py-4 text-lg bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            <PawPrint size={24} className="mr-2" />
            Get Started
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To bridge the pet care gap in Bangladesh with digital tools, community-driven features, and a heart for animals.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pawket-light to-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A future where every pet gets love, care, and support — powered by local youth and technology.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pawket-neutral/30 to-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate minds behind Pawket
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-12">
            {/* Founder */}
            <Card className="w-full max-w-md border-0 shadow-lg bg-gradient-to-br from-white to-pawket-light/30">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pawket-primary to-pawket-accent rounded-full flex items-center justify-center shadow-lg">
                  <Users size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Md Sifat Al Mahin
                </CardTitle>
                <CardDescription className="text-pawket-primary font-semibold">
                  Founder & Core Ideator of Pawket
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-pawket-light/30">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pawket-accent to-pawket-primary rounded-full flex items-center justify-center shadow-lg">
                    <Users size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    Hasib Ashfaq Saad
                  </CardTitle>
                  <CardDescription className="text-pawket-primary font-semibold">
                    Marketing & Outreach Lead
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-pawket-light/30">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pawket-accent to-pawket-primary rounded-full flex items-center justify-center shadow-lg">
                    <Users size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    Ebrahim Islam Asif
                  </CardTitle>
                  <CardDescription className="text-pawket-primary font-semibold">
                    Logistics & Communication Lead
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pawket-primary/10 to-pawket-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-2 rounded-full">
                <PawPrint size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent">
                Pawket
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
              <span className="hover:text-pawket-primary cursor-default transition-colors">About</span>
              <span className="hover:text-pawket-primary cursor-default transition-colors">Contact</span>
              <span className="hover:text-pawket-primary cursor-default transition-colors">Quick Links</span>
            </div>

            <Separator className="mb-8 bg-pawket-neutral" />
            
            <p className="text-gray-600 leading-relaxed">
              Built with ❤️ by Team Pawket Force for a better pet ecosystem in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
