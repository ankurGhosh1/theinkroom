import Link from "next/link";
import { Container } from "@/components/Container";
import { serviceAreas } from "@/data/serviceAreas";

export const ServiceAreasGrid = () => {
  return (
    <section className="py-24" id="service-areas">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Areas We Serve
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            Tattoo Services Across Kolkata
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/tattoo-parlour-in/${area.slug}`}
              className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-red-600 transition-colors"
            >
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-2">
                Tattoo Parlour in {area.name}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{area.region}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
