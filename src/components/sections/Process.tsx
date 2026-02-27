"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section
      id="proces"
      className="py-section lg:py-section-lg"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="process-heading"
          title={PROCESS.title}
          subtitle={PROCESS.subtitle}
        />
        <div className="relative">
          {/* Vertical line (mobile) / Horizontal connector (desktop via grid) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" aria-hidden />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS.steps.map((step, index) => (
              <motion.article
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex flex-col items-center text-center lg:block lg:text-left">
                  <div className="w-12 h-12 rounded-full bg-accent text-white font-display font-bold flex items-center justify-center mb-5 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
