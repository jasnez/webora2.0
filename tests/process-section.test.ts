import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");
const processPath = resolve(root, "src/components/sections/Process.tsx");

test("Process section has new heading, subtitle and timeframes", () => {
  assert.equal(existsSync(processPath), true);
  const content = readFileSync(processPath, "utf-8");

  assert.match(content, /Jednostavan proces, bez komplikacija/);
  assert.match(content, /2–3 sedmice/);
  assert.match(content, /1–2 dana/);
  assert.match(content, /3–5 dana/);
  assert.match(content, /7–10 dana/);
  assert.match(content, /2–3 dana/);
});

test("Process section includes desktop dashed connectors and mobile layout", () => {
  const content = readFileSync(processPath, "utf-8");

  assert.match(content, /hidden/);
  assert.match(content, /md:flex/);
  assert.match(content, /border-dashed/);
  assert.match(content, /md:hidden/);
  assert.match(content, /w-10 h-10 rounded-full bg-neutral-900 text-white/);
  assert.match(content, /text-xs font-medium text-brand-500/);
});
