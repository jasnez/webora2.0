import Link from "next/link";
import { SITE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="section-bg-base text-text-secondary mt-auto section-separator">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-8 border-b border-border-dark">
          <div className="max-w-[280px]">
            <Link href="/" className="text-xl font-bold text-white-text flex items-center gap-1.5">
              {SITE.name}
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-cta" aria-hidden />
            </Link>
            <p className="mt-2.5 text-[13px] text-text-muted leading-relaxed">
              {SITE.footerDescription}
            </p>
            <p className="mt-4 text-[12px] text-text-muted">
              {SITE.city}, {SITE.country}
            </p>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-wider text-text-muted mb-3.5">Navigacija</h3>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="min-h-touch flex items-center py-2 text-[13px] text-text-secondary hover:text-white-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-wider text-text-muted mb-3.5">Kontakt</h3>
            <ul className="space-y-2 text-[13px] text-text-secondary">
              <li>
                <a href={`mailto:${SITE.email}`} className="min-h-touch inline-flex items-center py-2 hover:text-white-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.phone}</li>
              <li>{SITE.location}</li>
            </ul>
          </div>
          {SOCIAL_LINKS.length > 0 && (
            <div>
              <h3 className="text-[11px] uppercase tracking-wider text-text-muted mb-3.5">Pratite nas</h3>
              <ul className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="min-h-touch min-w-[44px] inline-flex items-center justify-center text-text-secondary hover:text-white-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-[12px] text-text-muted">
          <span>© {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.</span>
          <div className="flex items-center gap-4">
            {SITE.privacyUrl && (
              <Link href={SITE.privacyUrl} className="min-h-touch inline-flex items-center py-2 hover:text-white-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button">
                Privacy policy
              </Link>
            )}
            <span>{SITE.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
