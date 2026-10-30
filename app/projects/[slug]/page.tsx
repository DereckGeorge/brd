import { notFound } from "next/navigation";
import DetailPage from "../../components/detail-page";
import { collections } from "../../data/content";

const items = collections["projects"];
export const dynamicParams = false;
export function generateStaticParams() { return items.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = items.find((record) => record.slug === slug);
  if (!item) notFound();
  return pageMetadata(item.title, `/projects/${slug}`, item.summary);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = items.find((record) => record.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} section="projects" />;
}
import { pageMetadata } from "../../data/seo";
