import { notFound } from "next/navigation";
import InstitutionPage from "../../components/institution-page";
import { institutionPages } from "../../data/institution";

const pages = institutionPages["get-involved"];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, `/get-involved/${slug}`, page.summary);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <InstitutionPage page={page} section="get-involved" />;
}
import { pageMetadata } from "../../data/seo";
