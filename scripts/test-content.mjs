import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { collections, searchItems } from "../app/data/content.ts";
import { navigation, knowledgeCategories, knowledgeCategoryRedirects, contact, socialProfiles } from "../app/data/site-config.ts";
import { institutionPages, whoPageRedirects, values, partners, boardMembers, sampleEvents, sampleRoles } from "../app/data/institution.ts";
import media from "../app/data/brd-media.json" with { type: "json" };
import { videos } from "../app/data/videos.ts";
import team from "../app/data/board.json" with { type: "json" };

test("every published record has a unique safe route and a local image", () => {
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

test("Knowledge Hub retains three inactive groups without dummy resources", () => {
  assert.equal(knowledgeCategories.length, 3);
  assert.equal(collections["knowledge-hub"].length, 0);
  assert.match(readFileSync("app/components/section-navigation.tsx", "utf8"), /disabled/);
  for (const resource of collections["knowledge-hub"]) assert.equal(knowledgeCategories.filter((category) => category.types.includes(resource.category)).length, 1);
  assert.equal(Object.keys(knowledgeCategoryRedirects).length, 7);
  for (const target of Object.values(knowledgeCategoryRedirects)) assert.ok(knowledgeCategories.some((category) => category.slug === target));
});

test("Who We Are keeps shared navigation and every item stays in its route group", () => {
  const who = navigation.find((group) => group.href === "/who-we-are");
  assert.equal(who.links.length, 5);
  assert.ok(who.links.some(([label]) => label === "Governance"));
  assert.ok(who.links.some(([label]) => label === "Our Team"));
  assert.ok(!who.links.some(([label]) => /Board Members|Management/.test(label)));
  assert.deepEqual(whoPageRedirects, { board: "governance", management: "team" });
  for (const [, href] of who.links) assert.ok(href.startsWith("/who-we-are/"));
  assert.ok(institutionPages["who-we-are"].some((page) => page.slug === "about"));
  assert.match(readFileSync("app/who-we-are/layout.tsx", "utf8"), /<SectionNavigation section="who-we-are"/);
  assert.doesNotMatch(readFileSync("app/components/section-navigation.tsx", "utf8"), />Overview</);
  assert.match(readFileSync("app/about/page.tsx", "utf8"), /redirect\("\/who-we-are\/about"\)/);
});

test("decorative numbering and approach circles are absent", () => {
  for (const path of ["app/page.tsx", "app/knowledge-hub/page.tsx", "app/get-involved/page.tsx", "app/components/institution-page.tsx", "app/components/section-overview.tsx"]) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /gateway-number|padStart|pathway-symbol|partner-monogram/);
    assert.doesNotMatch(readFileSync(path, "utf8"), /ResiliencePathway|From evidence to resilience|Understand risk/);
  }
  assert.equal(existsSync("app/components/resilience-pathway.tsx"), false);
});

test("the concise homepage and contact-only donation page are present", () => {
  const home = readFileSync("app/page.tsx", "utf8");
  assert.equal((home.match(/<section\b/g) || []).length, 3);
  assert.match(home, /\/brd\/photos\/dar-es-salaam\.webp/);
  assert.ok(existsSync("public/brd/photos/dar-es-salaam.webp"));
  assert.doesNotMatch(home, /hero-caption|supplied by BRD Tanzania/i);
  assert.doesNotMatch(home, /flood-response\.jpg|Coast Guard|AI-generated illustration/);
  assert.match(readFileSync("app/components/site-header.tsx", "utf8"), /href="\/donate"/);
  const donate = readFileSync("app/donate/page.tsx", "utf8");
  assert.match(donate, /mailto:/);
  assert.match(donate, /tel:/);
  assert.doesNotMatch(donate, /<form|<input/);
  assert.doesNotMatch(readFileSync("app/components/site-footer.tsx", "utf8"), /WHO|UNICEF|href="\/people"/);
});

