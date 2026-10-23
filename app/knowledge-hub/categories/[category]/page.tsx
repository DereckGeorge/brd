import { notFound, redirect } from "next/navigation";
import PageIntro from "../../../components/page-intro";
import CollectionBrowser from "../../../components/collection-browser";
import SectionNavigation from "../../../components/section-navigation";
import VideoLibrary from "../../../components/video-library";
import { resources } from "../../../data/content";
import { knowledgeCategories, knowledgeCategoryRedirects } from "../../../data/site-config";

export const dynamicParams = false;
export function generateStaticParams() { return [...knowledgeCategories.map((item) => ({ category: item.slug })), ...Object.keys(knowledgeCategoryRedirects).map((category) => ({ category }))]; }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = knowledgeCategories.find((record) => record.slug === category);
  return { title: item?.title, description: item?.description };
}
export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (knowledgeCategoryRedirects[category]) redirect(`/knowledge-hub/categories/${knowledgeCategoryRedirects[category]}`);
  const item = knowledgeCategories.find((record) => record.slug === category);
  if (!item) notFound();
  const records = resources.filter((record) => item.types.includes(record.category));
  return <><PageIntro title={`${item.title}.`} eyebrow="Knowledge Hub" description={item.description} /><SectionNavigation section="knowledge-hub" current={`/knowledge-hub/categories/${category}`} />{item.types.includes("Video") && <VideoLibrary />}<CollectionBrowser items={records} section="knowledge-hub" /></>;
}
