/**
 * Webora — svi tekstovi, linkovi i konfiguracija na jednom mjestu.
 * Mijenjaj ovdje za ažuriranje sadržaja cijele stranice.
 */

export const SITE = {
  name: "Webora",
  url: "https://www.webora.cc",
  email: "info@webora.cc",
  phone: "+387 XX XXX XXX",
  location: "Bosna i Hercegovina",
  workingHours: "Pon–Pet, 09:00–17:00",
  tagline: "Moderne web stranice koje donose rezultate.",
  shortDescription:
    "Kreiramo brze, sigurne i SEO-optimizirane web stranice koristeći React i Next.js.",
  footerDescription:
    "Web development studio specijaliziran za React i Next.js. Brze stranice, bez kompromisa.",
  madeWith: "Napravljeno sa ❤️ u BiH",
} as const;

export const NAV_LINKS = [
  { label: "Početna", href: "#hero" },
  { label: "Usluge", href: "#usluge" },
  { label: "Proces", href: "#proces" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const CTA = {
  primary: "Započni projekat",
  secondary: "Pogledaj radove",
  contact: "Pošalji upit",
  backHome: "Nazad na početnu",
} as const;

/** Hero sekcija */
export const HERO = {
  title: "Premium web iskustva za moderni biznis.",
  subtitle:
    "Sajtovi koji se učitavaju brzo, rangiraju bolje i pretvaraju posjetioce u klijente.",
  description:
    "Gradimo custom web rješenja na modernom stacku (Next.js) — bez teških tema, nepotrebnih pluginova i skrivenog bloatware‑a.",
  stats: [
    { value: "5+", label: "Realizovanih projekata" },
    { value: "100%", label: "Klijenata koji bi ponovo radili s nama" },
    { value: "3x", label: "Često brži od starog WordPress sajta" },
  ],
} as const;

/** Usluge */
export const SERVICES = {
  title: "Šta radimo",
  subtitle: "Od ideje do gotovog sajta — sve na jednom mjestu.",
  items: [
    {
      id: "web-dev",
      title: "Web Development",
      icon: "Code2",
      description:
        "Moderne, brze web stranice izgrađene sa React i Next.js. Optimizirane za performanse, SEO i konverzije.",
    },
    {
      id: "web-design",
      title: "Web Dizajn",
      icon: "Palette",
      description:
        "Vizuelno upečatljiv dizajn prilagođen vašem brendu. Responsivan na svim uređajima, od mobitela do desktopa.",
    },
    {
      id: "seo",
      title: "SEO Optimizacija",
      icon: "Search",
      description:
        "Tehnički SEO, meta tagovi, schema markup i optimizacija brzine. Budite vidljivi na Google-u od prvog dana.",
    },
    {
      id: "maintenance",
      title: "Održavanje i Podrška",
      icon: "Shield",
      description:
        "Redovno ažuriranje, sigurnosne zakrpe i tehnička podrška. Vaš sajt je uvijek u sigurnim rukama.",
    },
    {
      id: "web-apps",
      title: "Web Aplikacije",
      icon: "AppWindow",
      description:
        "Custom web aplikacije za specifične poslovne potrebe. Dashboardi, portali, booking sistemi i više.",
    },
    {
      id: "hosting",
      title: "Hosting i Domena",
      icon: "Cloud",
      description:
        "Pomoć pri odabiru i postavljanju domene, hostinga i SSL certifikata. Kompletno rješenje.",
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

/** Portfolio projekti */
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
    },
    {
      id: "klinika-zdravlje",
      title: "Klinika Zdravlje",
      description: "Moderna stranica za privatnu kliniku.",
      url: "#",
      technologies: ["Next.js", "React"],
      category: "Zdravstvo",
      image: "",
    },
    {
      id: "restoran-dolina",
      title: "Restoran Dolina",
      description: "Elegantna stranica sa digitalnim menijima.",
      url: "#",
      technologies: ["Next.js", "Tailwind"],
      category: "Ugostiteljstvo",
      image: "",
    },
    {
      id: "autoservis-pro",
      title: "AutoServis Pro",
      description: "Landing page za auto servis sa booking-om.",
      url: "#",
      technologies: ["React", "GSAP"],
      category: "Usluge",
      image: "",
    },
    {
      id: "studio-forma",
      title: "Studio Forma",
      description: "Portfolio za arhitektonski studio.",
      url: "#",
      technologies: ["Next.js", "Three.js"],
      category: "Arhitektura",
      image: "",
    },
  ],
} as const;

/** Zašto mi */
export const WHY_US = {
  title: "Zašto Webora?",
  items: [
    {
      title: "Brže od WordPressa",
      description:
        "React/Next.js stranice se učitavaju 2-5x brže. Brzina = bolje rangiranje na Google-u + bolji UX.",
      icon: "⚡",
    },
    {
      title: "Bez mjesečnih naknada za plugin-e",
      description:
        "Nema WordPress plugin pretplata, nema bloatware-a. Čist, lagan kod.",
      icon: "🧩",
    },
    {
      title: "SEO od prvog dana",
      description:
        "Svaki sajt gradimo sa SEO-om u temelju, ne kao naknadnu misao.",
      icon: "🔍",
    },
    {
      title: "Potpuno prilagođeno",
      description:
        "Nema šablona. Svaki sajt je dizajniran i kodiran specifično za vaš biznis.",
      icon: "✨",
    },
    {
      title: "Siguran i pouzdan",
      description:
        "Statički sajt = manja površina za napade. Plus HTTPS, moderno hostovanje na Vercelu.",
      icon: "🛡️",
    },
    {
      title: "Personaliziran pristup",
      description:
        "Mali studio, direktna komunikacija. Bez slanja između odjela i agenata.",
      icon: "🤝",
    },
  ],
} as const;

/** Testimonials (placeholder) */
export const TESTIMONIALS = {
  title: "Šta kažu naši klijenti",
  items: [
    {
      quote:
        "Profesionalan pristup i brza isporuka. Preporučujem svima koji traže kvalitetan web.",
      name: "Amina S.",
      loc: "Sarajevo",
      initials: "AS",
      rating: 5,
    },
    {
      quote:
        "Komunikacija na visokom nivou, sajt radi savršeno. Zadovoljni smo rezultatom.",
      name: "Marko K.",
      loc: "Banja Luka",
      initials: "MK",
      rating: 5,
    },
    {
      quote:
        "Od ideje do objave — sve transparentno i na vrijeme. Hvala Webora timu!",
      name: "Emir H.",
      loc: "Mostar",
      initials: "EH",
      rating: 5,
    },
    {
      quote:
        "Sajt nam je donio značajno više upita. Investicija se isplatila u prvom mjesecu.",
      name: "Jasna N.",
      loc: "Tuzla",
      initials: "JN",
      rating: 5,
    },
    {
      quote:
        "Konačno imamo moderan sajt koji izgleda profesionalno. Klijenti nas ozbiljnije shvataju.",
      name: "Dragan B.",
      loc: "Zenica",
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
  projectTypes: [
    "Nova web stranica",
    "Redizajn",
    "Web aplikacija",
    "Ostalo",
  ] as const,
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
} as const;

/** Social links (dodati kada budu dostupni) */
export const SOCIAL_LINKS: { label: string; href: string; icon: string }[] = [];
