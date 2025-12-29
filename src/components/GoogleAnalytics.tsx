// components/analytics/GoogleAnalytics.tsx
"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function Analytics() {
  // Optional: skip in development to avoid polluting your data
  if (process.env.NODE_ENV === "development") return null;

  return <GoogleAnalytics gaId="G-XPHHQE4W71" />;
}
