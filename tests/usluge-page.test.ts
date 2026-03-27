import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const uslugePagePath = resolve(root, "src/app/usluge/page.tsx");
const servicesPath = resolve(root, "src/components/sections/Services.tsx");
const constantsPath = resolve(root, "src/lib/constants.ts");

test("Usluge page exists with H1, subtitle, three anchored sections, and FAQ", () => {
  assert.equal(existsSync(uslugePagePath), true);
  const content = readFileSync(uslugePagePath, "utf-8");

  assert.match(content, /Usluge izrade web stranica/);
  assert.match(
    content,
    /Jasni paketi i jasne cijene — bez skrivenih troškova/,
  );

  assert.match(content, /id: "poslovna"/);
  assert.match(content, /id: "seo"/);
  assert.match(content, /id: "custom"/);
  assert.match(content, /id=\{svc\.id\}/);

  assert.match(content, /Advokati, klinike, konsultanti, restorani, serviseri/);
  assert.match(
    content,
    /Biznisi sa postojećom stranicom koji ne dobijaju upite iz Google-a/,
  );
  assert.match(
    content,
    /Firme sa specifičnim poslovnim procesima/,
  );

  assert.match(content, /od 600 KM/);
  assert.match(content, /od 300 KM/);
  assert.match(content, /Po dogovoru/);

  assert.match(content, /2–3 sedmice/);
  assert.match(content, /1–2 sedmice/);

  assert.match(content, /Zatraži ponudu/);
  assert.match(content, /Zatraži SEO audit/);
  assert.match(content, /Razgovarajmo/);

  assert.match(content, /Niste sigurni koji paket\?/);
  assert.match(content, /Kontaktirajte nas/);

  assert.match(content, /grid-cols-1/);
  assert.match(content, /md:grid-cols-2/);
  assert.match(content, /border-b/);

  assert.match(content, /faq-usluge|Česta pitanja|FAQ/);
});

test("Homepage Services cards link to /usluge with matching anchors", () => {
  const services = readFileSync(servicesPath, "utf-8");
  assert.match(services, /\/usluge#/);
  assert.match(services, /pkg\.id/);
  const constants = readFileSync(constantsPath, "utf-8");
  assert.match(constants, /id: "poslovna"/);
  assert.match(constants, /id: "seo"/);
  assert.match(constants, /id: "custom"/);
});
