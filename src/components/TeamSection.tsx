
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const TeamSection = ({ visibleSections, setSectionRef }: TeamSectionProps) => {
  return (
    <section 
      id="our-team" 
      className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-50 to-blue-50 transition-all duration-500 ease-out ${
        visibleSections.has('our-team') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
      }`}
      data-section="our-team"
      ref={setSectionRef('our-team')}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6 font-['Nunito',sans-serif]">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
            The passionate minds behind Pawket
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-12">
          <Card className="w-full max-w-lg border-0 shadow-2xl bg-white rounded-3xl transform hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#00AEEF] to-[#0099CC] rounded-full flex items-center justify-center shadow-xl">
                <Users size={36} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[#333333] mb-3 font-['Nunito',sans-serif]">
                Md Sifat Al Mahin
              </CardTitle>
              <div className="inline-block bg-gradient-to-r from-[#00AEEF] to-[#0099CC] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Founder & Core Ideator of Pawket
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <Card className="border-0 shadow-xl bg-white rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader className="text-center pb-8 pt-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FFD166] to-[#E9CD45] rounded-full flex items-center justify-center shadow-lg">
                  <Users size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#333333] mb-3 font-['Nunito',sans-serif]">
                  Hasib Ashfaq Saad
                </CardTitle>
                <div className="inline-block bg-gradient-to-r from-[#FFD166] to-[#E9CD45] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  Marketing & Outreach Lead
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader className="text-center pb-8 pt-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FFD166] to-[#E9CD45] rounded-full flex items-center justify-center shadow-lg">
                  <Users size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#333333] mb-3 font-['Nunito',sans-serif]">
                  Ebrahim Islam Asif
                </CardTitle>
                <div className="inline-block bg-gradient-to-r from-[#FFD166] to-[#E9CD45] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  Logistics & Communication Lead
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
