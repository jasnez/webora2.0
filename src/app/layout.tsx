import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
      "Webora – Web development studio | Brze, sigurne i SEO-optimizovane stranice",
    template: "%s | Webora",
  },
  description:
    "Webora izrađuje moderne, brze i sigurne web stranice uz Next.js tehnologiju. Fokusirani smo na performanse, tehnički SEO i konverzije za mala i srednja preduzeća.",
  keywords: [
    "web development",
    "Next.js",
    "SEO optimizacija",
    "web stranice BiH",
    "izrada web stranica",
    "web dizajn",
    "React",
    "Bosna i Hercegovina",
    "web developer BiH",
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
    title: "Webora – Web development studio",
    description:
      "Brze, sigurne i SEO-optimizovane web stranice za profesionalce i mala preduzeća.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webora Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webora – Web development studio",
    description:
      "Brze, sigurne i SEO-optimizovane web stranice uz Next.js.",
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
    <html
      lang="bs"
      className={outfit.variable}
    >
      <head>
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
        <a href="#main-content" className="skip-link">
          Preskoči na sadržaj
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
