import Image from "next/image";
import type { ServiceArea } from "@/data/serviceAreas";

export const heroImages = [
  "/img/tattoo1.jpg",
  "/img/tattoo4.jpg",
  "/img/tattoo7.jpg",
  "/img/tattoo9.jpg",
  "/img/tattoo11.jpg",
];

interface AreaHeroProps {
  area: ServiceArea;
  imageIndex?: number;
}

export const AreaHero = ({ area, imageIndex = 0 }: Readonly<AreaHeroProps>) => {
  const image = heroImages[imageIndex % heroImages.length];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={`Custom tattoo work by The Ink Room, serving ${area.name}, Kolkata`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950/90" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto py-28">
        <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
          {area.region} · Kolkata
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
          Tattoo Parlour in {area.name}, Kolkata
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {area.intro}
        </p>
        <a
          href={`https://wa.me/8961248160?text=${encodeURIComponent(
            `Hey, I need a tattoo in ${area.name}`
          )}`}
          target="_blank"
          rel="noopener"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
        >
          Connect on WhatsApp
        </a>
      </div>
    </section>
  );
};
