import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";

export const UrgencyTopBar = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59, days: prev.days };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isDismissed) return null;

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24;
  const bgColor = isUrgent ? "bg-orange-cta" : "bg-blue-accent";

  return (
    <div className={`${bgColor} text-white py-2 sm:py-3 px-3 sm:px-4 relative z-50 animate-fade-in`}>
      <div className="container mx-auto max-w-7xl flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-1 justify-center">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
          <p className="font-montserrat font-bold text-xs sm:text-sm md:text-base">
            ⚡ OFERTA 3x1 TERMINA EN: 
            <span className="ml-1 sm:ml-2">
              {timeLeft.hours.toString().padStart(2, '0')}:
              {timeLeft.minutes.toString().padStart(2, '0')}:
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="hover:bg-white/20 p-0.5 sm:p-1 rounded transition-colors flex-shrink-0"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};
