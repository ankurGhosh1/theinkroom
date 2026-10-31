"use client";
import HeroSlider from "@/components/Slider";

const heroImages = [
  "/img/tattoo12.jpg",
  "/img/tattoo16.jpg",
  "/img/tattoo13.jpg",
  "/img/tattoo14.jpg",
  "/img/tattoo1.jpg",
  "/img/tattoo5.jpg",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background slider */}
      <div className="absolute inset-0 z-0">
        <HeroSlider
          images={heroImages}
          interval={5500}
          height="h-full"
          width="w-full"
          fadeDuration={1200}
          objectFit="cover"
        />
      </div>

      {/* Gradient overlay — dark top (behind navbar) + dark bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-neutral-950/90" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
          Behala · Kolkata
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif font-bold text-white leading-tight mb-6">
          Female Tattoo<br />Artist in<br />Kolkata
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Custom tattoos by Soniya, where your vision becomes permanent art.
        </p>
        <a
          href="https://wa.me/8961248160?text=Hey%20I%20need%20a%20tattoo"
          target="_blank"
          rel="noopener"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
        >
          Connect on WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
