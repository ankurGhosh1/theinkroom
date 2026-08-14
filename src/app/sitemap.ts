import { MetadataRoute } from "next";
import { serviceAreas } from "@/data/serviceAreas";
import { getPosts } from "@/lib/content";
import { siteConfig } from "@/data/site";

/**
 * Bump this when you make a real content change to the core pages.
 *
 * Deliberately NOT `new Date()` — a sitemap that claims every URL changed on
 * every deploy trains search engines to ignore your lastmod values entirely.
 */
const CORE_PAGES_UPDATED = "2026-08-15";
const AREA_PAGES_UPDATED = "2026-08-15";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const posts = await getPosts();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: CORE_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tattoo-parlour-in-kolkata`,
      lastModified: CORE_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tattoo-course`,
      lastModified: CORE_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: CORE_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...serviceAreas.map((area) => ({
      url: `${baseUrl}/tattoo-parlour-in/${area.slug}`,
      lastModified: AREA_PAGES_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
