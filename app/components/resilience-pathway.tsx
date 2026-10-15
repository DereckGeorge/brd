const steps = [
  { title: "Understand risk", body: "Combine local knowledge, research, and spatial evidence." },
  { title: "Plan together", body: "Agree on priorities, responsibilities, and practical next steps." },
  { title: "Build capability", body: "Strengthen preparedness through learning and local action." },
  { title: "Learn & adapt", body: "Reflect on experience and improve the next cycle of action." },
];
export default function ResiliencePathway() {
  return <section className="pathway-band section-band"><div className="container"><div className="section-heading"><div><span className="eyebrow">Our approach in practice</span><h2>From evidence to resilience.</h2></div><p className="pathway-intro">A shared pathway for learning, action, and lasting capability.</p></div><ul className="resilience-pathway">{steps.map(({ title, body }) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ul></div></section>;
}
