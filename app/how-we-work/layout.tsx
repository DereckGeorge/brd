import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import copy from "../data/approved-copy.json";
export default function Layout({ children }: { children: React.ReactNode }) { return <div className="section-shell"><PageIntro title="How We Work" eyebrow="How We Work" description={copy.howWeWork} stacked /><div className="who-navigation-band"><SectionNavigation section="how-we-work" /></div>{children}</div>; }
