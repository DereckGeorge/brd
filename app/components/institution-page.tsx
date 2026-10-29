import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { type InstitutionPage as PageRecord, partners, boardMembers, sampleRoles, sampleEvents, values, valuesIntro, valuesConclusion } from "../data/institution";
import { navigation, governanceLinks } from "../data/site-config";
import PageIntro from "./page-intro";
import SectionNavigation from "./section-navigation";
import TeamDirectory from "./team-directory";
import Organogram from "./organogram";
import PhotoGallery from "./photo-gallery";

export default function InstitutionPage({ page, section }: { page: PageRecord; section: string }) {
  const parent = navigation.find((item) => item.href === `/${section}`)!;
  const team = page.mode === "team";
  const sharedWhoLayout = ["who-we-are", "what-we-do", "how-we-work", "get-involved"].includes(section);
  return <>
    {(page.mode === "governance" || page.mode === "structure") && <nav className="governance-subnavigation container" aria-label="Governance subsections">{governanceLinks.map(([label, href]) => <Link key={href} href={href} scroll={false} aria-current={href === `/who-we-are/${page.slug}` ? "page" : undefined}>{label}</Link>)}</nav>}
    {sharedWhoLayout ? <div className="container who-content-heading"><h2>{page.title.replace(/\.+$/, "")}</h2>{page.summary && <p>{page.summary}</p>}</div> : <><PageIntro title={page.title} eyebrow={parent.title} description={page.summary} /><SectionNavigation section={section} current={`/${section}/${page.slug}`} /></>}
    {page.image && <div className="about-photo container overview-photo supplied-photo"><Image src={page.image} alt={page.imageAlt || "BRD Tanzania activities"} fill sizes="90vw" preload /></div>}
    {page.mode === "structure" && <Organogram />}
    {page.mode === "governance" && <section className="container governance-board"><div className="board-blue-box"><h3>Board of Directors</h3><p>Strategic oversight and guidance</p></div></section>}
    <>
      {page.sections.length > 0 && <section className={`section-band container ${page.mode === "mission" ? "mission-grid" : "institution-copy"}`}>{page.sections.map((part) => <div key={part.heading}><h2>{part.heading}</h2><p>{part.body}</p></div>)}</section>}
      {page.list && <section className="container institution-list"><h2>{page.list.heading}</h2><ul>{page.list.items.map((item) => <li key={item}>{item}</li>)}</ul></section>}
      {team && <TeamDirectory />}
      {page.mode === "governance" && <section className="container board-roster"><h2>Our board members</h2><dl>{boardMembers.map((member) => <div key={member.name}><dt>{member.name}</dt><dd>{member.position}</dd></div>)}</dl></section>}
      {page.mode === "mission" && <section className="section-band soft"><div className="container"><div className="section-heading"><span className="eyebrow">Our core values</span><h2>The principles that guide our work</h2></div><div className="values-introduction">{valuesIntro.map((body) => <p key={body}>{body}</p>)}</div><div className="values-grid">{values.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div><div className="values-introduction values-conclusion"><h2>Putting our values into practice</h2>{valuesConclusion.map((body) => <p key={body}>{body}</p>)}</div></div></section>}
      {page.mode === "partners" && <section className="container partners-section"><div className="partners-grid supplied-partners">{partners.map((partner) => <figure key={partner.id}><div className="partner-logo-frame"><Image src={partner.src} alt={partner.alt} width={partner.width} height={partner.height} sizes="(max-width: 600px) 80vw, 25vw" /></div><figcaption><h2>{partner.name}</h2></figcaption></figure>)}</div></section>}
      {page.gallery && <PhotoGallery ids={page.gallery} />}
      {page.mode === "events" && <section className="events-section container"><p>Upcoming events and registration details will be published here when available.</p><div className="event-list">{sampleEvents.map((event) => <article key={event.title}><div className="event-date" aria-label={event.date}><strong>{event.day}</strong><span>{event.month}</span></div><div><span className="eyebrow">{event.format}</span><h2>{event.title}</h2><p>{event.summary}</p><div className="event-meta"><span><CalendarDays size={16} />{event.date}</span><span><MapPin size={16} />{event.location}</span></div></div><Link href="/contact" className="text-link">Enquire<ArrowUpRight size={18} /></Link></article>)}</div></section>}
      {page.mode === "careers" && <section className="careers-section container"><p>Vacancies and consultancy opportunities will be published here when available.</p>{sampleRoles.map(([title, area, body]) => <details key={title} className="career-row"><summary><span>{area}</span><h2>{title}</h2><ArrowDown size={22} /></summary><div><p>{body}</p><Link href="/contact" className="text-link">Discuss opportunities<ArrowUpRight size={18} /></Link></div></details>)}</section>}
      {page.action && <section className="container institution-action"><Link href="/contact" className="button">{page.action}<ArrowUpRight size={18} /></Link></section>}
    </>
  </>;
}
