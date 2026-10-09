"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import Link from "next/link";
import ContentCard from "./content-card";
import type { ContentItem } from "../data/content";

export default function CollectionBrowser({ items, section }: { items: ContentItem[]; section: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const categories = [...new Set(items.map((item) => item.category))];
  const statuses = [...new Set(items.map((item) => item.status).filter((value): value is string => !!value))];
  const filtered = useMemo(() => items.filter((item) => (category === "All" || item.category === category) && (status === "All" || item.status === status) && `${item.title} ${item.summary} ${item.location || ""} ${item.role || ""}`.toLowerCase().includes(query.toLowerCase().trim())), [items, query, category, status]);
  function reset() { setQuery(""); setCategory("All"); setStatus("All"); }
  return <section className="collection container">
    {section === "people" && <div className="segment-tabs" aria-label="Team groups">{["All", ...categories].map((value) => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value === "All" ? "Everyone" : value}</button>)}</div>}
    <div className="collection-tools"><label className="search-field"><Search size={19} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${section === "knowledge-hub" ? "publications" : section}`} aria-label={`Search ${section}`} /></label>
      {section !== "people" && <label className="select-field"><span>{section === "knowledge-hub" ? "Publication type" : "Theme"}</span><select aria-label={section === "knowledge-hub" ? "Publication type" : "Theme"} value={category} onChange={(event) => setCategory(event.target.value)}><option value="All">All {section === "knowledge-hub" ? "types" : "themes"}</option>{categories.map((value) => <option key={value}>{value}</option>)}</select></label>}
      {statuses.length > 0 && <label className="select-field"><span>{section === "knowledge-hub" ? "Theme" : "Status"}</span><select aria-label={section === "knowledge-hub" ? "Theme" : "Status"} value={status} onChange={(event) => setStatus(event.target.value)}><option value="All">All {section === "knowledge-hub" ? "themes" : "statuses"}</option>{statuses.map((value) => <option key={value}>{value}</option>)}</select></label>}
      {(query || category !== "All" || status !== "All") && <button className="reset-button" onClick={reset}><X size={16} />Clear</button>}
    </div>
    <div className="results-count" role="status">{filtered.length} {filtered.length === 1 ? "result" : "results"}</div>
    {filtered.length ? section === "knowledge-hub" ? <div className="publication-list">{filtered.map((item) => <Link key={item.slug} href={`/${section}/${item.slug}`} className="publication-row"><span className="publication-type">{item.category}<small>{item.year}</small></span><div><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowUpRight size={24} /></Link>)}</div> : <div className="content-grid">{filtered.map((item, index) => <ContentCard key={item.slug} item={item} section={section} eager={index < 3} />)}</div> : <div className="empty-state"><h2>No matching results.</h2><p>Try another search or reset the filters.</p><button onClick={reset} className="text-link">Reset filters<ArrowUpRight size={18} /></button></div>}
  </section>;
}
