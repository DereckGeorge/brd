import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contact } from "../data/site-config";
import { partners } from "../data/institution";
import SocialLinks from "./social-links";

export default function SiteFooter() {
  return <footer className="site-footer">
    <section className="partner-footer-band" aria-labelledby="partner-band-title"><div className="container partner-footer-inner"><div><span className="eyebrow">Our partners</span><h2 id="partner-band-title">Together, we build resilience</h2><Link href="/get-involved/partners" className="text-link">Partner with us<ArrowUpRight size={19} /></Link></div><div className="partner-example-circles supplied-partner-logos" aria-label="BRD partners">{partners.map((partner) => <figure className="partner-name-item" key={partner.id}><div className="partner-example-circle"><Image src={partner.src} alt={partner.alt} width={partner.width} height={partner.height} sizes="120px" /></div><figcaption>{partner.name}</figcaption></figure>)}</div></div></section>
    <div className="container footer-main">
      <div className="footer-top"><div><Link href="/" className="footer-name">BRD Tanzania</Link><p>Building Resilience to Disasters</p></div><Link href="/contact" className="text-link">Start a conversation<ArrowUpRight size={20} /></Link></div>
      <div className="footer-grid"><div><h2>Discover BRD</h2><Link href="/who-we-are">Who We Are</Link><Link href="/what-we-do">What We Do</Link><Link href="/how-we-work">How We Work</Link><Link href="/projects">Our Projects</Link></div><div><h2>Knowledge & Engagement</h2><Link href="/knowledge-hub">Knowledge Hub</Link><Link href="/videos">Videos & Learning</Link><Link href="/news">News & Stories</Link><Link href="/get-involved">Get Involved</Link><Link href="/donate">Donate</Link></div><div><h2>Visit us</h2><address>{contact.name}<br />{contact.address.map((line) => <span key={line}>{line}<br /></span>)}</address><Link href="/contact">Contact Us<ArrowUpRight size={13} /></Link></div><div><h2>Say hello</h2><a href={`mailto:${contact.email}`}>{contact.email}</a>{contact.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>)}<h2 className="social-heading">Follow BRD</h2><SocialLinks /></div></div>
      <div className="footer-bottom"><span>BRD Tanzania</span><span>Building Resilience to Disasters</span><Link href="/credits">Images & credits</Link></div>
    </div>
  </footer>;
}
