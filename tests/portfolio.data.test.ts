import test from "node:test";
import assert from "node:assert/strict";

import { projects } from "../src/data/portfolio";

test("portfolio has exactly three projects", () => {
  assert.equal(projects.length, 3);
});

test("no portfolio URL points to example.com", () => {
  const hasExampleDomain = projects.some((project) =>
    project.url?.toLowerCase().includes("example.com"),
  );
  assert.equal(hasExampleDomain, false);
});

test("all live projects have real http URLs", () => {
  const liveProjects = projects.filter((project) => project.status === "live");
  assert.ok(liveProjects.length > 0);

  for (const project of liveProjects) {
    assert.ok(project.url, `Expected live project ${project.id} to have URL`);
    assert.match(project.url as string, /^https?:\/\//);
  }
});

test("all wip projects hide URL", () => {
  const wipProjects = projects.filter((project) => project.status === "wip");
  assert.ok(wipProjects.length > 0);

  for (const project of wipProjects) {
    assert.equal(project.url, null);
  }
});

test("removed fake projects are not present", () => {
  const removedIds = [
    "klinika-zdravlje",
    "restoran-dolina",
    "autoservis-pro",
    "studio-forma",
  ];

  const existingIds = new Set(projects.map((project) => project.id));
  for (const removedId of removedIds) {
    assert.equal(existingIds.has(removedId), false);
  }
});
