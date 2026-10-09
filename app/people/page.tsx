import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { collections, collectionLabels } from "../data/content";

export const metadata = { title: collectionLabels["people"] };
export default function Page() {
  return <><PageIntro title="Our people." eyebrow={collectionLabels["people"]} description="Different perspectives. A common purpose. Meet the fictional team created for this design preview." /><CollectionBrowser items={collections["people"]} section="people" /></>;
}
