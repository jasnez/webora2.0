/**
 * Webora — svi tekstovi, linkovi i konfiguracija na jednom mjestu.
 * Mijenjaj ovdje za ažuriranje sadržaja cijele stranice.
 */

export const SITE = {
  name: "Webora",
  url: "https://www.webora.ba",
  email: "info@webora.ba",
  phone: "+387 XX XXX XXX",
  location: "Bosna i Hercegovina",
  city: "Sarajevo",
  country: "BiH",
  workingHours: "Pon–Pet, 09:00–17:00",
  tagline: "Web stranice koje pretvaraju posjete u upite.",
  shortDescription:
    "Dizajn, Next.js razvoj i tehnički SEO optimizovani za brzinu, sigurnost i rast poslovanja.",
  footerDescription:
    "Web development studio specijaliziran za React i Next.js. Brze stranice, bez kompromisa.",
  madeWith: "Napravljeno sa ❤️ u BiH",
  privacyUrl: "/privacy",
} as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
] as const;

export const NAV_LINKS = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "Proces", href: "/#proces" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const CTA = {
  primary: "Zatraži besplatnu procjenu",
  secondary: "Pogledaj studije slučaja",
  contact: "Započni projekat",
  backHome: "Nazad na početnu",
  learnMore: "Saznaj više",
} as const;

/** Hero sekcija – usklađeno sa vizualom */
export const HERO = {
  title: "Izrada web stranica koje donose rezultate.",
  subtitle:
    "Moderni web sajtovi za profesionalce i male biznise koji žele više upita i kredibiliteta online.",
  primaryCta: "Zatraži besplatnu procjenu",
  secondaryCta: "Pogledaj portfolio",
  trustCopy: "Odgovaramo u roku od 24h · Bez obaveza",
  metricBadges: [
    { icon: "⚡", label: "Lighthouse 90+" },
    { icon: "🔐", label: "Enterprise sigurnost" },
    { icon: "📈", label: "SEO optimizacija" },
  ],
} as const;

/** Usluge – 3 paketa */
export const SERVICES = {
  title: "Šta radimo",
  subtitle: "Jasni paketi prilagođeni vašim ciljevima.",
  packages: [
    {
      id: "poslovna",
      title: "Poslovna web stranica",
      icon: "🌐",
      bullets: [
        "5–10 stranica",
        "SEO osnovna optimizacija",
        "Kontakt forma",
        "CMS ako je potreban",
      ],
    },
    {
      id: "seo-perf",
      title: "SEO + Performance paket",
      icon: "📊",
      bullets: [
        "Tehnički SEO audit",
        "Optimizacija brzine",
        "Schema implementacija",
        "Analytics setup",
      ],
    },
    {
      id: "custom",
      title: "Custom Web Rješenja",
      icon: "⚙️",
      bullets: [
        "Web aplikacije",
        "Interni sistemi",
        "Automatizacije",
      ],
    },
  ],
} as const;

/** Proces rada */
export const PROCESS = {
  title: "Kako radimo",
  subtitle: "Transparentan proces od prvog poziva do lansiranja.",
  steps: [
    {
      step: 1,
      title: "Konsultacija",
      description:
        "Razgovaramo o vašim ciljevima, publici i viziji. Analiziramo konkurenciju i definišemo strukturu sajta.",
    },
    {
      step: 2,
      title: "Dizajn i razvoj",
      description:
        "Kreiramo dizajn i kodiramo sajt. Vi pratite napredak i dajete feedback u svakoj fazi.",
    },
    {
      step: 3,
      title: "Testiranje",
      description:
        "Testiramo na svim uređajima i preglednicima. Optimiziramo brzinu i SEO prije objave.",
    },
    {
      step: 4,
      title: "Objava i podrška",
      description:
        "Lansiramo sajt i pružamo podršku. Pratimo performanse i pomažemo s budućim ažuriranjima.",
    },
  ],
} as const;

