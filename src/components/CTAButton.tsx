import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  onClick?: () => void;
}

export const CTAButton = ({ children, className, size = "lg", onClick }: CTAButtonProps) => {
  const sizeClasses = {
    default: "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base",
    sm: "px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
    xl: "px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl",
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-orange-cta hover:bg-orange-cta-hover text-white font-montserrat font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-orange-cta/50",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};
