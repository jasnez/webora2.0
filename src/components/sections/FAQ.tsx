"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#F0F4FF] py-20 md:py-28 scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-indigo-500 font-medium mb-3 flex items-center justify-center gap-2.5">
            <span className="w-5 h-px bg-indigo-500" />
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
          >
            Česta pitanja
          </h2>
          <p className="text-slate-500 text-lg">
            Odgovori na najčešća pitanja o našim uslugama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
              className={`bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                open === i
                  ? "border-indigo-500 shadow-md shadow-indigo-500/5"
                  : "border-[#DDE3F0] hover:border-indigo-200 hover:shadow-sm"
              }`}
              aria-expanded={open === i}
            >
              <div className="flex justify-between items-start gap-3">
                <span
                  className={`font-medium text-[15px] transition-colors ${
                    open === i ? "text-indigo-600" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === i
                      ? "bg-indigo-500 border-indigo-500 text-white rotate-45"
                      : "border-slate-200 text-slate-400"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden />
                </div>
              </div>
              {open === i && (
                <p className="mt-4 pt-4 border-t border-indigo-50 text-slate-500 text-sm leading-relaxed">
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
