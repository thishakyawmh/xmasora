import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("provides basic document metadata", () => {
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /<meta name="description"/);
  assert.match(html, /<title>Xmasora 2025/);
});

test("clearly identifies the archived event as concluded", () => {
  assert.match(html, /Xmasora 2025 has concluded/);
  assert.match(html, /submitButton\.remove\(\)/);
  assert.match(html, /December 17, 2025/);
});

test("external links opened in a new tab use safe rel attributes", () => {
  const anchors = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) || [];
  assert.ok(anchors.length > 0);
  for (const anchor of anchors) {
    assert.match(anchor, /rel="[^"]*noopener[^"]*"/);
    assert.match(anchor, /rel="[^"]*noreferrer[^"]*"/);
  }
});

test("respects reduced-motion preferences", () => {
  assert.match(html, /prefers-reduced-motion: reduce/);
  assert.match(html, /prefersReducedMotion/);
  assert.match(html, /snowflake\.textContent = "❄"/);
});
