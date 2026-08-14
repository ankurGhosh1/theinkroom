// components/analytics/GoogleAnalytics.tsx
"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/data/site";

export default function Analytics() {
  // Skip in development so local traffic does not pollute the property.
  if (process.env.NODE_ENV === "development") return null;
  if (!siteConfig.analytics.gaId) return null;

  return <GoogleAnalytics gaId={siteConfig.analytics.gaId} />;
}
