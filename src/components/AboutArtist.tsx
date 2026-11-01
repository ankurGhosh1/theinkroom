import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

/**
 * ⚠️ REVIEW: this is the artist-authority section — it is what separates the
 * homepage from the city landing page and what Google reads for E-E-A-T.
 * Edit the copy so it matches Soniya's real background, training and story.
 */
export const AboutArtist = () => {
  return (
    <section className="py-24 border-b border-neutral-800" id="about">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[28rem] rounded-2xl overflow-hidden">
            <Image
              src="/img/tattoo16.jpg"
              alt="Tattoo work by Soniya, founder of The Ink Room in Behala, Kolkata"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
              The Artist
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100 mb-6">
              Meet {siteConfig.founder.name}
            </h2>

            <div className="space-y-5 text-neutral-300 text-lg leading-relaxed">
              <p>
                The Ink Room is a one-artist studio, and that is deliberate.
                Every piece that leaves here is designed, drawn and tattooed by{" "}
                {siteConfig.founder.name}. There is no handing your idea to
                whoever happens to be free that afternoon.
              </p>
              <p>
                As a woman running her own tattoo studio in Kolkata, Soniya
                works with clients getting their first piece, and with women
                who would simply rather be tattooed by another woman. That shapes how sessions run: more time on the
                consultation, no pressure to size up, and a genuine
                conversation about placement before a needle is anywhere near
                your skin.
              </p>
              <p>
                The work spans fine line, script, floral, geometric and
                minimal styles, all designed from scratch. Nothing is picked
                off a flash sheet. You bring the idea, and it gets drawn for
                your body and your placement.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/female-tattoo-artist-kolkata"
                className="px-6 py-3 text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md"
              >
                Why a female artist
              </Link>
              <Link
                href="/blog/first-tattoo-guide"
                className="px-6 py-3 text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md"
              >
                Read the first-tattoo guide
              </Link>
              <Link
                href="/tattoo-course"
                className="px-6 py-3 text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md"
              >
                Learn tattooing with Soniya
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
