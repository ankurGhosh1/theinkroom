import Link from "next/link";
import { Container } from "@/components/Container";
import { getNearbyAreas, type ServiceArea } from "@/data/serviceAreas";

interface AreaContentProps {
  area: ServiceArea;
}

/**
 * The unique, area-specific body of each location page. Everything here comes
 * from the area record rather than shared copy — this is what keeps the ten
 * location pages from reading as duplicates of one another.
 */
export const AreaContent = ({ area }: Readonly<AreaContentProps>) => {
  const nearby = getNearbyAreas(area);

  return (
    <section className="py-20 border-b border-neutral-800">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-100 mb-6">
            Getting a tattoo in {area.name}
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-10">
            {area.coverage}
          </p>

          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-lg font-serif font-bold text-neutral-100 mb-3">
                {area.travel.distanceKm === 0
                  ? "At the studio"
                  : `${area.travel.distanceKm} km from the studio`}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {area.travel.note}
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-lg font-serif font-bold text-neutral-100 mb-3">
                Getting around {area.name}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {area.transport}
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-neutral-100 mb-4">
            Before your appointment
          </h3>
          <p className="text-neutral-300 leading-relaxed mb-12">
            {area.sessionNote}
          </p>

          {nearby.length > 0 && (
            <div className="border-t border-neutral-800 pt-8">
              <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-5">
                Nearby areas we cover
              </p>
              <div className="flex flex-wrap gap-3">
                {nearby.map((neighbour) => (
                  <Link
                    key={neighbour.slug}
                    href={`/tattoo-parlour-in/${neighbour.slug}`}
                    className="px-5 py-2.5 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full hover:border-red-600 hover:text-neutral-100 transition-colors"
                  >
                    Tattoo parlour in {neighbour.name}
                  </Link>
                ))}
                <Link
                  href="/tattoo-parlour-in-kolkata"
                  className="px-5 py-2.5 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full hover:border-red-600 hover:text-neutral-100 transition-colors"
                >
                  All areas across Kolkata
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
