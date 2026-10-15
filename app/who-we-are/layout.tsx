import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";

export default function WhoWeAreLayout({ children }: { children: React.ReactNode }) {
  return <div className="who-section"><PageIntro title="Who We Are." eyebrow="Who We Are" description="Our purpose, our people, and the relationships behind a shared commitment to resilience." /><div className="who-navigation-band"><SectionNavigation section="who-we-are" /></div><div className="who-section-content">{children}</div></div>;
}
