import { notFound, redirect } from "next/navigation";
import { knowledgeCategories, knowledgeCategoryRedirects } from "../../../data/site-config";
export const dynamicParams = false;
export function generateStaticParams() { return [...knowledgeCategories.map((item) => ({ category: item.slug })), ...Object.keys(knowledgeCategoryRedirects).map((category) => ({ category }))]; }
export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (knowledgeCategoryRedirects[category]) redirect(`/knowledge-hub/categories/${knowledgeCategoryRedirects[category]}`);
  if (!knowledgeCategories.some((item) => item.slug === category)) notFound();
  return <div className="container knowledge-empty"><p>Resources will be published here as they become available</p></div>;
}
