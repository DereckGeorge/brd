import { notFound } from "next/navigation";
import DetailPage from "../../components/detail-page";
import { directors } from "../../data/content";

export const dynamicParams = false;
export function generateStaticParams() { return directors.map((member) => ({ slug: member.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = directors.find((record) => record.slug === slug);
  if (!member) notFound();
  return pageMetadata(member.title, `/board/${slug}`, member.summary);
}
export default async function BoardProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = directors.find((record) => record.slug === slug);
  if (!member) notFound();
  return <DetailPage item={member} section="board" />;
}
import { pageMetadata } from "../../data/seo";
