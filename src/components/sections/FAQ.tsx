"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-section lg:py-section-lg"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="faq-heading"
          title={FAQ_DATA.title}
        />
        <div className="space-y-2">
          {FAQ_DATA.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="rounded-card border border-border bg-white overflow-hidden"
                initial={false}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display font-semibold text-primary hover:bg-surface/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  {item.question}
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-4 h-4" aria-hidden />
                    ) : (
                      <Plus className="w-4 h-4" aria-hidden />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-0 text-text-secondary text-sm leading-relaxed border-t border-border">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
