import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PawPrint, AlertTriangle, Heart, Minus, Plus, HelpCircle, Facebook, Instagram, Twitter, Github, MapPin, GraduationCap, Dog, Search, Stethoscope, ShoppingBag, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PawkoChatbot from "@/components/PawkoChatbot";
import CountdownSection from "@/components/CountdownSection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingElements from "@/components/FloatingElements";
import PawketLogo from "@/components/PawketLogo";

const Index = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [typewriterText, setTypewriterText] = useState<string>("");
  const [currentFaqAnswer, setCurrentFaqAnswer] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [showNewsletterModal, setShowNewsletterModal] = useState<boolean>(false);
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(sectionId);
              } else {
                newSet.delete(sectionId);
              }
              return newSet;
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Fixed typewriter effect for FAQ answers
  useEffect(() => {
    if (currentFaqAnswer && openFaq !== null) {
      setIsTyping(true);
      setTypewriterText("");
      
      // Add a small delay before starting the typing animation
      const startTyping = setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i <= currentFaqAnswer.length) {
            setTypewriterText(currentFaqAnswer.substring(0, i));
            i++;
          } else {
            setIsTyping(false);
            clearInterval(typeInterval);
          }
        }, 25); // Slightly faster typing speed for better UX

        return () => clearInterval(typeInterval);
      }, 100); // Small delay to ensure proper state initialization

      return () => clearTimeout(startTyping);
    }
  }, [currentFaqAnswer, openFaq]);

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  const handleGetStarted = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFaqToggle = (index: number, answer: string) => {
    if (openFaq === index) {
      setOpenFaq(null);
      setCurrentFaqAnswer("");
      setTypewriterText("");
    } else {
      setOpenFaq(index);
      setCurrentFaqAnswer(answer);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowNewsletterModal(true);
      setEmail("");
    }
  };

  const comingSoon = [
    {
      icon: <AlertTriangle size={32} className="text-red-400" />,
      title: "Emergency Help",
      description: "Request urgent assistance for medical emergencies and more. (Coming Soon)"
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
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f3f6f9] font-sans relative">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <HeroSection />

      {/* Countdown Timer Section */}
      <CountdownSection />

      {/* What We Offer Section */}
      <FeaturesSection visibleSections={visibleSections} setSectionRef={setSectionRef} />

      {/* Stats Section */}
      <StatsSection visibleSections={visibleSections} setSectionRef={setSectionRef} />

      {/* Coming Soon Section */}
      <section 
        id="coming-soon" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] transition-all duration-700 ease-in-out ${
          visibleSections.has('coming-soon') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        data-section="coming-soon"
        ref={setSectionRef('coming-soon')}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6 font-['Nunito',sans-serif]">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
              Exciting features we're working on for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoon.map((feature, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl transform hover:scale-102 transition-all duration-700 opacity-85 ${
                  visibleSections.has('coming-soon') 
                    ? index === 0 
                      ? 'translate-x-0 opacity-85' 
                      : 'translate-x-0 opacity-85'
                    : index === 0 
                      ? '-translate-x-12 opacity-0' 
                      : 'translate-x-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: visibleSections.has('coming-soon') ? `${index * 100}ms` : '0ms' 
                }}
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD166] to-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Coming Soon
                </div>
                <CardHeader className="text-center pb-6 pt-10 px-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-600 mb-3 font-['Nunito',sans-serif]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <CardDescription className="text-gray-500 text-center leading-relaxed font-['Nunito',sans-serif]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section 
        id="about-pawket" 
        className={`relative py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-500 ease-out ${
          visibleSections.has('about-pawket') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="about-pawket"
        ref={setSectionRef('about-pawket')}
      >
        <div className="absolute inset-0 opacity-5">
          <PawPrint size={120} className="absolute top-10 left-10 text-[#00AEEF] rotate-12" />
          <PawPrint size={80} className="absolute bottom-20 right-20 text-[#FFD166] -rotate-12" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-10 font-['Nunito',sans-serif]">
            About Pawket
          </h2>
          <div className="space-y-6 text-xl text-[#333333] leading-relaxed font-['Nunito',sans-serif] font-medium">
            <p>
              Pawket is Bangladesh's first all-in-one pet care and sharing platform. Built for pet lovers, by a passionate teenager and his team. Whether you want to adopt, foster, share, or care for your furry friend, Pawket brings the entire pet-loving community together in one easy, safe, and supportive space.
            </p>
            <p>
              From virtual vet care and lost pet recovery to finding the perfect match for your cat or dog, Pawket is the ultimate pet solution, right in your pocket.
            </p>
            <p className="font-bold text-[#00AEEF]">
              Pawket isn't just an app. It's a paw-some community.
            </p>
          </div>
        </div>
      </section>

      <section 
        id="experience-now" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-green-50 to-emerald-50 transition-all duration-500 ease-out ${
          visibleSections.has('experience-now') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="experience-now"
        ref={setSectionRef('experience-now')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-8 font-['Nunito',sans-serif]">
            Experience Now
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-['Nunito',sans-serif]">
            Want to explore our demo? See how Pawket works, built by passionate young innovators for real pet needs.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="px-12 py-6 text-xl bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            <PawPrint size={22} className="mr-3" />
            Get Started
          </Button>
        </div>
      </section>

      <section 
        id="our-mission" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-purple-50 to-pink-50 transition-all duration-500 ease-out ${
          visibleSections.has('our-mission') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="our-mission"
        ref={setSectionRef('our-mission')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-10 font-['Nunito',sans-serif]">
            Our Mission
          </h2>
          <p className="text-xl text-[#333333] leading-relaxed font-['Nunito',sans-serif] font-medium">
            To become Bangladesh's most trusted digital home for pet lovers. Starting as a youth-led movement, growing into a nationwide solution that improves how we adopt, care, and connect through pets.
          </p>
        </div>
      </section>

      <section 
        id="our-vision" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-yellow-50 to-orange-50 transition-all duration-500 ease-out ${
          visibleSections.has('our-vision') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="our-vision"
        ref={setSectionRef('our-vision')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-10 font-['Nunito',sans-serif]">
            Our Vision
          </h2>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-['Nunito',sans-serif] font-medium">
            <p>
              A future where no pet is left behind. Pawket envisions a Bangladesh where people and pets live in harmony, supported by technology, community trust, and heartfelt care.
            </p>
            <p>
              Whether it's a new friend, a lost one found, or a vet in need. Pawket will always be just a paw away.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection visibleSections={visibleSections} setSectionRef={setSectionRef} />

      {/* Help Section */}
      <HelpSection />

      {/* FAQ Section */}
      <section 
        id="faq" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gray-50 transition-all duration-500 ease-out ${
          visibleSections.has('faq') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="faq"
        ref={setSectionRef('faq')}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                <Collapsible open={openFaq === index} onOpenChange={() => handleFaqToggle(index, item.answer)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-blue-50/50 transition-colors duration-200 rounded-t-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <HelpCircle size={20} className="text-[#00AEEF] flex-shrink-0" />
                          <CardTitle className="text-lg font-bold text-[#333333] text-left font-['Nunito',sans-serif]">
                            {item.question}
                          </CardTitle>
                        </div>
                        {openFaq === index ? (
                          <Minus size={20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                        ) : (
                          <Plus size={20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition-all duration-300 ease-in-out">
                    <CardContent className="pt-0 pb-6 pl-11">
                      <p className="text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
                        {openFaq === index ? typewriterText : item.answer}
                        {openFaq === index && isTyping && <span className="animate-pulse text-[#00AEEF]">|</span>}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        id="newsletter" 
        className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-500 ease-out ${
          visibleSections.has('newsletter') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="newsletter"
        ref={setSectionRef('newsletter')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]">
            Subscribe to our newsletter
          </h2>
          <div className="space-y-4 mb-10">
            <p className="text-xl text-[#333333] leading-relaxed font-['Nunito',sans-serif]">
              Get the latest pet care tips, feature updates, and early access news delivered straight to your inbox.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
              Join thousands of pet lovers who trust Pawket for expert advice and community updates.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 text-lg rounded-2xl border-2 border-transparent bg-white shadow-lg focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-300 font-['Nunito',sans-serif] animate-gradient-border"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #00AEEF, #FFD166, #00AEEF) border-box',
                  animation: 'gradientBorder 3s linear infinite'
                }}
              />
              <Button
                type="submit"
                size="lg"
                className="px-8 py-4 text-lg bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:glow transition-all duration-300 border-0 font-['Nunito',sans-serif]"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Survey CTA */}
      <section className="text-center my-10">
        <a
          href="https://forms.gle/WhBDKy8DLKqM7XxK8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white px-7 py-3 rounded-2xl font-semibold shadow transition-all"
        >
          Help us build Pawket with your voice — Take the Survey
        </a>
      </section>

      {/* Team Section */}
      <TeamSection visibleSections={visibleSections} setSectionRef={setSectionRef} />

      {/* Footer Section */}
      <footer 
        className={`relative py-16 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a] text-white transition-all duration-500 ease-out ${
          visibleSections.has('footer') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        data-section="footer"
        ref={setSectionRef('footer')}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00AEEF] via-[#FFD166] to-[#00AEEF]"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]">Follow Us</h3>
              <div className="space-y-4">
                <a href="https://www.facebook.com/pawketbd" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 hover:translate-x-2">
                  <Facebook size={22} />
                  <span className="font-['Nunito',sans-serif]">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 hover:translate-x-2">
                  <Instagram size={22} />
                  <span className="font-['Nunito',sans-serif]">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 hover:translate-x-2">
                  <Twitter size={22} />
                  <span className="font-['Nunito',sans-serif]">Twitter</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 hover:translate-x-2">
                  <Github size={22} />
                  <span className="font-['Nunito',sans-serif]">GitHub</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => scrollToSection('what-we-offer')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  What We Offer
                </button>
                <button onClick={() => scrollToSection('coming-soon')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  Coming Soon
                </button>
                <button onClick={() => scrollToSection('about-pawket')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  About Pawket
                </button>
                <button onClick={() => scrollToSection('experience-now')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  Experience Now
                </button>
                <button onClick={() => scrollToSection('our-mission')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  Our Mission
                </button>
                <button onClick={() => scrollToSection('our-vision')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  Our Vision
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('our-team')} className="text-left hover:text-[#FFD166] transition-all duration-300 hover:translate-x-1 font-['Nunito',sans-serif]">
                  Our Team
                </button>
              </div>
            </div>
          </div>

          <Separator className="mb-10 bg-gray-600" />

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]">Contact Us</h3>
            <div className="space-y-3 text-gray-300 font-['Nunito',sans-serif]">
              <p className="flex items-center justify-center space-x-2 hover:text-white transition-colors">
                <MapPin size={18} />
                <span>81/1, Beli Road, Ward #2, Ishwarganj, Mymensingh</span>
              </p>
              <p className="hover:text-white transition-colors">Phone: 01875184943</p>
              <p className="hover:text-white transition-colors">Email: itsmemahin.bd@outlook.com</p>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 font-['Nunito',sans-serif]">
            <p>© 2025 All Rights Reserved by Team Pawket Force.</p>
          </div>
        </div>
      </footer>

      {/* Newsletter Success Modal */}
      <Dialog open={showNewsletterModal} onOpenChange={setShowNewsletterModal}>
        <DialogContent className="sm:max-w-md rounded-3xl bg-white border-0 shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-[#00AEEF] mb-4 font-['Nunito',sans-serif]">
              You're Now Subscribed!
            </DialogTitle>
            <DialogDescription className="text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
              <div className="space-y-4">
                <p>Thanks for joining the Pawket family.</p>
                <p>You'll now receive the latest pet care tips, feature updates, and early access news — all with a touch of love.</p>
                <p className="font-semibold text-[#00AEEF]">Stay pawsome!</p>
                {/* Extra CTA for survey */}
                <a
                  href="https://forms.gle/WhBDKy8DLKqM7XxK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-poppins bg-[#FFD166] hover:bg-[#eeca50] text-[#705000] px-7 py-3 rounded-2xl font-semibold shadow transition-all"
                >
                  Take Our Quick Survey
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowNewsletterModal(false)}
              className="text-white rounded-2xl px-8 py-3 bg-[#00AEEF] hover:bg-[#0099CC] font-['Nunito',sans-serif] transform hover:scale-105 transition-all duration-300"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Pawko Chatbot */}
      <PawkoChatbot />
    </div>
  );
};

export default Index;
