import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const heroSectionPath = resolve(root, "src/components/sections/HeroSection.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");
const heroImagePath = resolve(root, "public/portfolio/advokat-hero.png");

test("hero section component exists with required copy", () => {
  assert.equal(existsSync(heroSectionPath), true);
  const content = readFileSync(heroSectionPath, "utf-8");

  assert.match(
    content,
    /Web stranice koje vaš biznis čine ozbiljnim[\s\S]*i dovode nove klijente/,
  );
  assert.match(content, /advokatima, klinikama,[\s\S]*konzultantima/);
});

test("hero section includes both CTA links", () => {
  const content = readFileSync(heroSectionPath, "utf-8");
  assert.match(content, /href="\/kontakt"/);
  assert.match(content, /href="#portfolio"/);
});

test("hero section includes proof strip items", () => {
  const content = readFileSync(heroSectionPath, "utf-8");
  assert.match(content, /95\+ Lighthouse/);
  assert.match(content, /1\.9s LCP/);
  assert.match(content, /Odgovor u 24h/);
  assert.match(content, /Made in BiH/);
});

test("hero image uses priority and mobile hidden class", () => {
  const content = readFileSync(heroSectionPath, "utf-8");
  assert.match(content, /src="\/portfolio\/advokat-hero\.png"/);
  assert.match(content, /priority/);
  assert.match(content, /hidden md:block/);
});

test("homepage uses HeroSection in main wrapper", () => {
  const content = readFileSync(homePagePath, "utf-8");
  assert.match(content, /import \{ HeroSection \} from "@\/components\/sections\/HeroSection"/);
  assert.match(content, /<main>/);
  assert.match(content, /<HeroSection \/>/);
});

test("hero screenshot asset exists in public folder", () => {
  assert.equal(existsSync(heroImagePath), true);
});
