import Image from "next/image";
import { Button } from "@/components/ui";

const proofItems = [
  { icon: "⚡", text: "95+ Lighthouse" },
  { icon: "🚀", text: "1.9s LCP" },
  { icon: "💬", text: "Odgovor u 24h" },
  { icon: "🇧🇦", text: "Made in BiH" },
];

export function HeroSection() {
  return (
    <>
      <section className="section-spacing bg-white" id="hero">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="heading-1 text-neutral-900 max-w-[540px]">
                Web stranice koje vaš biznis čine ozbiljnim
                <span className="text-brand-500"> — i dovode nove klijente</span>
              </h1>
              <p className="body-lg max-w-[480px]">
                Pomažem lokalnim firmama — advokatima, klinikama, konzultantima
                — da izgrade profesionalno online prisustvo kroz jednostavne,
                moderne i brze web stranice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/kontakt" variant="primary" size="lg">
                  Zatraži besplatnu procjenu
                </Button>
                <Button href="#portfolio" variant="outline" size="lg">
                  Pogledaj primjere
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/portfolio/advokat-hero.png"
                alt="Screenshot projekta Advokat Velika Kladuša"
                width={600}
                height={375}
                priority
                className="rounded-xl shadow-hover w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-neutral-200 bg-neutral-50 py-4">
        <div className="container-width">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            {proofItems.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-sm font-medium text-neutral-500"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
