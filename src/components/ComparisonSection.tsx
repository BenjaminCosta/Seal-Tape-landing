import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Tiempo de aplicación", tape: "60 segundos", obra: "1-3 días", silicona: "2-4 horas" },
  { feature: "Costo aproximado", tape: "Pack 3x1 €29", obra: "€200-500", silicona: "€50-80" },
  { feature: "Genera suciedad", tape: false, obra: true, silicona: false },
  { feature: "Durabilidad", tape: "5+ años", obra: "10+ años", silicona: "1-2 años" },
  { feature: "Resistencia UV/lluvia", tape: true, obra: true, silicona: false },
  { feature: "Fácil de remover", tape: true, obra: false, silicona: false },
];

export const ComparisonSection = () => {
  return (
    <section className="bg-hero-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton text-white mb-3 sm:mb-4 px-2">
            ¿Por qué elegir la <span className="text-orange-cta">Cinta Selladora</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-inter px-4">
            Compara y descubre por qué es la mejor solución
          </p>
        </div>

        <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden border-2 border-blue-accent shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-blue-accent">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-montserrat font-bold text-white text-xs sm:text-sm md:text-base">Característica</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center font-montserrat font-bold text-white bg-orange-cta text-xs sm:text-sm md:text-base">
                    Cinta Ultra 2025
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center font-montserrat font-bold text-white text-xs sm:text-sm md:text-base">Obra/Albañil</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center font-montserrat font-bold text-white text-xs sm:text-sm md:text-base">Silicona</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-inter font-semibold text-white text-xs sm:text-sm md:text-base">
                      {item.feature}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center bg-orange-cta/10">
                      {typeof item.tape === 'boolean' ? (
                        item.tape ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-white font-montserrat font-semibold text-xs sm:text-sm md:text-base">{item.tape}</span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                      {typeof item.obra === 'boolean' ? (
                        item.obra ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300 font-inter text-xs sm:text-sm md:text-base">{item.obra}</span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                      {typeof item.silicona === 'boolean' ? (
                        item.silicona ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300 font-inter text-xs sm:text-sm md:text-base">{item.silicona}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 px-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-inter">
            <span className="text-blue-accent font-semibold">3 rollos al precio de 1</span> — 
            protege toda tu casa por menos
          </p>
        </div>
      </div>
    </section>
  );
};
