import { CloudRain } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="bg-problem-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <CloudRain className="w-16 h-16 sm:w-20 sm:h-20 text-blue-accent" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white mb-4 sm:mb-6 px-2">
          Lluvia, <span className="text-blue-accent">goteras</span> y humedad: el otoño no perdona
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto px-4">
          Cada año lo mismo: llega la lluvia y empiezan las filtraciones. Manchas, moho y reparaciones que cuestan una fortuna. Pero este año, puedes pararlo en segundos.
        </p>
      </div>
    </section>
  );
};
