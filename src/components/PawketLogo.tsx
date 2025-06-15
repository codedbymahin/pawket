
import React from "react";

interface PawketLogoProps {
  size?: number | string;
  className?: string;
}

const PawketLogo: React.FC<PawketLogoProps> = ({ size = 60, className }) => (
  <img
    src={require("../assets/pawket-logo.png")}
    alt="Pawket Logo"
    style={{
      width: typeof size === "number" ? `${size}px` : size,
      height: "auto",
      maxWidth: "100%",
      display: "block",
      objectFit: "contain",
    }}
    className={className}
    draggable={false}
  />
);

export default PawketLogo;
