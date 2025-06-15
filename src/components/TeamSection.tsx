
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Lightbulb, Megaphone, Truck } from "lucide-react";
import React from "react";

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

const TEAM = [
  {
    name: "Md Sifat Al Mahin",
    role: "Founder & Core Ideator of Pawket",
    icon: Lightbulb,
    iconColor: "from-[#00AEEF] via-[#42b1ff] to-[#FFD700]",
    cardBg: "from-[#FFFDE4] via-[#e7f3ff] to-[#D0E6FF]",
    border:
      "bg-gradient-to-br from-[#00AEEF] via-[#42b1ff] to-[#FFD700] animate-gradient-border",
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
  // stagger cards animation based on index
  const cardAppear = (idx: number) =>
    visibleSections.has("our-team")
      ? `opacity-100 translate-y-0 scale-100`
      : "opacity-0 translate-y-8 scale-95";

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
      {/* Decorative floating paw prints */}
      <PawPrintTiny className="absolute top-7 left-12 text-[#00AEEF]/30 animate-[pulse_2.6s_ease-in-out_infinite]" />
      <PawPrintTiny className="absolute bottom-10 right-32 text-[#FFD166]/30 animate-[pulse_3.2s_ease-in-out_infinite]" />
      <PawPrintTiny className="absolute top-1/3 right-10 text-[#00897B]/20 animate-[pulse_3s_ease-in-out_infinite]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#26356A] mb-6 font-nunito tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-nunito">
            The passionate minds behind Pawket
          </p>
        </div>

        {/* Founder card */}
        <div className="flex flex-col items-center mb-16">
          <div className={`relative w-full flex justify-center`}>
            <Card
              className={`relative z-10 w-full max-w-xl lg:max-w-2xl border-0 shadow-[0_8px_32px_4px_rgba(33,150,243,0.14)] bg-white/90 rounded-3xl transition-all duration-500 
                          transform hover:scale-[1.031] hover:shadow-2xl 
                          ${TEAM[0].border} group
                          ${cardAppear(0)}
                          ${visibleSections.has("our-team") ? "animate-fade-in" : ""}`}
              style={{
                boxShadow:
                  visibleSections.has("our-team") || true // always on for special
                    ? "0 0 60px 0 rgba(255,215,0,0.14)"
                    : "",
                borderImage:
                  "linear-gradient(110deg, #00AEEF 30%, #FFD700 65%) 1",
                borderWidth: "3px",
                borderStyle: "solid",
                transitionDelay: "0ms",
                position: "relative",
                background:
                  "linear-gradient(120deg, #e0f7fa 0%, #ffffff 57%, #fffde4 100%)",
              }}
            >
              {/* Floating crown */}
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 animate-[bounce_3.2s_ease-in-out_infinite] pointer-events-none">
                <CrownIcon className="drop-shadow-xl" />
              </div>
              <CardHeader className="text-center pb-8 pt-16">
                {/* Animated avatar */}
                <div
                  className={`w-28 h-28 mx-auto mb-5 rounded-full flex items-center justify-center shadow-xl 
                    bg-gradient-to-br ${TEAM[0].iconColor} animate-gradient-border group-hover:shadow-[0_0_32px_6px_#FFD70040] 
                    border-4 border-white ring-4 ring-yellow-200/50 outline-none transition-all duration-500`}
                  style={{
                    boxShadow:
                      "0 0 0 7px rgba(255, 215, 0, 0.07), 0 4px 32px 0 rgba(70,170,255,0.11)",
                  }}
                >
                  <TEAM[0].icon
                    size={44}
                    className="text-white drop-shadow-sm animate-[wiggle_2s_ease-in-out_infinite] group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardTitle
                  className={`text-2xl md:text-3xl font-bold ${TEAM[0].text} mb-3 font-nunito group-hover:animate-pulse`}
                >
                  {TEAM[0].name}
                </CardTitle>
                <div className="inline-block bg-gradient-to-r from-[#00AEEF] via-[#42b1ff] to-[#FFD700] text-white px-5 py-2 rounded-full text-base font-bold shadow-lg ring-2 ring-[#FFD700]/30 mt-2 font-nunito tracking-wide">
                  {TEAM[0].role}
                </div>
              </CardHeader>
            </Card>
            {/* Golden particles for the founder */}
            <span className="absolute top-1 left-1 animate-pulse w-4 h-4 rounded-full bg-[#FFD700]/30 blur-[2px]" />
            <span className="absolute bottom-3 right-12 animate-pulse w-3 h-3 rounded-full bg-[#00AEEF]/20 blur-[1.5px]" />
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto">
          {TEAM.slice(1).map((member, idx) => (
            <Card
              key={member.name}
              className={`relative group border-0 shadow-md bg-white/95 rounded-3xl 
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                ${member.border} 
                ${cardAppear(idx + 1)}
                ${visibleSections.has("our-team") ? "animate-fade-in" : ""}
              `}
              style={{
                background:
                  member.cardBg.indexOf("gradient") !== -1
                    ? undefined
                    : `linear-gradient(115deg, #fffbe6 60%, #fff7ec 90%)`,
                borderImage:
                  member.role.includes("Marketing")
                    ? "linear-gradient(90deg, #FFD166 60%, #FF8C42 100%) 1"
                    : "linear-gradient(110deg, #C8E6C9 35%, #00897B 90%) 1",
                borderWidth: "2.5px",
                borderStyle: "solid",
                transitionDelay: `${(idx + 1) * 100}ms`,
                minHeight: "auto",
              }}
            >
              {/* Decorative paw for fun */}
              <PawPrintTiny className="absolute top-2 left-3 text-[#FFD166]/30 rotate-12 opacity-70 group-hover:opacity-100 transition-opacity" />
              <PawPrintTiny className="absolute bottom-2 right-4 text-[#00AEEF]/30 -rotate-12 opacity-60 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center pb-8 pt-12">
                <div
                  className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${member.iconColor} transition-all duration-500 group-hover:shadow-xl`}
                >
                  <member.icon
                    size={32}
                    className="text-white drop-shadow animate-[wiggle_2.5s_ease-in-out_infinite] group-hover:scale-110 group-hover:animate-pulse transition-transform"
                  />
                </div>
                <CardTitle className={`text-xl font-bold ${member.text} mb-3 font-nunito`}>
                  {member.name}
                </CardTitle>
                <div
                  className={`inline-block ${
                    member.role.includes("Marketing")
                      ? "bg-gradient-to-r from-[#FFD166] to-[#FF8C42]"
                      : "bg-gradient-to-r from-[#C8E6C9] to-[#00897B]"
                  } text-white px-4 py-2 rounded-full text-base font-bold shadow-md font-nunito tracking-wide`}
                >
                  {member.role}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      {/* Custom Keyframes for Animations */}
      <style>{`
        @keyframes wiggle {
          0%, 90%, 100% { transform: rotate(0deg);}
          30% { transform: rotate(-8deg);}
          60% { transform: rotate(6deg);}
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
