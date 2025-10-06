import { Scissors, Hand, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Scissors,
    number: "1",
    title: "Corta",
    description: "Mide y corta la cinta del largo que necesites"
  },
  {
    icon: Hand,
    number: "2",
    title: "Pega",
    description: "Retira el protector y presiona firmemente"
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Sella",
    description: "¡Listo! Totalmente impermeable al instante"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-problem-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton text-white mb-3 sm:mb-4 px-2">
            Cómo funciona en <span className="text-blue-accent">3 simples pasos</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-inter max-w-2xl mx-auto px-4">
            Sin obras, sin herramientas, sin complicaciones
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">{steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-6 sm:p-8 border-2 border-blue-accent/30 hover:border-blue-accent transition-all duration-300"
              >
                <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-orange-cta rounded-full flex items-center justify-center">
                  <span className="text-white font-anton text-xl sm:text-2xl">{step.number}</span>
                </div>
                
                <div className="mt-4 sm:mt-6 text-center">
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-accent mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-base sm:text-lg text-blue-accent font-montserrat font-semibold">
            ⚡ En menos de 60 segundos tu problema está resuelto
          </p>
        </div>
      </div>
    </section>
  );
};
