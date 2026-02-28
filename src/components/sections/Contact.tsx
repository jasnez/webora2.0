"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SITE, CONTACT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const inputFocus =
  "outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(85,88,227,0.2)] focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_rgba(85,88,227,0.2)] placeholder:text-text-muted disabled:opacity-60 disabled:cursor-not-allowed";

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
      className="relative section-pad section-bg-alt-a section-separator overflow-hidden scroll-mt-24"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-stretch">
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-border-dark bg-surface p-6 md:p-8 shadow-soft-lg min-h-full flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 animate-check-pop">
                  <Check className="w-7 h-7 text-success" strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-success text-lg">
                  Hvala! Javit ćemo vam se u roku od 24 sata.
                </p>
                <p className="mt-2 text-base text-text-secondary">
                  Uobičajeni vremenski raspon odgovora je između 2 i 8 radnih sati.
                </p>
              </div>
            ) : (
              <form action={handleSubmit} className="h-full flex flex-col min-h-0 flex-1" noValidate>
                <div className="absolute -left-[9999px] top-0" aria-hidden>
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="rounded-2xl border border-border-dark bg-surface p-6 md:p-8 shadow-soft-lg space-y-4 flex-1 flex flex-col min-h-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-text-secondary mb-1.5">Ime i prezime *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="Vaše ime" disabled={pending} className={`w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm ${inputFocus}`} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-text-secondary mb-1.5">Email *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="vas@email.com" disabled={pending} className={`w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm ${inputFocus}`} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs text-text-secondary mb-1.5">Telefon</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+387..." disabled={pending} className={`w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm ${inputFocus}`} />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="block text-xs text-text-secondary mb-1.5">Tip projekta</label>
                    <select id="contact-type" name="projectType" disabled={pending} className={`w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm ${inputFocus}`}>
                      {CONTACT.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface-dark text-text-secondary">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-text-secondary mb-1.5">Poruka *</label>
                  <textarea id="contact-message" name="message" required rows={4} placeholder="Opišite vaš projekat..." disabled={pending} className={`w-full py-3 px-4 bg-surface-dark/60 border border-border-dark rounded-button text-white-text text-sm resize-none h-[110px] ${inputFocus}`} />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div className="mt-auto pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={pending}
                    className="w-full py-3.5 text-[15px]"
                  >
                    {pending ? "Šaljem..." : CONTACT.submitLabel}
                  </Button>
                </div>
                </div>
              </form>
            )}
          </motion.div>
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="rounded-2xl border border-border-dark bg-surface p-6 md:p-8 shadow-soft-lg h-full flex flex-col min-h-0">
              <h3 className="text-lg font-semibold text-white-text mb-6">Kontakt informacije</h3>
              <ul className="space-y-0">
                <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-base hover:text-white-text transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-surface-dark/80 border border-border-dark flex items-center justify-center text-base flex-shrink-0">✉️</div>
                  <a href={`mailto:${SITE.email}`} className="min-h-touch inline-flex items-center py-1 hover:text-white-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-button">{SITE.email}</a>
                </li>
                <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-base hover:text-white-text transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-surface-dark/80 border border-border-dark flex items-center justify-center text-base flex-shrink-0">📞</div>
                  <span>{SITE.phone}</span>
                </li>
                <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-base hover:text-white-text transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-surface-dark/80 border border-border-dark flex items-center justify-center text-base flex-shrink-0">📍</div>
                  <span>{SITE.location}</span>
                </li>
                <li className="flex gap-3.5 items-center mb-4 text-text-secondary text-base hover:text-white-text transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-surface-dark/80 border border-border-dark flex items-center justify-center text-base flex-shrink-0">🕐</div>
                  <span>{SITE.workingHours}</span>
                </li>
              </ul>
              <div className="h-px bg-border-dark my-2 flex-shrink-0" />
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-5 flex-shrink-0">
                <p className="text-accent text-sm font-semibold mb-0.5">⚡ Brzi odgovor</p>
                <p className="text-text-muted text-xs leading-relaxed">Odgovaramo na svaki upit u roku od 24 sata, obično i brže.</p>
              </div>
              <div className="bg-surface-dark/60 border border-border-dark rounded-xl p-4 flex-1 min-h-0">
                <h4 className="text-white-text font-semibold text-sm mb-3">Kako radimo</h4>
                <ol className="space-y-2">
                  {CONTACT.howWeWork.map((step, i) => (
                    <li key={i} className="flex gap-2 text-text-secondary text-base">
                      <span className="text-accent font-mono text-xs">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
