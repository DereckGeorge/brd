import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

const work = [
  ["Research", "Evidence that helps people understand risk.", "/research"],
  ["Consultancy", "Practical expertise for better decisions.", "/what-we-do/consultancy"],
  ["Training", "Skills and confidence to prepare and act.", "/what-we-do/training"],
  ["Humanitarian support", "Community-centered preparedness and support.", "/what-we-do/humanitarian-support"],
];

export default function Home() {
  return <>
    <section className="home-hero concise-hero" id="home"><Image src="/preview/flood-response.jpg" alt="Rescue workers assisting residents by boat during flooding in Baton Rouge, Louisiana" fill sizes="100vw" preload /><div className="hero-shade" /><div className="container hero-content"><span className="eyebrow">Building Resilience to Disasters</span><h1>BRD Tanzania.</h1><p>Ready for risk.<br />Here for people.</p><span className="hero-description">Research, preparedness, and practical action for more resilient communities.</span><div className="hero-actions"><Link href="/donate" className="button donate-button">Support our work<Heart size={19} /></Link><Link href="/who-we-are" className="text-link">About BRD<ArrowUpRight size={19} /></Link></div></div><span className="hero-caption">Illustrative flood response photograph | Not a BRD operation</span></section>
    <section className="home-work-band" aria-labelledby="home-work-title"><div className="container"><div className="home-work-heading"><h2 id="home-work-title">Knowledge into action.</h2><Link href="/what-we-do" className="text-link">What we do<ArrowUpRight size={19} /></Link></div><div className="home-work-grid">{work.map(([title, summary, href]) => <Link key={title} href={href}><h3>{title}<ArrowUpRight size={22} /></h3><p>{summary}</p></Link>)}</div></div></section>
    <section className="home-feature container"><div className="home-feature-image"><Image src="/preview/mangroves.jpg" alt="Illustrative coastal mangrove ecosystem" fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div><span className="eyebrow">Evidence. Communities. Resilience.</span><h2>Better prepared.<br />Stronger together.</h2><p>We connect local knowledge with research and practical learning. Explore our work and the ideas behind it.</p><div className="home-feature-links"><Link href="/projects" className="text-link">Our projects<ArrowUpRight size={19} /></Link><Link href="/knowledge-hub" className="text-link">Knowledge Hub<ArrowUpRight size={19} /></Link></div></div></section>
  </>;
}
