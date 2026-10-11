import { notFound } from "next/navigation";
import PageIntro from "../../../components/page-intro";
import CollectionBrowser from "../../../components/collection-browser";
import SectionNavigation from "../../../components/section-navigation";
import VideoLibrary from "../../../components/video-library";
import { resources } from "../../../data/content";
import { knowledgeCategories } from "../../../data/site-config";

export const dynamicParams = false;
export function generateStaticParams() { return knowledgeCategories.map((item) => ({ category: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = knowledgeCategories.find((record) => record.slug === category);
  return { title: item?.title, description: item?.description };
}
export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = knowledgeCategories.find((record) => record.slug === category);
  if (!item) notFound();
  const records = resources.filter((record) => item.types.includes(record.category));
  return <><PageIntro title={`${item.title}.`} eyebrow="Knowledge Hub" description={item.description} /><SectionNavigation section="knowledge-hub" current={`/knowledge-hub/categories/${category}`} />{category === "videos-education" && <VideoLibrary />}<CollectionBrowser items={records} section="knowledge-hub" /></>;
}
