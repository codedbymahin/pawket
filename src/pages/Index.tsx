import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PawPrint, Dog, Heart, Search, Stethoscope, ShoppingBag, AlertTriangle, Users, ChevronDown, MapPin, Clock, Shield, Plus, Minus, Facebook, Instagram, Twitter, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleGetStarted = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Dog size={32} className="text-[#00AEEF]" />,
      title: "Pet Adoption",
      description: "Connect with loving families and help pets find homes."
    },
    {
      icon: <PawPrint size={32} className="text-[#FFD166]" />,
      title: "Pet Sharing",
      description: "Temporarily share your pet with other pet parents when you travel."
    },
    {
      icon: <Search size={32} className="text-[#00AEEF]" />,
      title: "Lost & Found",
      description: "Report or discover lost pets in your community."
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Virtual Vet",
      description: "Instantly consult with expert vets through online chat."
    },
    {
      icon: <ShoppingBag size={32} className="text-[#FFD166]" />,
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
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Updated Hero Section - Top Left Aligned */}
      <section className="relative bg-gradient-to-br from-[#FAF3E0] to-[#F8F9FA] py-12 px-6 sm:px-8 lg:px-12">
        {/* Decorative paw prints for background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 right-12 animate-pulse">
            <PawPrint size={32} className="text-[#00AEEF]/40 rotate-12" />
          </div>
          <div className="absolute top-20 right-24 animate-pulse delay-500">
            <PawPrint size={28} className="text-[#FFD166]/40 -rotate-12" />
          </div>
          <div className="absolute bottom-8 right-16 animate-pulse delay-1000">
            <PawPrint size={36} className="text-[#00AEEF]/30 rotate-45" />
          </div>
        </div>

        {/* Main content aligned to left */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6">
            {/* Logo placeholder and app name */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#0099CC] rounded-xl shadow-lg border-2 border-white/30 flex items-center justify-center">
                <PawPrint size={28} className="text-white" />
              </div>
              <div className="flex items-baseline space-x-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00AEEF] tracking-tight">
                  Pawket
                </h1>
                <span className="text-lg sm:text-xl lg:text-2xl font-light text-gray-500 italic">
                  (Demo)
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-medium text-[#333333] leading-relaxed">
                Bangladesh's First All-in-one Pet Solution
              </p>
              <p className="text-xl sm:text-2xl font-medium text-[#333333] italic">
                in Your Pocket
              </p>
            </div>

            {/* Description */}
            <div className="max-w-xl">
              <p className="text-lg text-gray-600 leading-relaxed">
                Now available in Dhaka, Mymensingh, Sylhet, and more! Pawket offers pet sharing, adoption, virtual vet care, and a full pet shop — all in one simple platform.
              </p>
            </div>

            {/* Get Started Button */}
            <div className="pt-4">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="px-8 py-4 text-lg bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <PawPrint size={20} className="mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
              Comprehensive pet care solutions designed for Bangladesh's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-[#F8F9FA] rounded-2xl transform hover:scale-105">
                <CardHeader className="text-center pb-4 pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#333333] mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
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
      <section id="coming-soon" className="py-16 px-6 sm:px-8 lg:px-12 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Exciting features we're working on for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoon.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white opacity-90 rounded-2xl transform hover:scale-102 transition-all duration-300">
                <CardHeader className="text-center pb-4 pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-600 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
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
      <section id="about-pawket" className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-8">
            About Pawket
          </h2>
          <div className="space-y-4 text-xl text-[#333333] leading-relaxed">
            <p>
              Pawket is Bangladesh's first all-in-one pet care and sharing platform. Built for pet lovers, by a passionate teenager and his team. Whether you want to adopt, foster, share, or care for your furry friend, Pawket brings the entire pet-loving community together in one easy, safe, and supportive space.
            </p>
            <p>
              From virtual vet care and lost pet recovery to finding the perfect match for your cat or dog, Pawket is the ultimate pet solution, right in your pocket.
            </p>
            <p className="font-semibold">
              Pawket isn't just an app. It's a paw-some community.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Now Section */}
      <section id="experience-now" className="py-16 px-6 sm:px-8 lg:px-12 bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            Experience Now
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Want to explore our demo? See how Pawket works, built by passionate young innovators for real pet needs.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="px-8 py-4 text-lg bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            <PawPrint size={20} className="mr-2" />
            Get Started
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-[#333333] leading-relaxed">
            To become Bangladesh's most trusted digital home for pet lovers. Starting as a youth-led movement, growing into a nationwide solution that improves how we adopt, care, and connect through pets.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section id="our-vision" className="py-16 px-6 sm:px-8 lg:px-12 bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-8">
            Our Vision
          </h2>
          <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
            <p>
              A future where no pet is left behind. Pawket envisions a Bangladesh where people and pets live in harmony, supported by technology, community trust, and heartfelt care.
            </p>
            <p>
              Whether it's a new friend, a lost one found, or a vet in need. Pawket will always be just a paw away.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Collapsible */}
      <section id="faq" className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-[#F8F9FA]">
                <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-white/50 transition-colors duration-200 rounded-t-2xl">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-[#333333] text-left">
                          {item.question}
                        </CardTitle>
                        {openFaq === index ? (
                          <Minus size={20} className="text-[#00AEEF] flex-shrink-0" />
                        ) : (
                          <Plus size={20} className="text-[#00AEEF] flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="our-team" className="py-16 px-6 sm:px-8 lg:px-12 bg-[#FAF3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The passionate minds behind Pawket
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-12">
            {/* Founder */}
            <Card className="w-full max-w-lg border-0 shadow-xl bg-white rounded-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#00AEEF] to-[#0099CC] rounded-full flex items-center justify-center shadow-lg">
                  <Users size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#333333] mb-2">
                  Md Sifat Al Mahin
                </CardTitle>
                <CardDescription className="text-[#00AEEF] font-bold">
                  Founder & Core Ideator of Pawket
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <Card className="border-0 shadow-xl bg-white rounded-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFD166] to-[#E9CD45] rounded-full flex items-center justify-center shadow-lg">
                    <Users size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#333333] mb-2">
                    Hasib Ashfaq Saad
                  </CardTitle>
                  <CardDescription className="text-[#00AEEF] font-bold">
                    Marketing & Outreach Lead
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-xl bg-white rounded-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFD166] to-[#E9CD45] rounded-full flex items-center justify-center shadow-lg">
                    <Users size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#333333] mb-2">
                    Ebrahim Islam Asif
                  </CardTitle>
                  <CardDescription className="text-[#00AEEF] font-bold">
                    Logistics & Communication Lead
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section - Redesigned */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 bg-[#333333] text-white">
        <div className="max-w-6xl mx-auto">
          {/* First Row: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column: Follow Us */}
            <div>
              <h3 className="text-xl font-bold text-[#FFD166] mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-colors">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-colors">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-colors">
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-colors">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-[#FFD166] mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => scrollToSection('what-we-offer')} className="text-left hover:text-[#FFD166] transition-colors">
                  What We Offer
                </button>
                <button onClick={() => scrollToSection('coming-soon')} className="text-left hover:text-[#FFD166] transition-colors">
                  Coming Soon
                </button>
                <button onClick={() => scrollToSection('about-pawket')} className="text-left hover:text-[#FFD166] transition-colors">
                  About Pawket
                </button>
                <button onClick={() => scrollToSection('experience-now')} className="text-left hover:text-[#FFD166] transition-colors">
                  Experience Now
                </button>
                <button onClick={() => scrollToSection('our-mission')} className="text-left hover:text-[#FFD166] transition-colors">
                  Our Mission
                </button>
                <button onClick={() => scrollToSection('our-vision')} className="text-left hover:text-[#FFD166] transition-colors">
                  Our Vision
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-[#FFD166] transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('our-team')} className="text-left hover:text-[#FFD166] transition-colors">
                  Our Team
                </button>
              </div>
            </div>
          </div>

          <Separator className="mb-8 bg-gray-600" />

          {/* Second Row: Contact Us */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#FFD166] mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span>81/1, Beli Road, Ward #2, Ishwarganj, Mymensingh</span>
              </p>
              <p>Phone: 01875184943</p>
              <p>Email: itsmemahin.bd@outlook.com</p>
            </div>
          </div>

          {/* Final Footer Line */}
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 All Rights Reserved by Team Pawket Force.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
