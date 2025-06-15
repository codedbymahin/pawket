
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Lightbulb, Megaphone, Truck } from "lucide-react";
import React, { useState, useRef } from "react";

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

/** Enhanced crown for the founder */
const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="40"
    height="40"
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

/** Spotlight effect for founder card */
const SpotlightOverlay: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => (
  <div 
    className="absolute inset-0 opacity-20 rounded-3xl pointer-events-none transition-opacity duration-300"
    style={{
      background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(255,215,0,0.3) 0%, transparent 70%)`
    }}
  />
);

/** Role-based background patterns */
const RolePattern: React.FC<{ role: string }> = ({ role }) => {
  if (role.includes("Marketing")) {
    return (
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-orange-300 animate-pulse" />
        <div className="absolute bottom-8 right-6 w-4 h-4 rounded-full bg-yellow-300 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-4 w-3 h-3 rounded-full bg-red-300 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    );
  }
  
  if (role.includes("Logistics")) {
    return (
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-6 right-8 w-8 h-1 bg-green-400 rotate-45" />
        <div className="absolute bottom-12 left-6 w-6 h-1 bg-teal-400 rotate-12" />
        <div className="absolute top-1/3 left-8 w-4 h-1 bg-emerald-400 -rotate-12" />
      </div>
    );
  }
  
  return null;
};

const TEAM = [
  {
    name: "Md Sifat Al Mahin",
    role: "Founder & Core Ideator of Pawket",
    icon: Lightbulb,
    iconColor: "from-[#00AEEF] via-[#42b1ff] to-[#FFD700]",
    cardBg: "from-[#FFFDE4] via-[#e7f3ff] to-[#D0E6FF]",
    border: "bg-gradient-to-br from-[#00AEEF] via-[#42b1ff] to-[#FFD700]",
    text: "text-[#26356A]",
    special: true,
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
  },
];

interface TeamSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const TeamSection = ({ visibleSections, setSectionRef }: TeamSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const founderCardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Update spotlight position for founder card
    if (cardIndex === 0 && founderCardRef.current) {
      const founderRect = founderCardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - founderRect.left,
        y: e.clientY - founderRect.top
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Stagger cards animation based on index
  const cardAppear = (idx: number) =>
    visibleSections.has("our-team")
      ? `opacity-100 translate-y-0 scale-100`
      : "opacity-0 translate-y-8 scale-95";

  const FounderIcon = TEAM[0].icon;

  return (
    <section
      id="our-team"
      className={`relative py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 transition-all duration-700 ${
        visibleSections.has("our-team")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
      data-section="our-team"
      ref={setSectionRef("our-team")}
      style={{ overflow: "hidden" }}
    >
      {/* Enhanced decorative floating paw prints */}
      <PawPrintTiny className="absolute top-7 left-12 text-[#00AEEF]/30 animate-[pulse_2.6s_ease-in-out_infinite]" />
      <PawPrintTiny className="absolute bottom-10 right-32 text-[#FFD166]/30 animate-[pulse_3.2s_ease-in-out_infinite]" />
      <PawPrintTiny className="absolute top-1/3 right-10 text-[#00897B]/20 animate-[pulse_3s_ease-in-out_infinite]" />
      <PawPrintTiny className="absolute top-1/4 left-1/4 text-[#FF8C42]/15 animate-[pulse_2.8s_ease-in-out_infinite]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 
            className={`text-4xl sm:text-5xl font-bold text-[#26356A] mb-6 font-nunito tracking-tight transition-all duration-1000 ${
              visibleSections.has("our-team") ? "animate-typewriter" : ""
            }`}
          >
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-nunito">
            The passionate minds behind Pawket
          </p>
        </div>

        {/* Enhanced Founder card */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-full flex justify-center">
            <Card
              ref={founderCardRef}
              className={`relative z-10 w-full max-w-xl lg:max-w-2xl border-0 shadow-[0_8px_32px_4px_rgba(33,150,243,0.14)] 
                          backdrop-blur-sm bg-white/90 rounded-3xl transition-all duration-500 transform-gpu
                          hover:shadow-[0_20px_60px_8px_rgba(255,215,0,0.2)] cursor-pointer
                          ${TEAM[0].border} group animate-breathe
                          ${cardAppear(0)}
                          ${visibleSections.has("our-team") ? "animate-fade-in" : ""}`}
              style={{
                borderImage: "linear-gradient(110deg, #00AEEF 30%, #FFD700 65%) 1",
                borderWidth: "3px",
                borderStyle: "solid",
                transitionDelay: "0ms",
                background: "linear-gradient(120deg, #e0f7fa 0%, #ffffff 57%, #fffde4 100%)",
              }}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(0)}
            >
              {/* Spotlight effect */}
              {hoveredCard === 0 && <SpotlightOverlay mousePos={mousePos} />}
              
              {/* Enhanced floating crown */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 animate-[crown-float_4s_ease-in-out_infinite] pointer-events-none">
                <CrownIcon className="drop-shadow-2xl filter brightness-110" />
              </div>
              
              {/* Golden particles */}
              <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-[#FFD700]/60 animate-[golden-float_3s_ease-in-out_infinite]" />
              <div className="absolute top-12 right-12 w-1.5 h-1.5 rounded-full bg-[#FFD700]/40 animate-[golden-float_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-8 left-16 w-1 h-1 rounded-full bg-[#FFD700]/50 animate-[golden-float_2.5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
              
              <CardHeader className="text-center pb-8 pt-16">
                {/* Enhanced animated avatar */}
                <div
                  className={`w-28 h-28 mx-auto mb-5 rounded-full flex items-center justify-center shadow-xl 
                    bg-gradient-to-br ${TEAM[0].iconColor} border-4 border-white ring-4 ring-yellow-200/50 
                    transition-all duration-500 group-hover:shadow-[0_0_40px_8px_rgba(255,215,0,0.4)] 
                    group-hover:ring-yellow-300/70 group-hover:scale-110`}
                >
                  <FounderIcon
                    size={44}
                    className={`text-white drop-shadow-sm transition-all duration-500 
                      ${hoveredCard === 0 ? "animate-[icon-glow_1s_ease-in-out_infinite] scale-110" : "animate-[icon-wiggle_3s_ease-in-out_infinite]"}`}
                  />
                </div>
                <CardTitle
                  className={`text-2xl md:text-3xl font-bold ${TEAM[0].text} mb-3 font-nunito 
                    transition-all duration-300 group-hover:text-[#FFD700] group-hover:scale-105`}
                >
                  {TEAM[0].name}
                </CardTitle>
                <div className="inline-block bg-gradient-to-r from-[#00AEEF] via-[#42b1ff] to-[#FFD700] text-white px-5 py-2 rounded-full text-base font-bold shadow-lg ring-2 ring-[#FFD700]/30 mt-2 font-nunito tracking-wide hover:shadow-xl transition-shadow duration-300">
                  {TEAM[0].role}
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Enhanced Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto">
          {TEAM.slice(1).map((member, idx) => {
            const Icon = member.icon;
            const cardIndex = idx + 1;
            return (
              <Card
                key={member.name}
                className={`relative group border-0 shadow-md backdrop-blur-sm bg-white/95 rounded-3xl 
                transform transition-all duration-500 cursor-pointer animate-breathe
                hover:shadow-[0_15px_40px_5px_rgba(0,0,0,0.1)] hover:backdrop-blur-md
                ${member.border} 
                ${cardAppear(cardIndex)}
                ${visibleSections.has("our-team") ? "animate-fade-in" : ""}
              `}
                style={{
                  background: `linear-gradient(115deg, ${member.role.includes("Marketing") ? "#fffbe6 60%, #fff7ec 90%" : "#e7fff9 60%, #d9fff6 90%"})`,
                  borderImage: member.role.includes("Marketing")
                    ? "linear-gradient(90deg, #FFD166 60%, #FF8C42 100%) 1"
                    : "linear-gradient(110deg, #C8E6C9 35%, #00897B 90%) 1",
                  borderWidth: "2.5px",
                  borderStyle: "solid",
                  transitionDelay: `${cardIndex * 100}ms`,
                }}
                onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredCard(cardIndex)}
              >
                {/* Role-based background pattern */}
                <RolePattern role={member.role} />
                
                {/* Interactive decorative paws */}
                <PawPrintTiny className={`absolute top-2 left-3 text-[#FFD166]/30 rotate-12 transition-all duration-300 
                  ${hoveredCard === cardIndex ? "opacity-100 scale-110" : "opacity-70"}`} />
                <PawPrintTiny className={`absolute bottom-2 right-4 text-[#00AEEF]/30 -rotate-12 transition-all duration-300 
                  ${hoveredCard === cardIndex ? "opacity-100 scale-110" : "opacity-60"}`} />
                
                <CardHeader className="text-center pb-8 pt-12">
                  <div
                    className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center shadow-lg 
                      bg-gradient-to-br ${member.iconColor} transition-all duration-500 
                      group-hover:shadow-xl group-hover:scale-110`}
                  >
                    <Icon
                      size={32}
                      className={`text-white drop-shadow transition-all duration-500 
                        ${hoveredCard === cardIndex ? "animate-[icon-glow_1s_ease-in-out_infinite] scale-110" : "animate-[icon-wiggle_3s_ease-in-out_infinite]"}`}
                    />
                  </div>
                  <CardTitle className={`text-xl font-bold ${member.text} mb-3 font-nunito transition-colors duration-300 group-hover:scale-105`}>
                    {member.name}
                  </CardTitle>
                  <div
                    className={`inline-block ${
                      member.role.includes("Marketing")
                        ? "bg-gradient-to-r from-[#FFD166] to-[#FF8C42]"
                        : "bg-gradient-to-r from-[#C8E6C9] to-[#00897B]"
                    } text-white px-4 py-2 rounded-full text-base font-bold shadow-md font-nunito tracking-wide 
                    transition-all duration-300 hover:shadow-lg hover:scale-105`}
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
        @keyframes icon-wiggle {
          0%, 90%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
        }
        
        @keyframes icon-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255,255,255,0.5)); }
          50% { filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)); }
        }
        
        @keyframes crown-float {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-8px) rotate(2deg); }
        }
        
        @keyframes golden-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.005); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #26356A;
          animation: typewriter 2s steps(15) 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
