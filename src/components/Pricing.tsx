import Link from "next/link";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { siteConfig } from "@/data/site";

const { pricing } = siteConfig;

/**
 * Homepage pricing: typical ranges only. Every tattoo is quoted per piece, so
 * this never presents fixed rates.
 */
export const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            What a tattoo costs here
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-neutral-400 leading-relaxed">
            Every piece is priced on its size, the level of detail, the
            placement and the session time it needs, not on a flat per-inch
            rate. The same design on the forearm and on the ribs is a different
            job, and the quote reflects that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {pricing.typicalRanges.map((range) => (
            <div key={range.label} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{range.label}</h3>
              <p className="text-neutral-400 leading-relaxed">{range.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center space-y-3">
          <p className="text-neutral-400 leading-relaxed">
            These are typical ranges, not fixed rates. Anything else depends on
            the design, size and colour, and your final price is confirmed at
            consultation. At-home sessions have a minimum of{" "}
            {pricing.atHomeMinimum}.
          </p>
          <p className="text-neutral-100">Consultation is free.</p>
          <p>
            <Link
              href="/tattoo-prices-kolkata"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              See tattoo prices and recent pieces
            </Link>
          </p>
        </div>
      </Container>

      <div className="mt-16">
        <Cta />
      </div>
    </section>
  );
};
