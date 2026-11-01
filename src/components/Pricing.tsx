import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { rateCard } from "@/lib/pricing";

// Rows without a value yet are dropped rather than rendered empty.
const rates = rateCard().filter((rate) => rate.value);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {rates.map((rate) => (
            <div key={rate.title} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{rate.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{rate.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-100">Consultation is free.</p>
        </div>
      </Container>

      <div className="mt-16">
        <Cta />
      </div>
    </section>
  );
};
