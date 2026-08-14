import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import { jsonLdGraph, personSchema, tattooParlorSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  // Lets every page use relative canonical/OG paths and have them resolve
  // against the production origin.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "The Ink Room | Female Tattoo Artist in Kolkata",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "The Ink Room is a custom tattoo studio in Behala, Kolkata led by Soniya, offering hygienic, custom tattoos and tattoo making training.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: siteConfig.url,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // TODO: add a 180x180 PNG at /public/apple-touch-icon.png and uncomment
    // apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Site-wide business + artist entity. Page-level schema references these by
  // @id rather than repeating them.
  const globalSchema = jsonLdGraph(
    tattooParlorSchema({
      images: ["/img/tattoo16.jpg", "/img/tattoo1.jpg", "/img/tattoo9.jpg"],
    }),
    personSchema(),
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#business` },
      inLanguage: "en-IN",
    }
  );

  return (
    <html lang="en-IN" className="dark">
      <body className={`${inter.className} ${playfairDisplay.variable}`}>
        <JsonLd data={globalSchema} />
        <Analytics />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
