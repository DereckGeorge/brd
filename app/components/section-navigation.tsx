import Link from "next/link";
import { navigation } from "../data/site-config";

export default function SectionNavigation({ section, current }: { section: string; current?: string }) {
  const group = navigation.find((item) => item.href === `/${section}`);
  if (!group) return null;
  return <nav className="section-navigation container" aria-label={`${group.title} section`}><Link href={group.href} aria-current={current === group.href ? "page" : undefined}>Overview</Link>{group.links.map(([label, href]) => <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>{label}</Link>)}</nav>;
}
