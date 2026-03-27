import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const pricingPath = resolve(root, "src/components/sections/PricingSection.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");

test("PricingSection exists with packages, copy, and layout", () => {
  assert.equal(existsSync(pricingPath), true);
  const content = readFileSync(pricingPath, "utf-8");

  assert.match(content, /export function PricingSection/);
  assert.match(content, /id="paketi"/);
  assert.match(content, /Jednostavni paketi — bez komplikacija/);
  assert.match(content, /od 500 KM/);
  assert.match(content, /od 1\.200 KM/);
  assert.match(content, /od 2\.000 KM/);
  assert.match(content, /Najpopularniji/);
  assert.match(
    content,
    /Sve cijene su okvirne\. Finalna cijena zavisi od zahtjeva projekta/,
  );
  assert.match(content, /Procjena je besplatna/);
  assert.match(content, /href="\/kontakt"/);
  assert.match(content, /grid-cols-1/);
  assert.match(content, /md:grid-cols-3/);
  assert.match(content, /gap-6/);
  assert.match(content, /items-stretch/);
  assert.match(content, /scale-105/);
  assert.match(content, /border-brand-500/);
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
