
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Github, MapPin } from "lucide-react";

interface FooterSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
  scrollToSection: (sectionId: string) => void;
}

const FooterSection = ({ visibleSections, setSectionRef, scrollToSection }: FooterSectionProps) => {
  return (
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
              <a href="https://www.instagram.com/pawketbd" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#FFD166] transition-all duration-300 hover:translate-x-2">
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
  );
};

export default FooterSection;
