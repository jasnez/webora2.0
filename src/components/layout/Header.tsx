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
      className="fixed top-0 left-0 right-0 z-[100] py-3.5 px-6 md:px-10 flex items-center justify-between backdrop-blur-[16px] bg-[rgba(15,23,42,0.85)] border-b border-white/[0.06]"
      aria-label="Glavna navigacija"
    >
      <Link
        href="/#hero"
        className="text-[20px] font-bold text-[#F1F5F9] flex items-center gap-0.5"
        onClick={() => setIsOpen(false)}
      >
        {SITE.name}
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shadow-[0_0_10px_#6366F1]"
          aria-hidden
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13.5px] text-[#94A3B8] hover:text-[#F1F5F9] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#kontakt"
          className="py-2 px-[18px] bg-[#6366F1] text-white rounded-lg font-semibold text-[12.5px] shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:bg-[#818CF8] transition-all duration-[0.25s]"
        >
          {CTA.primary}
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden p-2 rounded-lg text-[#F1F5F9] hover:bg-white/10 transition-colors"
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
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-[rgba(15,23,42,0.98)] border-b border-white/[0.06] backdrop-blur-xl"
          >
            <div className="max-w-container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-[#94A3B8] hover:text-[#F1F5F9] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#kontakt"
                className="py-2.5 px-[18px] bg-[#6366F1] text-white rounded-lg font-semibold text-center shadow-[0_4px_16px_rgba(99,102,241,0.3)]"
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
