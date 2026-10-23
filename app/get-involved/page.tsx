import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import { navigation } from "../data/site-config";
import { institutionPages } from "../data/institution";
import copy from "../data/approved-copy.json";

export const metadata = { title: "Get Involved" };
export default function GetInvolved() {
  const group = navigation.find((item) => item.href === "/get-involved")!;
  return <><PageIntro title="Get involved." eyebrow="Get Involved" description={copy.getInvolved} /><SectionNavigation section="get-involved" current="/get-involved" /><div className="about-photo container overview-photo supplied-photo"><Image src="/brd/photos/brd-workshop.webp" alt="Workshop photograph supplied by BRD Tanzania" fill sizes="90vw" preload /></div><section className="section-band container"><div className="gateway-list involvement-list">{group.links.map(([label, href], index) => <Link href={href} key={href}><h2>{label}</h2><p>{institutionPages["get-involved"][index].summary}</p><ArrowUpRight size={25} /></Link>)}</div></section></>;
}
