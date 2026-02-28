"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CTA } from "@/lib/constants";

const HERO_SCROLL_THRESHOLD = 0.6; // show after 60% of viewport scrolled

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * HERO_SCROLL_THRESHOLD;
      setVisible(pastHero);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden border-t border-border-dark bg-bg-base/95 backdrop-blur-xl py-3 px-4 cta-transition"
      role="complementary"
      aria-label="Brzi kontakt"
    >
      <div className="max-w-container mx-auto flex items-center justify-center gap-3">
        <Link
          href="/kontakt"
          className="flex-1 min-h-touch inline-flex items-center justify-center rounded-button font-semibold text-[14px] py-3 cta-transition text-white bg-[var(--cta-primary-bg)] hover:bg-[var(--cta-primary-bg-hover)] active:bg-[var(--cta-primary-bg-active)] shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 border-0"
        >
          {CTA.primary}
        </Link>
      </div>
    </div>
  );
}
