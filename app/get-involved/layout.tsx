import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import copy from "../data/approved-copy.json";
export default function Layout({ children }: { children: React.ReactNode }) { return <div className="section-shell"><PageIntro title="Get Involved" eyebrow="Get Involved" description={copy.getInvolved} stacked /><div className="who-navigation-band"><SectionNavigation section="get-involved" /></div>{children}</div>; }
