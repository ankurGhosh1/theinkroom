import Image from "next/image";

const allImages = [
  "/img/tattoo1.jpg",
  "/img/tattoo2.jpg",
  "/img/tattoo3.jpg",
  "/img/tattoo4.jpg",
  "/img/tattoo5.jpg",
  "/img/tattoo6.jpg",
  "/img/tattoo7.jpg",
  "/img/tattoo8.jpg",
  "/img/tattoo9.jpg",
  "/img/tattoo10.jpg",
  "/img/tattoo11.jpg",
  "/img/tattoo12.jpg",
  "/img/tattoo13.jpg",
  "/img/tattoo14.jpg",
  "/img/tattoo15.jpg",
  "/img/tattoo16.jpg",
];

// Row 2 starts from the middle for visual variety
const row2 = [...allImages.slice(8), ...allImages.slice(0, 8)];

export const Gallery = () => {
  return (
    <section className="py-24 overflow-hidden" id="portfolio">
      <div className="container mx-auto px-8 xl:px-0 text-center mb-12">
        <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
          Portfolio
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
          Our Work
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="flex gap-4 mb-4 w-max animate-marquee">
        {[...allImages, ...allImages].map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-64 h-72 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Custom tattoo design ${i + 1} by Soniya, female tattoo artist in Behala, Kolkata`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="256px"
            />
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex gap-4 w-max animate-marquee-reverse">
        {[...row2, ...row2].map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-64 h-72 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Custom tattoo design ${i + 1} by Soniya, female tattoo artist in Behala, Kolkata`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="256px"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
