
import React, { useState, useRef } from 'react';
import { PawPrint, Upload, Loader2, Check } from 'lucide-react';
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

    // Check if logo is already uploaded
    if (logoUrl) {
      toast.error('Logo already uploaded. Only one logo is allowed.');
      return;
    }

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
      const fileName = `pawket-logo.${fileExt}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('logos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true // Allow overwriting if needed
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
      
      toast.success('Logo uploaded successfully! No further uploads allowed.');
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
    // Prevent clicking if logo is already uploaded
    if (logoUrl) {
      toast.info('Logo already set. Upload is restricted.');
      return;
    }
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group">
      <div 
        onClick={handleClick}
        className={`${sizeClasses[size]} bg-gradient-to-br from-[#00AEEF] to-[#0099CC] rounded-xl shadow-lg border-2 border-white/30 flex items-center justify-center ${logoUrl ? 'cursor-default' : 'cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105'} relative overflow-hidden`}
      >
        {isUploading ? (
          <Loader2 size={iconSizes[size]} className="text-white animate-spin" />
        ) : logoUrl ? (
          <>
            <img 
              src={logoUrl} 
              alt="Pawket Logo" 
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Success indicator overlay */}
            <div className="absolute top-1 right-1 bg-green-500 rounded-full p-1">
              <Check size={12} className="text-white" />
            </div>
          </>
        ) : (
          <PawPrint size={iconSizes[size]} className="text-white" />
        )}
        
        {/* Upload overlay on hover - only show if no logo */}
        {!logoUrl && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <Upload size={iconSizes[size] - 4} className="text-white" />
          </div>
        )}
      </div>
      
      {/* Hidden file input - only if no logo */}
      {!logoUrl && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      )}
    </div>
  );
};

export default LogoUpload;
