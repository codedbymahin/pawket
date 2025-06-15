
import { useState, useCallback } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'heart';
  duration?: number;
}

export const useToastSystem = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'info' | 'heart' = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message: string) => {
    addToast(message, 'success');
  }, [addToast]);

  const showHeart = useCallback((message: string) => {
    addToast(message, 'heart');
  }, [addToast]);

  const showInfo = useCallback((message: string) => {
    addToast(message, 'info');
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showHeart,
    showInfo,
  };
};
