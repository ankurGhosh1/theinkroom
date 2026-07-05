import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/GoogleAnalytics";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Ink Room | Female Tattoo Artist in Kolkata",
  description:
    "The Ink Room is a custom tattoo studio in Behala, Kolkata led by Soniya, offering hygienic, custom tattoos and tattoo making training.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Ink Room",
  description:
    "Custom tattoo studio in Behala, Kolkata led by Soniya, offering hygienic, safe tattoo services and tattoo making training.",
  url: "https://www.theinkroom.in",
  telephone: "+91 8961248160",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Behala",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Soniya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${playfairDisplay.variable}`}>
        <Analytics />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
