
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  showRipple?: boolean;
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ children, className, showRipple = true, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (showRipple && !props.disabled) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      }
      
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          "relative overflow-hidden transform transition-all duration-200 hover:scale-105 active:scale-95",
          className
        )}
        onClick={handleClick}
      >
        {children}
      </Button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export default EnhancedButton;
