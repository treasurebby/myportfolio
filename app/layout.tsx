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
  title: "Your Name | Cloud, DevOps & Backend Engineer",
  description:
    "A cinematic personal portfolio for a Software Engineer focused on cloud, DevOps, and backend systems.",
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
