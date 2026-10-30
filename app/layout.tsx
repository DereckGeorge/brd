import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import { absoluteUrl, siteUrl, siteDescription } from "./data/seo";
import { contact, socialProfiles } from "./data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BRD Tanzania | Building Resilience to Disasters", template: "%s | BRD Tanzania" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  description: siteDescription,
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "NGO", "@id": absoluteUrl("/#organization"), name: contact.name, alternateName: "Building Resilience to Disasters Tanzania", url: siteUrl, logo: absoluteUrl("/brd-logo.jpg"), description: siteDescription, email: contact.email, telephone: contact.phones, address: { "@type": "PostalAddress", streetAddress: contact.address[0], postOfficeBoxNumber: "6548", addressLocality: "Dar es Salaam", addressCountry: "TZ" }, sameAs: socialProfiles.flatMap((profile) => profile.url ? [profile.url] : []) },
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: "BRD Tanzania", url: siteUrl, inLanguage: "en", publisher: { "@id": absoluteUrl("/#organization") } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body>
    </html>
  );
}
