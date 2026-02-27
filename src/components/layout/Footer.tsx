import Link from "next/link";
import { SITE, NAV_LINKS, CTA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#080E1C] text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/#hero"
              className="font-display font-bold text-2xl flex items-center gap-1.5 text-white"
            >
              {SITE.name}
              <span className="w-2 h-2 rounded-full bg-indigo-400" aria-hidden />
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-md">
              {SITE.footerDescription}
            </p>
            <p className="mt-6 text-slate-500 text-sm">{SITE.madeWith}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">
              Navigacija
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.phone}</li>
              <li>{SITE.location}</li>
              <li>{SITE.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.
          </p>
          <Link
            href="#hero"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            {CTA.backHome}
          </Link>
        </div>
      </div>
    </footer>
  );
}
