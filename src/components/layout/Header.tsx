"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { SITE, NAV_LINKS, CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-soft"
          : "bg-white/80 dark:bg-slate-950/70 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Glavna navigacija"
        >
          <Link
            href="/#hero"
            className="font-display font-bold text-xl text-primary dark:text-white flex items-center gap-1.5"
            onClick={() => setIsOpen(false)}
          >
            <span>{SITE.name}</span>
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:bg-accent after:transition-transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#portfolio" variant="ghost" size="sm" className="hidden xl:inline-flex">
              {CTA.secondary}
            </Button>
            <Button href="#kontakt" variant="primary" size="sm">
              {CTA.primary} →
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-button text-primary dark:text-white hover:bg-surface/80 dark:hover:bg-slate-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-lg font-medium text-primary hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length }}
                className="pt-4"
              >
                <Button
                  href="#kontakt"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  {CTA.primary} →
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
