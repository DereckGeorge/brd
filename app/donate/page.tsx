import { Mail, Phone, MessageCircle, ShieldCheck, Receipt, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageIntro from "../components/page-intro";
import { contact } from "../data/site-config";
import copy from "../data/approved-copy.json";

export const metadata = { title: "Donate to BRD Tanzania" };
const guidance = copy.donationInstructions.split(/(?<=\.)\s+/);
const instructions = [
  { Icon: MessageCircle, title: "Contact our team", body: guidance[0] },
  { Icon: Receipt, title: "Confirm the arrangements", body: guidance[1] },
  { Icon: ShieldCheck, title: "Use verified payment channels", body: guidance[2] },
];
export default function Donate() {
  return <><PageIntro title="Support BRD Tanzania" eyebrow="Donate" description={copy.donate} /><section className="donation-layout container"><div className="donation-instructions"><h2>How to donate</h2><ul>{instructions.map(({ Icon, title, body }) => <li key={title}><Icon size={27} strokeWidth={1.5} /><div><h3>{title}</h3><p>{body}</p></div></li>)}</ul><p className="donation-note">Donations are arranged directly with BRD. This website does not collect payments or display bank or mobile-money account details.</p></div><aside className="donation-contact"><span className="eyebrow">Arrange your donation</span><h2>Talk to BRD Tanzania</h2><a href={`mailto:${contact.email}?subject=Donation%20enquiry`}><Mail size={21} />{contact.email}</a>{contact.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}><Phone size={21} />{phone}</a>)}<address>{contact.address.map((line) => <span key={line}>{line}<br /></span>)}</address><Link href="/contact" className="text-link">Contact page<ArrowUpRight size={20} /></Link></aside></section></>;
}
