
import PawketLogo from "@/components/PawketLogo";
import { GraduationCap } from "lucide-react";

interface AcademyHeaderProps {
  title: string;
  subtitle: string;
}

const AcademyHeader = ({ title, subtitle }: AcademyHeaderProps) => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center space-x-4 mb-6">
      <div className="p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <PawketLogo size={50} />
      </div>
      <h1 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins"
        style={{ color: '#00AEEF' }}
      >
        {title}
      </h1>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="p-3 rounded-full shadow-lg hover:shadow-xl bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
          <GraduationCap size={32} className="text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold font-poppins" style={{ color: '#333333' }}>
          Essential Pet Care Knowledge
        </h2>
      </div>
      <p className="text-lg text-gray-600 font-nunito">
        {subtitle}
      </p>
    </div>
  </div>
);

export default AcademyHeader;
