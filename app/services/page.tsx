import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = pageMetadata(collectionLabels["services"], "/services");
export default function Page() {
  return <><PageIntro title="Expertise, put to work" eyebrow={collectionLabels["services"]} description="Research, advice, technology, and practical learning. Discover how a partnership with BRD could take shape." /><CollectionBrowser items={collections["services"]} section="services" /></>;
}
import { pageMetadata } from "../data/seo";
