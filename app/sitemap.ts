import type { MetadataRoute } from "next";
import { publicPages } from "./data/discovery.mjs";
import { absoluteUrl } from "./data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((page) => ({ url: absoluteUrl(page.path) }));
}
