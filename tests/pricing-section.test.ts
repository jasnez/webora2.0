import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const pricingPath = resolve(root, "src/components/sections/PricingSection.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");

test("PricingSection: SaaS layout, cards, highlighted tier, legal copy", () => {
  assert.equal(existsSync(pricingPath), true);
  const content = readFileSync(pricingPath, "utf-8");

  assert.match(content, /export function PricingSection/);
  assert.match(content, /id="paketi"/);
  assert.match(content, /Jednostavni paketi — bez komplikacija/);
  assert.match(content, /lg:whitespace-nowrap/);
  assert.match(content, /od 600/);
  assert.match(content, /\bKM\b/);
  assert.match(content, /od 1\.200/);
  assert.match(content, /od 3\.000/);
  assert.match(content, /NAJPOPULARNIJE/);
  assert.match(content, /jednokratno/);
  assert.match(
    content,
    /Sve cijene su okvirne\. Finalna cijena zavisi od zahtjeva projekta/,
  );
  assert.match(content, /Procjena je besplatna/);
  assert.match(content, /\/kontakt\?paket=starter/);
  assert.match(content, /\/kontakt\?paket=profesionalni/);
  assert.match(content, /\/kontakt\?paket=growth/);
  assert.match(content, /max-w-\[(1100|1200)px\]/);
  assert.match(content, /grid-cols-1/);
  assert.match(content, /md:grid-cols-3/);
  assert.match(content, /pt-8/);
  assert.match(content, /rounded-2xl/);
  assert.match(content, /p-8/);
  assert.match(content, /hover:-translate-y-1/);
  assert.match(content, /items-stretch/);
  assert.match(content, /justify-between/);
  assert.match(content, /scale-105/);
  assert.match(content, /border-brand-500/);
  assert.match(content, /bg-neutral-900/);
});

test("PricingSection: trust line and unsure CTA", () => {
  const content = readFileSync(pricingPath, "utf-8");
  assert.doesNotMatch(content, /<table[\s>]/);
  assert.doesNotMatch(content, /Funkcija/);
  assert.match(content, /Bez skrivenih troškova/);
  assert.match(content, /Podrška uključena/);
  assert.match(content, /Brza isporuka/);
  assert.match(content, /Niste sigurni koji paket odabrati/);
  assert.match(content, /Kontaktirajte nas/);
  assert.match(content, /Počni s Starter paketom/);
  assert.match(content, /Razgovarajmo o Growth paketu/);
  assert.match(content, /Zatraži ponudu →/);
  assert.match(content, /Mobile responsive dizajn/);
});

test("homepage renders PricingSection between BenefitsSection and Process", () => {
  const content = readFileSync(homePagePath, "utf-8");
  assert.match(
    content,
    /import \{ PricingSection \} from "@\/components\/sections\/PricingSection"/,
  );
  assert.match(content, /<PricingSection \/>/);

  const benefitsIdx = content.indexOf("<BenefitsSection />");
  const pricingIdx = content.indexOf("<PricingSection />");
  const processIdx = content.indexOf("<Process />");
  assert.ok(benefitsIdx !== -1 && pricingIdx !== -1 && processIdx !== -1);
  assert.ok(benefitsIdx < pricingIdx && pricingIdx < processIdx);
});
