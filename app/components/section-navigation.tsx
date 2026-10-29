"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/site-config";

export default function SectionNavigation({ section, current }: { section: string; current?: string }) {
  const pathname = usePathname();
  const group = navigation.find((item) => item.href === `/${section}`);
  if (!group || !group.links.length) return null;
  const active = section === "who-we-are" && pathname === "/who-we-are" ? "/who-we-are/about" : section === "who-we-are" && pathname === "/who-we-are/organisational-structure" ? "/who-we-are/governance" : current || pathname;
  return <nav className="section-navigation container who-navigation" data-section={section} aria-label={`${group.title} section`}>{group.links.map(([label, href]) => section === "knowledge-hub" ? <button key={href} type="button" disabled aria-disabled="true">{label}</button> : <Link key={href} href={href} scroll={false} aria-current={active === href ? "page" : undefined}>{label}</Link>)}</nav>;
}
