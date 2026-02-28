"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { SITE, NAV_LINKS, CTA } from "@/lib/constants";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-3 px-6 md:px-10 flex items-center justify-between transition-all duration-300 min-h-touch bg-bg-dark/90 border-b border-border-dark ${
        scrolled ? "backdrop-blur-xl shadow-nav-scrolled" : "backdrop-blur-[16px]"
      }`}
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

      <nav className="hidden lg:flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`min-h-touch inline-flex items-center px-3 py-2 rounded-button text-[13.5px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "text-white-text font-medium bg-white/10"
                  : "text-text-secondary hover:text-white-text"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="min-h-touch min-w-[44px] flex items-center justify-center rounded-button text-white-text hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={theme === "dark" ? "Prebaci na svijetlu temu" : "Prebaci na tamnu temu"}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" aria-hidden /> : <Moon className="w-5 h-5" aria-hidden />}
        </button>
        <Link
          href="/kontakt"
          className="min-h-touch inline-flex items-center justify-center rounded-button font-semibold text-[13px] px-5 py-2.5 cta-transition text-white bg-[var(--cta-primary-bg)] hover:bg-[var(--cta-primary-bg-hover)] active:bg-[var(--cta-primary-bg-active)] shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ml-2 border-0"
        >
          {CTA.primary}
        </Link>
      </nav>

      <button
        type="button"
        className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-button text-white-text hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-bg-dark border-b border-border-dark backdrop-blur-xl shadow-nav-scrolled"
          >
            <div className="max-w-container mx-auto px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-touch flex items-center py-3 text-text-secondary hover:text-white-text font-medium transition-colors border-b border-border-dark/50 last:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="min-h-touch flex items-center gap-2 py-3 text-text-secondary hover:text-white-text font-medium transition-colors border-b border-border-dark/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button"
                aria-label={theme === "dark" ? "Prebaci na svijetlu temu" : "Prebaci na tamnu temu"}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" aria-hidden /> : <Moon className="w-5 h-5" aria-hidden />}
                <span>{theme === "dark" ? "Svijetla tema" : "Tamna tema"}</span>
              </button>
              <Link
                href="/kontakt"
                className="min-h-touch flex items-center justify-center py-3.5 mt-3 rounded-button font-semibold text-[15px] cta-transition text-white bg-[var(--cta-primary-bg)] hover:bg-[var(--cta-primary-bg-hover)] shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 border-0"
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
