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
      "Webora | Web stranice koje pretvaraju posjete u upite",
    template: "%s | Webora",
  },
  description:
    "Dizajn, Next.js razvoj i tehnički SEO optimizovani za brzinu, sigurnost i rast poslovanja. Web development studio — Bosna i Hercegovina.",
  keywords: [
    "web development",
    "web dizajn",
    "React",
    "Next.js",
    "izrada web stranica",
    "Bosna i Hercegovina",
    "web developer BiH",
    "SEO optimizacija",
  ],
  authors: [{ name: "Webora" }],
  creator: "Webora",
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: SITE.url,
    siteName: SITE.name,
    title: "Webora | Web stranice koje pretvaraju posjete u upite",
    description:
      "Dizajn, Next.js i tehnički SEO. Brzina, sigurnost i mjerljivi rezultati.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webora - Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webora | Web stranice koje pretvaraju posjete u upite",
    description: "Dizajn, Next.js i tehnički SEO. Brzina i sigurnost.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description:
    "Web development studio specijaliziran za React i Next.js. Dizajn, razvoj i tehnički SEO.",
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressCountry: "BA",
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
