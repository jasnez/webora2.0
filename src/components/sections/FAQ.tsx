"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Search as SearchIcon, Sparkles } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatAnswer, setChatAnswer] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return FAQ_DATA.items;
    const lower = query.toLowerCase();
    return FAQ_DATA.items.filter((item) =>
      item.question.toLowerCase().includes(lower) ||
      item.answer.toLowerCase().includes(lower)
    );
  }, [query]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const lower = chatInput.toLowerCase();
    const match = FAQ_DATA.items.find((item) =>
      item.question.toLowerCase().includes(lower)
    );
    if (match) {
      setChatAnswer(match.answer);
    } else {
      setChatAnswer(
        "Trenutno nemamo spreman tačan odgovor, ali najčešće odgovaramo u roku od 24 sata. Pošaljite nam detalje kroz kontakt formu i javit ćemo vam se sa konkretnim prijedlogom."
      );
    }
  };

  return (
    <section
      id="faq"
      className="py-section lg:py-section-lg scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="faq-heading"
          title={FAQ_DATA.title}
        />

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
            <input
              type="search"
              placeholder="Pretraži pitanja..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-button border border-border bg-white dark:bg-slate-900 pl-9 pr-3 py-2.5 text-sm text-text-primary dark:text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-slate-400">
            <HelpCircle className="h-4 w-4" />
            <span>Tip: postavi pitanje svojim riječima ili koristi chat‑bota ispod.</span>
          </div>
        </div>

        <div className="space-y-2 mb-8">
          {filtered.map((item) => {
            const originalIndex = FAQ_DATA.items.indexOf(item);
            const isOpen = openIndex === originalIndex;
            return (
              <motion.div
                key={item.question}
                className="rounded-card border border-border bg-white dark:bg-slate-900 overflow-hidden"
                initial={false}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display font-semibold text-primary dark:text-white hover:bg-surface/50 dark:hover:bg-slate-900/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : originalIndex)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${originalIndex}`}
                  id={`faq-question-${originalIndex}`}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-accent" />
                    {item.question}
                  </span>
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
                      id={`faq-answer-${originalIndex}`}
                      role="region"
                      aria-labelledby={`faq-question-${originalIndex}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-0 text-text-secondary dark:text-slate-300 text-sm leading-relaxed border-t border-border">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Jednostavan chat-bot za FAQ */}
        <div className="rounded-3xl border border-border bg-surface/70 dark:bg-slate-900/80 px-5 py-5 md:px-6 md:py-6 shadow-soft">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary dark:text-white">
                Pametni FAQ asistent
              </p>
              <p className="text-xs text-text-secondary dark:text-slate-400">
                Postavi kratko pitanje — pokušat ćemo ga uskladiti s postojećim odgovorima.
              </p>
            </div>
          </div>
          <form onSubmit={handleChatSubmit} className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Npr. Koliko traje izrada ili Da li radite sa inostranstvom?"
              className="flex-1 rounded-button border border-border bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-text-primary dark:text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-button bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors"
            >
              Pitaj
            </button>
          </form>
          {chatAnswer && (
            <p className="mt-3 text-sm text-text-secondary dark:text-slate-300">
              {chatAnswer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
