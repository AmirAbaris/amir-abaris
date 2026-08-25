"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

import type { PortfolioView } from "@/components/chat/view-toggle";
import { ViewToggle } from "@/components/chat/view-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile, sections } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

/**
 * Persistent wayfinding for a page that is ~5 viewports tall on mobile.
 *
 * Scroll-spy uses IntersectionObserver rather than scroll math so it stays
 * cheap, and the observer is bounded to a band near the top of the viewport so
 * only one section reads as active at a time.
 */
export function SiteNav({
  view,
  onViewChange,
}: {
  view: PortfolioView;
  onViewChange: (view: PortfolioView) => void;
}) {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (view !== "classic") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-72px 0px -60% 0px", threshold: 0 },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [view]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // The last section is short enough that it never fills the observer's
      // band, so it would otherwise never read as active. At the bottom of the
      // page it is unambiguously what the reader is looking at.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(sections[sections.length - 1].id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Sections"
        className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-5 sm:gap-4 md:px-8"
      >
        <a
          href="#top"
          className={cn(
            "hidden shrink-0 truncate text-sm font-semibold transition-opacity sm:block",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        >
          {profile.name}
        </a>

        {view === "classic" && (
          <ul className="hidden min-w-0 flex-1 items-center gap-0.5 sm:flex">
            {sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={cn(
                    "block rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                    active === section.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {view === "classic" && (
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon-sm" className="sm:hidden">
                  <MenuIcon />
                  <span className="sr-only">Open sections menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Sections</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-1 px-6">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={active === section.id ? "true" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active === section.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          )}
          <ViewToggle view={view} onChange={onViewChange} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
