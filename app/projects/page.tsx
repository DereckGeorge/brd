import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["projects"] };
export default function Page() {
  return <><PageIntro title="Projects." eyebrow={collectionLabels["projects"]} description="Turning shared ambition into local action. Explore an illustrative portfolio of community-led resilience programs." /><CollectionBrowser items={collections["projects"]} section="projects" /></>;
}
