import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "../data/content";

type Member = { slug: string; name: string; role: string; image: string };
export default function TeamDirectory({ members = teamMembers, section = "people" }: { members?: Member[]; section?: "people" | "board" }) {
  return <section className="team-directory container" aria-label={section === "board" ? "BRD board members" : "BRD team members"}><div className="team-grid">{members.map((member) => <article className="team-person" key={member.slug}><div className={`team-portrait team-portrait-${member.slug}`}><Image src={member.image} alt={member.name} fill sizes="(max-width: 600px) 160px, 200px" /><Link className="team-bio-link" href={`/${section}/${member.slug}`} aria-label={`View bio of ${member.name}`}>View bio<ArrowUpRight size={17} /></Link></div><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></section>;
}
