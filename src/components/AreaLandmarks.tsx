import { Container } from "@/components/Container";
import type { ServiceArea } from "@/data/serviceAreas";

interface AreaLandmarksProps {
  area: ServiceArea;
}

export const AreaLandmarks = ({ area }: Readonly<AreaLandmarksProps>) => {
  return (
    <section className="py-16 border-b border-neutral-800">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Areas We Cover Near {area.name}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {area.landmarks.map((landmark) => (
              <span
                key={landmark}
                className="px-4 py-2 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
