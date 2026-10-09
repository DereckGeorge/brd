import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["news"] };
export default function Page() {
  return <><PageIntro title="News & stories." eyebrow={collectionLabels["news"]} description="Perspectives on resilience, collaboration, and change. A collection of illustrative stories and insights." /><CollectionBrowser items={collections["news"]} section="news" /></>;
}
