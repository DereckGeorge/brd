"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { searchItems } from "../data/content";
import { navigation, contact } from "../data/site-config";
import { institutionPages } from "../data/institution";

type SearchEntry = { title: string; summary: string; category: string; href: string; section: string; role?: string };
const pageEntries: SearchEntry[] = navigation.flatMap((group) => [
  { title: group.title, summary: group.description, category: group.title, href: group.href, section: "Website section" },
  ...group.links.map(([title, href]) => ({ title, href, summary: group.description, category: group.title, section: group.title })),
]);
const institutionalEntries: SearchEntry[] = Object.entries(institutionPages).flatMap(([section, pages]) => pages.map((page) => ({ title: page.title, summary: page.summary, category: section.replaceAll("-", " "), href: `/${section}/${page.slug}`, section: "Institutional page" })));
const entries: SearchEntry[] = [...new Map([...searchItems, ...pageEntries, ...institutionalEntries, { title: "Donate to BRD Tanzania", summary: "Donation instructions and BRD email and telephone contacts. Arrange support directly with the team.", category: "Support", href: "/donate", section: "Get Involved" }, { title: "Videos & learning", summary: "Sample visual stories about coastal ecosystems, preparedness, landscapes, livelihoods, and adaptation.", category: "Education", href: "/videos", section: "Knowledge Hub" }, { title: "Contact Us", summary: `${contact.name}, ${contact.address.join(", ")}. Contact and social profiles.`, category: "Contact", href: "/contact", section: "Website section" }, { title: "News & Stories", summary: "Perspectives on resilience, collaboration, and community learning.", category: "News", href: "/news", section: "Website section" }].map((entry) => [entry.href, entry])).values()];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const matches = query.trim() ? entries.filter((item) => `${item.title} ${item.category} ${item.summary} ${item.role || ""}`.toLowerCase().includes(query.trim().toLowerCase())) : [];
  return <div className="container search-page"><label className="search-field"><Search size={22} /><input autoFocus type="search" aria-label="Search all website content" placeholder="Search projects, people, knowledge..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>{query.trim() ? <><p className="results-count" role="status">{matches.length} results for &quot;{query}&quot;</p><div className="publication-list">{matches.map((item) => <Link className="publication-row" href={item.href} key={item.href}><span className="publication-type">{item.section}</span><div><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowUpRight size={23} /></Link>)}</div>{!matches.length && <p className="empty-state">No results found. Try a different phrase.</p>}</> : <div className="popular-searches"><h2>Explore by topic</h2>{["Climate", "Disaster", "Geospatial", "Community"].map((term) => <button key={term} className="text-link" onClick={() => setQuery(term)}>{term}<ArrowUpRight size={18} /></button>)}</div>}</div>;
}
