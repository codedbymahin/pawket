
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Lightbulb, Megaphone, Truck, Sparkles, MapPin, TrendingUp } from "lucide-react";
import React, { useState, useEffect } from "react";

/** Decorative mini paw SVG */
const PawPrintTiny: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <circle cx="12" cy="14" r="4" />
    <circle cx="7" cy="9" r="2" />
    <circle cx="17" cy="9" r="2" />
    <circle cx="6" cy="14" r="1" />
    <circle cx="18" cy="14" r="1" />
  </svg>
);

/** Decorative crown for the founder */
const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="gold"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="20" r="4" fill="#FDE68A" />
    <circle cx="38" cy="20" r="4" fill="#FDE68A" />
    <circle cx="24" cy="10" r="5" fill="#FFD700" />
    <path d="M8 20 L24 12 L40 20 L31 38 L17 38 Z" fill="#FFC700" stroke="#F6C000" strokeWidth="2" />
  </svg>
);

/** Floating particles component */
const FloatingParticles: React.FC<{ type: "founder" | "marketing" | "logistics" }> = ({ type }) => {
  if (type === "founder") {
    return (
      <>
        <div className="absolute -top-2 -right-2 animate-ping">
          <Sparkles size={12} className="text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-4 -left-3 animate-pulse delay-500">
          <Sparkles size={8} className="text-blue-400 opacity-40" />
        </div>
        <div className="absolute -bottom-1 right-6 animate-bounce delay-1000">
          <Sparkles size={10} className="text-yellow-300 opacity-50" />
        </div>
      </>
    );
  }
  
  if (type === "marketing") {
    return (
      <>
        <div className="absolute top-2 right-2 animate-pulse delay-300">
          <TrendingUp size={10} className="text-orange-400 opacity-50" />
        </div>
        <div className="absolute bottom-3 left-3 animate-bounce delay-700">
          <TrendingUp size={8} className="text-yellow-400 opacity-40" />
        </div>
      </>
    );
  }
  
  if (type === "logistics") {
    return (
      <>
        <div className="absolute top-3 left-2 animate-pulse delay-200">
          <MapPin size={8} className="text-green-400 opacity-50" />
        </div>
        <div className="absolute bottom-2 right-4 animate-ping delay-800">
          <MapPin size={10} className="text-teal-400 opacity-40" />
        </div>
      </>
    );
  }
  
  return null;
};

/** Founder ribbon */
const FounderRibbon: React.FC = () => (
  <div className="absolute -top-2 -right-2 z-30">
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-pulse">
      FOUNDER
    </div>
  </div>
);

const TEAM = [
  {
    name: "Md Sifat Al Mahin",
    role: "Founder & Core Ideator of Pawket",
    icon: Lightbulb,
    iconColor: "from-[#00AEEF] via-[#42b1ff] to-[#FFD700]",
    cardBg: "from-[#FFFDE4] via-[#e7f3ff] to-[#D0E6FF]",
    border: "bg-gradient-to-br from-[#00AEEF] via-[#42b1ff] to-[#FFD700] animate-gradient-border",
    text: "text-[#26356A]",
    special: true,
    floatingType: "founder" as const,
  },
  {
    name: "Hasib Ashfaq Saad",
    role: "Marketing & Outreach Lead",
    icon: Megaphone,
    iconColor: "from-[#FFD166] to-[#FF8C42]",
    cardBg: "from-[#FFF7EC] via-[#FFFBE6] to-[#FFD9B3]",
    border: "bg-gradient-to-r from-[#FFD166] via-[#FFB338] to-[#FF8C42]",
    text: "text-[#704800]",
    special: false,
    floatingType: "marketing" as const,
  },
  {
    name: "Ebrahim Islam Asif",
    role: "Logistics & Communication Lead",
    icon: Truck,
    iconColor: "from-[#C8E6C9] to-[#00897B]",
    cardBg: "from-[#E7FFF9] via-[#D9FFF6] to-[#C8E6C9]",
    border: "bg-gradient-to-br from-[#97e6c3] to-[#00897B]",
    text: "text-[#14695C]",
    special: false,
    floatingType: "logistics" as const,
  },
];

