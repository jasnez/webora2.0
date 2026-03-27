import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Process } from "@/components/sections/Process";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <PricingSection />
      <Process />
      <PortfolioSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
