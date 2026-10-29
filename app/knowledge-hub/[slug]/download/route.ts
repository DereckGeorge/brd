import { resources } from "../../../data/content";

export const dynamicParams = false;
export function generateStaticParams() { return resources.map((item) => ({ slug: item.slug })); }
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = resources.find((record) => record.slug === slug);
  if (!item) return new Response("Not found", { status: 404 });
  return new Response("No published download is available", { status: 404 });
}
