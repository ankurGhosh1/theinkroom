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

  /**
   * How sessions run, for /female-tattoo-artist-kolkata. Blank values are
   * left out of the page rather than guessed.
   */
  studio: {
    // "The consultation usually takes ___." e.g. "about twenty minutes".
    consultationLength: "", // TODO: Ankur to supply
    // A full sentence answering "Can I bring a friend?". The FAQ question is
    // hidden until this is filled in.
    companionPolicy: "", // TODO: Ankur to supply
  },

  /**
   * /scar-cover-up-tattoos-kolkata. Blank values are left out of the page
   * rather than guessed.
   */
  scarCoverUp: {
    // Studio policy, if there is one: "As a minimum, we ask that a scar is at
    // least ___ old." e.g. "a year". Leave blank to defer entirely to the doctor.
    minimumScarAge: "", // TODO: Ankur to supply
    // A full sentence on how a follow-up session is charged, if one is needed.
    followUpPricing: "", // TODO: Ankur to supply
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

  startingPrice: {
    amount: 599,
    currency: "INR",
    display: "₹599",
    note: "for a minimalist or tiny piece",
  },

  /**
   * Published prices. The homepage pricing section reads the rate fields via
   * lib/pricing; /tattoo-prices-kolkata reads `typicalRanges` and `deposit*`.
   * Blank values are hidden rather than shown empty.
   */
  pricing: {
    minimumCharge: "", // TODO: Ankur to supply
    small: "", // up to 3 inches. TODO: Ankur to supply
    medium: "", // 3-6 inches. TODO: Ankur to supply
    atHomeMinimum: "₹999",
    deposit: "", // homepage rate card. TODO: Ankur to supply
    reschedule: "", // e.g. "48 hours notice". TODO: Ankur to supply
    paymentMethods: "", // e.g. "UPI, cash or card". TODO: Ankur to supply
    /** Typical ranges on the prices page. Not a fixed rate card. */
    typicalRanges: [
      { label: "Minimalist / tiny pieces", value: "₹599 – ₹799" },
      { label: "1 inch", value: "From ₹599" },
      { label: "Up to 3 inches", value: "Around ₹1,500" },
      { label: "Larger or custom work", value: "Quoted after consultation" },
    ],
    /** Pieces above this size need a deposit. */
    depositThreshold: "20 inches",
    depositPercent: "30%",

    // Prices page fields below. Blank values are left out of the page rather
    // than guessed. Write each one to fit the sentence shown in its comment.
    //
    // "Soniya draws your piece from scratch, with ___." e.g. "two rounds of changes".
    designRevisions: "", // TODO: Ankur to supply
    // "You leave with aftercare instructions ___." e.g. "in person and in writing on WhatsApp".
    aftercareFormat: "", // TODO: Ankur to supply
    // "Travel is charged ___." e.g. "at ₹X within Y km of the studio".
    atHomeTravel: "", // TODO: Ankur to supply
    // "Your quote stays valid for ___." e.g. "30 days".
    quoteValidity: "", // TODO: Ankur to supply
    // A full sentence on whether pieces at or under the threshold need a deposit.
    depositBelowThreshold: "", // TODO: Ankur to supply
    // "If you need to reschedule, please give us ___." e.g. "48 hours notice".
    // (`reschedule` above is the same value, shown on the homepage rate card.)
    // A full sentence on what happens to a deposit if you reschedule or cancel late.
    depositOnReschedule: "", // TODO: Ankur to supply

    /**
     * "Recent pieces and what they cost" on the prices page. Placement is
     * filled from what each photo shows; confirm it. Size and price are blank
     * and show as "To be confirmed" until supplied.
     */
    recentPieces: [
      { image: "/img/tattoo16.jpg", title: "Single-line dancing couple", alt: "Single-line fine line tattoo of a dancing couple on the ribs", placement: "Side of the ribs", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
      { image: "/img/tattoo2.jpg", title: "Three small dragons", alt: "Three small black dragons tattooed across the collarbone", placement: "Collarbone", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
      { image: "/img/tattoo15.jpg", title: "Crescent moon and floral garland", alt: "Crescent moon and floral garland tattoo on the back of the neck", placement: "Back of the neck", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
      { image: "/img/tattoo4.jpg", title: "Hourglass landscape", alt: "Hourglass landscape tattoo in black linework on the forearm", placement: "Forearm", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
      { image: "/img/tattoo13.jpg", title: "Watercolour hummingbird", alt: "Watercolour-style hummingbird tattoo on the chest", placement: "Chest, below the collarbone", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
      { image: "/img/tattoo14.jpg", title: "Snake and rose", alt: "Snake and rose colour tattoo running from the hand up the arm", placement: "Hand and forearm", size: "", price: "" }, // TODO: Ankur to supply size and price; confirm placement
    ],
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
