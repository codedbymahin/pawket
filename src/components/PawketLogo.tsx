
import React from "react";

// Replace below with your official logo image, adjust the import as needed
import pawketLogo from "/pawket-logo.svg";

interface PawketLogoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

const PawketLogo: React.FC<PawketLogoProps> = ({ className = "", style = {}, size = 60 }) => (
  <img
    src={pawketLogo}
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

