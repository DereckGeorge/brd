import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import type { CollectionKey, ContentItem } from "../data/content";
import { collectionLabels, collections } from "../data/content";
import ContentCard from "./content-card";
import { CirclePlay } from "lucide-react";

export default function DetailPage({ item, section }: { item: ContentItem; section: CollectionKey }) {
  const related = collections[section].filter((record) => record.slug !== item.slug).slice(0, 3);
  const portrait = section === "people";
  return <>
    <section className={`detail-intro container ${portrait ? "profile-intro" : ""}`}><div className="breadcrumb"><Link href={`/${section}`}><ArrowLeft size={15} />{collectionLabels[section]}</Link><span>/</span><span>{item.category}</span></div><div className="detail-heading"><div><span className="eyebrow">{item.role || item.category}</span><h1>{item.title}</h1><p className="lead">{item.summary}</p>{section === "knowledge-hub" && <a className="button" href={`/knowledge-hub/${item.slug}/download`} download={`${item.slug}-preview.txt`}>Download preview<Download size={18} /></a>}</div>{portrait && <div className="profile-photo"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 90vw, 34vw" preload /></div>}</div></section>
    {item.category === "Video" && <div className="container video-resource-link"><Link href="/videos" className="text-link"><CirclePlay size={24} />Watch the sample video collection</Link></div>}
    {!portrait && <div className="detail-photo container"><Image src={item.image} alt={item.imageAlt} fill sizes="90vw" preload /></div>}
    <section className="detail-body container"><aside><span className="eyebrow">At a glance</span><dl>{item.facts.map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><p className="sample-note">Illustrative {section === "people" ? "profile. Stock portrait; not a BRD team member" : "content for design review"}.</p></aside><div className="detail-copy">{item.sections.map((part) => <section key={part.heading}><h2>{part.heading}</h2><p>{part.body}</p></section>)}<Link href="/contact" className="text-link">Talk to us<ArrowUpRight size={20} /></Link></div></section>
    <section className="section-band soft"><div className="container"><div className="section-heading"><h2>Explore more.</h2><Link href={`/${section}`} className="text-link">All {collectionLabels[section].toLowerCase()}<ArrowUpRight size={19} /></Link></div><div className="content-grid">{related.map((record) => <ContentCard key={record.slug} item={record} section={section} />)}</div></div></section>
  </>;
}
