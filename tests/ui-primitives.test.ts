import test from "node:test";
import assert from "node:assert/strict";
import React from "react";

import {
  Button,
  Card,
  Container,
  Section,
} from "../src/components/ui";

test("barrel export provides Button and Card", () => {
  assert.equal(typeof Button, "function");
  assert.equal(typeof Card, "function");
});

test("button supports all requested variants", () => {
  const variants = ["primary", "secondary", "outline", "white", "ghost"] as const;
  for (const variant of variants) {
    const element = Button({ variant, children: "Akcija" });
    assert.equal(element.type, "button");
    assert.match(String(element.props.className), /focus-visible:ring-brand-500/);
  }
});

test("card hover includes translate and shadow classes", () => {
  const element = Card({ hover: true, children: "Sadrzaj" });
  assert.equal(element.type, "div");
  const className = String(element.props.className);
  assert.match(className, /hover:-translate-y-1/);
  assert.match(className, /hover:shadow-hover/);
});

test("section applies selected background class", () => {
  const element = Section({ bg: "dark", children: "Sadrzaj" });
  const className = String(element.props.className);
  assert.match(className, /section-spacing/);
  assert.match(className, /bg-neutral-900/);
});

test("container uses width and responsive padding utility", () => {
  const element = Container({ children: "Sadrzaj" });
  assert.equal(element.type, "div");
  assert.match(String(element.props.className), /container-width/);
});
