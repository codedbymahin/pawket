
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface InteractiveFAQProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

const InteractiveFAQ = ({ title, faqs, className = "" }: InteractiveFAQProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const filteredFAQs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-[#00AEEF] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#00AEEF] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <Card key={index} className="border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Collapsible open={openItems.has(index)} onOpenChange={() => toggleItem(index)}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-blue-50/50 transition-colors duration-200 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <HelpCircle size={20} className="text-[#00AEEF] flex-shrink-0" />
                      <CardTitle className="text-lg font-bold text-[#333333] text-left">
                        {faq.question}
                      </CardTitle>
                    </div>
                    {openItems.has(index) ? (
                      <ChevronUp size={20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                    ) : (
                      <ChevronDown size={20} className="text-[#00AEEF] flex-shrink-0 transition-transform duration-200" />
                    )}
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent className="transition-all duration-300 ease-in-out">
                <CardContent className="pt-0 pb-6 pl-11">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InteractiveFAQ;
