import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";

export const metadata = { title: "Get involved" };
export default function GetInvolved() {
  return <><PageIntro title="Better, together." eyebrow="Get involved" description="There is more than one way to contribute to a resilient future. Find a starting point for your next conversation with BRD." /><div className="about-photo container"><Image src="/preview/workshop.jpg" alt="Illustrative collaborative workshop" fill sizes="90vw" preload /></div><section className="section-band container"><div className="gateway-list involvement-list">{[["01", "Partner with us", "Explore an illustrative partnership in research, program delivery, or community learning."], ["02", "Share your expertise", "Bring a technical perspective, research question, or practical skill to a shared challenge."], ["03", "Volunteer & learn", "Imagine opportunities to contribute to outreach, field learning, and community initiatives."], ["04", "Support resilience", "Discuss how future support could help advance locally led initiatives. No donations are collected in this preview."]].map(([number, title, summary]) => <Link href="/contact" key={number}><span className="gateway-number">{number}</span><h2>{title}</h2><p>{summary}</p><ArrowUpRight size={25} /></Link>)}</div></section></>;
}
