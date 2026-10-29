import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "../data/site-config";
import { institutionPages } from "../data/institution";
import PageIntro from "./page-intro";
import SectionNavigation from "./section-navigation";

const descriptions: Record<string, string[]> = {
  "who-we-are": ["Our story and shared purpose.", "The principles behind our commitment to resilience.", "Thoughtful oversight and clear responsibilities.", "The people connecting priorities with delivery.", "Different perspectives and a long-term outlook.", "Relationships that make shared learning possible."],
  "what-we-do": ["Evidence to inform policy, planning, practice and future research.", "Technical and advisory services for risk-informed decisions.", "Professional learning and practical capacity development.", "Preparedness, response, relief and recovery.", "GIS, remote sensing, risk analysis and decision-support tools.", "Public awareness, community engagement and knowledge sharing."],
  "how-we-work": ["Locally grounded, evidence-informed collaboration.", "A shared direction for evidence, capability, and partnerships."],
};

export default function SectionOverview({ section, description, image }: { section: string; description: string; image: string }) {
  const group = navigation.find((item) => item.href === `/${section}`)!;
  const shared = section === "what-we-do";
  const links = shared ? institutionPages[section].map((page) => [page.title, `/${section}/${page.slug}`]) : group.links;
  return <>{!shared && <><PageIntro title={group.title} eyebrow={group.title} description={description} /><SectionNavigation section={section} current={group.href} /><div className="about-photo container overview-photo supplied-photo"><Image src={image} alt="Participants at a BRD meeting" fill sizes="90vw" preload /></div></>}{shared && <div className="container who-content-heading"><p>{description}</p></div>}<section className="section-band container"><div className="gateway-list">{links.map(([label, href], index) => <Link href={href} key={href}><h2>{label}</h2><p>{descriptions[section]?.[index] || institutionPages[section]?.[index]?.summary}</p><ArrowUpRight size={25} /></Link>)}</div></section></>;
}
