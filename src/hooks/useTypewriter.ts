
import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (text: string, isActive: boolean, speed: number = 50) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const animationFrameId = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(0);
  const charIndex = useRef<number>(0);

  useEffect(() => {
    const type = (timestamp: number) => {
      if (!lastUpdateTime.current) {
        lastUpdateTime.current = timestamp;
      }

      const deltaTime = timestamp - lastUpdateTime.current;

      if (deltaTime > speed) {
        if (charIndex.current <= text.length) {
          setDisplayText(text.substring(0, charIndex.current));
          charIndex.current++;
          lastUpdateTime.current = timestamp;
        } else {
          setIsTyping(false);
          if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
          }
          return;
        }
      }
      animationFrameId.current = requestAnimationFrame(type);
    };

    let startTimeout: NodeJS.Timeout;

    if (text && isActive) {
      setIsTyping(true);
      charIndex.current = 0;
      lastUpdateTime.current = 0;
      
      startTimeout = setTimeout(() => {
        setDisplayText("");
        animationFrameId.current = requestAnimationFrame(type);
      }, 100);
    } else {
      setIsTyping(false);
    }

    return () => {
      clearTimeout(startTimeout);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [text, isActive, speed]);

  return { displayText, isTyping };
};
