"use client";

import { MessageSquareIcon, FileTextIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const VIEW_STORAGE_KEY = "portfolio-view";
export type PortfolioView = "chat" | "classic";

export function ViewToggle({
  view,
  onChange,
}: {
  view: PortfolioView;
  onChange: (view: PortfolioView) => void;
}) {
  const next = view === "chat" ? "classic" : "chat";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onChange(next)}
      aria-label={next === "chat" ? "Switch to chat view" : "Switch to classic resume view"}
    >
      {view === "chat" ? (
        <>
          <FileTextIcon className="size-4" />
          <span className="hidden sm:inline">Classic view</span>
        </>
      ) : (
        <>
          <MessageSquareIcon className="size-4" />
          <span className="hidden sm:inline">Chat with my AI clone</span>
        </>
      )}
    </Button>
  );
}
