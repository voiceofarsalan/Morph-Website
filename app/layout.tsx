import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import JsonLd from "@/components/JsonLd";
import { CALENDLY_STYLES } from "@/lib/calendly";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wemorphai.com"),
  title: "Morph AI | Shape Shifting Intelligence",
  applicationName: "Morph AI",
  description:
    "Morph AI — Shape Shifting Intelligence. Enterprise Voice AI, agentic AI systems, generative AI, and full-stack MLOps solutions for adaptive business automation.",
  icons: {
    icon: "/morph-logo.png",
    shortcut: "/morph-logo.png",
    apple: "/morph-logo.png",
  },
  keywords: [
    "Morph AI",
    "Voice AI",
    "Agentic AI",
    "Generative AI services",
    "AI automation company",
    "MLOps solutions",
    "NLP services",
    "Data annotation",
    "AI product development",
    "Evolutica",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Morph AI | Shape Shifting Intelligence",
    description:
      "Shape Shifting Intelligence — adaptive AI systems, Voice AI agents, and production-grade AI engineering for modern businesses.",
    url: "https://www.wemorphai.com",
    siteName: "Morph AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morph AI | Shape Shifting Intelligence",
    description:
      "Morph AI delivers Voice AI, Agentic AI, Generative AI, and scalable MLOps services for intelligent automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href={CALENDLY_STYLES} rel="stylesheet" />
        <JsonLd />
      </head>
      <body className="font-sans min-h-screen overflow-x-hidden">
        <CursorGlow />
        <div className="noise-overlay fixed inset-0 z-[100] mix-blend-overlay" aria-hidden />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
