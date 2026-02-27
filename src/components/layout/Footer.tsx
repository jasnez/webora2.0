import Link from "next/link";
import { SITE, NAV_LINKS, CTA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#080E1C] text-[#94A3B8] mt-auto border-t border-white/[0.04]">
      <div className="max-w-container mx-auto px-6 py-11">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-7 border-b border-white/[0.04]">
          <div className="max-w-[280px]">
            <Link href="/#hero" className="text-[20px] font-bold text-[#F1F5F9] flex items-center gap-1">
              {SITE.name}
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shadow-[0_0_10px_#6366F1]" aria-hidden />
            </Link>
            <p className="mt-2.5 text-[13px] text-[#64748B] leading-[1.55]">
              {SITE.footerDescription}
            </p>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-[#475569] mb-3.5">Navigacija</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-[13px] text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-[#475569] mb-3.5">Kontakt</h3>
            <ul className="space-y-2 text-[13px] text-[#94A3B8]">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-[#F1F5F9] transition-colors">{SITE.email}</a></li>
              <li>{SITE.phone}</li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-[12px] text-[#475569]">
          <span>© {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.</span>
          <span>{SITE.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
