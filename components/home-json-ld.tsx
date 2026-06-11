import { buildHomeJsonLd } from "@/lib/seo/json-ld";

export function HomeJsonLd() {
  const jsonLd = buildHomeJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
