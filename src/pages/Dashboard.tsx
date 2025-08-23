
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import UserDashboard from "@/components/dashboard/UserDashboard";
import SellerDashboard from "@/components/dashboard/SellerDashboard";
import VetDashboard from "@/components/dashboard/VetDashboard";
import PageHeader from "@/components/PageHeader";
import BottomNavigation from "@/components/BottomNavigation";

const Dashboard = () => {
  const { user, userRole, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'seller':
        return <SellerDashboard />;
      case 'vet':
        return <VetDashboard />;
      case 'admin':
        return <UserDashboard />; // Admin sees user dashboard for now
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <PageHeader
        title="Dashboard"
        subtitle={`Welcome back, ${user?.user_metadata?.full_name || user?.email}`}
        backPath="/"
        gradientFrom="from-orange-400"
        gradientTo="to-pink-500"
        titleGradientFrom="from-orange-600"
        titleGradientTo="to-pink-600"
        rightElement={
          <Button variant="outline" onClick={handleSignOut} className="gap-2">
            <LogOut size={16} />
            Sign Out
          </Button>
        }
      />

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {renderDashboard()}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
