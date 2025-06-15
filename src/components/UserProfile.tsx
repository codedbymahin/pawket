
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { User, MapPin, Phone, Edit, Save, X } from 'lucide-react';

interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  phone: string | null;
  location: string | null;
}

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Profile>>({});

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
        setFormData(data);
      } else {
        // Create profile if it doesn't exist
        const newProfile = {
          id: user.id,
          full_name: user.user_metadata?.full_name || null,
          avatar_url: user.user_metadata?.avatar_url || null,
        };
        
        const { data: createdProfile, error: createError } = await supabase
          .from('profiles')
          .insert([newProfile])
          .select()
          .single();

        if (createError) throw createError;
        
        setProfile(createdProfile);
        setFormData(createdProfile);
      }
    } catch (error: any) {
      toast({
        title: "Error loading profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user || !profile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(formData)
        .eq('id', user.id);

      if (error) throw error;

      setProfile({ ...profile, ...formData });
      setEditing(false);

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setFormData(profile || {});
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00AEEF]"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Profile not found</p>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <User size={24} />
            User Profile
          </CardTitle>
          <CardDescription>Manage your personal information</CardDescription>
        </div>
        {!editing ? (
          <Button onClick={() => setEditing(true)} variant="outline" size="sm">
            <Edit size={16} className="mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm">
              <Save size={16} className="mr-2" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline" size="sm">
              <X size={16} className="mr-2" />
              Cancel
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar_url || undefined} />
            <AvatarFallback className="text-lg">
              {profile.full_name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">
              {profile.full_name || 'Anonymous User'}
            </h3>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name</Label>
            {editing ? (
              <Input
                id="full_name"
                value={formData.full_name || ''}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="Enter your full name"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded">{profile.full_name || 'Not provided'}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            {editing ? (
              <Input
                id="username"
                value={formData.username || ''}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Choose a username"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded">{profile.username || 'Not set'}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            {editing ? (
              <Input
                id="phone"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter phone number"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded flex items-center gap-2">
                <Phone size={16} />
                {profile.phone || 'Not provided'}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            {editing ? (
              <Input
                id="location"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Enter your location"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded flex items-center gap-2">
                <MapPin size={16} />
                {profile.location || 'Not provided'}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          {editing ? (
            <Textarea
              id="bio"
              value={formData.bio || ''}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Tell us about yourself"
              rows={3}
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded min-h-[80px]">
              {profile.bio || 'No bio provided'}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
