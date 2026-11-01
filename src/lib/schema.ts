import { siteConfig, socialProfileUrls, type OpeningHours } from "@/data/site";
import type { FaqItem } from "@/components/Faq";

/** Drops keys whose value is empty/undefined so no blank fields ship to Google. */
function compact<T extends Record<string, unknown>>(obj: T) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === undefined || value === null || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    })
  );
}

function postalAddress() {
  const { streetAddress, locality, region, postalCode, country } =
    siteConfig.address;

  return compact({
    "@type": "PostalAddress",
    streetAddress,
    addressLocality: locality,
    addressRegion: region,
    postalCode,
    addressCountry: country,
  });
}

function geoCoordinates() {
  const { latitude, longitude } = siteConfig.geo;
  if (!latitude || !longitude) return undefined;

  return {
    "@type": "GeoCoordinates",
    latitude,
    longitude,
  };
}

function openingHoursSpecification(hours: readonly OpeningHours[]) {
  return hours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

export function personSchema() {
  return compact({
    "@type": "Person",
    "@id": `${siteConfig.url}/#soniya`,
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.jobTitle,
    description: siteConfig.founder.bio,
    worksFor: { "@id": `${siteConfig.url}/#business` },
    sameAs: socialProfileUrls(),
  });
}

type BusinessSchemaOptions = {
  /** Representative images for the business (site-relative or absolute). */
  images?: string[];
};

/**
 * The canonical business entity, emitted once site-wide from the root layout.
 *
 * `TattooParlor` is a real schema.org type (a subtype of LocalBusiness via
 * HealthAndBeautyBusiness) and gives Google a far more specific signal than
 * the generic LocalBusiness type.
 */
export function tattooParlorSchema({ images = [] }: BusinessSchemaOptions = {}) {
  const absolute = (src: string) =>
    src.startsWith("http") ? src : `${siteConfig.url}${src}`;

  return compact({
    "@type": "TattooParlor",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: images.map(absolute),
    address: postalAddress(),
    geo: geoCoordinates(),
    openingHoursSpecification: openingHoursSpecification(
      siteConfig.openingHours
    ),
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#soniya`,
      name: siteConfig.founder.name,
    },
    sameAs: socialProfileUrls(),
    knowsAbout: [
      "Custom tattoo design",
      "Fine line tattoos",
      "Script tattoos",
      "Floral tattoos",
      "Tattoo aftercare",
      "Tattoo training",
    ],
  });
}

/**
 * Location pages attach their coverage to the site-wide business entity by
 * @id rather than restating the whole business node. JSON-LD consumers merge
 * nodes sharing an @id, so this adds areaServed without duplicating (or
 * contradicting) the canonical record in the root layout.
 */
export function businessAreaServed(areas: string[]) {
  return {
    "@id": `${siteConfig.url}/#business`,
    areaServed: areas.map((name) => ({ "@type": "Place", name })),
  };
}

/**
 * A specific service the business offers, provided by the site-wide business
 * entity. No `offers`: prices change, and stale price markup causes Search
 * Console errors.
 */
export function serviceSchema({
  name,
  serviceType,
  path,
  description,
}: {
  name: string;
  serviceType: string;
  path: string;
  description: string;
}) {
  return {
    "@type": "Service",
    "@id": `${siteConfig.url}${path}#service`,
    name,
    serviceType,
    description,
    url: `${siteConfig.url}${path}`,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: { "@type": "City", name: "Kolkata" },
  };
}

/** Identifies the current page and ties it back to the business. */
export function webPageSchema({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${siteConfig.url}${path}`,
    url: `${siteConfig.url}${path}`,
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
  };
}

type ArticleSchemaOptions = {
  headline: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
};

export function articleSchema({
  headline,
  description,
  path,
  image,
  publishedAt,
  updatedAt,
}: ArticleSchemaOptions) {
  return {
    "@type": "Article",
    headline,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}`,
    },
    author: { "@id": `${siteConfig.url}/#soniya` },
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Wraps one or more schema objects into a single @graph document. */
export function jsonLdGraph(...nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

/**
 * Escapes `<` so a stray closing tag inside any string can never break out of
 * the <script> block.
 */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
