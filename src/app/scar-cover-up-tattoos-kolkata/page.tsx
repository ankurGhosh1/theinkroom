import Link from "next/link";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import type { FaqItem } from "@/components/Faq";
import { siteConfig, whatsappLink } from "@/data/site";
import { faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";

/*
 * Health-adjacent page (see CLAUDE.md). No medical claims about scar healing
 * or tissue, no promised results, no healing timelines, and no before/after
 * images: there are none in /img, so none are shown or referred to.
 */

const { scarCoverUp } = siteConfig;
const path = "/scar-cover-up-tattoos-kolkata";
const description =
  "Scar cover-up tattoo in Kolkata: an honest guide to covering surgical, C-section and burn scars and stretch marks, and what can realistically be achieved.";

// Sentences built from values still to be supplied. Empty until filled in.
const minimumAgeSentence = scarCoverUp.minimumScarAge
  ? `As a minimum, we ask that a scar is at least ${scarCoverUp.minimumScarAge} old.`
  : "";

const doctorLine =
  "We recommend getting clearance from your doctor before tattooing over a scar, and we will ask about it at your consultation.";

export const metadata = createPageMetadata({
  title: "Scar Cover-Up Tattoos in Kolkata",
  description,
  url: path,
});

const scarFaq: FaqItem[] = [
  {
    question: "How old does a scar need to be before it can be tattooed?",
    // TODO: Ankur to supply siteConfig.scarCoverUp.minimumScarAge, if there is a studio minimum.
    answer: `It needs to be fully healed and settled, and the right time varies by scar and by person. ${doctorLine}${minimumAgeSentence ? ` ${minimumAgeSentence}` : ""}`,
  },
  {
    question: "Does tattooing over a scar hurt more?",
    answer:
      "It varies from person to person and from scar to scar. Some people find a scar feels different from the skin around it. You can pause or stop at any time, and the session goes at your pace.",
  },
  {
    question: "How many sessions does a scar cover-up take?",
    answer:
      "It depends on the scar and the design. Some cover-ups are finished in one session. Others need a second session after healing, if parts of the scar did not hold ink evenly. You will be told what to expect after the consultation, though it cannot be guaranteed.",
  },
  {
    question: "Can every scar be covered?",
    answer:
      "No. A scar that is still healing or changing, very raised, very large or sensitive may not be suitable, and sometimes a design that sits around the scar works better than one over it. You will get an honest answer at the consultation, before anything is booked.",
  },
  {
    question: "How are scar cover-ups priced?",
    // TODO: Ankur to supply siteConfig.scarCoverUp.followUpPricing.
    answer: `Like all our work, they are quoted per piece after a free consultation, based on the design, the size, the placement and the time it needs.${scarCoverUp.followUpPricing ? ` ${scarCoverUp.followUpPricing}` : ""}`,
  },
  {
    question: "What if the tattoo does not cover the scar the way I hoped?",
    answer:
      "No specific result can be promised, and you will be told that plainly before you book. If parts of the scar did not hold ink evenly, a follow-up session after healing may help. If a scar turns out not to suit tattooing, you will be told rather than the work carrying on.",
  },
];

const h2 = "text-3xl font-serif font-bold text-neutral-100 mt-14 mb-5";
const h3 = "text-xl font-serif font-bold text-neutral-100 mt-10 mb-3";
const p = "text-neutral-300 text-lg leading-relaxed mb-6";
const link = "text-red-500 hover:text-red-400 transition-colors";
const bullet =
  "relative pl-6 text-neutral-300 leading-relaxed before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-600";

export default function ScarCoverUpTattoosKolkata() {
  const schema = jsonLdGraph(
    serviceSchema({
      name: "Scar cover-up tattoos in Kolkata",
      serviceType: "Scar cover-up tattooing",
      path,
      description,
    }),
    faqSchema(scarFaq)
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
                <li className="text-neutral-300">Scar Cover-Ups</li>
              </ol>
            </nav>

            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-5">
              Scar Cover-Ups
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-100 leading-tight mb-6">
              Scar Cover-Up Tattoos in Kolkata
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              A scar cover-up tattoo is a design placed over or around a scar,
              so that the tattoo is what you see first. If you are looking for a
              scar cover-up tattoo in Kolkata, Soniya designs each one around the
              shape of your scar at The Ink Room in Behala, privately and
              without pressure. It is for anyone who would rather look at a
              tattoo they chose than a scar they did not.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              It is not a medical treatment, and it does not change the scar
              itself. What it can change is how the area looks to you. This page
              is honest about what that can and cannot mean.
            </p>
            <a
              href={whatsappLink("Hi, I'd like to ask about a scar cover-up tattoo")}
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
            >
              Ask about a scar cover-up
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Types of scar */}
          <h2 className={h2}>Scars a cover-up can work with</h2>
          <p className={p}>
            Every scar is different, so these are starting points rather than
            promises. The kinds of scar a tattoo over scars can work with
            include:
          </p>

          <h3 className={h3}>Surgical scars</h3>
          <p className={p}>
            Straight or curved scars from operations, such as on the abdomen,
            chest, back, knee or shoulder. A design can follow the line of the
            scar, so the scar becomes part of the shape.
          </p>

          <h3 className={h3}>C-section scars</h3>
          <p className={p}>
            A C-section scar sits low on the abdomen. A C-section scar tattoo
            can run along it, as a vine, a line of flowers or a word in script,
            so the scar sits inside the design rather than underneath it. If you
            are pregnant or breastfeeding, talk to your doctor before booking.
          </p>

          <h3 className={h3}>Burn scars</h3>
          <p className={p}>
            Burn scars vary in size, texture and colour, sometimes within the
            same scar. Some areas may take a design well and others may not, so
            a burn scar always needs to be seen in person before anything is
            planned.
          </p>

          <h3 className={h3}>Stretch marks</h3>
          <p className={p}>
            Stretch marks can be worked into a design, for example with flowing
            floral or vine work that crosses the marks rather than trying to
            fill each one. Ink in stretch marks may not look the same
            as ink in the skin around them.
          </p>

          {/* Honest expectations */}
          <h2 className={h2}>What is realistically achievable</h2>
          <p className={p}>
            This matters more than anything else on this page. A cover-up
            tattoo can make a scar less noticeable, or turn it into part of a
            design you chose. It cannot make the scar disappear, and no specific
            result can be promised, before or after the session.
          </p>
          <ul className="mb-8 space-y-4">
            <li className={bullet}>
              Scar tissue does not always take ink the way the skin around it
              does. Lines and shading over the scar can heal lighter or patchier
              than elsewhere.
            </li>
            <li className={bullet}>
              Some scars need more than one session. A second session after
              healing can fill areas that did not hold ink evenly the first
              time.
            </li>
            <li className={bullet}>
              The texture of a scar stays. A raised or indented scar will still
              feel that way under the tattoo, and may still show in some light.
            </li>
            <li className={bullet}>
              Some scars are not suitable. A scar that is still red, raised,
              changing or sensitive, or a very large or thick scar, may be
              better left alone, or worked around rather than over.
            </li>
          </ul>
          <p className={p}>
            If a cover-up is unlikely to give you a result you will be happy
            with, you will be told so at the consultation, before anything is
            booked. Sometimes the better option is a design that sits beside or
            around the scar rather than on top of it.
          </p>

          {/* Consultation */}
          <h2 className={h2}>The consultation</h2>
          <p className={p}>
            Every scar cover-up starts with a free, private consultation. It is
            just you and Soniya, and there is no pressure to book.
          </p>
          <ul className="mb-8 space-y-4">
            <li className={bullet}>
              Soniya needs to see the scar to judge its size, texture and
              colour. You can show it in person at the consultation.
            </li>
            <li className={bullet}>
              You talk about what you want: to hide the scar, to soften it, or
              to make it part of something new.
            </li>
            <li className={bullet}>
              The design is developed around the scar, following its line,
              curve or edges rather than working against them.
            </li>
            <li className={bullet}>
              You will be asked about the scar&apos;s history and whether your
              doctor has cleared it for tattooing.
            </li>
            <li className={bullet}>
              You see the design and can change it before anything is booked.
            </li>
          </ul>
          <p className={p}>
            What the appointment itself looks like, including what to wear for
            abdomen, chest and hip placements, is in our guide to{" "}
            <Link href="/blog/female-tattoo-artist-what-to-expect" className={link}>
              what to expect at your appointment
            </Link>
            .
          </p>

          {/* Timing */}
          <h2 className={h2}>Timing: when a scar is ready</h2>
          <p className={p}>
            A scar needs to be fully healed and settled before it is tattooed.
            There is no single timeline that suits every scar or every person,
            so this page does not set one.
            {/* TODO: Ankur to supply siteConfig.scarCoverUp.minimumScarAge */}
            {minimumAgeSentence && ` ${minimumAgeSentence}`}
          </p>
          <div className="my-8 border-l-2 border-red-600 bg-neutral-900/60 px-6 py-5 rounded-r-lg">
            <p className="text-neutral-200 leading-relaxed">
              {doctorLine} Your doctor knows your scar and your medical history
              in a way a tattoo artist cannot.
            </p>
          </div>
          <p className={p}>
            Talk to your doctor first as well if you are pregnant or
            breastfeeding, if the scar is from recent treatment, or if your
            skin tends to form raised scars.
          </p>
          <p className={p}>
            After the session, a tattoo over a scar is looked after like any
            other. Our{" "}
            <Link href="/blog/tattoo-aftercare-guide-kolkata" className={link}>
              aftercare guide for Kolkata weather
            </Link>{" "}
            covers the healing process. If you notice spreading redness, heat,
            pus or a fever, see a doctor.
          </p>

          {/* Female artist */}
          <h2 className={h2}>Why a female artist can matter here</h2>
          <p className={p}>
            Scars from surgery, childbirth or burns can sit on areas you keep
            private: the lower abdomen, the chest, the hips and the inner
            thighs. Showing a scar, and talking about how you got it, can be
            harder than the tattoo itself.
          </p>
          <p className={p}>
            In a one-artist studio where the only other person in the room is a
            woman, that conversation can be easier. You do not have to share the
            story behind the scar to get a good design, only what affects the
            tattoo. More on how sessions run is on our{" "}
            <Link href="/female-tattoo-artist-kolkata" className={link}>
              female tattoo artist in Kolkata
            </Link>{" "}
            page.
          </p>
        </div>
      </Container>

      <FaqSection
        items={scarFaq}
        title="Scar Cover-Ups | Frequently Asked Questions"
        id="scar-faqs"
      />

      <Cta
        title="Thinking about covering a scar?"
        description="Message Soniya on WhatsApp to arrange a free, private consultation."
        whatsappMessage="Hi, I'd like to ask about a scar cover-up tattoo"
      />
    </>
  );
}
