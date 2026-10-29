import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["news"] };
export default function Page() {
  return <><PageIntro title="News & Stories" eyebrow={collectionLabels["news"]} description="Perspectives on resilience, practical learning and community priorities" stacked /><CollectionBrowser items={collections["news"]} section="news" /></>;
}
