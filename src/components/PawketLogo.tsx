
import React from "react";

interface PawketLogoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

/**
 * To use your official logo, place "pawket-logo.svg" in your project's public/ folder.
 * Then, change the src below from the placeholder to "/pawket-logo.svg".
 */
const PawketLogo: React.FC<PawketLogoProps> = ({ className = "", style = {}, size = 60 }) => (
  <img
    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80"
    // src="/pawket-logo.svg" // Uncomment this line and remove the placeholder above when the SVG is available in /public
    alt="Pawket Logo"
    width={size}
    height={size}
    className={className}
    style={{
      display: "inline-block",
      borderRadius: "16px",
      boxShadow: "0 4px 20px 0 rgba(0,174,239,0.11)",
      objectFit: "contain",
      background: "white",
      ...style,
    }}
    draggable={false}
  />
);

export default PawketLogo;
