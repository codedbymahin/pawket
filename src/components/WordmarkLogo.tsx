
import React from "react";

interface WordmarkLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const WordmarkLogo: React.FC<WordmarkLogoProps> = ({
  className = "",
  style = {},
}) => (
  <img
    src="/lovable-uploads/bb8cbefb-bd4a-4a47-ae81-d34237223b24.png"
    alt="Pawket Wordmark"
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

export default WordmarkLogo;

