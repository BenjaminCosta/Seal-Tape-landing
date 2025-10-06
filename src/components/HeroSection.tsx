import { CTAButton } from "./CTAButton";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-sealing-tape.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-bg flex items-center justify-center px-4 py-20 sm:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1681140348643-cfe70c047792?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=1920&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-bg/95"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton text-white leading-tight max-w-3xl">
              Elimina goteras y filtraciones en segundos con la{" "}
              <span className="text-blue-accent">Cinta Selladora Ultra 2025</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-inter max-w-2xl leading-relaxed">
              Sella techos, terrazas y juntas al instante. Resiste lluvia, frío y viento. Sin obras, sin esperas y ahora con un 3x1 exclusivo por tiempo limitado.
            </p>
            <div className="space-y-4 w-full max-w-md lg:max-w-none">
              <CTAButton 
                size="xl" 
                className="!text-sm sm:!text-base md:!text-lg lg:!text-xl"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🔥 Quiero mi pack 3x1 ahora
              </CTAButton>
              
              {/* Micro-evidencia */}
              <p className="text-xs sm:text-sm text-gray-300 font-inter text-center lg:text-left">
                ✓ Envío rápido · ✓ Garantía 30 días · ✓ Stock limitado
              </p>
            </div>
          </div>

          {/* Hero Image/Video with Blue Border and Play Icon */}
          <div className="relative mt-8 lg:mt-0 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-blue-accent rounded-xl sm:rounded-2xl blur-xl opacity-30"></div>
            <div className="relative border-2 sm:border-4 border-blue-accent rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Placeholder for video - user can replace with actual video */}
              <img
                src={heroImage}
                alt="Cinta selladora ultra deteniendo goteras - antes y después"
                className="w-full h-auto"
                loading="eager"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-accent rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                </div>
              </div>
              
              {/* When ready, replace img with:
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster={heroImage}
                className="w-full h-auto"
              >
                <source src="/video-hero.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-blue-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-blue-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
