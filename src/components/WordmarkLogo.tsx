
import React from "react";

interface WordmarkLogoProps {
  className?: string;
  style?: React.CSSProperties;
  height?: number | string;
}

/**
 * The official Pawket wordmark.
 * If you upload a new wordmark, update the src below!
 */
const WordmarkLogo: React.FC<WordmarkLogoProps> = ({
  className = "",
  style = {},
  height = 56, // matches the logo icon height
}) => (
  <img
    src="/lovable-uploads/bb8cbefb-bd4a-4a47-ae81-d34237223b24.png"
    alt="Pawket Wordmark"
    height={height}
    style={{
      display: "inline-block",
      height,
      width: "auto",
      objectFit: "contain",
      marginTop: 2,
      ...style,
    }}
    className={className}
    draggable={false}
  />
);

export default WordmarkLogo;
