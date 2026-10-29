import PageIntro from "../components/page-intro";
import SectionNavigation from "../components/section-navigation";
import copy from "../data/approved-copy.json";
export default function Layout({ children }: { children: React.ReactNode }) { return <div className="section-shell"><PageIntro title="Knowledge Hub" eyebrow="Knowledge Hub" description={copy.knowledgeHub} stacked /><div className="who-navigation-band"><SectionNavigation section="knowledge-hub" /></div>{children}</div>; }
