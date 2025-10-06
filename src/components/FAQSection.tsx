import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿En qué superficies puedo usar la cinta?",
    answer: "La Cinta Selladora Ultra 2025 funciona en chapa, teja, hormigón, PVC, madera, metal, cemento y prácticamente cualquier superficie. Es ideal para tejados, terrazas, juntas, canaletas, paredes y más."
  },
  {
    question: "¿Puedo aplicarla sobre superficie húmeda?",
    answer: "Sí, nuestra cinta tiene una fórmula especial que adhiere incluso sobre superficies ligeramente húmedas. Sin embargo, para mejores resultados, recomendamos secar el área antes de aplicar."
  },
  {
    question: "¿Resiste temperaturas extremas y rayos UV?",
    answer: "Absolutamente. La cinta resiste temperaturas de -40°C a +80°C y tiene protección UV incorporada, lo que garantiza que no se deteriore con el sol ni con el frío intenso."
  },
  {
    question: "¿Cuánto tiempo dura?",
    answer: "Con aplicación correcta, la cinta dura 5 años o más sin perder su efectividad. Resiste lluvias intensas, nieve, granizo y exposición solar continua."
  },
  {
    question: "¿Cómo la retiro si necesito cambiarla?",
    answer: "Simplemente despégala con cuidado. No deja residuos pegajosos y no daña la superficie. Es fácil de remover y reemplazar cuando sea necesario."
  },
  {
    question: "¿Ofrecen garantía?",
    answer: "Sí, ofrecemos garantía de satisfacción de 30 días. Si no estás 100% satisfecho, te devolvemos tu dinero sin preguntas."
  },
  {
    question: "¿Cuánto tarda el envío?",
    answer: "Enviamos a toda España en 24-48 horas. Recibirás un código de seguimiento para rastrear tu pedido en todo momento."
  },
  {
    question: "¿Por qué el pack 3x1?",
    answer: "El pack 3x1 te permite sellar múltiples áreas (tejado, terraza, tuberías) y tener un rollo de repuesto para emergencias. Ahorras dinero y proteges toda tu casa de una sola vez."
  }
];

export const FAQSection = () => {
  return (
    <section className="bg-problem-bg py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton text-white mb-3 sm:mb-4 px-2">
            Preguntas <span className="text-blue-accent">frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-inter px-4">
            Todo lo que necesitas saber antes de comprar
          </p>
        </div>

        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-white font-montserrat font-semibold hover:text-blue-accent text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 font-inter leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
