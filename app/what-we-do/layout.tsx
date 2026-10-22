import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return <div className="who-section service-section"><PageIntro title="What We Do." eyebrow="What We Do" description="" /><div className="who-navigation-band"><SectionNavigation section="what-we-do" /></div><div className="who-section-content">{children}</div></div>;
}
