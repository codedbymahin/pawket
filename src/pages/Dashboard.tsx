
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserProfile from '@/components/UserProfile';
import { User, Heart, PlusCircle, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00AEEF]"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h1 className="text-2xl font-bold text-[#00AEEF]">Pawket Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Welcome, {user.user_metadata?.full_name || user.email}</span>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User size={16} />
              Profile
            </TabsTrigger>
            <TabsTrigger value="pets" className="flex items-center gap-2">
              <Heart size={16} />
              My Pets
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart size={16} />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>

          <TabsContent value="pets">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  My Pets
                  <Button size="sm">
                    <PlusCircle size={16} className="mr-2" />
                    Add Pet
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your pets and their information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Heart size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No pets added yet. Click "Add Pet" to get started!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Saved Items</CardTitle>
                <CardDescription>
                  Your favorite pets, products, and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Heart size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No saved items yet. Start exploring and save your favorites!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Email Verification</h3>
                    <p className="text-blue-700 text-sm">
                      Your email address: {user.email}
                    </p>
                    <p className="text-blue-700 text-sm">
                      Status: {user.email_confirmed_at ? 'Verified' : 'Pending verification'}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Account Created</h3>
                    <p className="text-gray-700 text-sm">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
