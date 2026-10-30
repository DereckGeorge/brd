import { collections } from "./content.ts";
import { institutionPages } from "./institution.ts";

export const publicPages = [
  { path: "/", title: "BRD Tanzania" },
  { path: "/who-we-are", title: "Who We Are" },
  { path: "/what-we-do", title: "What We Do" },
  { path: "/how-we-work", title: "How We Work" },
  { path: "/get-involved", title: "Get Involved" },
  { path: "/knowledge-hub", title: "Knowledge Hub" },
  { path: "/services", title: "Services" },
  { path: "/projects", title: "Our Projects" },
  { path: "/news", title: "News & Stories" },
  { path: "/contact", title: "Contact Us" },
  { path: "/donate", title: "Donate to BRD Tanzania" },
  { path: "/credits", title: "Images & credits" },
  ...Object.entries(institutionPages).flatMap(([section, pages]) => pages.map((page) => ({ path: `/${section}/${page.slug}`, title: page.title }))),
  ...Object.entries(collections).flatMap(([section, items]) => items.map((item) => ({ path: `/${section}/${item.slug}`, title: item.title }))),
];
