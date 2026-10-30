import { publicPages } from "../data/discovery.mjs";
import { absoluteUrl, siteDescription } from "../data/seo";

export const dynamic = "force-static";
export function GET() {
  const text = ["# BRD Tanzania", "", `> ${siteDescription}`, "", "## Website pages", "", ...publicPages.map((page) => `- [${page.title}](${absoluteUrl(page.path)})`), "", `XML sitemap: ${absoluteUrl("/sitemap.xml")}`, ""].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
