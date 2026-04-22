import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Exo_2({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = IBM_Plex_Sans({
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
