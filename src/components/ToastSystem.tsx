
import { useEffect, useState } from "react";
import { CheckCircle, Heart, PawPrint, Sparkles } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'heart';
  duration?: number;
}

interface ToastSystemProps {
  toasts: Toast[];
  onRemoveToast: (id: string) => void;
}

const ToastSystem = ({ toasts, onRemoveToast }: ToastSystemProps) => {
  useEffect(() => {
    toasts.forEach((toast) => {
      const timer = setTimeout(() => {
        onRemoveToast(toast.id);
      }, toast.duration || 3000);

      return () => clearTimeout(timer);
    });
  }, [toasts, onRemoveToast]);

  const getToastIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'heart':
        return <Heart size={20} className="text-red-500 fill-current animate-pulse" />;
      default:
        return <PawPrint size={20} className="text-[#00AEEF]" />;
    }
  };

  const getToastStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'heart':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center space-x-3 px-4 py-3 rounded-2xl border-2 shadow-lg backdrop-blur-sm transform transition-all duration-500 animate-in slide-in-from-right-full ${getToastStyles(toast.type)}`}
        >
          {getToastIcon(toast.type)}
          <span className="font-nunito font-medium">{toast.message}</span>
          {toast.type === 'heart' && (
            <Sparkles size={16} className="text-red-400 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ToastSystem;
