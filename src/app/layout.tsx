import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Izrada web stranica BiH | Web development i SEO — Webora",
    template: "%s | Webora",
  },
  description:
    "Profesionalna izrada web stranica u Bosni i Hercegovini. Brze, sigurne i SEO-optimizirane stranice za mala i srednja preduzeća. Besplatna procjena.",
  keywords: [
    "izrada web stranica BiH",
    "web development BiH",
    "izrada web stranica Sarajevo",
    "SEO optimizacija BiH",
    "poslovne web stranice",
    "Next.js web studio",
    "web dizajn Bosna i Hercegovina",
    "brze web stranice",
  ],
  authors: [{ name: "Webora" }],
  creator: "Webora",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: SITE.url,
    siteName: SITE.name,
    title: "Izrada web stranica BiH | Web development i SEO — Webora",
    description:
      "Profesionalna izrada web stranica u BiH. Brze, sigurne i SEO-optimizirane stranice za poslovanje. Besplatna procjena.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webora — izrada web stranica i web development BiH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izrada web stranica BiH | Webora",
    description:
      "Brze, sigurne i SEO-optimizirane web stranice za BiH. Besplatna procjena.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE.email,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressCountry: "BA",
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=document.documentElement;try{var s=localStorage.getItem('webora-theme');if(s==='light')t.classList.remove('dark');else t.classList.add('dark');}catch(e){t.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider>
        <a href="#main-content" className="skip-link">
          Preskoči na sadržaj
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCta />
        </ThemeProvider>
      </body>
    </html>
  );
}
