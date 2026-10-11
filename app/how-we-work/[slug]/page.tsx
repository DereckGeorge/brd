import { notFound } from "next/navigation";
import InstitutionPage from "../../components/institution-page";
import { institutionPages } from "../../data/institution";

const pages = institutionPages["how-we-work"];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  return { title: page?.title, description: page?.summary };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <InstitutionPage page={page} section="how-we-work" />;
}
