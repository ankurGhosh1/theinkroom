import Link from "next/link";
import { ServiceAreasGrid } from "@/components/ServiceAreasGrid";
import { FaqSection } from "@/components/FaqSection";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import type { FaqItem } from "@/components/Faq";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig, whatsappLink } from "@/data/site";
import {
  breadcrumbSchema,
  businessAreaServed,
  faqSchema,
  jsonLdGraph,
  webPageSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Tattoo Parlour in Kolkata — Studio & At-Home Appointments",
  description:
    "The Ink Room is a tattoo parlour based in Behala, Kolkata, with at-home appointments across Salt Lake, Gariahat, New Town, Howrah, Jadavpur and more. See every area we cover.",
  image: "/img/tattoo9.jpg",
  url: "/tattoo-parlour-in-kolkata",
});

/**
 * City-level FAQs — coverage, travel and studio-vs-home. Kept distinct from
 * the homepage FAQs (artist and booking) and the per-area FAQs (local detail).
 */
const kolkataFaq: FaqItem[] = [
  {
    question: "Which parts of Kolkata do you cover?",
    answer: `We currently run at-home appointments across ${serviceAreas
      .map((area) => area.name)
      .join(", ")}. The studio itself is in Behala, so anywhere in South West Kolkata is easiest, but the at-home service reaches from Howrah across to New Town.`,
  },
  {
    question: "Do you have a physical tattoo studio, or is it at-home only?",
    answer:
      "Both. There is a permanent studio in Behala with a proper artist chair, sterilisation station and full setup. The at-home service exists on top of that for people who would rather not travel across the city, not instead of it.",
  },
  {
    question: "Should I choose the studio or an at-home session?",
    answer:
      "The studio is the better option for larger or longer pieces — the setup is purpose-built and everything is within reach. At-home works well for small to medium pieces and for anyone who would be more relaxed in their own space. If you are unsure, mention the design on WhatsApp and you will get a straight recommendation.",
  },
  {
    question: "Is an at-home tattoo as hygienic as a studio one?",
    answer:
      "The equipment and protocol are identical: single-use needles and ink caps opened in front of you, disposable barrier film over every surface used, autoclave-sterilised reusable tools, and sharps carried out for proper disposal. What a home cannot replicate is a purpose-built room, which is why we ask you to set up a clean table in a well-lit space that can stay undisturbed for the session.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For the Behala studio or nearby areas like Tollygunge, a couple of days is usually enough. For the further areas — New Town, Dum Dum, Salt Lake — book several days ahead, since those are blocked out as full appointments including travel.",
  },
  {
    question: "Do you travel outside Kolkata?",
    answer:
      "The listed areas cover the city and Howrah. If you are outside that range, message on WhatsApp anyway — it depends on the piece and the distance, and you will get an honest answer rather than a maybe.",
  },
];

export default function TattooParlourKolkata() {
  const schema = jsonLdGraph(
    webPageSchema({
      name: "Tattoo Parlour in Kolkata",
      path: "/tattoo-parlour-in-kolkata",
      description:
        "The Ink Room's tattoo studio in Behala, Kolkata, with at-home appointments across the city and Howrah.",
    }),
    businessAreaServed([
      "Kolkata",
      ...serviceAreas.map((area) => `${area.name}, Kolkata`),
    ]),
    faqSchema(kolkataFaq),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Tattoo Parlour in Kolkata", path: "/tattoo-parlour-in-kolkata" },
    ])
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="pt-40 pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
              Kolkata, West Bengal
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-neutral-100 leading-tight mb-6">
              Tattoo Parlour in Kolkata
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
              The Ink Room is a custom tattoo studio based in Behala, run by{" "}
              {siteConfig.founder.name}. You can book a session at the studio,
              or have the full setup brought to you at home — we cover{" "}
              {serviceAreas.length} areas across Kolkata and Howrah.
            </p>
            <a
              href={whatsappLink("Hey, I need a tattoo")}
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
            >
              Connect on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Studio vs at-home — the decision most people actually need help with */}
      <section className="py-20 border-y border-neutral-800">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-100 mb-6">
              Studio session or at-home appointment?
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-10">
              Both use the same artist, the same equipment and the same
              sterilisation protocol. The difference is practical, not one of
              quality — here is how to pick.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-neutral-100 mb-4">
                  The Behala studio
                </h3>
                <ul className="space-y-3 text-neutral-400 leading-relaxed">
                  <li>Purpose-built chair and lighting for long sittings</li>
                  <li>Best for larger pieces and multi-session work</li>
                  <li>Nothing for you to set up or clear out</li>
                  <li>Easiest if you are in Behala, Barisha or Tollygunge</li>
                </ul>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-neutral-100 mb-4">
                  At-home appointments
                </h3>
                <ul className="space-y-3 text-neutral-400 leading-relaxed">
                  <li>Full sterile kit brought to your door</li>
                  <li>Best for small to medium pieces</li>
                  <li>You provide a table, chair, power point and good light</li>
                  <li>Worth it if crossing the city is the thing stopping you</li>
                </ul>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed mt-10">
              Not sure which suits your piece? Message the design and placement
              over on WhatsApp and you will get a straight recommendation —
              including being told the studio is the better call if it is.{" "}
              <Link
                href="/blog/first-tattoo-guide"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                The first-tattoo guide
              </Link>{" "}
              covers what to expect either way.
            </p>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid />

      <FaqSection
        items={kolkataFaq}
        title="Tattoos in Kolkata — Frequently Asked Questions"
        id="kolkata-faqs"
      />

      <Cta />
    </>
  );
}
