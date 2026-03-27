export interface Testimonial {
  id: string;
  quote: string;
  name: string; // puno ime — OBAVEZNO
  role: string; // titula ili opis
  company: string; // naziv firme — OBAVEZNO
  initials: string; // za avatar (npr. "MH")
}

// VAŽNO: Koristiti SAMO verifikovane testimonijale od stvarnih klijenata.
// Kontaktirati klijente za pisanu saglasnost.
// Dok nema potvrđenih testimonijala — ostaviti array prazan: []
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote:
      "Privremeni testimonial placeholder — zamijeniti stvarnom izjavom klijenta nakon odobrenja.",
    name: "Klijent 1 (placeholder)",
    role: "Direktor",
    company: "Naziv firme 1",
    initials: "K1",
  },
  {
    id: "placeholder-2",
    quote:
      "Privremeni testimonial placeholder — zamijeniti stvarnom izjavom klijenta nakon odobrenja.",
    name: "Klijent 2 (placeholder)",
    role: "Vlasnik",
    company: "Naziv firme 2",
    initials: "K2",
  },
  {
    id: "placeholder-3",
    quote:
      "Privremeni testimonial placeholder — zamijeniti stvarnom izjavom klijenta nakon odobrenja.",
    name: "Klijent 3 (placeholder)",
    role: "Menadžer",
    company: "Naziv firme 3",
    initials: "K3",
  },
];
