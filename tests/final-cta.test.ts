import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const finalCtaPath = resolve(root, "src/components/sections/FinalCTA.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");

test("FinalCTA exists with dark style and required copy", () => {
  assert.equal(existsSync(finalCtaPath), true);
  const content = readFileSync(finalCtaPath, "utf-8");

  assert.match(content, /URGENCY_TEXT/);
  assert.match(content, /Slobodna 2 termina u aprilu/);
  assert.match(content, /bg="dark"/);
  assert.match(content, /Spremni da vaš biznis izgleda profesionalno\?/);
  assert.match(content, /Javite se — procjena je besplatna i bez obaveze\./);
  assert.match(content, /Zatraži besplatnu procjenu/);
  assert.match(content, /Odgovaramo u roku od 24 sata · Bez obaveze · Besplatna procjena/);
  assert.match(content, /variant="white"/);
  assert.match(content, /href="\/kontakt"/);
  assert.match(content, /max-w-\[560px\]/);
  assert.match(content, /text-center/);
});

test("homepage includes key sections in CTA-friendly order", () => {
  const content = readFileSync(homePagePath, "utf-8");
  assert.match(content, /import \{ FinalCTA \} from "@\/components\/sections\/FinalCTA"/);
  assert.match(content, /<FinalCTA \/>/);

  const heroIdx = content.indexOf("<HeroSection />");
  const problemIdx = content.indexOf("<ProblemSection />");
  const benefitsIdx = content.indexOf("<BenefitsSection />");
  const pricingIdx = content.indexOf("<PricingSection />");
  const portfolioIdx = content.indexOf("<PortfolioSection />");
  const processIdx = content.indexOf("<Process />");
  const finalIdx = content.indexOf("<FinalCTA />");

  assert.ok(heroIdx !== -1 && problemIdx !== -1 && benefitsIdx !== -1);
  assert.ok(pricingIdx !== -1 && portfolioIdx !== -1 && processIdx !== -1 && finalIdx !== -1);
  assert.ok(heroIdx < problemIdx && problemIdx < benefitsIdx);
  assert.ok(benefitsIdx < pricingIdx && pricingIdx < portfolioIdx);
  assert.ok(portfolioIdx < processIdx && processIdx < finalIdx);
});
