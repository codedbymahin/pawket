
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PawPrint, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showRestrictedModal, setShowRestrictedModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    navigate("/");
  };

  const handleGuestLogin = () => {
    console.log("Logging in as guest...");
    navigate("/dashboard");
  };

  const handleAccountLogin = () => {
    setShowRestrictedModal(true);
  };

  return (
    <div className="min-h-screen px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="flex items-center justify-center min-h-screen">
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

          <Card className="border-0 shadow-xl rounded-3xl" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="text-center space-y-4 pb-6 pt-8">
              <div className="flex justify-center">
                <div className="p-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}>
                  <PawPrint size={28} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold" style={{ color: '#00AEEF' }}>
                Welcome to Pawket Demo
              </CardTitle>
              <CardDescription className="text-gray-600 text-center leading-relaxed">
                Explore all features in Guest Mode. Full login is restricted to early-access demo users only.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 pb-8">
              {/* Guest Login Button */}
              <Button 
                onClick={handleGuestLogin}
                className="w-full text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
              >
                <PawPrint size={20} className="mr-2" />
                Login as Guest
              </Button>

              {/* Form Inputs */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium" style={{ color: '#333333' }}>
                    Email or Phone
                  </Label>
                  <Input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email or phone"
                    className="rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium" style={{ color: '#333333' }}>
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Account Login Button */}
              <Button 
                onClick={handleAccountLogin}
                className="w-full font-semibold py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 transition-all duration-300"
                style={{ color: '#333333' }}
              >
                <Lock size={20} className="mr-2" />
                Login with Account
              </Button>

              {/* Warning Message */}
              <div className="text-center text-sm p-3 rounded-xl" style={{ backgroundColor: '#FFE4B5', color: '#CC6600' }}>
                <Lock size={16} className="inline mr-1" />
                Only demo users approved by the Pawket Team can log in with account.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Restricted Login Modal */}
      <Dialog open={showRestrictedModal} onOpenChange={setShowRestrictedModal}>
        <DialogContent className="sm:max-w-md rounded-3xl" style={{ backgroundColor: '#F8F9FA' }}>
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold" style={{ color: '#333333' }}>
              ⚠️ This login is restricted
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed">
              Only early access users approved by the Pawket Team can log in to a full account. Please use Guest Login to explore the demo.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowRestrictedModal(false)}
              className="text-white rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
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
