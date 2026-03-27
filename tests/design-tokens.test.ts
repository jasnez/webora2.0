import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const projectRoot = join(__dirname, "..");
const tailwindConfigPath = join(projectRoot, "tailwind.config.ts");
const globalsPath = join(projectRoot, "src", "app", "globals.css");

const HEX_REGEX = /#[0-9A-Fa-f]{3,8}\b/g;

function walkFiles(dirPath: string): string[] {
  const entries = readdirSync(dirPath);
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = join(dirPath, entry);
    const info = statSync(absolutePath);
    if (info.isDirectory()) {
      files.push(...walkFiles(absolutePath));
      continue;
    }
    files.push(absolutePath);
  }

  return files;
}

test("tailwind config defines design token scales", () => {
  const content = readFileSync(tailwindConfigPath, "utf-8");
  assert.match(content, /colors:\s*\{/);
  assert.match(content, /spacing:\s*\{/);
  assert.match(content, /fontSize:\s*\{/);
  assert.match(content, /fontFamily:\s*\{/);
  assert.match(content, /maxWidth:\s*\{/);
});

test("globals includes css variables and reusable utility classes", () => {
  const content = readFileSync(globalsPath, "utf-8");
  assert.match(content, /:root\s*\{/);
  assert.match(content, /--color-brand:/);
  assert.match(content, /--section-gap:/);
  assert.match(content, /\.section-spacing\s*\{/);
  assert.match(content, /\.container-width\s*\{/);
  assert.match(content, /\.heading-1\s*\{/);
  assert.match(content, /\.body-base\s*\{/);
});

test("no hardcoded hex colors outside config token files", () => {
  const sourceFiles = walkFiles(join(projectRoot, "src")).filter((absolutePath) =>
    /\.(ts|tsx|css)$/.test(absolutePath),
  );

  const offenders: string[] = [];
  for (const filePath of sourceFiles) {
    const rel = relative(projectRoot, filePath).replace(/\\/g, "/");
    if (rel === "src/app/globals.css") continue;

    const content = readFileSync(filePath, "utf-8");
    if (HEX_REGEX.test(content)) {
      offenders.push(rel);
    }
  }

  assert.deepEqual(offenders, []);
});
