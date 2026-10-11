import Image from "next/image";
import Link from "next/link";
import { CirclePlay, ArrowUpRight } from "lucide-react";

export default function VideoFeature() {
  return <section className="section-band video-feature-band"><div className="container"><div className="section-heading"><div><span className="eyebrow">Watch & learn</span><h2>Resilience, in perspective.</h2></div><Link href="/videos" className="text-link">Explore videos & learning<ArrowUpRight size={20} /></Link></div><Link href="/videos" className="video-feature-link"><div className="video-feature-image"><Image src="/preview/mangroves.jpg" alt="Illustrative mangrove landscape for the sample video collection" fill sizes="(max-width: 700px) 90vw, 60vw" /><CirclePlay size={65} strokeWidth={1.2} /></div><div><span className="eyebrow">Community. Learning. Environment.</span><h3>See the connections.<br />Continue the conversation.</h3><p>Explore sample visual stories about ecosystems, practical learning, and the choices that shape resilience.</p><span className="sample-note">Illustrative stock-photo clips, not BRD footage.</span></div></Link></div></section>;
}
