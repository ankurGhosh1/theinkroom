import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Gallery } from "@/components/Gallery";
import { AboutArtist } from "@/components/AboutArtist";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { BlogTeaser } from "@/components/BlogTeaser";
import { FaqSection } from "@/components/FaqSection";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import type { FaqItem } from "@/components/Faq";
import { faqSchema, jsonLdGraph } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export const metadata = createPageMetadata({
  // The root segment does not inherit the layout's title template, so the
  // brand is written out in full here.
  title: "Soniya | Female Tattoo Artist in Kolkata | The Ink Room",
  description: siteConfig.description,
  image: "/img/tattoo16.jpg",
  url: "/",
});

/**
 * Homepage FAQs are deliberately about the artist, the studio and booking.
 * The city-wide coverage questions live on /tattoo-parlour-in-kolkata so the
 * two pages do not compete for the same queries.
 */
const homeFaq: FaqItem[] = [
  {
    question: "Who will actually do my tattoo?",
    answer:
      "Soniya, every time. The Ink Room is a single-artist studio, so the person who designs your piece is the person who tattoos it. Your idea does not get passed to whoever happens to be free.",
  },
  {
    question: "Do you only do custom designs?",
    answer:
      "Yes. Every tattoo is drawn from scratch after a conversation about your idea, the placement and the size. You are welcome to bring references to build from, but we do not work from a pre-made flash catalogue.",
  },
  {
    question: "What tattoo styles do you specialise in?",
    answer:
      "Fine line, script and lettering, floral, geometric and minimal work are the core styles. If you are after something outside that range, send the reference over on WhatsApp and you will get an honest answer about whether it is the right fit.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Message us on WhatsApp with your design idea, a rough size, the placement, and your preferred date. You will get a quote and a slot before anything is confirmed.",
  },
  {
    question: "Do you tattoo at home, or only at the studio?",
    answer:
      "Both. The studio is in Behala, and at-home appointments run across Kolkata with the same single-use equipment and sterilisation setup we use in the studio.",
  },
  {
    question: "Is there a minimum age?",
    answer:
      "Yes, 18 and over, with photo ID. This applies regardless of parental consent.",
  },
  {
    question: "Does getting a tattoo hurt?",
    answer:
      "Most people describe it as a hot scratching sensation rather than sharp pain, and find it far more manageable than expected. It varies a lot by placement, and our tattoo pain chart guide breaks down which spots are easiest and which are worth planning around.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLdGraph(faqSchema(homeFaq))} />

      <Hero />
      <Stats />
      <Gallery />
      <AboutArtist />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <BlogTeaser />

      <FaqSection items={homeFaq} id="faqs" />

      <Cta showContactOptions />
    </>
  );
}
