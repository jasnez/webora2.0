export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  url: string | null;
  image: string;
  imageAlt: string;
  problem: string;
  solution: string;
  result: string | null;
  tags: string[];
  metrics: { label: string; value: string }[] | null;
  status: "live" | "wip";
}

export const projects: PortfolioProject[] = [
  {
    id: "advokat-kladusa",
    title: "Advokat Velika Kladuša",
    client: "Advokatska kancelarija",
    industry: "Pravo",
    url: "https://www.advokatvelikakladusa.ba",
    image: "/portfolio/advokat-kladusa.svg",
    imageAlt: "Screenshot stranice Advokat Velika Kladuša",
    problem:
      "Kancelarija nije imala online prisustvo - klijenti tražili kontakt direktno",
    solution: "Prezentacijska stranica fokusirana na usluge i kontakt",
    result: "+38% više upita putem weba",
    tags: ["Next.js", "Tailwind CSS"],
    metrics: [
      { label: "LCP", value: "1.9s" },
      { label: "Lighthouse", value: "95" },
    ],
    status: "live",
  },
  {
    id: "virtuall-np",
    title: "VirtuALL NP",
    client: "Content agencija",
    industry: "Digitalne usluge",
    url: "https://www.virtuall-np.com",
    image: "/portfolio/virtuall-np.svg",
    imageAlt: "Screenshot stranice VirtuALL NP",
    problem:
      "Agencija nudila kompleksne usluge bez jasne online prezentacije",
    solution: "Moderan sajt sa jasnom strukturom usluga, procesom i paketima",
    result: null,
    tags: ["Next.js", "Tailwind CSS"],
    metrics: null,
    status: "live",
  },
  {
    id: "webora",
    title: "Webora",
    client: "Vlastiti projekt",
    industry: "Web development",
    url: null,
    image: "/portfolio/webora-wip.svg",
    imageAlt: "Webora - projekt u izradi",
    problem: "Trebali smo vlastitu stranicu koja pokazuje šta radimo",
    solution: "Landing page optimizovan za konverziju - u izradi",
    result: null,
    tags: ["Next.js", "Tailwind CSS"],
    metrics: null,
    status: "wip",
  },
];
