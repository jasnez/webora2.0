"use client";

import { PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section
      id="proces"
      className="section-pad section-bg-base section-border scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="process-heading"
          label="Proces"
          variant="dark"
          title={PROCESS.title}
          subtitle={PROCESS.subtitle}
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          <div
            className="hidden lg:block absolute top-7 left-[14%] right-[14%] h-[1.5px] bg-accent/40 -translate-y-1/2 pointer-events-none"
            aria-hidden
          />
          {PROCESS.steps.map((step) => (
            <article key={step.step} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-cta relative z-[2]">
                {step.step}
              </div>
              <h3 className="text-[15px] font-semibold text-white-text mb-1.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
