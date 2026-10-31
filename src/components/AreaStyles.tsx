import Link from "next/link";
import { Container } from "@/components/Container";
import type { ServiceArea } from "@/data/serviceAreas";

interface AreaStylesProps {
  area: ServiceArea;
}

/** Style guidance for areas that have it. Renders nothing otherwise. */
export const AreaStyles = ({ area }: Readonly<AreaStylesProps>) => {
  if (!area.styles) return null;

  return (
    <section className="py-24 border-b border-neutral-800">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Tattoo Styles
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            Choosing a style
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-neutral-400 leading-relaxed">
            {area.styles.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {area.styles.items.map((style) => (
            <div key={style.title} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{style.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{style.desc}</p>
            </div>
          ))}
        </div>

        <p className="max-w-2xl mx-auto mt-16 text-center text-neutral-400 leading-relaxed">
          Every piece is designed and tattooed by Soniya, a{" "}
          <Link
            href="/"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            female tattoo artist in Kolkata
          </Link>{" "}
          working from the Behala studio and travelling to clients across the
          city. Not sure which style suits your idea? Send a reference on
          WhatsApp and you will get a straight answer.
        </p>
      </Container>
    </section>
  );
};
