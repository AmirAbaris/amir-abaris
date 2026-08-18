"use client";

import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile, sections } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

/**
 * Persistent wayfinding for a page that is ~5 viewports tall on mobile.
 *
 * Scroll-spy uses IntersectionObserver rather than scroll math so it stays
 * cheap, and the observer is bounded to a band near the top of the viewport so
 * only one section reads as active at a time.
 */
export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
  }, []);

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
        className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-5 md:px-8"
      >
        <a
          href="#top"
          className={cn(
            "truncate text-sm font-semibold transition-opacity",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                    active === section.id
                      ? "bg-brand-subtle text-brand"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
