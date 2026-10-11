import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import { navigation } from "../data/site-config";
import { institutionPages } from "../data/institution";

export const metadata = { title: "Get Involved" };
export default function GetInvolved() {
  const group = navigation.find((item) => item.href === "/get-involved")!;
  return <><PageIntro title="Better, together." eyebrow="Get Involved" description="Join a conversation, share your expertise, or contribute to a shared purpose. Find your way to get involved." /><SectionNavigation section="get-involved" current="/get-involved" /><div className="about-photo container overview-photo"><Image src="/preview/workshop.jpg" alt="Illustrative collaborative workshop" fill sizes="90vw" preload /></div><section className="section-band container"><div className="gateway-list involvement-list">{group.links.map(([label, href], index) => <Link href={href} key={href}><span className="gateway-number">{String(index + 1).padStart(2, "0")}</span><h2>{label}</h2><p>{institutionPages["get-involved"][index].summary}</p><ArrowUpRight size={25} /></Link>)}</div></section></>;
}
