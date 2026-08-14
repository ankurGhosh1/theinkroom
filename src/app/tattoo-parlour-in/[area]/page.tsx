import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaHero, heroImages } from "@/components/AreaHero";
import { AreaLandmarks } from "@/components/AreaLandmarks";
import { AreaContent } from "@/components/AreaContent";
import { Gallery } from "@/components/Gallery";
import { FaqSection } from "@/components/FaqSection";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import { serviceAreas, getServiceAreaBySlug } from "@/data/serviceAreas";
import { getAreaFaq } from "@/lib/areaFaq";
import {
  breadcrumbSchema,
  businessAreaServed,
  faqSchema,
  jsonLdGraph,
  webPageSchema,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }));
}

export function generateMetadata({ params }: { params: { area: string } }) {
  const area = getServiceAreaBySlug(params.area);
  if (!area) return {};

  const areaIndex = serviceAreas.findIndex((a) => a.slug === area.slug);

  return createPageMetadata({
    title: `Tattoo Parlour in ${area.name}, Kolkata`,
    // Unique description per area, built from that area's own facts rather
    // than a single template sentence with the name swapped in.
    description:
      area.travel.distanceKm === 0
        ? `The Ink Room's tattoo studio is based in ${area.name}, Kolkata. Custom tattoos by Soniya — studio sessions or at-home appointments across ${area.landmarks
            .slice(0, 3)
            .join(", ")}.`
        : `Custom tattoos in ${area.name}, Kolkata by Soniya. At-home appointments across ${area.landmarks
            .slice(0, 3)
            .join(", ")} — about ${area.travel.distanceKm} km from our Behala studio.`,
    image: heroImages[areaIndex % heroImages.length],
    url: `/tattoo-parlour-in/${area.slug}`,
  });
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = getServiceAreaBySlug(params.area);
  if (!area) return notFound();

  const areaIndex = serviceAreas.findIndex((a) => a.slug === area.slug);
  const faqItems = getAreaFaq(area);
  const path = `/tattoo-parlour-in/${area.slug}`;

  const schema = jsonLdGraph(
    webPageSchema({
      name: `Tattoo Parlour in ${area.name}, Kolkata`,
      path,
      description: area.intro,
    }),
    businessAreaServed([
      `${area.name}, Kolkata`,
      ...area.landmarks.map((landmark) => `${landmark}, Kolkata`),
    ]),
    faqSchema(faqItems),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Tattoo Parlour in Kolkata", path: "/tattoo-parlour-in-kolkata" },
      { name: area.name, path },
    ])
  );

  return (
    <>
      <JsonLd data={schema} />

      <AreaHero area={area} imageIndex={areaIndex} />

      <Container>
        <nav aria-label="Breadcrumb" className="py-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/tattoo-parlour-in-kolkata"
                className="hover:text-red-500 transition-colors"
              >
                Kolkata
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-neutral-300">{area.name}</li>
          </ol>
        </nav>
      </Container>

      <AreaLandmarks area={area} />
      <AreaContent area={area} />
      <Gallery />

      <FaqSection
        items={faqItems}
        title={`Tattoos in ${area.name} — Frequently Asked Questions`}
        id="area-faqs"
      />

      <Cta
        title={`Ready for a tattoo in ${area.name}?`}
        description={`Message us on WhatsApp to book a session in ${area.name} — studio or at home.`}
        whatsappMessage={`Hey, I need a tattoo in ${area.name}`}
      />
    </>
  );
}
