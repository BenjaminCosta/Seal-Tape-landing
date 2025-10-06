import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { X } from "lucide-react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY < 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-in-bottom">
      <div className="bg-hero-bg/95 backdrop-blur-sm border-t-2 border-orange-cta p-3 sm:p-4 shadow-2xl">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-gray-400 hover:text-white"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <CTAButton
          size="default"
          className="w-full text-sm sm:text-base"
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          🔥 Quiero mi pack 3x1
        </CTAButton>
        <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-1.5 sm:mt-2">
          ✓ Envío rápido • ✓ Garantía 30 días
        </p>
      </div>
    </div>
  );
};
