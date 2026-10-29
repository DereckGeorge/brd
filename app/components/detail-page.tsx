import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CollectionKey, ContentItem } from "../data/content";
import { collectionLabels, collections } from "../data/content";
import ContentCard from "./content-card";

export default function DetailPage({ item, section }: { item: ContentItem; section: CollectionKey }) {
  const related = collections[section].filter((record) => record.slug !== item.slug).slice(0, 3);
  const portrait = section === "people" || section === "board";
  const backHref = section === "board" ? "/who-we-are/governance" : portrait ? "/who-we-are/team" : `/${section}`;
  const backLabel = section === "board" ? "Board of Directors" : portrait ? "Our Team" : collectionLabels[section];
  return <>
    <section className={`detail-intro container ${portrait ? "profile-intro" : ""}`}><div className="breadcrumb"><Link href={backHref}><ArrowLeft size={15} />{backLabel}</Link><span>/</span><span>{item.category}</span></div><div className="detail-heading"><div><span className="eyebrow">{item.category}</span><h1>{item.title.replace(/\.+$/, "")}</h1><p className="lead">{item.summary}</p></div>{portrait && <div className={`profile-photo profile-photo-${item.slug}`}><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 90vw, 34vw" preload /></div>}</div></section>
    {!portrait && <div className="detail-photo container"><Image src={item.image} alt={item.imageAlt} fill sizes="90vw" preload /></div>}
    <section className="detail-body container"><aside><span className="eyebrow">At a glance</span><dl>{item.facts.map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></aside><div className="detail-copy">{item.sections.map((part) => <section key={part.heading}><h2>{part.heading.replace(/\.+$/, "")}</h2><p>{part.body}</p></section>)}<Link href="/contact" className="text-link">Talk to us<ArrowUpRight size={20} /></Link></div></section>
    {!portrait && related.length > 0 && <section className="section-band soft"><div className="container"><div className="section-heading"><h2>Explore more</h2><Link href={`/${section}`} className="text-link">All {collectionLabels[section].toLowerCase()}<ArrowUpRight size={19} /></Link></div><div className="content-grid">{related.map((record) => <ContentCard key={record.slug} item={record} section={section} />)}</div></div></section>}
  </>;
}
