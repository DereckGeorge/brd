import { Mail, Phone } from "lucide-react";
import PageIntro from "../components/page-intro";
import { contact, socialProfiles } from "../data/site-config";
import copy from "../data/approved-copy.json";
export const metadata = { title: "Contact Us" };
export default function Contact() { return <><PageIntro title="Contact BRD Tanzania" eyebrow="Contact Us" description={copy.contact} stacked /><section className="contact-layout container"><div><h2>{contact.name}</h2><address>{contact.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={`mailto:${contact.email}`}><Mail size={20} />{contact.email}</a>{contact.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}><Phone size={20} />{phone}</a>)}</div><div className="contact-social"><h2>Connect with BRD</h2>{socialProfiles.filter((profile) => !!profile.url).map((profile) => <a key={profile.name} href={profile.url!} target="_blank" rel="noopener noreferrer">{profile.name}</a>)}<a className="button" href={`mailto:${contact.email}`}>Email BRD Tanzania<Mail size={18} /></a></div></section></>; }
