"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-pad section-bg-alt-b section-separator scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3 flex items-center gap-2.5">
            <span className="w-5 h-px bg-accent" />
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-white-text mb-3"
          >
            {FAQ_DATA.title}
          </h2>
          <p className="text-text-secondary text-lg">
            Odgovori na najčešća pitanja o izradi web stranica i našim uslugama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {FAQ_DATA.items.map((faq, i) => (
            <div
              key={faq.question}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(open === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(open === i ? null : i);
                }
              }}
              className={`bg-surface border rounded-card p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                open === i
                  ? "border-accent shadow-cta"
                  : "border-border-dark hover:border-accent/50 hover:shadow-card-hover"
              }`}
              aria-expanded={open === i}
            >
              <div className="flex justify-between items-start gap-3">
                <span
                  className={`font-medium text-[15px] transition-colors ${
                    open === i ? "text-accent" : "text-white-text"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === i
                      ? "bg-accent border-accent text-white rotate-45"
                      : "border-border-dark text-text-muted"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden />
                </div>
              </div>
              {open === i && (
                <p className="mt-4 pt-4 border-t border-border-dark text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
