import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentItem } from "../data/content";

export default function ContentCard({ item, section, eager = false }: { item: ContentItem; section: string; eager?: boolean }) {
  return <article className={`content-card ${section === "people" ? "person-card" : ""}`}><Link href={`/${section}/${item.slug}`} className="card-link">
    <div className="card-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 600px) 92vw, (max-width: 950px) 45vw, 30vw" loading={eager ? "eager" : "lazy"} /></div>
    <div className="card-meta"><span>{item.category}</span><span>{item.status || item.year}</span></div>
    <h3>{item.title}<ArrowUpRight size={20} /></h3>
    <p>{item.role || item.summary}</p>{item.location && <span className="card-location">{item.location}</span>}
  </Link></article>;
}
