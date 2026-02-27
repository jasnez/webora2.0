"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section
      id="zasto-mi"
      className="bg-surface-dark section-pad relative scroll-mt-24 border-t border-border-dark"
      aria-labelledby="why-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="why-heading"
          label="Zašto Webora"
          variant="dark"
          title={WHY_US.title}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_US.items.map((r, i) => (
            <motion.div
              key={r.title}
              className="bg-bg-dark/50 border border-border-dark rounded-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-accent/30 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="text-lg font-semibold text-white-text mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
