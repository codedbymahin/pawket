
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleGuestLogin = () => {
    // Navigate to dashboard or main app area
    console.log("Logging in as guest...");
    // navigate("/dashboard"); // Uncomment when dashboard is ready
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Button>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-3 rounded-full shadow-lg">
                <PawPrint size={24} className="text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Welcome to Pawket Demo
            </CardTitle>
            <CardDescription className="text-gray-600 text-center leading-relaxed">
              Explore all features in Guest Mode. Full login is restricted to early-access demo users only.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Guest Login Button */}
            <Button 
              onClick={handleGuestLogin}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <PawPrint size={20} className="mr-2" />
              Login as Guest
            </Button>

            {/* Restricted Account Login Button */}
            <Button 
              disabled
              className="w-full bg-gray-300 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed opacity-60"
            >
              <Lock size={20} className="mr-2" />
              Login with Account (Restricted)
            </Button>

            {/* Restriction Notice */}
            <div className="text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border">
              <Lock size={16} className="inline mr-1" />
              Only demo users approved by the Pawket Team can log in.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
