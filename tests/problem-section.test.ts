import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const problemSectionPath = resolve(root, "src/components/sections/ProblemSection.tsx");
const homePagePath = resolve(root, "src/app/page.tsx");

test("ProblemSection exists with required copy and structure", () => {
  assert.equal(existsSync(problemSectionPath), true);
  const content = readFileSync(problemSectionPath, "utf-8");

  assert.match(content, /export function ProblemSection/);
  assert.match(content, /id="problem"/);
  assert.match(content, /Zašto je to važno/);
  assert.match(
    content,
    /Ako vaša web stranica izgleda zastarjelo[\s\S]*gubite klijente/,
  );
  assert.match(content, /Vaši potencijalni klijenti vas prvo traže online/);
  assert.match(
    content,
    /Ako stranica ne izgleda profesionalno — odlaze konkurenciji/,
  );
  assert.match(
    content,
    /Loš prvi utisak znači izgubljeno povjerenje/,
  );
  assert.match(
    content,
    /Vaša web stranica nije samo informacija[\s\S]*ona je vaša reputacija/,
  );
  assert.match(content, /XCircle/);
  assert.match(content, /gap-4/);
  assert.match(content, /max-w-\[700px\]/);
  assert.match(content, /text-left md:text-center/);
});

test("ProblemSection uses muted background (neutral-50 via Section)", () => {
  const content = readFileSync(problemSectionPath, "utf-8");
  assert.match(content, /bg="muted"/);
});

test("homepage renders ProblemSection after HeroSection and before BenefitsSection", () => {
  const content = readFileSync(homePagePath, "utf-8");
  assert.match(content, /import \{ ProblemSection \} from "@\/components\/sections\/ProblemSection"/);
  const heroIdx = content.indexOf("<HeroSection />");
  const problemIdx = content.indexOf("<ProblemSection />");
  const benefitsIdx = content.indexOf("<BenefitsSection />");
  assert.ok(heroIdx !== -1 && problemIdx !== -1 && benefitsIdx !== -1);
  assert.ok(heroIdx < problemIdx && problemIdx < benefitsIdx);
});
