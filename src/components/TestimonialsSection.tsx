import { Star } from "lucide-react";
import beforeAfter from "@/assets/before-after-comparison.jpg";

const testimonials = [
  {
    name: "María González",
    location: "Madrid",
    text: "Tapó una fuga en el tejado en segundos. No puedo creer lo fácil que fue. Ya no me preocupo cuando llueve.",
    rating: 5,
    surface: "Tejado de tejas",
    daysAgo: "45 días"
  },
  {
    name: "Carlos Ruiz",
    location: "Barcelona",
    text: "Lo puse en una unión de la terraza y no volvió a entrar agua. Resiste sol y lluvia perfectamente.",
    rating: 5,
    surface: "Terraza hormigón",
    daysAgo: "30 días"
  },
  {
    name: "Ana Martínez",
    location: "Valencia",
    text: "Resiste lluvia y sol, no se despega. Increíble. Debí comprarlo antes, me hubiera ahorrado mucho dinero.",
    rating: 5,
    surface: "Junta de ventana",
    daysAgo: "60 días"
  },
  {
    name: "Javier López",
    location: "Sevilla",
    text: "Perfecto para cualquier tipo de reparación. Lo he usado en tuberías, tejado y hasta en la piscina.",
    rating: 5,
    surface: "Múltiples superficies",
    daysAgo: "90 días"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-problem-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white mb-3 sm:mb-4 px-2">
            Miles de hogares ya la están usando <span className="text-blue-accent">este otoño</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-inter px-4">
            Únete a miles de personas que ya protegen sus casas
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-12 sm:mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-blue-accent shadow-2xl">
            <img
              src={beforeAfter}
              alt="Comparación antes y después de aplicar cinta selladora - gotera completamente sellada"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm md:text-base">
              Antes / Después
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">{testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-blue-accent transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-accent text-blue-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-gray-300 font-inter mb-3 sm:mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author & Context */}
              <div className="border-t border-border pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                <p className="font-montserrat font-semibold text-white text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-accent flex-wrap">
                  <span className="bg-blue-accent/20 px-2 py-0.5 sm:py-1 rounded text-xs">
                    {testimonial.surface}
                  </span>
                  <span>• {testimonial.daysAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
