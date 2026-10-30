import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import copy from "./data/approved-copy.json";
import researchCopy from "./data/research-copy.json";

const work = [
  [researchCopy.title, "Evidence to inform policy, planning, practice and future research.", "/what-we-do/research"],
  ["Consultancy", "Technical and advisory services for risk-informed decisions.", "/what-we-do/consultancy"],
  ["Training", "Professional learning and practical capacity development.", "/what-we-do/training"],
  ["Humanitarian support", "Preparedness, response, relief and recovery.", "/what-we-do/humanitarian-support"],
  ["Geospatial & Earth observation", "GIS, remote sensing, risk analysis and decision-support tools.", "/what-we-do/geospatial-earth-observation"],
  ["Outreach & community engagement", "Public awareness, community engagement and knowledge sharing.", "/what-we-do/outreach-community-engagement"],
];
const [rawHeadline, introduction] = copy.homeIntroduction.split("\n").map((line) => line.trim());
const headline = rawHeadline.replace(/\.+$/, "");

export default function Home() {
  return <>
    <section className="home-hero concise-hero approved-hero" id="home">
      <Image src="/brd/photos/dar-es-salaam.webp" alt="Dar es Salaam and its waterfront" fill sizes="100vw" preload />
      <div className="hero-shade" />
      <div className="container hero-content"><span className="eyebrow">BRD Tanzania</span><h1>{headline}</h1><p className="approved-hero-description">{introduction}</p><div className="hero-actions"><Link href="/donate" className="button donate-button">Support our work<Heart size={19} /></Link><Link href="/who-we-are" className="text-link">About BRD<ArrowUpRight size={19} /></Link></div></div>
    </section>
    <section className="home-work-band" aria-labelledby="home-work-title"><div className="container"><div className="home-work-heading"><div><h2 id="home-work-title">Knowledge into action</h2><p className="home-services-intro">{copy.homeServices}</p></div><Link href="/what-we-do" className="text-link">What we do<ArrowUpRight size={19} /></Link></div><div className="home-work-grid">{work.map(([title, summary, href]) => <Link key={title} href={href}><h3>{title}<ArrowUpRight size={22} /></h3><p>{summary}</p></Link>)}</div></div></section>
    <section className="home-feature container"><div className="home-feature-image"><Image src="/brd/photos/brd-workshop.webp" alt="A BRD workshop presentation" fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div><span className="eyebrow">Research into practice</span><h2>Actionable solutions for a safer world</h2><p>{copy.homeFeature}</p><div className="home-feature-links"><Link href="/projects" className="text-link">Our projects<ArrowUpRight size={19} /></Link><Link href="/knowledge-hub" className="text-link">Knowledge Hub<ArrowUpRight size={19} /></Link></div></div></section>
  </>;
}
