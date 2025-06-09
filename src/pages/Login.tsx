
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PawPrint, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showRestrictedModal, setShowRestrictedModal] = useState(false);

  const handleBack = () => {
    navigate("/");
  };

  const handleGuestLogin = () => {
    console.log("Logging in as guest...");
    navigate("/dashboard");
  };

  const handleRestrictedLogin = () => {
    setShowRestrictedModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pawket-light via-pawket-neutral to-white flex items-center justify-center px-4">
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
              <div className="bg-gradient-to-br from-pawket-primary to-pawket-accent p-3 rounded-full shadow-lg">
                <PawPrint size={24} className="text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pawket-primary to-pawket-accent bg-clip-text text-transparent">
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
              className="w-full bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <PawPrint size={20} className="mr-2" />
              Login as Guest
            </Button>

            {/* Restricted Account Login Button */}
            <Button 
              onClick={handleRestrictedLogin}
              className="w-full bg-pawket-neutral hover:bg-pawket-neutral/80 text-gray-700 font-semibold py-3 rounded-lg"
            >
              <Lock size={20} className="mr-2" />
              Login with Account
            </Button>

            {/* Restriction Notice */}
            <div className="text-center text-sm text-gray-500 bg-pawket-light p-3 rounded-lg border border-pawket-neutral">
              <Lock size={16} className="inline mr-1" />
              Only demo users approved by the Pawket Team can log in.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Restricted Login Modal */}
      <Dialog open={showRestrictedModal} onOpenChange={setShowRestrictedModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              ⚠️ This login is restricted
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed">
              Only early access users approved by the Pawket Team can log in to a full account. Please use Guest Login to explore the demo.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowRestrictedModal(false)}
              className="bg-gradient-to-r from-pawket-accent to-pawket-primary hover:from-pawket-primary hover:to-pawket-accent text-white"
            >
              Understood
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
