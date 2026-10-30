import { notFound } from "next/navigation";
import InstitutionPage from "../../components/institution-page";
import { institutionPages } from "../../data/institution";

const pages = institutionPages["what-we-do"];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, `/what-we-do/${slug}`, page.summary);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <InstitutionPage page={page} section="what-we-do" />;
}
import { pageMetadata } from "../../data/seo";
