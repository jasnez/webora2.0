import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
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
      <Process />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
