import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { people } from "../data/content";
import { type InstitutionPage as PageRecord, samplePartners, sampleRoles, sampleEvents, values } from "../data/institution";
import { navigation } from "../data/site-config";
import PageIntro from "./page-intro";
import SectionNavigation from "./section-navigation";
import CollectionBrowser from "./collection-browser";
import ResiliencePathway from "./resilience-pathway";

export default function InstitutionPage({ page, section }: { page: PageRecord; section: string }) {
  const parent = navigation.find((item) => item.href === `/${section}`)!;
  const team = page.mode === "management" || page.mode === "board";
  return <>
    <PageIntro title={page.title} eyebrow={parent.title} description={page.summary} />
    <SectionNavigation section={section} current={`/${section}/${page.slug}`} />
    {page.image && <div className="about-photo container overview-photo"><Image src={page.image} alt="Illustrative photograph accompanying the sample institutional narrative" fill sizes="90vw" preload /></div>}
    {team ? <CollectionBrowser items={people.filter((person) => person.category === (page.mode === "board" ? "Board of Directors" : "Management"))} section="people" showGroups={false} /> : <>
      {page.sections.length > 0 && <section className={`section-band container ${page.mode === "mission" ? "mission-grid" : "institution-copy"}`}>{page.sections.map((part) => <div key={part.heading}><h2>{part.heading}</h2><p>{part.body}</p></div>)}</section>}
      {page.mode === "mission" && <section className="section-band soft"><div className="container"><div className="section-heading"><span className="eyebrow">Our core values</span><h2>Principles we put into practice.</h2></div><div className="values-grid">{values.map(([title, body], index) => <div key={title}><span className="gateway-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>}
      {page.mode === "governance" && <section className="section-band soft"><div className="container"><div className="section-heading"><h2>A clear line of responsibility.</h2><p className="sample-note">Illustrative governance model.</p></div><ol className="governance-flow">{[["Board of Directors", "Strategic oversight & accountability"], ["Executive leadership", "Direction, coordination & responsible delivery"], ["Research, technical & program teams", "Evidence, learning & community engagement"]].map(([title, body], index) => <li key={title}><span>{title}</span><p>{body}</p>{index < 2 && <ArrowDown size={24} aria-hidden="true" />}</li>)}</ol></div></section>}
      {page.mode === "partners" && <section className="container partners-section"><p className="sample-note">Fictional partner organizations for design review.</p><div className="partners-grid">{samplePartners.map(([name, focus], index) => <div key={name}><span className="partner-monogram" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2>{name}</h2><p>{focus}</p></div>)}</div></section>}
      {page.mode === "approach" && <ResiliencePathway />}
      {page.mode === "events" && <section className="events-section container"><p className="sample-note">Illustrative events only. These are not confirmed BRD events; no registrations are collected.</p><div className="event-list">{sampleEvents.map((event) => <article key={event.title}><div className="event-date" aria-label={event.date}><strong>{event.day}</strong><span>{event.month}</span></div><div><span className="eyebrow">{event.format}</span><h2>{event.title}</h2><p>{event.summary}</p><div className="event-meta"><span><CalendarDays size={16} />{event.date}</span><span><MapPin size={16} />{event.location}</span></div></div><Link href="/contact" className="text-link">Enquire<ArrowUpRight size={18} /></Link></article>)}</div></section>}
      {page.mode === "careers" && <section className="careers-section container"><p className="sample-note">Illustrative opportunities only. These are not live vacancies; no applications are collected.</p>{sampleRoles.map(([title, area, body]) => <details key={title} className="career-row"><summary><span>{area}</span><h2>{title}</h2><ArrowDown size={22} /></summary><div><p>{body}</p><p>Curiosity, collaboration, and a commitment to responsible community engagement are central to this sample role.</p><Link href="/contact" className="text-link">Discuss future opportunities<ArrowUpRight size={18} /></Link></div></details>)}</section>}
      {page.action && <section className="container institution-action"><Link href="/contact" className="button">{page.action}<ArrowUpRight size={18} /></Link></section>}
    </>}
  </>;
}
