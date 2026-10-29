import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["projects"] };
export default function Page() {
  return <><PageIntro title="Projects" eyebrow={collectionLabels["projects"]} description="BRD Tanzania's work in flood resilience, disaster risk management, policy evaluation and risk-informed development." /><CollectionBrowser items={collections["projects"]} section="projects" /></>;
}
