
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, isActive: boolean, speed: number = 25) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (text && isActive) {
      setIsTyping(true);
      setDisplayText("");
      
      const startTyping = setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i <= text.length) {
            setDisplayText(text.substring(0, i));
            i++;
          } else {
            setIsTyping(false);
            clearInterval(typeInterval);
          }
        }, speed);

        return () => clearInterval(typeInterval);
      }, 100);

      return () => clearTimeout(startTyping);
    }
  }, [text, isActive, speed]);

  return { displayText, isTyping };
};
