
import { useState, useEffect, useCallback, useRef } from 'react';

// Debounce hook for performance optimization
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Motion preference detection
export const useMotionPreference = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Optimized mouse tracking with debouncing
export const useOptimizedMouseTracking = (delay: number = 16) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  const updateMousePos = useCallback((e: React.MouseEvent) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { mousePos, updateMousePos };
};

// Intersection observer with better cleanup
export const useOptimizedIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  const observe = useCallback((element: Element) => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      });
    }

    observerRef.current.observe(element);
    elementsRef.current.add(element);
  }, [callback, options]);

  const disconnect = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
      elementsRef.current.clear();
    }
  }, []);

  useEffect(() => {
    return disconnect;
  }, [disconnect]);

  return { observe, disconnect };
};
