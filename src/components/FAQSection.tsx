
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HelpCircle, Minus, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
  openFaq: number | null;
  typewriterText: string;
  isTyping: boolean;
  faqItems: FAQItem[];
  onFaqToggle: (index: number, answer: string) => void;
}

const FAQSection = ({ 
  visibleSections, 
  setSectionRef, 
  openFaq, 
  typewriterText, 
  isTyping, 
  faqItems, 
  onFaqToggle 
}: FAQSectionProps) => {
  return (
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
              <Collapsible open={openFaq === index} onOpenChange={() => onFaqToggle(index, item.answer)}>
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
  );
};

export default FAQSection;
