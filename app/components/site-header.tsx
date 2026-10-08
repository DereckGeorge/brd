"use client";

import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Our work", "#work"],
  ["Our people", "#team"],
  ["Resources", "#resources"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#home" aria-label="BRD Tanzania home" onClick={() => setMenuOpen(false)}>
          <Image src="/brd-logo.jpg" alt="BRD Tanzania: Building Resilience to Disasters" width={124} height={61} preload />
        </a>
        <nav id="main-navigation" className={menuOpen ? "main-navigation is-open" : "main-navigation"} aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-partner" href="#donate" onClick={() => setMenuOpen(false)}>Partner with us <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation" title={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
}
