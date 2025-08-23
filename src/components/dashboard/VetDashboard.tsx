
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useVetProfile } from "@/hooks/useVets";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Stethoscope, MapPin, Clock, DollarSign, Shield, CheckCircle } from "lucide-react";

const VetDashboard = () => {
  const { data: vetProfile, refetch } = useVetProfile();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    bio: "",
    consultation_fee: "",
    experience: "",
    location: "",
    availability: "",
    is_published: false,
  });

  useEffect(() => {
    if (vetProfile) {
      setFormData({
        name: vetProfile.name || "",
        specialty: vetProfile.specialty || "",
        bio: vetProfile.bio || "",
        consultation_fee: vetProfile.consultation_fee?.toString() || "",
        experience: vetProfile.experience || "",
        location: vetProfile.location || "",
        availability: vetProfile.availability || "",
        is_published: vetProfile.is_published,
      });
    }
  }, [vetProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("Not authenticated");

      const profileData = {
        ...formData,
        consultation_fee: formData.consultation_fee ? parseFloat(formData.consultation_fee) : null,
        profile_id: user.id,
      };

      if (vetProfile) {
        const { error } = await supabase
          .from('vets')
          .update(profileData)
          .eq('profile_id', user.id);
        
        if (error) throw error;
        toast({
          title: "Profile updated successfully!",
          description: "Your veterinary profile has been updated.",
        });
      } else {
        const { error } = await supabase
          .from('vets')
          .insert(profileData);
        
        if (error) throw error;
        toast({
          title: "Profile created successfully!",
          description: "Your veterinary profile has been created.",
        });
      }

      refetch();
    } catch (error: any) {
      toast({
        title: "Error saving profile",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Stethoscope className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Veterinarian Dashboard</h1>
          <p className="text-gray-600">Manage your professional profile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Profile Status</p>
                <p className="text-lg font-bold">
                  {vetProfile ? "Created" : "Pending"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Verification</p>
                <p className="text-lg font-bold">
                  {vetProfile?.verified ? "Verified" : "Pending"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-lg font-bold">
                  {vetProfile?.is_published ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Consultation</p>
                <p className="text-lg font-bold">
                  ৳{vetProfile?.consultation_fee || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Input
                  id="specialty"
                  value={formData.specialty}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialty: e.target.value }))}
                  placeholder="e.g., Small Animal Medicine"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell us about your experience and expertise..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consultation_fee">Consultation Fee (৳)</Label>
                <Input
                  id="consultation_fee"
                  type="number"
                  step="0.01"
                  value={formData.consultation_fee}
                  onChange={(e) => setFormData(prev => ({ ...prev, consultation_fee: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  placeholder="e.g., 10 years"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Dhaka, Bangladesh"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Availability</Label>
              <Input
                id="availability"
                value={formData.availability}
                onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                placeholder="e.g., Mon-Fri 9AM-6PM"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_published"
                checked={formData.is_published}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_published: checked }))}
              />
              <Label htmlFor="is_published">Make profile publicly visible</Label>
            </div>

            <Button type="submit" className="w-full">
              {vetProfile ? "Update Profile" : "Create Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VetDashboard;
