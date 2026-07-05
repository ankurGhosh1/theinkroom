import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreasGrid } from "@/components/ServiceAreasGrid";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/components/Metadata";
import { serviceAreas } from "@/data/serviceAreas";

export const metadata = createPageMetadata({
  title: "Tattoo Parlour in Kolkata | The Ink Room",
  description:
    "The Ink Room is a tattoo parlour in Kolkata led by Soniya, offering custom, hygienic tattoos at our Behala studio and at-home appointments across Behala, Gariahat, Salt Lake, New Town and more.",
  image: "/img/tattoo9.jpg",
  url: "/tattoo-parlour-in-kolkata",
  keywords: [
    "tattoo parlour in kolkata",
    "tattoo parlour kolkata",
    "best tattoo parlour in kolkata",
    "at home tattoo service kolkata",
    "female tattoo artist kolkata",
  ],
});

const kolkataJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Ink Room",
  url: "https://www.theinkroom.in/tattoo-parlour-in-kolkata",
  telephone: "+91 8961248160",
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: `${area.name}, Kolkata`,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Behala",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
};

export default function TattooParlourKolkata() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kolkataJsonLd) }}
      />

      <section className="relative py-32 text-center overflow-hidden">
        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
            Kolkata, West Bengal
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-neutral-100 leading-tight mb-6">
            Tattoo Parlour in Kolkata
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            The Ink Room is a custom tattoo parlour based in Behala, Kolkata,
            led by Soniya. Visit our studio or book an at-home tattoo
            appointment anywhere across the city.
          </p>
          <a
            href="https://wa.me/8961248160?text=Hey%20I%20need%20a%20tattoo"
            target="_blank"
            rel="noopener"
            className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <ServiceAreasGrid />
      <WhyUs />
      <Gallery />
      <Testimonials />

      <section className="py-16" id="kolkata-faqs">
        <Container>
          <div className="text-center mb-10">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">FAQ</p>
            <h2 className="text-4xl font-serif font-bold text-neutral-100">
              Frequently Asked Questions
            </h2>
          </div>
        </Container>
        <Faq />
      </section>

      <Cta />
    </>
  );
}
