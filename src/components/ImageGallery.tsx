
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageGallery = ({ images, alt, className = "" }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const placeholderImages = [
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
  ];

  const galleryImages = images.length > 0 ? images : placeholderImages;

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <img 
            src={galleryImages[currentIndex]} 
            alt={`${alt} ${currentIndex + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {galleryImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg"
              onClick={prevImage}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg"
              onClick={nextImage}
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}
        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/90">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </Button>
          
          <div className="relative aspect-video">
            <img 
              src={galleryImages[currentIndex]} 
              alt={`${alt} ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {galleryImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
