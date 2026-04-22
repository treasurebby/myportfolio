import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
  description:
    "Cinematic portfolio for Ehiomhen Treasure, a Cloud and Web Engineer focused on resilient infrastructure, backend systems, and polished web experiences.",
  keywords: [
    "Ehiomhen Treasure",
    "Cloud Engineer",
    "DevOps Engineer",
    "Backend Engineer",
    "Portfolio",
    "Next.js",
  ],
  openGraph: {
    title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
    description:
      "Cinematic portfolio for Ehiomhen Treasure, focused on resilient infrastructure, backend systems, and polished web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
    description:
      "Cloud and web engineer portfolio focused on reliable systems and high-quality user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
