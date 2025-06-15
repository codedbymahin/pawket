
import React from "react";

interface PawketLogoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

/**
 * The official Pawket logo.
 * If you upload a new logo, update the src below!
 */
const PawketLogo: React.FC<PawketLogoProps> = ({ className = "", style = {}, size = 60 }) => (
  <img
    src="/lovable-uploads/8f8dcaea-e929-473f-bee3-022fc7733e3e.png"
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