test("contact address and confirmed social profile match the latest feedback", () => {
  assert.deepEqual(contact.address, ["2nd Floor, Capital Place, Ohio Street", "P.O. Box 6548", "Dar es Salaam, Tanzania"]);
  assert.equal(socialProfiles.find((profile) => profile.name === "Instagram").url, "https://www.instagram.com/brd_tanzania/");
  for (const profile of socialProfiles) if (profile.name !== "Instagram") assert.equal(profile.url, null);
});

test("unapproved sample videos are not published", () => {
  assert.equal(videos.length, 0);
});

test("global search includes every collection record without duplicate people", () => {
  const sharedPeople = collections.people.filter((person) => collections.board.some((director) => director.slug === person.slug));
  const total = Object.values(collections).reduce((sum, items) => sum + items.length, 0) - sharedPeople.length;
  assert.equal(searchItems.length, total);
  assert.equal(new Set(searchItems.map((item) => item.href)).size, total);
  for (const [section, items] of Object.entries(collections)) {
    for (const item of items) {
      const route = section === "people" && sharedPeople.some((person) => person.slug === item.slug) ? "board" : section;
      assert.ok(searchItems.some((result) => result.href === `/${route}/${item.slug}`));
    }
  }
});

test("only supplied team profiles are published and unapproved resources stay empty", () => {
  assert.equal(collections.research.length, 0);
  assert.equal(collections.people.length, 5);
  assert.equal(sampleEvents.length, 0);
  assert.equal(sampleRoles.length, 0);
  assert.equal(collections["knowledge-hub"].length, 0);
  for (const member of team) {
    assert.ok(existsSync(`public${member.image}`));
    assert.match(member.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(member.biography.join(" ").length > 100);
    assert.equal(collections.people.find((person) => person.slug === member.slug).title, member.name);
  }
  const directory = readFileSync("app/components/team-directory.tsx", "utf8");
  assert.match(directory, /View bio/);
  assert.match(directory, /team-portrait/);
});

test("section navigation persists without duplicate body menus", () => {
  const group = navigation.find((item) => item.href === "/what-we-do");
  assert.equal(group.links.length, 6);
  assert.equal(institutionPages["what-we-do"].length, 6);
  assert.match(readFileSync("app/what-we-do/layout.tsx", "utf8"), /SectionNavigation/);
  assert.match(readFileSync("app/components/site-header.tsx", "utf8"), /item.links.length > 0 && <button/);
  assert.match(readFileSync("app/components/section-overview.tsx", "utf8"), /shared \? institutionPages\[section\].map/);
  for (const section of ["what-we-do", "how-we-work", "knowledge-hub", "get-involved"]) {
    assert.match(readFileSync(`app/${section}/layout.tsx`, "utf8"), /SectionNavigation/);
    assert.doesNotMatch(readFileSync(`app/${section}/page.tsx`, "utf8"), /gateway-list|SectionOverview/);
  }
  assert.match(readFileSync("app/research/page.tsx", "utf8"), /redirect\("\/what-we-do\/research"\)/);
  assert.match(readFileSync("app/people/page.tsx", "utf8"), /redirect\("\/who-we-are\/team"\)/);
});

test("supplied projects, values and partners replace fictional data without fabricated facts", () => {
  assert.equal(collections.projects.length, 4);
  assert.equal(values.length, 7);
  assert.equal(boardMembers.length, 5);
  assert.deepEqual(boardMembers.map((member) => member.name), ["Ms Nyambiri Kimacha", "Mr Charles Msangi", "Mr Rockefeller Madamba", "Ms Vivaoliva U. Shoo", "Dr Joseph S. Mayunga"]);
  assert.deepEqual(partners.map((partner) => partner.name), ["Red Cross Tanzania", "RAPID Tanzania", "Government of Tanzania - DMD-PMO", "Public Service Social Security Fund (PSSSF)"]);
  for (const item of collections.projects) {
    assert.equal(item.isIllustrative, false);
    assert.ok(item.sections[0].body.length > 200);
    assert.equal(item.status, undefined);
    assert.equal(item.year, undefined);
    assert.doesNotMatch(JSON.stringify(item), /fictional|Sample partner|Coastal Futures|Urban Resilience Collective/i);
  }
  const consultancy = institutionPages["what-we-do"].find((page) => page.slug === "consultancy");
  assert.equal(consultancy.list.items.length, 9);
  for (const pages of Object.values(institutionPages)) for (const page of pages) for (const section of page.sections) assert.ok(section.heading && section.body);
});

test("all supplied photographs and logos are imported with provenance and without invented identities", () => {
  assert.equal(media.photos.length, 11);
  assert.equal(media.partners.length, 4);
  for (const asset of [...media.photos, ...media.partners]) {
    assert.ok(existsSync(`public${asset.src}`));
    assert.ok(asset.width > 0 && asset.height > 0);
    assert.match(asset.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(asset.sourceArchive && asset.sourceFile && asset.alt);
  }
  for (const page of institutionPages["who-we-are"]) if (page.gallery) for (const id of page.gallery) assert.ok(media.photos.some((photo) => photo.id === id));
  assert.equal(institutionPages["who-we-are"].find((page) => page.slug === "team").title, "Our Team");
  const organogram = readFileSync("app/components/organogram.tsx", "utf8");
  assert.match(organogram, /teamMembers as team/);
  assert.doesNotMatch(organogram, /Executive Management Team|Board of Directors/);
  assert.equal(institutionPages["who-we-are"].find((page) => page.slug === "governance").mode, "governance");
  assert.equal(institutionPages["who-we-are"].find((page) => page.slug === "organisational-structure").mode, "structure");
});

test("production pages omit preview labels, topic suggestions and mock submission", () => {
  for (const path of ["app/components/site-header.tsx", "app/components/site-footer.tsx", "app/components/detail-page.tsx", "app/components/photo-gallery.tsx", "app/components/site-search.tsx"]) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /design preview|design sample|Image used illustratively|Explore by topic|preview-notice/i);
  }
  assert.equal(existsSync("app/components/enquiry-form.tsx"), false);
  assert.ok(existsSync("public/brd/news/learning-preparedness.png"));
  for (const story of collections.news) {
    assert.equal(story.date, undefined);
    assert.doesNotMatch(JSON.stringify(story), /fictional|sample|wocintechchat/i);
  }
});

