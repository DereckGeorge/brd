import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "../data/site-config";
import PageIntro from "./page-intro";
import SectionNavigation from "./section-navigation";
import ResiliencePathway from "./resilience-pathway";

const descriptions: Record<string, string[]> = {
  "who-we-are": ["Our story and shared purpose.", "The principles behind our commitment to resilience.", "Thoughtful oversight and clear responsibilities.", "The people connecting priorities with delivery.", "Different perspectives and a long-term outlook.", "Relationships that make shared learning possible."],
  "what-we-do": ["Evidence to understand risk and inform decisions.", "Technical advice grounded in practical priorities.", "Learning that becomes confidence and capability.", "Preparedness, dignity, and community-centered support."],
  "how-we-work": ["Locally grounded, evidence-informed collaboration.", "A shared direction for evidence, capability, and partnerships."],
};

export default function SectionOverview({ section, description, image }: { section: string; description: string; image: string }) {
  const group = navigation.find((item) => item.href === `/${section}`)!;
  return <><PageIntro title={`${group.title}.`} eyebrow={group.title} description={description} /><SectionNavigation section={section} current={group.href} /><div className="about-photo container overview-photo"><Image src={image} alt="Illustrative photograph for BRD's institutional overview" fill sizes="90vw" preload /></div><section className="section-band container"><div className="gateway-list">{group.links.map(([label, href], index) => <Link href={href} key={href}><h2>{label}</h2><p>{descriptions[section]?.[index]}</p><ArrowUpRight size={25} /></Link>)}</div></section>{section === "how-we-work" && <ResiliencePathway />}</>;
}
