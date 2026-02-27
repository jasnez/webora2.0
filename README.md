# Webora — web stranica v2

Production-ready web stranica za **Webora**, moderni web development studio iz BiH (React & Next.js).

## Pokretanje

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Šta uključuje

- **Next.js 14** (App Router), TypeScript, Tailwind CSS
- **Sekcije:** Hero, Usluge, Proces, Portfolio, Zašto mi, Testimonijali, FAQ, Kontakt
- **SEO:** metadata, Open Graph, Twitter cards, JSON-LD schema, sitemap.xml, robots.txt
- **Pristupačnost:** skip link, semantički HTML, labele na formama, fokus stanja
- **Animacije:** Framer Motion (scroll, hover, mobilni meni)
- **Sadržaj:** sve u `src/lib/constants.ts` — lako za ažuriranje

## Prije objave

1. **Kontakt forma**  
   U `src/lib/constants.ts` postavi `CONTACT.formAction` na svoj Formspree URL:  
   `https://formspree.io/f/TVOJ_FORM_ID`  
   (Besplatan nalog na [formspree.io](https://formspree.io).)

2. **Kontakt podaci**  
   U `constants.ts` ažuriraj `SITE.phone` i eventualno društvene mreže (`SOCIAL_LINKS`).

3. **OG slika**  
   Dodaj `public/og-image.png` (1200×630 px) za dijeljenje na društvenim mrežama.

4. **Favicon**  
   Zamijeni `src/app/favicon.ico` ili generiši set na [realfavicongenerator.net](https://realfavicongenerator.net).

5. **Portfolio slike**  
   Dodaj slike u `public/images/portfolio/` i u `constants.ts` u `PORTFOLIO.items` postavi `image: "/images/portfolio/ime.jpg"`.

6. **Google Search Console**  
   Nakon verifikacije domena u `src/app/layout.tsx` u metadata dodaj `verification: { google: 'TVOJ_ID' }`.

## Deployment (Vercel)

1. Push projekat na GitHub.
2. Na [vercel.com](https://vercel.com) → Add New Project → import repozitorija.
3. Framework: Next.js (auto). Deploy.

## Struktura

```
src/
├── app/           # layout, page, globals, sitemap, robots, not-found
├── components/
│   ├── layout/    # Header, Footer
│   ├── sections/ # Hero, Services, Process, Portfolio, WhyUs, Testimonials, FAQ, Contact
│   └── ui/       # Button, SectionHeading, Card
└── lib/
    └── constants.ts   # Svi tekstovi i konfiguracija
```

---

© 2026 Webora. Napravljeno sa ❤️ u BiH.
