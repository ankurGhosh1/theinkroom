import { notFound } from "next/navigation";
import { AreaHero, heroImages } from "@/components/AreaHero";
import { AreaLandmarks } from "@/components/AreaLandmarks";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/components/Metadata";
import { serviceAreas, getServiceAreaBySlug } from "@/data/serviceAreas";
import { getAreaFaq } from "@/lib/areaFaq";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }));
}

export function generateMetadata({ params }: { params: { area: string } }) {
  const area = getServiceAreaBySlug(params.area);
  if (!area) return {};

  const areaIndex = serviceAreas.findIndex((a) => a.slug === area.slug);

  return createPageMetadata({
    title: `Tattoo Parlour in ${area.name}, Kolkata | The Ink Room`,
    description: `Looking for a tattoo parlour in ${area.name}, Kolkata? The Ink Room offers custom, hygienic at-home tattoo appointments across ${area.name} by Soniya, a female tattoo artist based in Behala.`,
    image: heroImages[areaIndex % heroImages.length],
    url: `/tattoo-parlour-in/${area.slug}`,
    keywords: [
      `tattoo parlour in ${area.name.toLowerCase()}`,
      `tattoo artist in ${area.name.toLowerCase()} kolkata`,
      `at home tattoo ${area.name.toLowerCase()}`,
      `female tattoo artist ${area.name.toLowerCase()}`,
    ],
  });
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = getServiceAreaBySlug(params.area);
  if (!area) return notFound();

  const areaIndex = serviceAreas.findIndex((a) => a.slug === area.slug);
  const faqItems = getAreaFaq(area);

  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Ink Room",
    url: `https://www.theinkroom.in/tattoo-parlour-in/${area.slug}`,
    telephone: "+91 8961248160",
    areaServed: {
      "@type": "Place",
      name: `${area.name}, Kolkata`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Behala",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd) }}
      />
      <AreaHero area={area} imageIndex={areaIndex} />
      <AreaLandmarks area={area} />
      <WhyUs />
      <Gallery />

      <section className="py-16" id="area-faqs">
        <Container>
          <div className="text-center mb-10">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">FAQ</p>
            <h2 className="text-4xl font-serif font-bold text-neutral-100">
              Tattoos in {area.name} — Frequently Asked Questions
            </h2>
          </div>
        </Container>
        <Faq items={faqItems} />
      </section>

      <Cta
        title={`Ready for a tattoo in ${area.name}?`}
        description={`Message us on WhatsApp to book an at-home tattoo appointment in ${area.name}.`}
        whatsappMessage={`Hey, I need a tattoo in ${area.name}`}
      />
    </>
  );
}
