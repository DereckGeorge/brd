import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import team from "../data/team.json";

export default function TeamDirectory() {
  return <section className="team-directory container" aria-label="BRD team members"><div className="team-grid">{team.map((member) => <article className="team-person" key={member.slug}><div className={`team-portrait team-portrait-${member.slug}`}><Image src={member.image} alt={member.name} fill sizes="(max-width: 600px) 160px, 200px" /><Link className="team-bio-link" href={`/people/${member.slug}`} aria-label={`View bio of ${member.name}`}>View bio<ArrowUpRight size={17} /></Link></div><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></section>;
}
