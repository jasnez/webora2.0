/**
 * Webora — svi tekstovi, linkovi i konfiguracija na jednom mjestu.
 * Mijenjaj ovdje za ažuriranje sadržaja cijele stranice.
 */

export const SITE = {
  name: "Webora",
  url: "https://www.webora.ba",
  email: "info@webora.ba",
  phone: "+387 62 341 256",
  location: "Bosna i Hercegovina",
  city: "Sarajevo",
  country: "BiH",
  workingHours: "Pon–Pet, 09:00–17:00",
  tagline: "Web stranice koje donose upite i povjerenje.",
  shortDescription:
    "Izrada web stranica i web development u BiH — Next.js, SEO i brzina za rast poslovanja.",
  footerDescription:
    "Studio za izradu web stranica u BiH. Brze, sigurne stranice i tehnički SEO.",
  madeWith: "Napravljeno sa ❤️ u BiH",
  privacyUrl: "/privacy",
} as const;

export const SOCIAL_LINKS = [] as const;

export const NAV_LINKS = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "Proces", href: "/#proces" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const CTA = {
  primary: "Zatraži besplatnu procjenu",
  secondary: "Pogledaj reference",
  contact: "Pošalji upit",
  backHome: "Nazad na početnu",
  learnMore: "Saznaj više",
} as const;

/** Hero — benefit + ključna riječ za SEO */
export const HERO = {
  title: "Izrada web stranica u BiH koje donose upite i kredibilitet.",
  headlineShort: "Izrada web stranica u BiH koje donose upite i kredibilitet.",
  subtitle:
    "Brza isporuka · SEO optimizirano · Mobilno prilagođeno",
  primaryCta: "Zatraži besplatnu procjenu",
  secondaryCta: "Pogledaj reference",
  trustCopy: "Odgovor u roku od 24 sata · Bez obaveze",
  trustBenefits: [
    "Brzina i performanse",
    "SEO optimizacija",
    "Bez obaveze",
  ],
  metricBadges: [
    { icon: "⚡", label: "Lighthouse 90+" },
    { icon: "🔐", label: "Sigurnost" },
    { icon: "📈", label: "SEO" },
  ],
} as const;

/** Usluge — jasno za SEO i korisnika */
export const SERVICES = {
  title: "Usluge izrade web stranica",
  subtitle: "Jasni paketi za poslovne stranice, SEO i custom projekte.",
  packages: [
    {
      id: "poslovna",
      title: "Poslovna web stranica",
      icon: "🌐",
      bullets: [
        "5–10 stranica",
        "Osnovna SEO optimizacija",
        "Kontakt forma",
        "CMS po želji",
      ],
    },
    {
      id: "seo",
      title: "SEO i performanse",
      icon: "📊",
      bullets: [
        "Tehnički SEO audit",
        "Ubrzanje stranice",
        "Schema markup",
        "Analytics",
      ],
    },
    {
      id: "custom",
      title: "Custom web rješenja",
      icon: "⚙️",
      bullets: [
        "Web aplikacije",
        "Interni sistemi",
        "Automatizacije",
      ],
    },
  ],
} as const;

/** Proces — transparentno za povjerenje */
export const PROCESS = {
  title: "Kako radimo",
  subtitle: "Od prvog razgovora do objave — jasno i na vrijeme.",
  steps: [
    {
      step: 1,
      title: "Konsultacija",
      description:
        "Razgovaramo o ciljevima, publici i viziji. Analiza konkurencije i predlog strukture stranice.",
    },
    {
      step: 2,
      title: "Dizajn i razvoj",
      description:
        "Dizajn i razvoj stranice. Pratite napredak i dajete povratne informacije u svakoj fazi.",
    },
    {
      step: 3,
      title: "Testiranje",
      description:
        "Testiranje na uređajima i preglednicima. Optimizacija brzine i SEO prije objave.",
    },
    {
      step: 4,
      title: "Objava i podrška",
      description:
        "Objava stranice i kratka podrška nakon lansiranja. Pomoć pri budućim ažuriranjima.",
    },
  ],
} as const;

