import { serializeJsonLd } from "@/lib/schema";

export function JsonLd({ data }: Readonly<{ data: unknown }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
