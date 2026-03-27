import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const dataPath = resolve(root, "src/data/testimonials.ts");
const sectionPath = resolve(root, "src/components/sections/TestimonialsSection.tsx");
const pagePath = resolve(root, "src/app/page.tsx");

test("testimonials data uses typed interface and is empty by default", () => {
  assert.equal(existsSync(dataPath), true);
  const content = readFileSync(dataPath, "utf-8");

  assert.match(content, /export interface Testimonial/);
  assert.match(content, /name:\s*string/);
  assert.match(content, /company:\s*string/);
  assert.match(content, /initials:\s*string/);
  assert.match(content, /export const testimonials:\s*Testimonial\[\]\s*=\s*\[\s*\]/);
});

test("TestimonialsSection returns null when no testimonials", () => {
  assert.equal(existsSync(sectionPath), true);
  const content = readFileSync(sectionPath, "utf-8");

  assert.match(content, /if\s*\(testimonials\.length === 0\)\s*return null/);
  assert.match(content, /Šta kažu klijenti/);
  assert.match(content, /grid-cols-1/);
  assert.match(content, /md:grid-cols-2/);
  assert.match(content, /gap-6/);
});

test("homepage uses TestimonialsSection", () => {
  const content = readFileSync(pagePath, "utf-8");
  assert.match(
    content,
    /import \{ TestimonialsSection \} from "@\/components\/sections\/TestimonialsSection"/,
  );
  assert.match(content, /<TestimonialsSection \/>/);
  assert.doesNotMatch(content, /<Testimonials \/>/);
});
