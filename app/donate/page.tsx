import { Mail, Phone, MessageCircle, ShieldCheck, Receipt, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageIntro from "../components/page-intro";
import { contact } from "../data/site-config";

export const metadata = { title: "Donate to BRD Tanzania" };
const instructions = [
  { Icon: MessageCircle, title: "Contact our team", body: "Tell us how you would like to support BRD, including your preferred donation method and any intended area of support." },
  { Icon: ShieldCheck, title: "Request official payment instructions", body: "BRD will confirm the approved payment method and recipient details directly. Verify those details with the team before making a transfer." },
  { Icon: Receipt, title: "Arrange an acknowledgement", body: "Ask the team about a receipt or acknowledgement and how your support will be recorded." },
];
export default function Donate() {
  return <><PageIntro title="Support resilience." eyebrow="Donate" description="Help connect knowledge, preparedness, and community-led action. Speak with BRD to arrange your support." /><section className="donation-layout container"><div className="donation-instructions"><h2>How to donate</h2><ul>{instructions.map(({ Icon, title, body }) => <li key={title}><Icon size={27} strokeWidth={1.5} /><div><h3>{title}</h3><p>{body}</p></div></li>)}</ul><p className="donation-note">Donations are arranged directly with BRD. This website does not collect payments or display bank or mobile-money account details.</p></div><aside className="donation-contact"><span className="eyebrow">Arrange your donation</span><h2>Talk to BRD Tanzania.</h2><a href={`mailto:${contact.email}?subject=Donation%20enquiry`}><Mail size={21} />{contact.email}</a>{contact.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}><Phone size={21} />{phone}</a>)}<address>{contact.address.map((line) => <span key={line}>{line}<br /></span>)}</address><Link href="/contact" className="text-link">Contact page<ArrowUpRight size={20} /></Link></aside></section></>;
}
