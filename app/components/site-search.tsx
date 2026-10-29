"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { searchItems } from "../data/content";
import { navigation, contact } from "../data/site-config";
import { institutionPages } from "../data/institution";

type SearchEntry = { title: string; summary: string; href: string; section: string };
const sectionEntries = navigation.map((group) => ({title: group.title, summary: group.description, href: group.href, section: "Website section"}));
const institutionEntries = Object.entries(institutionPages).flatMap(([section, pages]) => pages.map((page) => ({title: page.title.replace(/\.+$/, ""), summary: page.summary, href: `/${section}/${page.slug}`, section: "About BRD"})));
const entries: SearchEntry[] = [...new Map([...searchItems, ...sectionEntries, ...institutionEntries, {title: "Contact BRD Tanzania", summary: `${contact.address.join(", ")}. ${contact.email}`, href: "/contact", section: "Contact"}, {title: "Donate to BRD Tanzania", summary: "Contact BRD to arrange a financial or in-kind contribution", href: "/donate", section: "Support"}].map((entry) => [entry.href, entry])).values()];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const phrase = query.trim().toLowerCase();
  const matches = phrase ? entries.filter((entry) => `${entry.title} ${entry.summary} ${entry.section}`.toLowerCase().includes(phrase)) : [];
  return <div className="container search-page"><label className="search-field"><Search size={22} /><input type="search" autoFocus aria-label="Search BRD website" placeholder="Search BRD" value={query} onChange={(event) => setQuery(event.target.value)} /></label>{phrase && <><p className="results-count" role="status">{matches.length} results for &quot;{query}&quot;</p><div className="publication-list">{matches.map((entry) => <Link href={entry.href} key={entry.href} className="publication-row"><span className="publication-type">{entry.section}</span><div><h2>{entry.title.replace(/\.+$/, "")}</h2><p>{entry.summary}</p></div><ArrowUpRight size={22} /></Link>)}</div>{!matches.length && <p className="empty-state">No results found</p>}</>}</div>;
}
