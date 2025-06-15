
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
    src="/lovable-uploads/924e1000-1a42-4f7e-85c3-182041c94f44.png"
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
