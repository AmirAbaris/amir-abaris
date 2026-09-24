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
    <main id="main" className="portfolio-shell portfolio-chat-shell">
      <header className="portfolio-header portfolio-chat-header">
        <div>
          <Link href="/" className="text-[15px] font-semibold tracking-[-0.015em] text-foreground hover:underline">{profile.name}</Link>
          <p className="mt-1 text-[15px] text-muted-foreground">{profile.noun}</p>
        </div>
        <nav aria-label="Page navigation">
          <Link href="/" className="portfolio-quiet-link"><ArrowLeftIcon aria-hidden="true" className="size-3.5" /> Back to portfolio</Link>
        </nav>
      </header>
      <h1 className="sr-only">Chat with Amir&apos;s AI clone</h1>
      <div id="chat-content"><ChatView /></div>
    </main>
  );
}
