import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import type { FaqItem } from "@/components/Faq";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig, whatsappLink } from "@/data/site";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  webPageSchema,
} from "@/lib/schema";

const { studio, pricing } = siteConfig;
const path = "/female-tattoo-artist-kolkata";
const description =
  "Looking for a female tattoo artist in Kolkata? Soniya runs a one-artist, appointment-only studio in Behala, with private sessions and an at-home option.";

export const metadata = createPageMetadata({
  title: "Female Tattoo Artist in Kolkata, Behala",
  description,
  image: "/img/tattoo15.jpg",
  url: path,
});

const portfolio = [
  { src: "/img/tattoo16.jpg", alt: "Single-line fine line tattoo of a dancing couple on the ribs" },
  { src: "/img/tattoo9.jpg", alt: "Minimal crescent moon and stars tattoo on the forearm" },
  { src: "/img/tattoo15.jpg", alt: "Crescent moon and floral garland tattoo on the back of the neck" },
  { src: "/img/tattoo2.jpg", alt: "Three small black dragons tattooed across the collarbone" },
  { src: "/img/tattoo13.jpg", alt: "Watercolour-style hummingbird tattoo on the chest" },
  { src: "/img/tattoo4.jpg", alt: "Hourglass landscape tattoo in black linework on the forearm" },
  { src: "/img/tattoo14.jpg", alt: "Snake and rose colour tattoo running from the hand up the arm" },
  { src: "/img/tattoo6.jpg", alt: "Compass, mountain and anchor tattoo in black and grey on the forearm" },
];

const artistFaq: FaqItem[] = [
  {
    question: "Is the session private?",
    answer:
      "Yes. Sessions are by appointment, one client at a time, and nobody else is in the room apart from anyone you choose to bring. Only the area being tattooed needs to be uncovered, and you can ask for whatever helps you feel comfortable.",
  },
  ...(studio.companionPolicy
    ? [{ question: "Can I bring a friend?", answer: studio.companionPolicy }]
    : []),
  {
    question: "I want a tattoo on my ribs, hip or chest. Will I be comfortable?",
    answer:
      "Nobody else is in the room unless you bring someone, only the area being tattooed needs to be uncovered, and you can pause whenever you need to. If you are unsure about the placement, talk it through at the free consultation before anything is booked.",
  },
  {
    question: "How do I book?",
    answer:
      "Message us on WhatsApp with your idea, a rough size in inches and the placement. After a free consultation you get a quote for your exact design, and a date once the design is agreed.",
  },
  {
    question: "Is an at-home session as hygienic as the studio?",
    answer:
      "The protocol is the same in both: single-use needles and ink caps opened in front of you, disposable barrier film over every surface used, autoclave-sterilised reusable tools, and sharps taken away for proper disposal. You provide a clean table in a well-lit room that can stay undisturbed.",
  },
];

const h2 = "text-3xl font-serif font-bold text-neutral-100 mt-14 mb-5";
const h3 = "text-xl font-serif font-bold text-neutral-100 mt-10 mb-3";
const p = "text-neutral-300 text-lg leading-relaxed mb-6";
const link = "text-red-500 hover:text-red-400 transition-colors";
const bullet =
  "relative pl-6 text-neutral-300 leading-relaxed before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-600";
const lead = "text-neutral-100 font-bold";

