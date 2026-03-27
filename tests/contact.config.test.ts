import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { CONTACT } from "../src/config/contact";

const projectRoot = resolve(__dirname, "..");

function readProjectFile(relativePath: string) {
  return readFileSync(resolve(projectRoot, relativePath), "utf-8");
}

test("contact phone uses real number, not placeholder", () => {
  assert.equal(CONTACT.phone, "+387 62 341 256");
  assert.equal(CONTACT.phone.includes("XX"), false);
});

test("contact channels are clickable-ready", () => {
  const telHref = `tel:${CONTACT.phone.replace(/\s/g, "")}`;
  assert.match(telHref, /^tel:\+?\d+$/);

  if (CONTACT.whatsapp) {
    assert.match(CONTACT.whatsapp, /^\d+$/);
    assert.match(`https://wa.me/${CONTACT.whatsapp}`, /^https:\/\/wa\.me\/\d+$/);
  }
});

test("social links are removed or set to explicit profile URLs", () => {
  assert.equal(CONTACT.linkedin, null);
  assert.equal(CONTACT.twitter, null);
});

test("legacy placeholders are not present in source", () => {
  const constants = readProjectFile("src/lib/constants.ts");
  const footer = readProjectFile("src/components/layout/Footer.tsx");
  const contactSection = readProjectFile("src/components/sections/Contact.tsx");

  const content = `${constants}\n${footer}\n${contactSection}`;
  assert.equal(content.includes("XX XXX"), false);
  assert.equal(content.includes("https://linkedin.com"), false);
  assert.equal(content.includes("https://twitter.com"), false);
});
