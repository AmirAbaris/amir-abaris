"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        className="portfolio-icon-link opacity-60"
      >
        <span className="size-[15px]" />
      </button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="portfolio-icon-link relative overflow-hidden"
        >
          <SunIcon
            aria-hidden="true"
            className={`size-[15px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
            strokeWidth={1.8}
          />
          <MoonIcon
            aria-hidden="true"
            className={`absolute size-[15px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
            strokeWidth={1.8}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8} className="rounded-[5px] px-2 py-1 text-[11px]">
        {isDark ? "Light mode" : "Dark mode"}
      </TooltipContent>
    </Tooltip>
  );
}
