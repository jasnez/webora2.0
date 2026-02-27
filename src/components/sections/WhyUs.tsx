"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section
      id="zasto-mi"
      className="py-section lg:py-section-lg bg-surface/70 dark:bg-slate-950"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading id="why-heading" title={WHY_US.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US.items.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex gap-4 p-6 rounded-3xl border border-white/40 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl hover:border-accent/40 hover:shadow-soft-lg transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/40 to-sky-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-50" aria-hidden />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
