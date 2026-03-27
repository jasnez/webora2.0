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
export const testimonials: Testimonial[] = [];
