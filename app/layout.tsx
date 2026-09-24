import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Instrument_Sans, Inter } from "next/font/google";
import { getSiteUrl, seoConfig } from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Display face for the name and section headings only, never body copy.
 *
 * Sturdier than a high-contrast serif at heading sizes, while still reading as
 * a deliberate choice rather than the Next.js default.
 */
const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const caveat = Caveat({
  variable: "--font-note",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: seoConfig.name,
  title: {
    default: seoConfig.title,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  authors: [{ name: seoConfig.name }],
  creator: seoConfig.name,
  category: seoConfig.category,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: "/",
    siteName: seoConfig.name,
    type: "profile",
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${seoConfig.name} - ${seoConfig.jobTitle}`,
      },
    ],
    locale: seoConfig.locale,
  },
  other: {
    "profile:first_name": "Amir Mahdi",
    "profile:last_name": "Zarei Nejad",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    creator: seoConfig.twitterCreator,
    images: [seoConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistMono.variable} ${instrumentSans.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
