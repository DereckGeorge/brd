import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

export const metadata: Metadata = {
  title: { default: "BRD Tanzania | Building Resilience to Disasters", template: "%s | BRD Tanzania" },
  robots: { index: false, follow: false },
  description:
    "BRD Tanzania is a non-governmental organization advancing disaster risk reduction, climate resilience, research, training, and humanitarian action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body>
    </html>
  );
}
