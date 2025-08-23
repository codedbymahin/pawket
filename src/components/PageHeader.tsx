
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backPath: string;
  gradientFrom: string;
  gradientTo: string;
  titleGradientFrom: string;
  titleGradientTo: string;
  backButtonText?: string;
  children?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backPath, 
  gradientFrom, 
  gradientTo, 
  titleGradientFrom,
  titleGradientTo,
  backButtonText = "Back to Dashboard",
  children,
  rightElement
}: PageHeaderProps) => {
  const navigate = useNavigate();

  const titleClasses = `text-4xl sm:text-5xl font-bold font-poppins bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent mb-4`;

  return (
    <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8`}>
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate(backPath)}
          className="text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          {backButtonText}
        </Button>
        {rightElement && (
          <div>{rightElement}</div>
        )}
      </div>
      
      <div className="text-center">
        <h1 className={titleClasses}>
          {title}
        </h1>
        <p className="text-gray-600 text-xl font-nunito mb-6">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
