import { HomeJsonLd } from "@/components/home-json-ld";
import { HomeView } from "@/components/home-view";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <HomeJsonLd />
      <HomeView />
    </>
  );
}
