import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Heart, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PawkoChatbot from "@/components/PawkoChatbot";
import CountdownSection from "@/components/CountdownSection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingElements from "@/components/FloatingElements";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import NewsletterModal from "@/components/NewsletterModal";
import FooterSection from "@/components/FooterSection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTypewriter } from "@/hooks/useTypewriter";
import { comingSoonFeatures, faqItems } from "@/constants/indexData";

const Index = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentFaqAnswer, setCurrentFaqAnswer] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showNewsletterModal, setShowNewsletterModal] = useState<boolean>(false);
  
  const { visibleSections, setSectionRef } = useIntersectionObserver();
  const { displayText: typewriterText, isTyping } = useTypewriter(currentFaqAnswer, openFaq !== null);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#f3f6f9] font-sans relative">
      <FloatingElements />
      <HeroSection />
      <CountdownSection />
      <FeaturesSection visibleSections={visibleSections} setSectionRef={setSectionRef} />
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
            {comingSoonFeatures.map((feature, index) => {
              const IconComponent = feature.icon === "AlertTriangle" ? AlertTriangle : Heart;
              const iconColor = feature.icon === "AlertTriangle" ? "text-red-400" : "text-pink-400";
              
              return (
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
                      <IconComponent size={32} className={iconColor} />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* About Pawket Section */}
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
      
      {/* Experience Now Section */}
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
      
      {/* Our Mission Section */}
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
      
      {/* Our Vision Section */}
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

      <TestimonialsSection visibleSections={visibleSections} setSectionRef={setSectionRef} />
      <HelpSection />
      
      <FAQSection 
        visibleSections={visibleSections}
        setSectionRef={setSectionRef}
        openFaq={openFaq}
        typewriterText={typewriterText}
        isTyping={isTyping}
        faqItems={faqItems}
        onFaqToggle={handleFaqToggle}
      />

      <NewsletterSection 
        visibleSections={visibleSections}
        setSectionRef={setSectionRef}
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleNewsletterSubmit}
      />

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

      <TeamSection visibleSections={visibleSections} setSectionRef={setSectionRef} />
      
      <FooterSection 
        visibleSections={visibleSections}
        setSectionRef={setSectionRef}
        scrollToSection={scrollToSection}
      />

      <NewsletterModal 
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
      />

      <PawkoChatbot />
    </div>
  );
};

export default Index;
