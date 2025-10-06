import { UrgencyTopBar } from "@/components/UrgencyTopBar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ClosingSection } from "@/components/ClosingSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyTopBar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ComparisonSection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <ClosingSection />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
