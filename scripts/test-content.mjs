import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { collections, searchItems } from "../app/data/content.ts";

test("every preview record has a unique safe route and a local image", () => {
  for (const [section, items] of Object.entries(collections)) {
    assert.equal(new Set(items.map((item) => item.slug)).size, items.length, `${section}: duplicate slug`);
    for (const item of items) {
      assert.match(item.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      assert.ok(item.title && item.summary && item.category && item.imageAlt);
      assert.ok(existsSync(`public${item.image}`), `Missing image: ${item.image}`);
      assert.ok(item.facts.length && item.sections.length);
      assert.ok(existsSync(`app/${section}/[slug]/page.tsx`));
      assert.ok(existsSync(`app/${section}/page.tsx`));
    }
  }
});

test("global search includes every collection record exactly once", () => {
  const total = Object.values(collections).reduce((sum, items) => sum + items.length, 0);
  assert.equal(searchItems.length, total);
  assert.equal(new Set(searchItems.map((item) => item.href)).size, total);
  for (const [section, items] of Object.entries(collections)) {
    for (const item of items) assert.ok(searchItems.some((result) => result.href === `/${section}/${item.slug}`));
  }
});

test("sample directories cover research status, team groups, and publication types", () => {
  assert.deepEqual(new Set(collections.research.map((item) => item.status)), new Set(["Ongoing", "Completed"]));
  assert.deepEqual(new Set(collections.people.map((item) => item.category)), new Set(["Board of Directors", "Management", "Technical experts"]));
  for (const type of ["Research report", "Policy brief", "Technical document", "Case study", "Guideline"]) assert.ok(collections["knowledge-hub"].some((item) => item.category === type));
});
