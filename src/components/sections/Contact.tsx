"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SITE, CONTACT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    if (formData.get("website")) return;
    setError(null);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    if (!name) {
      setError("Ime i prezime je obavezno.");
      return;
    }
    if (!email) {
      setError("Email je obavezan.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Unesite ispravan email.");
      return;
    }
    if (!message) {
      setError("Poruka je obavezna.");
      return;
    }
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
          `Upit sa webora.ba: ${formData.get("projectType") || "Opšte"}`
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
      className="relative section-pad section-bg-alt overflow-hidden scroll-mt-24 section-border"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="max-w-container mx-auto px-6 relative z-10">
        <SectionHeading
          id="contact-heading"
          label="Kontakt"
          variant="dark"
          title={CONTACT.title}
          subtitle={CONTACT.subtitle}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {submitted ? (
              <div className="rounded-card bg-success/10 border border-success/30 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 animate-check-pop">
                  <Check className="w-7 h-7 text-success" strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-success text-lg">
                  Hvala! Javit ćemo vam se u roku od 24 sata.
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Uobičajeni vremenski raspon odgovora je između 2 i 8 radnih sati.
                </p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-3.5" noValidate>
                <div className="absolute -left-[9999px] top-0" aria-hidden>
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="rounded-2xl border border-border-dark bg-surface-dark/80 p-6 md:p-8 shadow-soft-lg space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-text-secondary mb-1.5">Ime i prezime *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="Vaše ime" disabled={pending} className="w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] placeholder:text-text-muted disabled:opacity-60 disabled:cursor-not-allowed" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-text-secondary mb-1.5">Email *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="vas@email.com" disabled={pending} className="w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] placeholder:text-text-muted disabled:opacity-60 disabled:cursor-not-allowed" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs text-text-secondary mb-1.5">Telefon</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+387..." disabled={pending} className="w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] placeholder:text-text-muted disabled:opacity-60 disabled:cursor-not-allowed" />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="block text-xs text-text-secondary mb-1.5">Tip projekta</label>
                    <select id="contact-type" name="projectType" disabled={pending} className="w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] disabled:opacity-60 disabled:cursor-not-allowed">
                      {CONTACT.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface-dark text-text-secondary">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-text-secondary mb-1.5">Poruka *</label>
                  <textarea id="contact-message" name="message" required rows={4} placeholder="Opišite vaš projekat..." disabled={pending} className="w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] placeholder:text-text-muted resize-none h-[110px] disabled:opacity-60 disabled:cursor-not-allowed" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full min-h-touch py-3.5 mt-1.5 bg-accent hover:bg-accent-hover text-white rounded-button font-semibold text-[15px] shadow-cta hover:shadow-cta-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent"
                >
                  {pending ? "Šaljem..." : CONTACT.submitLabel}
                </button>
                </div>
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
            <h3 className="text-lg font-semibold text-white-text mb-5">Kontakt informacije</h3>
            <ul className="space-y-0">
              <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-sm hover:text-white-text transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">✉️</div>
                <a href={`mailto:${SITE.email}`} className="hover:text-white-text">{SITE.email}</a>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-sm hover:text-white-text transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">📞</div>
                <span>{SITE.phone}</span>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-sm hover:text-white-text transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">📍</div>
                <span>{SITE.location}</span>
              </li>
              <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-sm hover:text-white-text transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">🕐</div>
                <span>{SITE.workingHours}</span>
              </li>
            </ul>
            <div className="h-px bg-white/[0.08] my-1.5 mb-5" />
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-card p-4 mb-5">
              <p className="text-accent text-sm font-semibold mb-0.5">⚡ Brzi odgovor</p>
              <p className="text-text-muted text-xs leading-relaxed">Odgovaramo na svaki upit u roku od 24 sata, obično i brže.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-card p-4">
              <h4 className="text-white-text font-semibold text-sm mb-3">Kako radimo</h4>
              <ol className="space-y-2">
                {CONTACT.howWeWork.map((step, i) => (
                  <li key={i} className="flex gap-2 text-text-secondary text-sm">
                    <span className="text-accent font-mono text-xs">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
