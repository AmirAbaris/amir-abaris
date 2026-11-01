"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { profile } from "@/lib/profile-data";

export function CopyEmailButton({
  variant = "button",
  className = "",
}: {
  variant?: "button" | "icon" | "inline";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
        className={`portfolio-icon-link group relative ${className}`}
      >
        {copied ? (
          <CheckIcon aria-hidden="true" className="size-3.5 text-foreground animate-in zoom-in-50 duration-200" />
        ) : (
          <CopyIcon aria-hidden="true" className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied to clipboard" : `Copy email: ${profile.email}`}
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-all duration-150 ${className}`}
    >
      {copied ? (
        <>
          <CheckIcon aria-hidden="true" className="size-3 text-foreground animate-in zoom-in-50 duration-200" />
          <span className="text-foreground font-medium">Copied!</span>
        </>
      ) : (
        <>
          <CopyIcon aria-hidden="true" className="size-3" />
          <span>Copy email</span>
        </>
      )}
    </button>
  );
}
