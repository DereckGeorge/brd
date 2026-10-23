import PageIntro from "../components/page-intro";

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return <div className="who-section service-section"><PageIntro title="What We Do." eyebrow="What We Do" description="" /><div className="who-section-content">{children}</div></div>;
}
