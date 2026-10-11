import { Compass, Handshake, GraduationCap, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  { title: "Understand risk", body: "Combine local knowledge, research, and spatial evidence.", Icon: Compass },
  { title: "Plan together", body: "Agree on priorities, responsibilities, and practical next steps.", Icon: Handshake },
  { title: "Build capability", body: "Strengthen preparedness through learning and local action.", Icon: GraduationCap },
  { title: "Learn & adapt", body: "Reflect on experience and improve the next cycle of action.", Icon: RefreshCw },
];
export default function ResiliencePathway() {
  return <section className="pathway-band section-band"><div className="container"><div className="section-heading"><div><span className="eyebrow">Our approach in practice</span><h2>From evidence to resilience.</h2></div><p className="pathway-intro">A shared pathway for learning, action, and lasting capability.</p></div><ol className="resilience-pathway">{steps.map(({ title, body, Icon }, index) => <li key={title}><div className="pathway-symbol"><Icon size={30} strokeWidth={1.4} /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{title}</h3><p>{body}</p>{index < steps.length - 1 && <ArrowRight className="pathway-arrow" size={23} aria-hidden="true" />}</li>)}</ol></div></section>;
}
