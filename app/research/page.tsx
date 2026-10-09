import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["research"] };
export default function Page() {
  return <><PageIntro title="Research." eyebrow={collectionLabels["research"]} description="Evidence that asks better questions. Explore sample studies in disaster risk, climate resilience, and geospatial science." /><CollectionBrowser items={collections["research"]} section="research" /></>;
}
