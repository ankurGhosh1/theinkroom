// components/SEO/Metadata.tsx
import { Metadata } from "next";
import { type ReactNode } from "react";

// This is NOT a client component — keep it server-only
type MetadataProps = {
  // Required / most important fields
  title: string;
  description: string;

  // Strongly recommended for social sharing & SEO
  image?: string; // Absolute URL preferred (1200x630+)
  imageAlt?: string;
  url?: string; // Canonical / current page URL

  // Optional but very useful
  keywords?: string | string[];
  type?: "website" | "article" | "profile"; // OpenGraph type
  siteName?: string;
  author?: string;
  publishedTime?: string; // ISO format: 2025-12-29T...
  modifiedTime?: string;

  // Control crawlers (rarely needed)
  noindex?: boolean;
  nofollow?: boolean;

  // For very specific cases
  twitterCard?: "summary" | "summary_large_image";
  twitterCreator?: string; // @username
};

type MetadataProviderProps = {
  children: ReactNode;
  metadata: MetadataProps;
};

/**
 * Reusable Metadata component for App Router pages
 * Usage:
 *
 * <MetadataProvider metadata={{
 *   title: "Best Female Tattoo Artist in Kolkata",
 *   description: "Soniya at The Ink Room - Hygienic custom tattoos in Behala",
 *   image: "https://theinkroom.in/og-soniya.jpg",
 *   url: "https://theinkroom.in/about",
 * }}>
 *   <PageContent />
 * </MetadataProvider>
 */
export function MetadataProvider({
  children,
  metadata,
}: MetadataProviderProps) {
  // This component exists only to make the API clean
  // Real metadata is set in generateMetadata or page level
  return <>{children}</>;
}

// ────────────────────────────────────────────────────────────────
// Helper to generate proper Metadata object (use in page.tsx / layout.tsx)
export function createPageMetadata(props: MetadataProps): Metadata {
  const {
    title,
    description,
    image,
    imageAlt = description,
    url,
    keywords,
    type = "website",
    siteName = "The Ink Room",
    author = "Soniya",
    publishedTime,
    modifiedTime,
    noindex = false,
    nofollow = false,
    twitterCard = "summary_large_image",
    twitterCreator = "@theinkroom_in", // change to your handle
  } = props;

  const baseUrl = "https://theinkroom.in";
  const canonical = url
    ? `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`
    : baseUrl;

  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,

    // Canonical URL
    alternates: {
      canonical,
    },

    // OpenGraph
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: image
        ? [
            {
              url: image.startsWith("http") ? image : `${baseUrl}${image}`,
              width: 1200,
              height: 630,
              alt: imageAlt,
            },
          ]
        : undefined,
      type,
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
    },

    // Twitter (now X)
    twitter: {
      card: twitterCard,
      title,
      description,
      images: image
        ? [image.startsWith("http") ? image : `${baseUrl}${image}`]
        : undefined,
      creator: twitterCreator,
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };
}

// ────────────────────────────────────────────────────────────────
// Quick usage example (alternative simple version - most people use this)
export function simpleMetadata({
  title,
  description,
  image,
}: Pick<MetadataProps, "title" | "description" | "image">): Metadata {
  return createPageMetadata({
    title,
    description,
    image,
    type: "website",
  });
}
