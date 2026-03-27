import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

// UPOZORENJE: Ažurirati badge tekst svaki mjesec ručno!
const URGENCY_TEXT = "Slobodna 2 termina u aprilu";

export function FinalCTA() {
  return (
    <Section bg="dark" id="cta-final" className="scroll-mt-24 section-separator">
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <span className="mb-6 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
            {URGENCY_TEXT}
          </span>

          <h2 className="heading-2 mb-4 text-white">Spremni da vaš biznis izgleda profesionalno?</h2>
          <p className="mb-8 text-lg text-neutral-400">
            Javite se — procjena je besplatna i bez obaveze.
          </p>

          <Button href="/kontakt" variant="white" size="lg">
            Zatraži besplatnu procjenu
          </Button>

          <p className="mt-4 text-xs text-neutral-500">
            Odgovaramo u roku od 24 sata · Bez obaveze · Besplatna procjena
          </p>
        </div>
      </Container>
    </Section>
  );
}
