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
  title: "Amir Mahdi Zarei Nejad | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and experience.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Amir Mahdi Zarei Nejad" }],
  openGraph: {
    title: "Amir Mahdi Zarei Nejad | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Mahdi Zarei Nejad | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies.",
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
