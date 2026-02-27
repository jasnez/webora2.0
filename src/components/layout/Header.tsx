"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS, CTA } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] py-3.5 px-6 md:px-10 flex items-center justify-between backdrop-blur-[16px] bg-bg-dark/90 border-b border-border-dark"
      aria-label="Glavna navigacija"
    >
      <Link
        href="/"
        className="text-[20px] font-bold text-white-text flex items-center gap-0.5"
        onClick={() => setIsOpen(false)}
      >
        {SITE.name}
        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-cta" aria-hidden />
      </Link>

      <nav className="hidden lg:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13.5px] text-text-secondary hover:text-white-text transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/kontakt"
          className="py-2 px-[18px] bg-accent hover:bg-accent-hover text-white rounded-button font-semibold text-[12.5px] shadow-cta hover:shadow-cta-hover transition-all duration-200"
        >
          {CTA.primary}
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden p-2 rounded-button text-white-text hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-bg-dark/98 border-b border-border-dark backdrop-blur-xl"
          >
            <div className="max-w-container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-text-secondary hover:text-white-text font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
                <Link
                href="/kontakt"
                className="py-2.5 px-[18px] bg-accent text-white rounded-button font-semibold text-center shadow-cta"
                onClick={() => setIsOpen(false)}
              >
                {CTA.primary}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
