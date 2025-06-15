
import { Home, PawPrint, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-t-3xl shadow-lg z-50">
      <div className="flex justify-around items-center py-4 px-6">
        <button 
          onClick={handleBackToHome}
          className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          <Home size={24} className="text-gray-600" />
          <span className="text-xs text-gray-600 font-nunito">Home</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1 p-2 rounded-xl bg-blue-50 border border-blue-200">
          <PawPrint size={24} style={{ color: '#00AEEF' }} />
          <span className="text-xs font-nunito" style={{ color: '#00AEEF' }}>Dashboard</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
          <User size={24} className="text-gray-600" />
          <span className="text-xs text-gray-600 font-nunito">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
