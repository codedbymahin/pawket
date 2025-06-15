
import React, { useState } from "react";

interface WordmarkLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const WordmarkLogo: React.FC<WordmarkLogoProps> = ({
  className = "",
  style = {},
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.log("Wordmark image failed to load");
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log("Wordmark image loaded successfully");
    setImageLoaded(true);
  };

  // If image fails to load, show text fallback
  if (imageError) {
    return (
      <div className={`text-[#00AEEF] font-bold text-2xl sm:text-3xl lg:text-4xl ${className}`} style={style}>
        Pawket
      </div>
    );
  }

  return (
    <img
      src="/lovable-uploads/924e1000-1a42-4f7e-85c3-182041c94f44.png"
      alt="Pawket Wordmark"
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{
        display: "inline-block",
        width: "auto",
        objectFit: "contain",
        ...style,
      }}
      className={`align-middle h-14 sm:h-16 lg:h-20 ${className}`}
      draggable={false}
    />
  );
};

export default WordmarkLogo;
