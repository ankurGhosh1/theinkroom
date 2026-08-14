import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataProps = {
  title: string;
  description: string;

  /** Site-relative (e.g. "/img/x.jpg") or absolute. Used for OG + Twitter. */
  image?: string;
  imageAlt?: string;
  /** Canonical path, e.g. "/blog/first-tattoo-guide". */
  url?: string;

  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;

  noindex?: boolean;
  nofollow?: boolean;
};

/**
 * Builds a page's Metadata object. `metadataBase` is set once in the root
 * layout, so relative paths resolve correctly everywhere.
 *
 * Note: there is deliberately no `keywords` field. Google has ignored the
 * keywords meta tag since 2009 and Bing does not use it as a ranking signal —
 * curating those lists is wasted effort.
 */
export function createPageMetadata(props: MetadataProps): Metadata {
  const {
    title,
    description,
    // TODO: replace with a purpose-made 1200x630 OG image once you have one —
    // the current tattoo photos are portrait and get cropped by social platforms.
    image = "/img/tattoo16.jpg",
    imageAlt = description,
    url = "/",
    type = "website",
    publishedTime,
    modifiedTime,
    noindex = false,
    nofollow = false,
  } = props;

  const canonical = url.startsWith("/") ? url : `/${url}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      // Dimensions are deliberately not declared: the source images are
      // portrait, and advertising 1200x630 for them makes social previews
      // crop badly. Platforms detect the real size when they fetch.
      images: [{ url: imageUrl, alt: imageAlt }],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [siteConfig.founder.name],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
