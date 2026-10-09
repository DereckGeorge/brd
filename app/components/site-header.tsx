"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const groups = [
  { title: "Who we are", description: "People. Purpose. A shared commitment to resilience.", links: [["About BRD", "/about"], ["Our people", "/people"], ["Our approach", "/about#approach"]] },
  { title: "Our work", description: "Connecting evidence with action, and knowledge with communities.", links: [["Research", "/research"], ["Projects", "/projects"], ["Services", "/services"]] },
];

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
      <div className="header-inner container">
        <Link href="/" className="brand" aria-label="BRD Tanzania home" onClick={close}><Image src="/brd-logo.jpg" alt="BRD Tanzania" width={124} height={61} preload /></Link>
        <nav id="main-navigation" className={`main-navigation ${mobile ? "is-open" : ""}`} aria-label="Main navigation">
          {groups.map((item, index) => <div className="nav-group" key={item.title}>
            <button ref={(element) => { triggers.current[index] = element; }} className={item.links.some(([, href]) => pathname === href || pathname.startsWith(`${href}/`)) ? "nav-active" : ""} aria-expanded={group === index} aria-controls={group === index ? `nav-group-${index}` : undefined} onClick={() => setGroup(group === index ? null : index)}>{item.title}<ChevronDown size={14} /></button>
            {group === index && <div id={`nav-group-${index}`} className="nav-dropdown"><div className="container dropdown-inner"><p>{item.description}</p><div>{item.links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}<ArrowUpRight size={20} /></Link>)}</div></div></div>}
          </div>)}
          <Link href="/knowledge-hub" onClick={close} aria-current={pathname.startsWith("/knowledge-hub") ? "page" : undefined}>Knowledge Hub</Link>
          <Link href="/get-involved" className="nav-partner" onClick={close}>Get involved<ArrowUpRight size={15} /></Link>
          <div className="nav-utility"><Link href="/news" onClick={close}>News</Link><Link href="/contact" onClick={close}>Contact</Link><Link href="/search" className="icon-button" title="Search the website" aria-label="Search the website" onClick={close}><Search size={19} /></Link></div>
        </nav>
        <button className="menu-toggle icon-button" aria-expanded={mobile} aria-controls="main-navigation" title={mobile ? "Close navigation" : "Open navigation"} aria-label={mobile ? "Close navigation" : "Open navigation"} onClick={() => { setMobile(!mobile); setGroup(null); }}>{mobile ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  </>;
}
