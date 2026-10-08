import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRD Tanzania | Building Resilience to Disasters",
  description:
    "BRD Tanzania is a non-governmental organization advancing disaster risk reduction, climate resilience, research, training, and humanitarian action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
