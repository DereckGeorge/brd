"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Search, X, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/site-config";
import SocialLinks from "./social-links";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [group, setGroup] = useState<number | null>(null);
  const root = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  function close() { setMobile(false); setGroup(null); }
  useEffect(() => {
    function dismiss(event: PointerEvent) { if (!root.current?.contains(event.target as Node)) { setMobile(false); setGroup(null); } }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="preview-notice"><span>Design preview</span><span>Illustrative content & photography</span></div>
    <header ref={root} className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { if (mobile) root.current?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); else if (group !== null) triggers.current[group]?.focus(); close(); } }}>
      <div className="utility-bar"><div className="container utility-inner"><span className="utility-tagline">Building Resilience to Disasters</span><nav aria-label="Utility navigation"><Link href="/news" onClick={close}>News & Stories</Link><Link href="/contact" onClick={close}>Contact Us</Link><Link href="/search" onClick={close} title="Search the website" className="utility-search"><Search size={16} /><span>Search</span></Link></nav><SocialLinks /></div></div>
      <div className="header-inner container">
        <Link href="/" className="brand" aria-label="BRD Tanzania home" onClick={close}><Image src="/brd-logo.jpg" alt="BRD Tanzania" width={124} height={61} preload /></Link>
        <nav id="main-navigation" className={`main-navigation ${mobile ? "is-open" : ""}`} aria-label="Main navigation">
          <Link className="home-nav" href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={close}>Home</Link>
          {navigation.map((item, index) => <div className="nav-group" key={item.title}>
            <div className={`nav-label ${pathname === item.href || pathname.startsWith(`${item.href}/`) || item.links.some(([, href]) => pathname === href || pathname.startsWith(`${href}/`)) ? "nav-active" : ""}`}><Link href={item.href} onClick={close}>{item.title}</Link><button ref={(element) => { triggers.current[index] = element; }} aria-label={`${group === index ? "Close" : "Open"} ${item.title} submenu`} title={`${group === index ? "Close" : "Open"} ${item.title} submenu`} aria-expanded={group === index} aria-controls={group === index ? `nav-group-${index}` : undefined} onClick={() => setGroup(group === index ? null : index)}><ChevronDown size={14} /></button></div>
            {group === index && <div id={`nav-group-${index}`} className="nav-dropdown"><div className="container dropdown-inner"><div><span className="eyebrow">{item.title}</span><p>{item.description}</p><Link className="text-link" href={item.href} onClick={close}>Explore {item.title.toLowerCase()}<ArrowUpRight size={18} /></Link></div><div className="dropdown-links">{item.links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}<ArrowUpRight size={18} /></Link>)}</div></div></div>}
          </div>)}
        </nav>
        <Link className="header-donate donate-button" href="/donate" onClick={close}><Heart size={17} />Donate</Link>
        <button className="menu-toggle icon-button" aria-expanded={mobile} aria-controls="main-navigation" title={mobile ? "Close navigation" : "Open navigation"} aria-label={mobile ? "Close navigation" : "Open navigation"} onClick={() => { setMobile(!mobile); setGroup(null); }}>{mobile ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  </>;
}
