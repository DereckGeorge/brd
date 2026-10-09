import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["knowledge-hub"] };
export default function Page() {
  return <><PageIntro title="Knowledge Hub." eyebrow={collectionLabels["knowledge-hub"]} description="Ideas worth sharing. Explore sample research reports, practical guides, policy briefs, and learning from the field." /><CollectionBrowser items={collections["knowledge-hub"]} section="knowledge-hub" /></>;
}
