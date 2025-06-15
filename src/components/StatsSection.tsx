
import { useState, useEffect, useRef } from "react";
import { Users, Heart, MapPin, Clock } from "lucide-react";

interface StatsSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const StatsSection = ({ visibleSections, setSectionRef }: StatsSectionProps) => {
  const [counts, setCounts] = useState({
    users: 0,
    adoptions: 0,
    cities: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: <Users size={40} className="text-[#00AEEF]" />,
      label: "Happy Pet Parents",
      value: 2500,
      suffix: "+"
    },
    {
      icon: <Heart size={40} className="text-red-500" />,
      label: "Successful Adoptions",
      value: 1200,
      suffix: "+"
    },
    {
      icon: <MapPin size={40} className="text-green-500" />,
      label: "Cities Covered",
      value: 8,
      suffix: ""
    },
    {
      icon: <Clock size={40} className="text-[#FFD166]" />,
      label: "Service Uptime",
      value: 99,
      suffix: "%"
    }
  ];

  useEffect(() => {
    if (visibleSections.has('stats')) {
      const timers = stats.map((stat, index) => {
        return setTimeout(() => {
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              current = stat.value;
              clearInterval(timer);
            }

            setCounts(prev => ({
              ...prev,
              [index === 0 ? 'users' : index === 1 ? 'adoptions' : index === 2 ? 'cities' : 'uptime']: Math.floor(current)
            }));
          }, duration / steps);

          return timer;
        }, index * 200);
      });

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [visibleSections]);

  const getCountValue = (index: number) => {
    switch (index) {
      case 0: return counts.users;
      case 1: return counts.adoptions;
      case 2: return counts.cities;
      case 3: return counts.uptime;
      default: return 0;
    }
  };

  return (
    <section 
      id="stats" 
      className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-indigo-50 to-blue-50 transition-all duration-700 ease-in-out ${
        visibleSections.has('stats') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      data-section="stats"
      ref={setSectionRef('stats')}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]">
            By The Numbers
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
            Growing together to create Bangladesh's largest pet community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                visibleSections.has('stats') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleSections.has('stats') ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-[#333333] mb-2 font-['Nunito',sans-serif]">
                {getCountValue(index)}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium font-['Nunito',sans-serif]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
