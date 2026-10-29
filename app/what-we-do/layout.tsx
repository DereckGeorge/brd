import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import copy from "../data/approved-copy.json";

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return <div className="section-shell"><PageIntro title="What We Do" eyebrow="What We Do" description={copy.whatWeDo} stacked /><div className="who-navigation-band"><SectionNavigation section="what-we-do" /></div>{children}</div>;
}
