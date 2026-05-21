import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amir Mahdi Zarei Nejad | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web and mobile interfaces.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Amir Mahdi Zarei Nejad" }],
  openGraph: {
    title: "Amir Mahdi Zarei Nejad | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web and mobile interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Mahdi Zarei Nejad | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web and mobile interfaces.",
    creator: "@abaris_aa"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