/** Portfolio projekti – sa metrikama */
export const PORTFOLIO = {
  title: "Naši radovi",
  subtitle: "Projekti koji govore za sebe.",
  items: [
    {
      id: "advokat-vk",
      title: "Advokat Velika Kladuša",
      description: "Web prezentacija za advokatsku kancelariju.",
      url: "https://www.advokatvelikakladusa.ba",
      technologies: ["Next.js", "Tailwind"],
      category: "Poslovne stranice",
      image: "",
      metrics: ["+38% više upita", "1.9s LCP", "95 Lighthouse"],
    },
    {
      id: "klinika-zdravlje",
      title: "Klinika Zdravlje",
      description: "Moderna stranica za privatnu kliniku.",
      url: "#",
      technologies: ["Next.js", "React"],
      category: "Zdravstvo",
      image: "",
      metrics: ["+25% konverzija", "2.1s LCP", "92 Lighthouse"],
    },
    {
      id: "restoran-dolina",
      title: "Restoran Dolina",
      description: "Elegantna stranica sa digitalnim menijima.",
      url: "#",
      technologies: ["Next.js", "Tailwind"],
      category: "Ugostiteljstvo",
      image: "",
      metrics: ["+40% rezervacija", "1.7s LCP", "94 Lighthouse"],
    },
    {
      id: "autoservis-pro",
      title: "AutoServis Pro",
      description: "Landing page za auto servis sa booking-om.",
      url: "#",
      technologies: ["React", "GSAP"],
      category: "Usluge",
      image: "",
      metrics: ["+30% upita", "2.0s LCP", "93 Lighthouse"],
    },
    {
      id: "studio-forma",
      title: "Studio Forma",
      description: "Portfolio za arhitektonski studio.",
      url: "#",
      technologies: ["Next.js", "Three.js"],
      category: "Arhitektura",
      image: "",
      metrics: ["+50% engagement", "2.2s LCP", "91 Lighthouse"],
    },
  ],
} as const;

/** Zašto Webora – 4 diferencijacije */
export const WHY_US = {
  title: "Zašto Webora?",
  items: [
    {
      title: "Brzina bez kompromisa",
      description: "Bez plugin overloada i WP bloata.",
      icon: "⚡",
    },
    {
      title: "Sigurnost na prvom mjestu",
      description: "Next.js + server-side kontrola.",
      icon: "🔐",
    },
    {
      title: "Mjerljivi rezultati",
      description: "Analytics, konverzije i performance tracking.",
      icon: "📊",
    },
    {
      title: "Direktna komunikacija",
      description: "Bez posrednika, bez outsourcinga.",
      icon: "🤝",
    },
  ],
} as const;

/** Testimonials – grad + industrija */
export const TESTIMONIALS = {
  title: "Šta kažu naši klijenti",
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

/** FAQ */
export const FAQ = {
  title: "Česta pitanja",
  items: [
    {
      question: "Koliko košta izrada web stranice?",
      answer:
        "Cijena zavisi od složenosti projekta. Kontaktirajte nas za besplatnu procjenu — rado ćemo razgovarati o vašim potrebama i budžetu.",
    },
    {
      question: "Koliko traje izrada?",
      answer:
        "Tipičan poslovni sajt je gotov za 2-4 sedmice, zavisno od složenosti i brzine dostave sadržaja. Složeniji projekti mogu trajati 4-8 sedmica.",
    },
    {
      question: "Šta je uključeno u cijenu?",
      answer:
        "Dizajn, razvoj, responsivnost, SEO optimizacija, testiranje, objava i kratki period post-launch podrške. Domena i hosting se obračunavaju zasebno.",
    },
    {
      question: "Zašto React/Next.js umjesto WordPressa?",
      answer:
        "WordPress je dobar za blogove, ali za poslovne stranice React/Next.js donosi značajno bolju brzinu, sigurnost i SEO performanse. Nema plugin konflikata, nema mjesečnih pretplata, nema sigurnosnih rupa.",
    },
    {
      question: "Da li mogu sam ažurirati sadržaj?",
      answer:
        "Da. Možemo integrirati jednostavan CMS (content management system) kao što je Sanity ili Payload, tako da možete sami mijenjati tekstove i slike bez poznavanja koda.",
    },
    {
      question: "Da li radite sa klijentima van BiH?",
      answer: "Apsolutno. Radimo remote sa klijentima iz cijele regije i šire.",
    },
  ],
} as const;

/** Kontakt forma */
export const CONTACT = {
  title: "Započnimo razgovor",
  subtitle: "Javite se — odgovaramo u roku od 24 sata.",
  submitLabel: "Započni projekat",
  projectTypes: [
    "Nova web stranica",
    "Redizajn",
    "Web aplikacija",
    "Ostalo",
  ] as const,
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
  howWeWork: [
    "Kratki uvodni poziv (15 min)",
    "Procjena i plan",
    "Implementacija",
  ],
} as const;

