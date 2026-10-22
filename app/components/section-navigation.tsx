"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/site-config";

export default function SectionNavigation({ section, current }: { section: string; current?: string }) {
  const pathname = usePathname();
  const group = navigation.find((item) => item.href === `/${section}`);
  if (!group) return null;
  const active = section === "who-we-are" && pathname === "/who-we-are" ? "/who-we-are/about" : current || pathname;
  const shared = section === "who-we-are" || section === "what-we-do";
  return <nav className={`section-navigation container ${shared ? "who-navigation" : ""}`} aria-label={`${group.title} section`}>{group.links.map(([label, href]) => <Link key={href} href={href} scroll={shared ? false : undefined} aria-current={active === href ? "page" : undefined}>{label}</Link>)}</nav>;
}
