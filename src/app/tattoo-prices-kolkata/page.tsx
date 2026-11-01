import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import { RecentPieces } from "@/components/RecentPieces";
import type { FaqItem } from "@/components/Faq";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig, whatsappLink } from "@/data/site";
import { faqSchema, jsonLdGraph } from "@/lib/schema";

const { pricing } = siteConfig;
const depositRule = `For tattoos above ${pricing.depositThreshold}, we take a ${pricing.depositPercent} deposit, which is deducted from the final amount.`;

// Show the price columns only once at least one piece has a price.
const piecesHavePrices = pricing.recentPieces.some((piece) => piece.price);

export const metadata = createPageMetadata({
  title: "Tattoo Price in Kolkata | Typical Costs",
  description:
    "Tattoo price in Kolkata at The Ink Room: tiny pieces ₹599 to ₹799, 1 to 3 inches around ₹1,500. What a session includes and how to get a quote.",
  image: "/img/tattoo9.jpg",
  url: "/tattoo-prices-kolkata",
});

const priceFaq: FaqItem[] = [
  {
    question: "Is there a minimum charge?",
    answer:
      "The smallest pieces start at ₹599. Below that the price does not drop further, because the sterile setup costs the same whatever the size: a fresh needle, fresh ink, barrier film and a full station breakdown are needed for a tiny tattoo just as much as for a large one.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer: `${depositRule} No deposit is taken over chat before the design is agreed.`,
  },
  ...(pricing.paymentMethods
    ? [
        {
          question: "How can I pay?",
          answer: `You can pay by ${pricing.paymentMethods}.`,
        },
      ]
    : []),
  {
    question: "Can the price change on the day?",
    answer:
      "Only if the tattoo changes. Your quote covers the design, the session and the consumables for the piece agreed at consultation. If you decide on the day to go bigger, add detail or move the placement, the price changes with it, and you are told the new figure before the needle starts. Nothing is added after the session.",
  },
  {
    question: "Does colour cost more than black and grey?",
    answer:
      "It can, depending on the design. Colour usually takes longer, uses more ink and often needs a second pass to look even, so a colour piece may be quoted higher than the same design in black and grey. Your quote will say.",
  },
  {
    question: "Is there an extra charge for at-home sessions?",
    answer: `At-home sessions have a minimum spend of ${pricing.atHomeMinimum}. Your full quote is confirmed on WhatsApp before you book.`,
  },
];

const h2 = "text-3xl font-serif font-bold text-neutral-100 mt-14 mb-5";
const p = "text-neutral-300 text-lg leading-relaxed mb-6";
const link = "text-red-500 hover:text-red-400 transition-colors";
const bullet =
  "relative pl-6 text-neutral-300 leading-relaxed before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-600";
const lead = "text-neutral-100 font-bold";

