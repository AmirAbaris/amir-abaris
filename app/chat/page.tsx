import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { ChatView } from "@/components/chat/chat-view";
import { profile } from "@/lib/profile-data";

export const metadata: Metadata = {
  title: "AI Clone",
  description: `Ask ${profile.name}'s AI clone about his experience, projects, and technical skills.`,
  alternates: { canonical: "/chat" },
  openGraph: { url: "/chat" },
};

export default function ChatPage() {
  return (
    <>
      <a href="#chat-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background">
        Skip to chat
      </a>
      <main id="main" className="portfolio-shell portfolio-chat-shell">
        <nav aria-label="Page navigation" className="mb-10 flex items-center justify-between gap-4">
          <Link href="/" className="portfolio-quiet-link"><ArrowLeftIcon aria-hidden="true" className="size-3.5" /> Portfolio</Link>
          <span className="text-sm font-medium text-foreground">{profile.name}</span>
        </nav>
        <h1 className="sr-only">Chat with Amir&apos;s AI clone</h1>
        <div id="chat-content"><ChatView /></div>
      </main>
    </>
  );
}
