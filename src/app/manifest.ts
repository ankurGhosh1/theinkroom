import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description:
      "Custom tattoo studio in Behala, Kolkata. Studio sessions and at-home appointments across the city.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    // TODO: add 192x192 and 512x512 PNG icons to /public and list them here —
    // favicon.ico alone is valid but will not be used for install prompts.
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
