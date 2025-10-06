import { CheckCircle2, Scissors, Zap, Shield, Wrench, Clock } from "lucide-react";
import applicationDemo from "@/assets/application-demo.jpg";

const benefits = [
  {
    icon: Scissors,
    title: "Sella goteras, grietas y fugas en segundos",
    description: "Aplicación instantánea sin complicaciones"
  },
  {
    icon: Shield,
    title: "Funciona en tejados, terrazas, juntas y paredes",
    description: "Versátil para cualquier superficie"
  },
  {
    icon: Zap,
    title: "Resiste lluvia, sol, frío y viento",
    description: "Durabilidad extrema en todas las condiciones"
  },
  {
    icon: Wrench,
    title: "Sin obras ni herramientas",
    description: "Corta, pega y sella. Así de simple"
  },
  {
    icon: Clock,
    title: "Fuerte, impermeable y duradero",
    description: "Protección que realmente dura"
  },
  {
    icon: CheckCircle2,
    title: "Ahorra cientos en reparaciones",
    description: "Solución profesional a precio accesible"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="bg-hero-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white mb-4 sm:mb-6 px-2">
            Corta. Pega. Sella. <span className="text-blue-accent">¡Y olvídate del agua!</span>
          </h2>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mt-6 sm:mt-8 px-4">
            <span className="inline-block bg-blue-accent text-white px-4 sm:px-6 py-2 rounded-full font-montserrat font-semibold text-sm sm:text-base">
              Impermeable
            </span>
            <span className="inline-block bg-steel-gray text-white px-4 sm:px-6 py-2 rounded-full font-montserrat font-semibold text-sm sm:text-base">
              Sin obras
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">{benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-blue-accent transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-accent mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-montserrat font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-inter">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Application Demo Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-blue-accent rounded-xl sm:rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-accent">
              <img
                src={applicationDemo}
                alt="Aplicación fácil de la cinta selladora en 3 simples pasos"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
