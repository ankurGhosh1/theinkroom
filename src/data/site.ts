/**
 * Single source of truth for business info (NAP), social profiles and
 * verification IDs. Everything that Google cross-checks between your site,
 * your Google Business Profile and your social accounts lives here.
 *
 * ⚠️ Fields marked TODO are intentionally left blank — they are omitted from
 * the JSON-LD until filled in, so nothing false ships to Google. Fill them in
 * with the EXACT same values used on your Google Business Profile.
 */

export type OpeningHours = {
  days: string[]; // schema.org day names, e.g. "Monday"
  opens: string; // 24h "HH:MM"
  closes: string; // 24h "HH:MM"
};

export type SocialProfile = {
  name: string;
  url: string;
};

export const siteConfig = {
  name: "The Ink Room",
  url: "https://www.theinkroom.in",
  tagline: "Custom tattoo studio in Behala, Kolkata",
  // Homepage meta description, reused verbatim as the business schema
  // description so the two never drift apart.
  description:
    "The Ink Room is a one-artist custom tattoo studio in Behala, Kolkata. Every piece designed and tattooed by Soniya: fine line, script, floral and minimal work, studio or at home.",

  founder: {
    name: "Soniya",
    jobTitle: "Tattoo Artist",
    bio: "Soniya is the founder and resident artist at The Ink Room, a custom tattoo studio in Behala, Kolkata. She works primarily in fine line, floral, script and minimal styles, and designs every piece from scratch in consultation with the client.",
  },

  phone: "+918961248160",
  phoneDisplay: "+91 89612 48160",
  whatsapp: "8961248160",

  // TODO: add a business email if you have one (helps trust + contact schema)
  email: "",

  address: {
    // Studio runs out of a private residence, so the landmark is published
    // rather than the exact door number. Keep this consistent with how the
    // address is set on the Google Business Profile.
    streetAddress: "Behala Chowrasta",
    locality: "Behala",
    region: "West Bengal",
    postalCode: "700061",
    country: "IN",
  },

  // Rounded to 4 decimal places (~11m). Deliberately not more precise: the
  // street address is withheld for privacy, so publishing house-level
  // coordinates would defeat that. This is well within tolerance for local SEO.
  geo: {
    latitude: "22.4841",
    longitude: "88.3068",
  },

  openingHours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "21:00",
    },
  ] as OpeningHours[],

  /**
   * schema.org expects a band symbol here, not a numeric range — "₹₹" reads as
   * mid-market. The real starting figure is published as visible copy instead
   * (see `startingPrice`), which is far more useful to both readers and Google.
   */
  priceRange: "₹₹",

  /** ⚠️ CONFIRM: shown publicly on the pricing guide. */
  startingPrice: {
    amount: 699,
    currency: "INR",
    display: "₹699",
    note: "for a small, minimal piece",
  },

  /**
   * Homepage pricing section. ⚠️ TODO: fill in with the studio's real figures.
   * Any value left blank is hidden on the page rather than shown empty.
   */
  pricing: {
    minimumCharge: "",
    small: "", // up to 3 inches
    medium: "", // 3-6 inches
    atHomeMinimum: "₹999",
    deposit: "",
    reschedule: "", // e.g. "48 hours notice"
  },

  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/thebuckwheattt26/",
    },
  ] as SocialProfile[],

  // Tracking parameters stripped — this is the canonical place URL.
  googleBusinessProfile:
    "https://www.google.com/maps/place/The+Ink+Room+-+Tattoo+Parlour+Kolkata/data=!4m2!3m1!1s0x0:0xf0fc136b8c6068ca",

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-XPHHQE4W71",
  },

  // Search Console is already verified by another method, so this stays empty.
  // Only needed if you ever re-verify via the HTML meta tag route.
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
} as const;

/** WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Human-readable address line, skipping any parts not filled in yet. */
export function formattedAddress() {
  const { streetAddress, locality, region, postalCode } = siteConfig.address;
  return [streetAddress, locality, "Kolkata", region, postalCode]
    .filter(Boolean)
    .join(", ");
}

export const socialProfileUrls = () =>
  [
    ...siteConfig.social.map((profile) => profile.url),
    siteConfig.googleBusinessProfile,
  ].filter(Boolean);
