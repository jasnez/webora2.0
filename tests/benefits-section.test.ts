import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const benefitsPath = resolve(root, "src/components/sections/BenefitsSection.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");

test("BenefitsSection exists with outcome-focused copy and layout classes", () => {
  assert.equal(existsSync(benefitsPath), true);
  const content = readFileSync(benefitsPath, "utf-8");

  assert.match(content, /export function BenefitsSection/);
  assert.match(content, /id="benefiti"/);
  assert.match(
    content,
    /Jednostavno rješenje za profesionalan online nastup/,
  );
  assert.match(content, /Šta dobijate/);
  assert.match(
    content,
    /Stranica koja ostavlja ozbiljan i moderan utisak na svakog posjetioca/,
  );
  assert.match(
    content,
    /Posjetioci brzo pronalaze informacije i bez trenja kontaktiraju vas/,
  );
  assert.match(
    content,
    /Svaki dio stranice vodi ka upitu — od prve sekunde do kontakta/,
  );
  assert.match(content, /Profesionalan izgled/);
  assert.match(content, /Jasna struktura/);
  assert.match(content, /Fokus na klijente/);
  assert.match(content, /grid-cols-1 md:grid-cols-3 gap-8/);
  assert.match(content, /max-w-\[300px\]/);
  assert.match(content, /w-14 h-14/);
  assert.match(content, /rounded-full/);
  assert.match(content, /bg-brand-50/);
});

test("homepage includes BenefitsSection after ProblemSection and omits Services", () => {
  const content = readFileSync(homePagePath, "utf-8");
  assert.match(
    content,
    /import \{ BenefitsSection \} from "@\/components\/sections\/BenefitsSection"/,
  );
  assert.match(content, /<BenefitsSection \/>/);
  assert.doesNotMatch(content, /<Services \/>/);

  const problemIdx = content.indexOf("<ProblemSection />");
  const benefitsIdx = content.indexOf("<BenefitsSection />");
  const processIdx = content.indexOf("<Process />");
  assert.ok(problemIdx !== -1 && benefitsIdx !== -1 && processIdx !== -1);
  assert.ok(problemIdx < benefitsIdx && benefitsIdx < processIdx);
});
