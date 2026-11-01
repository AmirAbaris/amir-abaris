import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import { getSiteUrl, seoConfig } from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Display face for the name and section headings.
 * Sturdier than a high-contrast serif at heading sizes, with intentional
 * grotesque geometry and tight tracking.
 */
const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

/**
 * Handwritten accent face for the authentic hand-drawn resume note.
 * Loads across all platforms consistently.
 */
const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["500", "600"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans",
        geistSans.variable,
        geistMono.variable,
        instrumentSans.variable,
        caveat.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased selection:bg-foreground selection:text-background">
        {children}
      </body>
    </html>
  );
}
