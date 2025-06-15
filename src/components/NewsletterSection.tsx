
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const NewsletterSection = ({ 
  visibleSections, 
  setSectionRef, 
  email, 
  onEmailChange, 
  onSubmit 
}: NewsletterSectionProps) => {
  return (
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
        
        <form onSubmit={onSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
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
  );
};

export default NewsletterSection;
