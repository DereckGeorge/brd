import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Link href="/" className="footer-name">BRD Tanzania.</Link><p>Building Resilience to Disasters.</p></div><Link href="/contact" className="text-link">Start a conversation<ArrowUpRight size={20} /></Link></div>
    <div className="footer-grid"><div><h2>Explore</h2><Link href="/about">About us</Link><Link href="/people">Our people</Link><Link href="/projects">Projects</Link><Link href="/research">Research</Link></div><div><h2>Connect</h2><Link href="/services">Services</Link><Link href="/knowledge-hub">Knowledge Hub</Link><Link href="/news">News & stories</Link><Link href="/get-involved">Get involved</Link></div><div><h2>Find us</h2><address>BRD Tanzania, P.O. Box 6548<br />Kibo Complex, Tegeta<br />1st Floor, Office No. 06, Bagamoyo Road<br />Dar es Salaam, Tanzania</address></div><div><h2>Say hello</h2><a href="mailto:info@brd.or.tz">info@brd.or.tz</a><a href="tel:+255768021824">+255 768 021 824</a><a href="tel:+255789932878">+255 789 932 878</a></div></div>
    <div className="footer-bottom"><span>BRD Tanzania · Design prototype</span><span>Sample projects and profiles are fictional.</span><Link href="/credits">Photography credits</Link></div>
  </div></footer>;
}
