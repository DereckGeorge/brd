import type { Metadata } from "next";

const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brdweb.netlify.app");
if (!["http:", "https:"].includes(configuredUrl.protocol)) throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL");
export const siteUrl = configuredUrl.origin;
export const siteDescription = "BRD Tanzania is a non-governmental organization advancing disaster risk reduction, climate resilience, research, training, and humanitarian action.";
export function absoluteUrl(path: string) { return new URL(path, `${siteUrl}/`).href; }

export function pageMetadata(title: string, path: string, description = siteDescription): Metadata {
  return {
    title,
    description: description || siteDescription,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title, description: description || siteDescription, url: absoluteUrl(path), siteName: "BRD Tanzania", type: "website", locale: "en_TZ", images: [{ url: absoluteUrl("/brd-logo.jpg"), alt: "BRD Tanzania - Building Resilience to Disasters" }] },
    twitter: { card: "summary", title, description: description || siteDescription, images: [absoluteUrl("/brd-logo.jpg")] },
  };
}
