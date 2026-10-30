import { notFound, redirect } from "next/navigation";
import InstitutionPage from "../../components/institution-page";
import { institutionPages, whoPageRedirects } from "../../data/institution";

const pages = institutionPages["who-we-are"];
export const dynamicParams = false;
export function generateStaticParams() { return [...pages.map((page) => ({ slug: page.slug })), ...Object.keys(whoPageRedirects).map((slug) => ({ slug }))]; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (whoPageRedirects[slug]) redirect(`/who-we-are/${whoPageRedirects[slug]}`);
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, `/who-we-are/${slug}`, page.summary);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (whoPageRedirects[slug]) redirect(`/who-we-are/${whoPageRedirects[slug]}`);
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <InstitutionPage page={page} section="who-we-are" />;
}
import { pageMetadata } from "../../data/seo";
