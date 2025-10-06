import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { AlertCircle } from "lucide-react";
import productImage from "@/assets/product-3x1.jpg";

export const OfferSection = () => {
  const [selectedPack, setSelectedPack] = useState("3x1");
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const packs = [
    { id: "2x1", rolls: 2, price: "€39", savings: "€20", popular: false },
    { id: "3x1", rolls: 3, price: "€29", savings: "€60", popular: true },
    { id: "4x2", rolls: 4, price: "€49", savings: "€100", popular: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="relative bg-gradient-to-b from-problem-bg to-hero-bg py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Orange Accent Banner */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-orange-cta"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-orange-cta shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Offer Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block bg-orange-cta text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-montserrat font-bold text-base sm:text-lg animate-pulse">
                ⚡ OFERTA LIMITADA
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white leading-tight">
                Pack especial — <span className="text-orange-cta">protege toda tu casa por menos</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-200 font-inter mb-4 sm:mb-6">
                Usa uno en el tejado, otro para tuberías y guarda el tercero para emergencias. Ahorra dinero y evita daños por humedad.
              </p>

              {/* Pack Selection */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {packs.map((pack) => (
                  <button
                    key={pack.id}
                    onClick={() => setSelectedPack(pack.id)}
                    className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                      selectedPack === pack.id
                        ? "border-orange-cta bg-orange-cta/10 scale-105"
                        : "border-border bg-hero-bg hover:border-blue-accent"
                    }`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-orange-cta text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        MÁS POPULAR
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-lg sm:text-xl md:text-2xl font-anton text-white mb-0.5 sm:mb-1">{pack.rolls} Rollos</p>
                      <p className="text-base sm:text-lg md:text-xl font-montserrat font-bold text-orange-cta">{pack.price}</p>
                      <p className="text-[10px] sm:text-xs text-green-400 mt-0.5 sm:mt-1">Ahorras {pack.savings}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Countdown Timer */}
              <div className="bg-hero-bg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-cta">
                <p className="text-white font-montserrat font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  ⏰ La oferta termina en:
                </p>
                <div className="flex justify-center gap-2 sm:gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-orange-cta text-white rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
                        <span className="text-xl sm:text-2xl md:text-3xl font-anton">{String(value).padStart(2, '0')}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 uppercase font-montserrat">
                        {unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <CTAButton 
                size="xl" 
                className="w-full !text-sm sm:!text-base md:!text-lg lg:!text-xl !px-4 sm:!px-6 md:!px-8 !py-4 sm:!py-5 !leading-tight" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="block sm:hidden">👉 Pack {selectedPack} ahora</span>
                <span className="hidden sm:block md:hidden">👉 Conseguir pack {selectedPack} ahora</span>
                <span className="hidden md:block">👉 Conseguir mi pack {selectedPack} ahora</span>
              </CTAButton>

              {/* Micro-evidencia */}
              <div className="text-center text-xs sm:text-sm text-gray-300 space-y-1">
                <p>✓ Envío a toda España en 24-48h</p>
                <p>✓ Garantía de satisfacción 30 días</p>
                <p>✓ Pago seguro con tarjeta o PayPal</p>
              </div>

              {/* Stock Warning */}
              <div className="flex items-center gap-2 sm:gap-3 bg-amber-warning/20 border border-amber-warning rounded-lg p-3 sm:p-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-warning flex-shrink-0" />
                <p className="text-amber-warning font-montserrat font-semibold text-xs sm:text-sm md:text-base">
                  ⚠️ Stock limitado: Solo quedan pocas unidades disponibles
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative order-first lg:order-last mb-6 lg:mb-0">
              <div className="absolute inset-0 bg-orange-cta rounded-xl sm:rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={productImage}
                  alt="Pack 3x1 Cinta Selladora Ultra 2025 - Tres rollos de cinta impermeable"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
