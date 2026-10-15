import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { collections, searchItems } from "../app/data/content.ts";
import { navigation, knowledgeCategories, contact, socialProfiles } from "../app/data/site-config.ts";
import { institutionPages } from "../app/data/institution.ts";
import { videos } from "../app/data/videos.ts";

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

test("all requested main menus and submenu destinations have a page", () => {
  assert.deepEqual(navigation.map((group) => group.title), ["Who We Are", "What We Do", "How We Work", "Knowledge Hub", "Get Involved"]);
  const dynamicRoutes = new Set([
    ...Object.entries(collections).flatMap(([section, items]) => items.map((item) => `/${section}/${item.slug}`)),
    ...Object.entries(institutionPages).flatMap(([section, pages]) => pages.map((page) => `/${section}/${page.slug}`)),
    ...knowledgeCategories.map((category) => `/knowledge-hub/categories/${category.slug}`),
  ]);
  for (const group of navigation) {
    assert.ok(existsSync(`app${group.href}/page.tsx`), `Missing overview: ${group.href}`);
    for (const [label, href] of group.links) assert.ok(existsSync(`app${href}/page.tsx`) || dynamicRoutes.has(href), `Missing submenu page: ${label}`);
  }
  for (const [section, pages] of Object.entries(institutionPages)) {
    assert.ok(existsSync(`app/${section}/[slug]/page.tsx`));
    assert.equal(new Set(pages.map((page) => page.slug)).size, pages.length);
    for (const page of pages) if (page.image) assert.ok(existsSync(`public${page.image}`));
  }
});

test("all seven Knowledge Hub categories contain matching resources", () => {
  assert.equal(knowledgeCategories.length, 7);
  for (const category of knowledgeCategories) assert.ok(collections["knowledge-hub"].some((resource) => category.types.includes(resource.category)), category.title);
  for (const resource of collections["knowledge-hub"]) assert.equal(knowledgeCategories.filter((category) => category.types.includes(resource.category)).length, 1);
});

test("Who We Are keeps shared navigation and every item stays in its route group", () => {
  const who = navigation.find((group) => group.href === "/who-we-are");
  assert.equal(who.links.length, 6);
  for (const [, href] of who.links) assert.ok(href.startsWith("/who-we-are/"));
  assert.ok(institutionPages["who-we-are"].some((page) => page.slug === "about"));
  assert.match(readFileSync("app/who-we-are/layout.tsx", "utf8"), /<SectionNavigation section="who-we-are"/);
  assert.doesNotMatch(readFileSync("app/components/section-navigation.tsx", "utf8"), />Overview</);
  assert.match(readFileSync("app/about/page.tsx", "utf8"), /redirect\("\/who-we-are\/about"\)/);
});

test("decorative numbering and approach circles are absent", () => {
  for (const path of ["app/page.tsx", "app/knowledge-hub/page.tsx", "app/get-involved/page.tsx", "app/components/institution-page.tsx", "app/components/section-overview.tsx", "app/components/resilience-pathway.tsx"]) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /gateway-number|padStart|pathway-symbol|partner-monogram/);
  }
});

test("the concise homepage and contact-only donation page are present", () => {
  const home = readFileSync("app/page.tsx", "utf8");
  assert.equal((home.match(/<section\b/g) || []).length, 3);
  assert.match(home, /\/preview\/flood-response\.jpg/);
  assert.ok(existsSync("public/preview/flood-response.jpg"));
  assert.match(readFileSync("app/components/site-header.tsx", "utf8"), /href="\/donate"/);
  const donate = readFileSync("app/donate/page.tsx", "utf8");
  assert.match(donate, /mailto:/);
  assert.match(donate, /tel:/);
  assert.doesNotMatch(donate, /<form|<input/);
  assert.match(readFileSync("app/components/site-footer.tsx", "utf8"), /affiliations are not confirmed/);
});

test("contact address and confirmed social profile match the latest feedback", () => {
  assert.deepEqual(contact.address, ["2nd Floor, Capital Place, Ohio Street", "P.O. Box 6548", "Dar es Salaam, Tanzania"]);
  assert.equal(socialProfiles.find((profile) => profile.name === "Instagram").url, "https://www.instagram.com/brd_tanzania/");
  for (const profile of socialProfiles) if (profile.name !== "Instagram") assert.equal(profile.url, null);
});

test("sample videos have local clips, captions, posters, and transcripts", () => {
  assert.equal(videos.length, 3);
  for (const video of videos) {
    assert.ok(existsSync(`public/preview/videos/${video.slug}.mp4`));
    assert.ok(existsSync(`public/preview/videos/${video.slug}.vtt`));
    assert.ok(existsSync(`public${video.poster}`));
    assert.ok(video.transcript.includes("stock") || video.transcript.includes("Stock"));
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