export default function TattooPricesKolkata() {
  return (
    <>
      <JsonLd data={jsonLdGraph(faqSchema(priceFaq))} />

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
                <li className="text-neutral-300">Tattoo Prices</li>
              </ol>
            </nav>

            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-5">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-100 leading-tight mb-6">
              Tattoo Price in Kolkata: What It Really Costs
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              A minimalist or tiny tattoo at The Ink Room typically costs ₹599
              to ₹799. A piece of 1 to 3 inches is usually around ₹1,500, and
              anything larger or custom is quoted after a free consultation.
              These are typical ranges, not fixed rates. Your final price is
              confirmed at consultation, once the design, size and placement
              are settled.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Below you will find what the tattoo price in Kolkata covers at our
              studio, real pieces and what they cost, how at-home sessions
              work, and how to get a quote for your own idea.
            </p>
            <a
              href={whatsappLink("Hey, I'd like a quote for a tattoo")}
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
            >
              Get a quote on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-2xl mx-auto relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-6">
          <Image
            src="/img/tattoo9.jpg"
            alt="Minimal crescent moon and stars tattoo on the forearm"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
      </Container>

      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Typical ranges */}
          <h2 className={h2}>Typical price ranges</h2>
          <p className={p}>
            These ranges cover most of what we are asked for. They are a guide,
            not a rate card. Every tattoo is quoted per piece, and the final
            figure is confirmed at consultation before anything is booked.
          </p>
          <dl className="mb-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
            {pricing.typicalRanges.map((range) => (
              <div
                key={range.label}
                className="flex flex-wrap justify-between gap-x-6 gap-y-1 px-6 py-4 border-b border-neutral-800 last:border-b-0"
              >
                <dt className="text-neutral-100 font-bold">{range.label}</dt>
                <dd className="text-neutral-300">{range.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mb-8 space-y-3">
            <li className={bullet}>
              Colour can change the price, depending on the design.
            </li>
            <li className={bullet}>
              At-home sessions have a minimum spend of {pricing.atHomeMinimum}.
            </li>
            <li className={bullet}>Consultation is free.</li>
          </ul>

          {/* Recent pieces. Prices are optional per piece; the heading and
              copy only talk about cost once some are filled in. */}
          <h2 className={h2}>
            {piecesHavePrices ? "Recent pieces and what they cost" : "Recent pieces"}
          </h2>
          <p className={p}>
            {piecesHavePrices
              ? "A few pieces from the studio, with their placement and what they cost. Use them as a reference point for your own idea. Your quote depends on your design, so a similar-looking piece can still be priced differently."
              : "A few pieces from the studio and where they sit on the body. Every piece is quoted on its own design, so send yours on WhatsApp for a figure."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-6">
          <RecentPieces pieces={pricing.recentPieces} />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* What a session includes */}
          <h2 className={h2}>What a session includes</h2>
          <p className={p}>
            The price you are quoted covers everything from the first
            conversation to the moment you leave.
          </p>
          <ul className="mb-8 space-y-4">
            <li className={bullet}>
              <span className={lead}>A free consultation.</span> We talk
              through your idea, the size and the placement before anything is
              booked, and you hear straight away if the design needs to be
              bigger or simpler to age well.
            </li>
            <li className={bullet}>
              <span className={lead}>A custom design.</span> Soniya draws your
              piece from scratch, with {pricing.designRevisions}.
              You see the design and can ask for changes before the session.
            </li>
            <li className={bullet}>
              <span className={lead}>The stencil.</span> The design is placed
              on your skin and checked with you before anything starts. If the
              size or position needs adjusting, this is when it happens.
            </li>
            <li className={bullet}>
              <span className={lead}>The session itself.</span> Single-use
              needles and ink caps opened in front of you, barrier film on every
              surface, and autoclave-sterilised reusable tools, whether you are
              in the studio or at home.
            </li>
            <li className={bullet}>
              <span className={lead}>Aftercare instructions.</span> You leave
              knowing how to look after the tattoo. Our{" "}
              <Link href="/blog/tattoo-aftercare-guide-kolkata" className={link}>
                aftercare guide for Kolkata weather
              </Link>{" "}
              covers the healing weeks in detail.
            </li>
          </ul>

          {/* How to get a quote. Generic pricing education lives in the
              /blog/what-should-a-tattoo-cost pillar, not here. */}
          <h2 className={h2}>How to get a quote</h2>
          <p className={p}>
            We quote per piece, not per inch or per hour, so the figure reflects
            your actual design rather than a formula.
          </p>
          <ol className="mb-8 space-y-3 list-none">
            {[
              "Send your reference or idea, a rough size in inches and the placement on WhatsApp.",
              "At the free consultation, we go through the design, size and placement with you, and point out anything that will not age well at that size.",
              "You get one figure for your exact design. That is what you pay, and nothing is added after the session.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 text-neutral-300 leading-relaxed">
                <span className="flex-shrink-0 font-serif font-bold text-red-500">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className={p}>
            If you decide on the day to change the size, the detail or the
            placement, you are told the new figure before the needle starts.
          </p>
          <p className={p}>
            For how studios price tattoos in general, what a fair quote
            includes and the questions worth asking anywhere, read our{" "}
            <Link href="/blog/what-should-a-tattoo-cost" className={link}>
              guide to tattoo prices
            </Link>
            .
          </p>

          {/* At-home sessions */}
          <h2 className={h2}>At-home sessions</h2>
          <p className={p}>
            If you would rather not travel, Soniya brings the full sterile setup
            to you. You provide a table, a chair, a power point and good light,
            in a room that can stay undisturbed for the session.
          </p>
          <p className={p}>
            At-home sessions suit small to medium pieces. Larger or
            multi-session work is usually better in the studio, where the chair
            and lighting are built for long sittings.
          </p>
          <p className={p}>
            We cover {serviceAreas.length} areas across Kolkata and Howrah,
            from Behala and Tollygunge to Salt Lake, New Town and Howrah. See
            the full list of{" "}
            <Link href="/tattoo-parlour-in-kolkata" className={link}>
              areas we cover
            </Link>
            . Further areas are booked a few days ahead, since the travel is
            blocked out as part of the appointment.
          </p>
          <p className={p}>
            The minimum spend for an at-home session is {pricing.atHomeMinimum}.
            Your full quote is confirmed on WhatsApp before you book.
          </p>

          {/* Deposits */}
          <h2 className={h2}>Deposits</h2>
          <p className={p}>
            {depositRule} It is only taken once the design is agreed, never over
            chat before that.
          </p>

          <div className="my-8 border-l-2 border-red-600 bg-neutral-900/60 px-6 py-5 rounded-r-lg">
            <p className="text-neutral-200 leading-relaxed">
              Every piece here is designed and tattooed by Soniya, a{" "}
              <Link href="/female-tattoo-artist-kolkata" className={link}>
                female tattoo artist in Kolkata
              </Link>
              , so the person who quotes you is the person who does the work.
              If this is your first tattoo, our{" "}
              <Link href="/blog/first-tattoo-guide" className={link}>
                first tattoo guide
              </Link>{" "}
              walks through what to expect.
            </p>
          </div>
        </div>
      </Container>

      <FaqSection
        items={priceFaq}
        title="Tattoo Prices | Frequently Asked Questions"
        id="price-faqs"
      />

      <Cta
        title="Want a price for your idea?"
        description="Send your reference, a rough size in inches and the placement on WhatsApp, and you will get a real number."
        whatsappMessage="Hey, I'd like a quote for a tattoo"
      />
    </>
  );
}
