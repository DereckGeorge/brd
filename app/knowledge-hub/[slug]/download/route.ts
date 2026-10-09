import { resources } from "../../../data/content";

export const dynamicParams = false;
export function generateStaticParams() { return resources.map((item) => ({ slug: item.slug })); }
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = resources.find((record) => record.slug === slug);
  if (!item) return new Response("Not found", { status: 404 });
  const text = ["BRD TANZANIA - DESIGN PREVIEW", "Fictional content. Not an official BRD publication.", "", item.title, item.summary, "", ...item.sections.flatMap((part) => [part.heading, part.body, ""])].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Content-Disposition": `attachment; filename="${item.slug}-preview.txt"`, "X-Robots-Tag": "noindex" } });
}
