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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://myportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
  description:
    "Cinematic portfolio for Ehiomhen Treasure, a cloud, backend, and DevOps engineer focused on production-ready systems, resilient infrastructure, and scalable web applications.",
  keywords: [
    "Ehiomhen Treasure",
    "Cloud Engineer",
    "Cloud Computing Portfolio",
    "DevOps Engineer",
    "Backend Engineer",
    "Junior Backend Engineer",
    "Cloud Backend Engineer",
    "AWS",
    "FastAPI",
    "Portfolio",
    "Next.js",
  ],
  openGraph: {
    title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
    description:
      "Portfolio focused on cloud-native web apps, backend engineering, and reliable DevOps delivery.",
    type: "website",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ehiomhen Treasure portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehiomhen Treasure | Cloud, DevOps & Backend Engineer",
    description:
      "Cloud, backend, and DevOps portfolio focused on scalable systems and reliable delivery.",
    images: ["/portrait.jpg"],
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
