
import React, { useState, useRef } from 'react';
import { PawPrint, Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface LogoUploadProps {
  logoUrl: string | null;
  onLogoUpdate: (url: string | null) => void;
  size?: 'sm' | 'md' | 'lg';
}

const LogoUpload: React.FC<LogoUploadProps> = ({ 
  logoUrl, 
  onLogoUpdate, 
  size = 'lg' 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 28
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `logo-${Date.now()}.${fileExt}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('logos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from('logos')
        .getPublicUrl(data.path);

      const publicUrl = publicUrlData.publicUrl;
      
      // Update logo URL in parent component
      onLogoUpdate(publicUrl);
      
      // Store in localStorage for persistence
      localStorage.setItem('pawket-logo-url', publicUrl);
      
      toast.success('Logo uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload logo. Please try again.');
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group">
      <div 
        onClick={handleClick}
        className={`${sizeClasses[size]} bg-gradient-to-br from-[#00AEEF] to-[#0099CC] rounded-xl shadow-lg border-2 border-white/30 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
      >
        {isUploading ? (
          <Loader2 size={iconSizes[size]} className="text-white animate-spin" />
        ) : logoUrl ? (
          <img 
            src={logoUrl} 
            alt="Pawket Logo" 
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <PawPrint size={iconSizes[size]} className="text-white" />
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <Upload size={iconSizes[size] - 4} className="text-white" />
        </div>
      </div>
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default LogoUpload;
