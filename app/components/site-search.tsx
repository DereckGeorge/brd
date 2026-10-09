"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { searchItems } from "../data/content";

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const matches = query.trim() ? searchItems.filter((item) => `${item.title} ${item.category} ${item.summary} ${item.role || ""}`.toLowerCase().includes(query.trim().toLowerCase())) : [];
  return <div className="container search-page"><label className="search-field"><Search size={22} /><input autoFocus type="search" aria-label="Search all website content" placeholder="Search projects, people, knowledge..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>{query.trim() ? <><p className="results-count" role="status">{matches.length} results for &quot;{query}&quot;</p><div className="publication-list">{matches.map((item) => <Link className="publication-row" href={item.href} key={item.href}><span className="publication-type">{item.section}</span><div><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowUpRight size={23} /></Link>)}</div>{!matches.length && <p className="empty-state">No results found. Try a different phrase.</p>}</> : <div className="popular-searches"><h2>Explore by topic</h2>{["Climate", "Disaster", "Geospatial", "Community"].map((term) => <button key={term} className="text-link" onClick={() => setQuery(term)}>{term}<ArrowUpRight size={18} /></button>)}</div>}</div>;
}