test("institutional titles and section headings have no trailing full stops", () => {
  for (const page of Object.values(institutionPages).flat()) {
    assert.doesNotMatch(page.title, /\.$/);
    for (const section of page.sections) assert.doesNotMatch(section.heading, /\.$/);
  }
  for (const item of Object.values(collections).flat()) assert.doesNotMatch(item.title, /\.$/);
});

test("team and board use only the five replacement profiles and their exact roles", () => {
  const names = ["Ms Nyambiri Kimacha", "Mr Charles Msangi", "Mr Rockefeller Madamba", "Ms Vivaoliva U. Shoo", "Dr Joseph S. Mayunga"];
  const roles = ["Chairperson of the Board", "Vice Chairperson of the Board", "Director", "Director", "Director"];
  assert.deepEqual(collections.people.map((member) => member.title), names);
  assert.deepEqual(collections.board.map((member) => member.title), names);
  assert.deepEqual(collections.people.map((member) => member.role), roles);
  assert.deepEqual(collections.board.map((member) => member.role), roles);
  for (const member of team) {
    const person = collections.people.find((record) => record.slug === member.slug);
    const director = collections.board.find((record) => record.slug === member.slug);
    assert.deepEqual(person.sections.map((section) => section.body), member.biography);
    assert.deepEqual(director.sections.map((section) => section.body), member.biography);
    assert.equal(person.image, member.image);
    assert.equal(director.image, member.image);
    assert.match(member.sourceDocumentSha256, /^[a-f0-9]{64}$/);
    assert.ok(member.width > 0 && member.height > 0);
    assert.match(member.image, new RegExp(`${member.sourceSha256.slice(0, 10)}\\.webp$`));
  }
  for (const slug of ["guido-a-uhinga", "hamza-a-farahan", "johnston-weston", "daudi-fufuji", "simon-m-machera"]) {
    assert.ok(!searchItems.some((entry) => entry.href === `/people/${slug}`));
  }
  assert.match(readFileSync("app/components/detail-page.tsx", "utf8"), /section === "board" \? "\/who-we-are\/governance"/);
});