export default function FemaleTattooArtistKolkata() {
  // The TattooParlor (LocalBusiness) node is emitted site-wide by the root
  // layout; this page references it by @id instead of duplicating it.
  const schema = jsonLdGraph(
    webPageSchema({ name: "Female Tattoo Artist in Kolkata", path, description }),
    faqSchema(artistFaq),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Female Tattoo Artist in Kolkata", path },
    ])
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="pt-40 pb-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                <li>
                  <Link href="/" className="hover:text-red-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral-300">Female Tattoo Artist</li>
              </ol>
            </nav>

            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-5">
              Behala · Kolkata
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-100 leading-tight mb-6">
              Female Tattoo Artist in Kolkata
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Yes, there is one. Soniya is a female tattoo artist in Kolkata,
              and The Ink Room is her studio in Behala. It is a one-artist,
              appointment-only studio, so the woman you talk to about your idea
              is the woman who tattoos it. Nobody else is in the room unless
              you bring someone with you.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              If you have been searching for a lady tattoo artist near you, or a
              women tattoo artist in Kolkata specifically, this page explains
              what that means in practice: how a session runs, the at-home
              option, the styles Soniya works in, and how to book.
            </p>
            <a
              href={whatsappLink("Hey, I'd like to book a tattoo with Soniya")}
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
            >
              Message Soniya on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-2xl mx-auto relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-6">
          <Image
            src="/img/tattoo15.jpg"
            alt="Crescent moon and floral garland tattoo on the back of the neck"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
      </Container>

      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Why a female artist */}
          <h2 className={h2}>Why some clients want a female artist</h2>
          <p className={p}>
            You do not need a reason, and you do not need to explain one. But
            the reasons are practical, and worth naming.
          </p>

          <h3 className={h3}>Placement</h3>
          <p className={p}>
            Some of the placements people choose for personal pieces, such as
            the ribs, hip, chest and upper thigh, mean uncovering parts of your
            body you would rather not uncover in front of a stranger. Sitting
            still for that is easier when the person working on you is a woman.
          </p>

          <h3 className={h3}>Modesty and comfort</h3>
          <p className={p}>
            You have to stay relaxed and still while someone works on your skin.
            If being alone in a room with a male artist would leave you tense
            for the whole session, choosing a female artist simply takes that
            out of the equation.
          </p>

          <h3 className={h3}>First-timer nerves</h3>
          <p className={p}>
            A first tattoo comes with questions: whether it will hurt, how it
            will look, whether you are making a mistake. They are easier to ask,
            and to have answered properly, when you are at ease with the person
            answering. Our{" "}
            <Link href="/blog/first-tattoo-guide" className={link}>
              first tattoo guide
            </Link>{" "}
            covers what to expect before you even get in touch.
          </p>

          <h3 className={h3}>Being listened to</h3>
          <p className={p}>
            You know what you want on your body. You should not have to argue
            for the size or style you asked for. If a design genuinely needs to
            change to age well, you are told why, and the decision stays yours.
          </p>

          {/* How a session runs */}
          <h2 className={h2}>How a session here runs</h2>
          <p className={p}>
            Sessions are by appointment only, one client at a time.
          </p>
          <ul className="mb-8 space-y-4">
            <li className={bullet}>
              <span className={lead}>The consultation.</span> Before anything is
              booked, you talk through your idea, the placement and the size
              with Soniya. It usually takes {studio.consultationLength}. There
              is no pressure to decide on the spot.
            </li>
            <li className={bullet}>
              <span className={lead}>Privacy.</span> Nobody else is in the room
              during your session, apart from anyone you choose to bring. Only the area being tattooed needs to be
              uncovered, and you can ask for whatever helps you feel
              comfortable.
            </li>
            <li className={bullet}>
              <span className={lead}>The stencil first.</span> The design is
              placed on your skin and checked with you before anything starts,
              so you see exactly where it will sit.
            </li>
            <li className={bullet}>
              <span className={lead}>Stopping.</span> You can ask to pause or
              stop at any time, for a break, for water, or because you have had
              enough for the day. A larger piece can be finished in another
              sitting.
            </li>
          </ul>
          <p className={p}>
            For every step in detail, including what to wear for rib, hip,
            chest, back and thigh placements, read{" "}
            <Link href="/blog/female-tattoo-artist-what-to-expect" className={link}>
              what to expect at your appointment
            </Link>
            .
          </p>

          {/* At-home */}
          <h2 className={h2}>The at-home option</h2>
          <p className={p}>
            For some clients, the most comfortable room is their own. Soniya
            brings the full sterile setup to you, so you can be tattooed in a
            space you already feel at ease in, without travelling across the
            city.
          </p>
          <p className={p}>
            That matters most for the placements above, and for anyone for
            whom getting to a studio is the hard part. The protocol does not
            change at home: single-use needles and ink caps opened in front of
            you, barrier film on every surface, and autoclave-sterilised tools.
            You provide a table, a chair, a power point and good light in a room
            that can stay undisturbed.
          </p>
          <p className={p}>
            At-home sessions have a minimum spend of {pricing.atHomeMinimum} and
            cover {serviceAreas.length} areas across Kolkata and Howrah. See the{" "}
            <Link href="/tattoo-parlour-in-kolkata" className={link}>
              areas we cover
            </Link>
            .
          </p>
          <p className={p}>
            For what a tattoo costs here, see our{" "}
            <Link href="/tattoo-prices-kolkata" className={link}>
              tattoo prices
            </Link>
            .
          </p>

          {/* Styles */}
          <h2 className={h2}>Styles Soniya works in</h2>
          <p className={p}>
            Every piece is custom, drawn for you rather than picked off a flash
            sheet. The work centres on five styles:
          </p>
          <ul className="mb-8 space-y-4">
            <li className={bullet}>
              <span className={lead}>Fine line.</span> Thin, precise lines with
              little or no heavy shading, closer to a pen drawing than to bold
              traditional work.
            </li>
            <li className={bullet}>
              <span className={lead}>Script.</span> Names, dates, words and
              short phrases, sized so they stay readable over the years.
            </li>
            <li className={bullet}>
              <span className={lead}>Floral.</span> Single stems, sprigs and
              small arrangements.
            </li>
            <li className={bullet}>
              <span className={lead}>Geometric.</span> Clean linework, shapes
              and dots.
            </li>
            <li className={bullet}>
              <span className={lead}>Minimal.</span> Small, simple symbols and
              outlines.
            </li>
          </ul>
          <p className={p}>
            Planning something small? Our guide to{" "}
            <Link href="/blog/small-tattoo-cost-kolkata" className={link}>
              small tattoo cost in Kolkata
            </Link>{" "}
            covers what works at each size.
          </p>
        </div>
      </Container>

      <Gallery images={portfolio} />

      <FaqSection
        items={artistFaq}
        title="Booking a Female Artist | Frequently Asked Questions"
        id="artist-faqs"
      />

      <Cta
        title="Ready to talk about your idea?"
        description="Message Soniya on WhatsApp with your idea, a rough size and the placement."
        whatsappMessage="Hey, I'd like to book a tattoo with Soniya"
      />
    </>
  );
}