interface TeamSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const TeamSection = ({ visibleSections, setSectionRef }: TeamSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cardAppear = (idx: number) =>
    visibleSections.has("our-team")
      ? `opacity-100 translate-y-0 scale-100`
      : "opacity-0 translate-y-8 scale-95";

  const FounderIcon = TEAM[0].icon;

  return (
    <section
      id="our-team"
      className={`relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden transition-all duration-700 ${
        visibleSections.has("our-team")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
      data-section="our-team"
      ref={setSectionRef("our-team")}
      style={{
        background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e7f3ff 75%, #f8fafc 100%)`
      }}
    >
      {/* Background geometric shapes with parallax */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200/20 to-orange-200/20 blur-lg animate-pulse delay-1000"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-green-200/20 to-teal-200/20 blur-md animate-pulse delay-500"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      {/* Enhanced decorative floating paw prints with parallax */}
      <PawPrintTiny 
        className="absolute top-7 left-12 text-[#00AEEF]/30 animate-[pulse_2.6s_ease-in-out_infinite]" 
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <PawPrintTiny 
        className="absolute bottom-10 right-32 text-[#FFD166]/30 animate-[pulse_3.2s_ease-in-out_infinite]" 
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <PawPrintTiny 
        className="absolute top-1/3 right-10 text-[#00897B]/20 animate-[pulse_3s_ease-in-out_infinite]" 
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#26356A] mb-6 font-nunito tracking-tight">
            <span className="inline-block">Meet Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-nunito">
            The passionate minds behind Pawket
          </p>
        </div>

        {/* Enhanced Founder card */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-full flex justify-center">
            <Card
              className={`relative z-10 w-full max-w-xl lg:max-w-2xl border-0 shadow-[0_8px_32px_4px_rgba(33,150,243,0.14)] bg-white/95 rounded-3xl transition-all duration-700 
                          transform hover:scale-[1.035] hover:shadow-[0_0_80px_8px_rgba(255,215,0,0.2)] 
                          ${TEAM[0].border} group animate-[breathe_4s_ease-in-out_infinite]
                          ${cardAppear(0)}
                          ${visibleSections.has("our-team") ? "animate-fade-in" : ""}`}
              style={{
                boxShadow: "0 0 60px 0 rgba(255,215,0,0.12), 0 8px 32px 4px rgba(33,150,243,0.14)",
                borderWidth: "3px",
                borderStyle: "solid",
                borderImage: "linear-gradient(110deg, #00AEEF 30%, #FFD700 65%) 1",
                background: "linear-gradient(120deg, #e0f7fa 0%, #ffffff 57%, #fffde4 100%)"
              }}
            >
              <FounderRibbon />
              <FloatingParticles type="founder" />
              
              {/* Enhanced floating crown */}
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 animate-[bounce_3.2s_ease-in-out_infinite] pointer-events-none">
                <CrownIcon className="drop-shadow-xl filter animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              
              <CardHeader className="text-center pb-8 pt-16">
                {/* Enhanced animated avatar */}
                <div
                  className={`w-28 h-28 mx-auto mb-5 rounded-full flex items-center justify-center shadow-xl 
                    bg-gradient-to-br ${TEAM[0].iconColor} animate-gradient-border group-hover:shadow-[0_0_40px_8px_#FFD70050] 
                    border-4 border-white ring-4 ring-yellow-200/50 outline-none transition-all duration-700
                    hover:ring-yellow-300/70 hover:ring-8`}
                  style={{
                    boxShadow: "0 0 0 7px rgba(255, 215, 0, 0.07), 0 4px 32px 0 rgba(70,170,255,0.11)"
                  }}
                >
                  <FounderIcon
                    size={44}
                    className="text-white drop-shadow-sm animate-[wiggle_2s_ease-in-out_infinite] group-hover:scale-110 group-hover:animate-[lightup_1s_ease-in-out] transition-transform"
                  />
                </div>
                
                <CardTitle className={`text-2xl md:text-3xl font-bold ${TEAM[0].text} mb-3 font-nunito group-hover:animate-[glow_1s_ease-in-out]`}>
                  {TEAM[0].name}
                </CardTitle>
                
                <div className="inline-block bg-gradient-to-r from-[#00AEEF] via-[#42b1ff] to-[#FFD700] text-white px-5 py-2 rounded-full text-base font-bold shadow-lg ring-2 ring-[#FFD700]/30 mt-2 font-nunito tracking-wide hover:ring-4 hover:ring-[#FFD700]/50 transition-all duration-300">
                  {TEAM[0].role}
                </div>
              </CardHeader>
            </Card>
            
            {/* Enhanced golden particles */}
            <span className="absolute top-1 left-1 animate-ping w-4 h-4 rounded-full bg-[#FFD700]/40 blur-[2px]" />
            <span className="absolute bottom-3 right-12 animate-pulse w-3 h-3 rounded-full bg-[#00AEEF]/30 blur-[1.5px]" />
            <span className="absolute top-1/2 left-8 animate-bounce delay-500 w-2 h-2 rounded-full bg-[#FFD700]/50 blur-[1px]" />
          </div>
        </div>

        {/* Enhanced Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto">
          {TEAM.slice(1).map((member, idx) => {
            const Icon = member.icon;
            return (
              <Card
                key={member.name}
                className={`relative group border-0 shadow-md bg-white/95 rounded-3xl 
                  transform transition-all duration-700 hover:scale-[1.08] hover:shadow-2xl hover:shadow-current/20
                  ${member.border} animate-[breathe_5s_ease-in-out_infinite]
                  ${cardAppear(idx + 1)}
                  ${visibleSections.has("our-team") ? "animate-fade-in" : ""}
                `}
                style={{
                  borderWidth: "2.5px",
                  borderStyle: "solid",
                  borderImage: member.role.includes("Marketing")
                    ? "linear-gradient(90deg, #FFD166 60%, #FF8C42 100%) 1"
                    : "linear-gradient(110deg, #C8E6C9 35%, #00897B 90%) 1",
                  background: member.role.includes("Marketing") 
                    ? "linear-gradient(115deg, #fffbe6 60%, #fff7ec 90%)" 
                    : "linear-gradient(115deg, #f0fdfa 60%, #e6fffa 90%)",
                  transitionDelay: `${(idx + 1) * 150}ms`,
                }}
              >
                <FloatingParticles type={member.floatingType} />
                
                {/* Enhanced decorative paws */}
                <PawPrintTiny className="absolute top-2 left-3 text-[#FFD166]/30 rotate-12 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <PawPrintTiny className="absolute bottom-2 right-4 text-[#00AEEF]/30 -rotate-12 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                
                <CardHeader className="text-center pb-8 pt-12">
                  <div
                    className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${member.iconColor} transition-all duration-700 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon
                      size={32}
                      className="text-white drop-shadow animate-[wiggle_2.5s_ease-in-out_infinite] group-hover:scale-110 group-hover:animate-pulse transition-transform"
                    />
                  </div>
                  
                  <CardTitle className={`text-xl font-bold ${member.text} mb-3 font-nunito group-hover:animate-[glow_0.8s_ease-in-out]`}>
                    {member.name}
                  </CardTitle>
                  
                  <div
                    className={`inline-block ${
                      member.role.includes("Marketing")
                        ? "bg-gradient-to-r from-[#FFD166] to-[#FF8C42]"
                        : "bg-gradient-to-r from-[#C8E6C9] to-[#00897B]"
                    } text-white px-4 py-2 rounded-full text-base font-bold shadow-md font-nunito tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    {member.role}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Enhanced Custom Keyframes for Animations */}
      <style>{`
        @keyframes wiggle {
          0%, 90%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes lightup {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.4) drop-shadow(0 0 10px rgba(255,215,0,0.8)); }
          100% { filter: brightness(1); }
        }
        @keyframes glow {
          0% { text-shadow: none; }
          50% { text-shadow: 0 0 20px rgba(255,215,0,0.6); }
          100% { text-shadow: none; }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
