"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, CheckCircle2, Rocket } from "lucide-react";
import { PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [MessageCircle, PenTool, CheckCircle2, Rocket];

export function Process() {
  return (
    <section
      id="proces"
      className="py-section lg:py-section-lg bg-white dark:bg-slate-950"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="process-heading"
          title={PROCESS.title}
          subtitle={PROCESS.subtitle}
        />
        <div className="relative">
          <div
            className="hidden md:block absolute left-4 right-4 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent -translate-y-1/2"
            aria-hidden
          />
          <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-6">
            {PROCESS.steps.map((step, index) => {
              const Icon = icons[index] ?? MessageCircle;
              return (
                <motion.article
                  key={step.step}
                  className="relative flex-1"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className="relative flex flex-col items-start rounded-3xl bg-surface/80 dark:bg-slate-900/80 border border-border/70 dark:border-slate-800 px-6 py-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="text-xs font-semibold tracking-wide text-text-secondary uppercase">
                        Korak {step.step}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
