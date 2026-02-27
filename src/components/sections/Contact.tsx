"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
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
      className="py-section lg:py-section-lg bg-surface/60 dark:bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="contact-heading"
          title={CONTACT.title}
          subtitle={CONTACT.subtitle}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                <p className="mt-2 text-sm text-text-secondary">
                  Uobičajeni vremenski raspon odgovora je između 2 i 8 radnih sati.
                </p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Ime i prezime *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-slot"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Predloženi termin za sastanak
                  </label>
                  <input
                    id="contact-slot"
                    name="preferredTime"
                    type="datetime-local"
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <p className="mt-1 text-xs text-text-secondary">
                    Opcionalno — predložite vrijeme za kratki online sastanak.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="email@primjer.ba"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Telefon
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+387 XX XXX XXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Tip projekta
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    {CONTACT.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-primary mb-1.5"
                  >
                    Poruka *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-button border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-y min-h-[120px]"
                    placeholder="Opišite vaš projekat ili pitanje..."
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full sm:w-auto px-8 py-3 rounded-button bg-success text-white font-display font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {pending ? "Šaljem..." : "Pošalji upit"}
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="font-display font-semibold text-primary dark:text-white mb-4">
                Kontakt informacije
              </h3>
              <ul className="space-y-4 text-text-secondary dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 text-accent flex-shrink-0"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-5 h-5 text-accent flex-shrink-0"
                    aria-hidden
                  />
                  <span>{SITE.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin
                    className="w-5 h-5 text-accent flex-shrink-0"
                    aria-hidden
                  />
                  <span>{SITE.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock
                    className="w-5 h-5 text-accent flex-shrink-0"
                    aria-hidden
                  />
                  <span>{SITE.workingHours}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
