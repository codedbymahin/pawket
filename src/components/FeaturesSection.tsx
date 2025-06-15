
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, PawPrint, Search, Stethoscope, ShoppingBag, GraduationCap } from "lucide-react";

interface FeaturesSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const FeaturesSection = ({ visibleSections, setSectionRef }: FeaturesSectionProps) => {

  const features = [
    {
      icon: <Dog size={32} className="text-[#00AEEF]" />,
      title: "Pet Adoption",
      description: "Connect with loving families and help pets find homes.",
      bgColor: "bg-blue-50",
      path: "/adopt",
    },
    {
      icon: <PawPrint size={32} className="text-[#FFD166]" />,
      title: "Pet Sharing",
      description: "Temporarily share your pet with other pet parents when you travel.",
      bgColor: "bg-amber-50",
      path: "/sharing",
    },
    {
      icon: <Search size={32} className="text-[#00AEEF]" />,
      title: "Lost & Found",
      description: "Report or discover lost pets in your community.",
      bgColor: "bg-green-50",
      path: "/lost-found",
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Virtual Vet",
      description: "Instantly consult with expert vets through online chat.",
      bgColor: "bg-emerald-50",
      path: "/vet",
    },
    {
      icon: <ShoppingBag size={32} className="text-[#FFD166]" />,
      title: "Pet Shop",
      description: "Buy pet food, clothes, toys & accessories easily.",
      bgColor: "bg-purple-50",
      path: "/shop",
    },
    {
      icon: <GraduationCap size={32} className="text-purple-500" />,
      title: "Pawket Academy",
      description: "Learn essential pet care with our expert guides.",
      bgColor: "bg-indigo-50",
      path: "/academy",
    },
  ];

  return (
    <section 
      id="what-we-offer" 
      className={`py-20 px-6 sm:px-8 lg:px-12 bg-white transition-all duration-700 ease-in-out ${
        visibleSections.has('what-we-offer') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      data-section="what-we-offer"
      ref={setSectionRef('what-we-offer')}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]">
            What We Offer
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed font-['Nunito',sans-serif]">
            Comprehensive pet care solutions designed for Bangladesh's unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-700 ease-in-out border-0 shadow-lg ${feature.bgColor} rounded-2xl ${
                visibleSections.has('what-we-offer') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleSections.has('what-we-offer') ? `${index * 100}ms` : '0ms' 
              }}
            >
              <CardHeader className="text-center pb-6 pt-8 px-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-[#333333] mb-3 font-['Nunito',sans-serif]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8 px-8">
                <CardDescription className="text-gray-600 text-center leading-relaxed font-['Nunito',sans-serif]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