/** Portfolio — reference za povjerenje */
export const PORTFOLIO = {
  title: "Reference",
  subtitle: "Odabrani live projekti i vlastiti projekt u izradi.",
} as const;

/** Testimonials — povjerenje */
export const TESTIMONIALS = {
  title: "Šta kažu klijenti",
  items: [
    {
      quote:
        "Profesionalan pristup i brza isporuka. Preporučujem svima koji traže kvalitetan web.",
      name: "Amina S.",
      loc: "Sarajevo",
      industry: "Pravo",
      initials: "AS",
      rating: 5,
    },
    {
      quote:
        "Komunikacija na visokom nivou, sajt radi savršeno. Zadovoljni smo rezultatom.",
      name: "Marko K.",
      loc: "Banja Luka",
      industry: "Zdravstvo",
      initials: "MK",
      rating: 5,
    },
    {
      quote:
        "Od ideje do objave — sve transparentno i na vrijeme. Hvala Webora timu!",
      name: "Emir H.",
      loc: "Mostar",
      industry: "Ugostiteljstvo",
      initials: "EH",
      rating: 5,
    },
    {
      quote:
        "Sajt nam je donio značajno više upita. Investicija se isplatila u prvom mjesecu.",
      name: "Jasna N.",
      loc: "Tuzla",
      industry: "Usluge",
      initials: "JN",
      rating: 5,
    },
    {
      quote:
        "Konačno imamo moderan sajt koji izgleda profesionalno. Klijenti nas ozbiljnije shvataju.",
      name: "Dragan B.",
      loc: "Zenica",
      industry: "Arhitektura",
      initials: "DB",
      rating: 5,
    },
  ],
} as const;

/** FAQ — SEO i jasnoća */
export const FAQ = {
  title: "Česta pitanja o izradi web stranica",
  subtitle: "Odgovori na najčešća pitanja o izradi web stranica i našim uslugama.",
  items: [
    {
      question: "Koliko košta izrada web stranice?",
      answer:
        "Cijena ovisi o opsegu projekta. Nudimo besplatnu procjenu — razgovaramo o vašim potrebama i budžetu bez obaveze.",
    },
    {
      question: "Koliko traje izrada?",
      answer:
        "Tipična poslovna stranica 2–4 tjedna, ovisno o složenosti i dostavi sadržaja. Složeniji projekti 4–8 tjedana.",
    },
    {
      question: "Šta je uključeno u cijenu?",
      answer:
        "Dizajn, razvoj, responzivnost, osnovna SEO optimizacija, testiranje, objava i kratka podrška nakon objave. Domena i hosting se mogu ugovoriti zasebno.",
    },
    {
      question: "Zašto Next.js umjesto WordPressa?",
      answer:
        "Za poslovne stranice Next.js nudi bolju brzinu, sigurnost i SEO. Bez konflikata plugina i redovnih sigurnosnih zakrpa.",
    },
    {
      question: "Mogu li sam ažurirati sadržaj?",
      answer:
        "Da. Možemo uključiti jednostavan CMS tako da tekstove i slike možete mijenjati bez poznavanja koda.",
    },
    {
      question: "Radite li s klijentima izvan BiH?",
      answer: "Da. Radimo remote s klijentima iz regije i šire.",
    },
  ],
} as const;

/** Kontakt */
export const CONTACT_SECTION = {
  title: "Započnimo razgovor",
  subtitle: "Pošaljite upit — odgovaramo u roku od 24 sata.",
  submitLabel: "Pošalji upit",
  projectTypes: [
    "Nova web stranica",
    "Redizajn",
    "Web aplikacija",
    "Ostalo",
  ] as const,
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
  howWeWork: [
    "Kratki uvodni razgovor (15 min)",
    "Procjena i plan",
    "Implementacija",
  ],
} as const;

