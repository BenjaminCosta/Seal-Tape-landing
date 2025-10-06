import { CTAButton } from "./CTAButton";
import { Shield, Clock, Zap } from "lucide-react";

export const ClosingSection = () => {
  return (
    <section className="relative gradient-dark py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-blue-accent opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-accent rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 sm:space-y-10">
          {/* Final Message */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white leading-tight px-2">
            No dejes que el agua arruine tu casa este otoño
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed px-4">
            Con la <span className="text-blue-accent font-semibold">Cinta Selladora Ultra 2025</span>, las goteras desaparecen en segundos y tu hogar queda protegido todo el año.
          </p>

          {/* Feature Highlights */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 my-8 sm:my-12">
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-accent rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-white text-base sm:text-lg">
                Sella en segundos
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Sin obras ni complicaciones
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-accent rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-white text-base sm:text-lg">
                Protege todo el año
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Resiste lluvia, sol y frío
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-cta rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-white text-base sm:text-lg">
                Oferta limitada 3x1
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Solo por tiempo limitado
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-4 sm:space-y-6">
            <CTAButton 
              size="xl" 
              className="w-full sm:w-auto sm:min-w-[400px] md:min-w-[500px] text-lg sm:text-xl md:text-2xl py-5 sm:py-6"
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              💧 Aprovechar el 3x1 ahora
            </CTAButton>
            
            <div className="text-xs sm:text-sm text-gray-300 font-inter space-y-1">
              <p>✓ Envío a toda España en 24-48h</p>
              <p>✓ Garantía de satisfacción 30 días</p>
              <p>✓ Pago seguro con tarjeta o PayPal</p>
              <p>✓ Stock limitado - Últimas unidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
