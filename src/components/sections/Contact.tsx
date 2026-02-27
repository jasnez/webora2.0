"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { SITE, CONTACT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      try {
        const res = await fetch(CONTACT.formAction, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setSubmitted(true);
        } else {
          const data = await res.json().catch(() => ({}));
          setError(data.error || "Nešto nije u redu. Pokušajte ponovo.");
        }
      } catch {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const subject = encodeURIComponent(
          `Upit sa webora.cc: ${formData.get("projectType") || "Opšte"}`
        );
        const body = encodeURIComponent(
          `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    });
  }

  return (
    <section
      id="kontakt"
      className="relative py-section lg:py-section-lg bg-[#0F172A] overflow-hidden scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden />
      <div className="max-w-container mx-auto px-6 relative z-10 py-22">
        <SectionHeading
          id="contact-heading"
          label="Kontakt"
          variant="dark"
          title={CONTACT.title}
          subtitle={CONTACT.subtitle}
        />
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-[72px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {submitted ? (
              <div className="rounded-card bg-success/10 border border-success/20 p-8 text-center">
                <p className="font-display font-semibold text-success">
                  Hvala! Javit ćemo vam se u roku od 24 sata.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Uobičajeni vremenski raspon odgovora je između 2 i 8 radnih sati.
                </p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-3.5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[12.5px] text-[#94A3B8] mb-1.5">Ime i prezime *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="Vaše ime" className="w-full py-3 px-4 bg-white/[0.04] border border-white/[0.08] rounded-[10px] text-[#F1F5F9] text-[14px] outline-none transition-all focus:border-[#6366F1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] placeholder:text-[#475569]" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[12.5px] text-[#94A3B8] mb-1.5">Email *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="vas@email.com" className="w-full py-3 px-4 bg-white/[0.04] border border-white/[0.08] rounded-[10px] text-[#F1F5F9] text-[14px] outline-none transition-all focus:border-[#6366F1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] placeholder:text-[#475569]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[12.5px] text-[#94A3B8] mb-1.5">Telefon</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+387..." className="w-full py-3 px-4 bg-white/[0.04] border border-white/[0.08] rounded-[10px] text-[#F1F5F9] text-[14px] outline-none transition-all focus:border-[#6366F1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] placeholder:text-[#475569]" />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="block text-[12.5px] text-[#94A3B8] mb-1.5">Tip projekta</label>
                    <select id="contact-type" name="projectType" className="w-full py-3 px-4 bg-white/[0.04] border border-white/[0.08] rounded-[10px] text-[#F1F5F9] text-[14px] outline-none transition-all focus:border-[#6366F1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]">
                      {CONTACT.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0F172A] text-[#475569]">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[12.5px] text-[#94A3B8] mb-1.5">Poruka *</label>
                  <textarea id="contact-message" name="message" required rows={4} placeholder="Opišite vaš projekat..." className="w-full py-3 px-4 bg-white/[0.04] border border-white/[0.08] rounded-[10px] text-[#F1F5F9] text-[14px] outline-none transition-all focus:border-[#6366F1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] placeholder:text-[#475569] resize-none h-[110px]" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={pending} className="w-full py-3.5 mt-1.5 bg-[#6366F1] text-white rounded-[10px] font-semibold text-[15px] shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:bg-[#818CF8] transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {pending ? "Šaljem..." : "Pošalji upit →"}
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-[17px] font-semibold text-[#F1F5F9] mb-5">Kontakt informacije</h3>
            <ul className="space-y-0">
              <li className="flex gap-3.5 items-center mb-4 text-[#94A3B8] text-[13.5px] hover:text-[#F1F5F9] transition-colors">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[15px] flex-shrink-0">✉️</div>
                <a href={`mailto:${SITE.email}`} className="hover:text-[#F1F5F9]">{SITE.email}</a>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-[#94A3B8] text-[13.5px] hover:text-[#F1F5F9] transition-colors">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[15px] flex-shrink-0">📞</div>
                <span>{SITE.phone}</span>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-[#94A3B8] text-[13.5px] hover:text-[#F1F5F9] transition-colors">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[15px] flex-shrink-0">📍</div>
                <span>{SITE.location}</span>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-[#94A3B8] text-[13.5px] hover:text-[#F1F5F9] transition-colors">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[15px] flex-shrink-0">🕐</div>
                <span>{SITE.workingHours}</span>
              </li>
            </ul>
            <div className="h-px bg-white/[0.08] my-1.5 mb-5" />
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
              <p className="text-[#818CF8] text-[13px] font-semibold mb-0.5">⚡ Brzi odgovor</p>
              <p className="text-[#64748B] text-[12.5px] leading-relaxed">Odgovaramo na svaki upit u roku od 24 sata, obično i brže.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
