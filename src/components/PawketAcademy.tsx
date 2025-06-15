
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PawketAcademy = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/academy");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 border-2 rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-90 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-4 px-8 pt-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
                <GraduationCap size={32} className="text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-poppins" style={{ color: '#333333' }}>
              🎓 Pawket Academy
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-0 pb-8 px-8">
            <p className="text-gray-600 text-center mb-6 font-nunito">
              Learn essential pet care knowledge with our expert guides
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={handleStartLearning}
                className="text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 rounded-2xl px-8 py-4 text-base transform transition-all duration-300 font-poppins"
                style={{ 
                  background: 'linear-gradient(135deg, #00AEEF, #0099CC)',
                }}
              >
                Start Learning
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PawketAcademy;
