
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PawPrint, AlertTriangle, Heart, Minus, Plus, HelpCircle, Facebook, Instagram, Twitter, Github, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { useDebounce, useOptimizedIntersectionObserver } from "@/hooks/usePerformance";

// Lazy load heavy components for better initial performance
const PawkoChatbot = lazy(() => import("@/components/PawkoChatbot"));
const CountdownSection = lazy(() => import("@/components/CountdownSection"));
const HelpSection = lazy(() => import("@/components/HelpSection"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const OptimizedTeamSection = lazy(() => import("@/components/OptimizedTeamSection"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00AEEF]"></div>
  </div>
);

const Index = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [typewriterText, setTypewriterText] = useState<string>("");
  const [currentFaqAnswer, setCurrentFaqAnswer] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [showNewsletterModal, setShowNewsletterModal] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  
  // Detect mobile device for optimized experience
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Debounce FAQ answer for better performance
  const debouncedFaqAnswer = useDebounce(currentFaqAnswer, 100);

  // Optimized intersection observer
  const { observe, disconnect } = useOptimizedIntersectionObserver(
    useCallback((entries) => {
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
    }, [])
  );

  useEffect(() => {
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observe(ref);
    });

    return () => disconnect();
  }, [observe, disconnect]);

  // Optimized typewriter effect with better performance
  useEffect(() => {
    if (debouncedFaqAnswer && openFaq !== null) {
      setIsTyping(true);
      setTypewriterText("");
      
      const startTyping = setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i <= debouncedFaqAnswer.length) {
            setTypewriterText(debouncedFaqAnswer.substring(0, i));
            i++;
          } else {
            setIsTyping(false);
            clearInterval(typeInterval);
          }
        }, isMobile ? 15 : 25); // Faster typing on mobile

        return () => clearInterval(typeInterval);
      }, 100);

      return () => clearTimeout(startTyping);
    }
  }, [debouncedFaqAnswer, openFaq, isMobile]);

  const setSectionRef = useCallback((sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el;
  }, []);

  const handleGetStarted = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Optimized FAQ toggle with debouncing
  const handleFaqToggle = useCallback((index: number, answer: string) => {
    if (openFaq === index) {
      setOpenFaq(null);
      setCurrentFaqAnswer("");
      setTypewriterText("");
    } else {
      setOpenFaq(index);
      setCurrentFaqAnswer(answer);
    }
  }, [openFaq]);

  const debouncedFaqToggle = useDebounce(handleFaqToggle, 150);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowNewsletterModal(true);
      setEmail("");
    }
  }, [email]);

  const comingSoon = [
    {
      icon: <AlertTriangle size={isMobile ? 28 : 32} className="text-red-400" />,
      title: "Emergency Help",
      description: "Request urgent assistance for medical emergencies and more. (Coming Soon)"
    },
    {
      icon: <Heart size={isMobile ? 28 : 32} className="text-pink-400" />,
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
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f3f6f9] font-sans">

      {/* Hero Section */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      {/* Countdown Timer Section */}
      <Suspense fallback={<SectionLoader />}>
        <CountdownSection />
      </Suspense>

      {/* What We Offer Section */}
      <Suspense fallback={<SectionLoader />}>
        <FeaturesSection visibleSections={visibleSections} setSectionRef={setSectionRef} />
      </Suspense>

      {/* Coming Soon Section with mobile optimizations */}
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
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#333333] mb-6 font-['Nunito',sans-serif]`}>
              Coming Soon
            </h2>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 leading-relaxed font-['Nunito',sans-serif]`}>
              Exciting features we're working on for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoon.map((feature, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl transform transition-all duration-700 opacity-85 ${
                  isMobile ? 'hover:scale-100' : 'hover:scale-102'
                } ${
                  visibleSections.has('coming-soon') 
                    ? index === 0 
                      ? 'translate-x-0 opacity-85' 
                      : 'translate-x-0 opacity-85'
                    : index === 0 
                      ? '-translate-x-12 opacity-0' 
                      : 'translate-x-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: visibleSections.has('coming-soon') ? `${index * 100}ms` : '0ms',
                  willChange: 'transform, opacity'
                }}
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD166] to-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Coming Soon
                </div>
                <CardHeader className="text-center pb-6 pt-10 px-8">
                  <div className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                  <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-gray-600 mb-3 font-['Nunito',sans-serif]`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <CardDescription className={`text-gray-500 text-center leading-relaxed font-['Nunito',sans-serif] ${isMobile ? 'text-sm' : ''}`}>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About, Mission, Vision sections with mobile optimizations */}
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
        {!isMobile && (
          <div className="absolute inset-0 opacity-5">
            <PawPrint size={120} className="absolute top-10 left-10 text-[#00AEEF] rotate-12" />
            <PawPrint size={80} className="absolute bottom-20 right-20 text-[#FFD166] -rotate-12" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#00AEEF] mb-10 font-['Nunito',sans-serif]`}>
            About Pawket
          </h2>
          <div className={`space-y-6 ${isMobile ? 'text-lg' : 'text-xl'} text-[#333333] leading-relaxed font-['Nunito',sans-serif] font-medium`}>
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
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#333333] mb-8 font-['Nunito',sans-serif]`}>
            Experience Now
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 mb-10 leading-relaxed font-['Nunito',sans-serif]`}>
            Want to explore our demo? See how Pawket works, built by passionate young innovators for real pet needs.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className={`${isMobile ? 'px-8 py-4 text-lg' : 'px-12 py-6 text-xl'} bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-300 border-0 ${isMobile ? 'hover:scale-100' : 'hover:scale-105'}`}
          >
            <PawPrint size={isMobile ? 18 : 22} className="mr-3" />
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
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#00AEEF] mb-10 font-['Nunito',sans-serif]`}>
            Our Mission
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-[#333333] leading-relaxed font-['Nunito',sans-serif] font-medium`}>
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
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#333333] mb-10 font-['Nunito',sans-serif]`}>
            Our Vision
          </h2>
          <div className={`space-y-6 ${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 leading-relaxed font-['Nunito',sans-serif] font-medium`}>
            <p>
              A future where no pet is left behind. Pawket envisions a Bangladesh where people and pets live in harmony, supported by technology, community trust, and heartfelt care.
            </p>
            <p>
              Whether it's a new friend, a lost one found, or a vet in need. Pawket will always be just a paw away.
            </p>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <Suspense fallback={<SectionLoader />}>
        <HelpSection />
      </Suspense>

      {/* Optimized FAQ Section with mobile improvements */}
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
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]`}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                <Collapsible open={openFaq === index} onOpenChange={() => debouncedFaqToggle(index, item.answer)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className={`cursor-pointer hover:bg-blue-50/50 transition-colors duration-200 rounded-t-2xl ${isMobile ? 'touch-manipulation' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <HelpCircle size={isMobile ? 18 : 20} className="text-[#00AEEF] flex-shrink-0" />
                          <CardTitle className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-[#333333] text-left font-['Nunito',sans-serif]`}>
                            {item.question}
                          </CardTitle>
                        </div>
                        {openFaq === index ? (
                          <Minus size={isMobile ? 18 : 20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                        ) : (
                          <Plus size={isMobile ? 18 : 20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition-all duration-300 ease-in-out">
                    <CardContent className={`pt-0 pb-6 ${isMobile ? 'pl-8' : 'pl-11'}`}>
                      <p className={`text-gray-600 leading-relaxed font-['Nunito',sans-serif] ${isMobile ? 'text-sm' : ''}`}>
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

      {/* Newsletter Section with mobile optimizations */}
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
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]`}>
            Subscribe to our newsletter
          </h2>
          <div className="space-y-4 mb-10">
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-[#333333] leading-relaxed font-['Nunito',sans-serif]`}>
              Get the latest pet care tips, feature updates, and early access news delivered straight to your inbox.
            </p>
            <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-600 leading-relaxed font-['Nunito',sans-serif]`}>
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
                className={`flex-1 ${isMobile ? 'px-4 py-3 text-base' : 'px-6 py-4 text-lg'} rounded-2xl border-2 border-transparent bg-white shadow-lg focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-300 font-['Nunito',sans-serif] animate-gradient-border`}
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #00AEEF, #FFD166, #00AEEF) border-box',
                  animation: 'gradientBorder 3s linear infinite'
                }}
              />
              <Button
                type="submit"
                size="lg"
                className={`${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} bg-[#00AEEF] hover:bg-[#0099CC] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 border-0 font-['Nunito',sans-serif] ${isMobile ? 'hover:scale-100' : 'hover:scale-105'}`}
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
          className={`inline-block font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white ${isMobile ? 'px-5 py-2 text-sm' : 'px-7 py-3'} rounded-2xl font-semibold shadow transition-all ${isMobile ? 'hover:scale-100' : 'hover:scale-105'}`}
        >
          Help us build Pawket with your voice — Take the Survey
        </a>
      </section>

      {/* Optimized Team Section */}
      <Suspense fallback={<SectionLoader />}>
        <OptimizedTeamSection visibleSections={visibleSections} setSectionRef={setSectionRef} />
      </Suspense>

      {/* Footer Section with mobile optimizations */}
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
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-8' : 'md:grid-cols-2 gap-12'} mb-12`}>
            <div>
              <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]`}>Follow Us</h3>
              <div className="space-y-4">
                <a href="https://www.facebook.com/pawketbd" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 ${isMobile ? '' : 'hover:translate-x-2'}`}>
                  <Facebook size={isMobile ? 20 : 22} />
                  <span className="font-['Nunito',sans-serif]">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 ${isMobile ? '' : 'hover:translate-x-2'}`}>
                  <Instagram size={isMobile ? 20 : 22} />
                  <span className="font-['Nunito',sans-serif]">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 ${isMobile ? '' : 'hover:translate-x-2'}`}>
                  <Twitter size={isMobile ? 20 : 22} />
                  <span className="font-['Nunito',sans-serif]">Twitter</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 ${isMobile ? '' : 'hover:translate-x-2'}`}>
                  <Github size={isMobile ? 20 : 22} />
                  <span className="font-['Nunito',sans-serif]">GitHub</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]`}>Quick Links</h3>
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-3'}`}>
                <button onClick={() => scrollToSection('what-we-offer')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  What We Offer
                </button>
                <button onClick={() => scrollToSection('coming-soon')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  Coming Soon
                </button>
                <button onClick={() => scrollToSection('about-pawket')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  About Pawket
                </button>
                <button onClick={() => scrollToSection('experience-now')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  Experience Now
                </button>
                <button onClick={() => scrollToSection('our-mission')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  Our Mission
                </button>
                <button onClick={() => scrollToSection('our-vision')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  Our Vision
                </button>
                <button onClick={() => scrollToSection('faq')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  FAQ
                </button>
                <button onClick={() => scrollToSection('our-team')} className={`text-left hover:text-[#FFD166] transition-all duration-300 font-['Nunito',sans-serif] ${isMobile ? '' : 'hover:translate-x-1'}`}>
                  Our Team
                </button>
              </div>
            </div>
          </div>

          <Separator className="mb-10 bg-gray-600" />

          <div className="text-center mb-10">
            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-[#FFD166] mb-6 font-['Nunito',sans-serif]`}>Contact Us</h3>
            <div className={`space-y-3 text-gray-300 font-['Nunito',sans-serif] ${isMobile ? 'text-sm' : ''}`}>
              <p className="flex items-center justify-center space-x-2 hover:text-white transition-colors">
                <MapPin size={isMobile ? 16 : 18} />
                <span>81/1, Beli Road, Ward #2, Ishwarganj, Mymensingh</span>
              </p>
              <p className="hover:text-white transition-colors">Phone: 01875184943</p>
              <p className="hover:text-white transition-colors">Email: itsmemahin.bd@outlook.com</p>
            </div>
          </div>

          <div className={`text-center ${isMobile ? 'text-xs' : 'text-sm'} text-gray-400 font-['Nunito',sans-serif]`}>
            <p>© 2025 All Rights Reserved by Team Pawket Force.</p>
          </div>
        </div>
      </footer>

      {/* Newsletter Success Modal */}
      <Dialog open={showNewsletterModal} onOpenChange={setShowNewsletterModal}>
        <DialogContent className="sm:max-w-md rounded-3xl bg-white border-0 shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-[#00AEEF] mb-4 font-['Nunito',sans-serif]`}>
              You're Now Subscribed!
            </DialogTitle>
            <DialogDescription className={`text-gray-600 leading-relaxed font-['Nunito',sans-serif] ${isMobile ? 'text-sm' : ''}`}>
              <div className="space-y-4">
                <p>Thanks for joining the Pawket family.</p>
                <p>You'll now receive the latest pet care tips, feature updates, and early access news — all with a touch of love.</p>
                <p className="font-semibold text-[#00AEEF]">Stay pawsome!</p>
                <a
                  href="https://forms.gle/WhBDKy8DLKqM7XxK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-2 font-poppins bg-[#FFD166] hover:bg-[#eeca50] text-[#705000] ${isMobile ? 'px-5 py-2 text-sm' : 'px-7 py-3'} rounded-2xl font-semibold shadow transition-all`}
                >
                  Take Our Quick Survey
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowNewsletterModal(false)}
              className={`text-white rounded-2xl ${isMobile ? 'px-6 py-2' : 'px-8 py-3'} bg-[#00AEEF] hover:bg-[#0099CC] font-['Nunito',sans-serif] transform transition-all duration-300 ${isMobile ? 'hover:scale-100' : 'hover:scale-105'}`}
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Pawko Chatbot */}
      <Suspense fallback={null}>
        <PawkoChatbot />
      </Suspense>
    </div>
  );
};

export default Index;
