import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const sectionPath = resolve(root, "src/components/sections/PortfolioSection.tsx");
const pagePath = resolve(root, "src/app/page.tsx");
const dataPath = resolve(root, "src/data/portfolio.ts");

test("PortfolioSection exists with requested heading, grid, and CTA", () => {
  assert.equal(existsSync(sectionPath), true);
  const content = readFileSync(sectionPath, "utf-8");

  assert.match(content, /Projekti koje sam realizovao/);
  assert.match(content, /Imate projekat na umu\?/);
  assert.match(content, /Razgovarajmo/);
  assert.match(content, /href="\/kontakt"/);
  assert.match(content, /grid-cols-1/);
  assert.match(content, /md:grid-cols-2/);
  assert.match(content, /lg:grid-cols-3/);
  assert.match(content, /gap-6/);
  assert.match(content, /aspect-\[16\/9\]/);
  assert.match(content, /bg-white\/80/);
  assert.match(content, /backdrop-blur-sm/);
});

test("PortfolioSection applies live/wip states and conditional metrics/link rendering", () => {
  const content = readFileSync(sectionPath, "utf-8");

  assert.match(content, /project\.status === "live".*hover:-translate-y-1/s);
  assert.match(content, /project\.status === "wip".*opacity-60 pointer-events-none/s);
  assert.match(content, /Uskoro/);
  assert.match(content, /metricSlots/);
  assert.match(content, /min-h-\[74px\]/);
  assert.match(content, /border-dashed/);
  assert.match(content, /project\.status === "live".*project\.url/s);
  assert.match(content, /Pogledaj stranicu →/);
});

test("homepage uses PortfolioSection component", () => {
  const content = readFileSync(pagePath, "utf-8");
  assert.match(
    content,
    /import \{ PortfolioSection \} from "@\/components\/sections\/PortfolioSection"/,
  );
  assert.match(content, /<PortfolioSection \/>/);
});

test("portfolio data includes 2 live and 1 wip; wip keeps metrics null", () => {
  const content = readFileSync(dataPath, "utf-8");
  assert.match(content, /status: "live"/);
  assert.match(content, /status: "wip"/);
  assert.match(content, /id: "advokat-kladusa"[\s\S]*metrics:\s*\[/);
  assert.match(content, /id: "virtuall-np"[\s\S]*metrics:\s*\[/);
  assert.match(content, /id: "webora"[\s\S]*metrics:\s*null/);
});
