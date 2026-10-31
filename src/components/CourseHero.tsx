import Image from "next/image";

export const CourseHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/tattoo3.jpg"
          alt="Tattoo training session at The Ink Room, Kolkata"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950/90" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto py-32">
        <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
          Behala · Kolkata
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
          Learn Tattoo Making in Kolkata
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Train under Soniya, an experienced female tattoo artist, and learn
          machine handling, hygiene protocols, line work, shading and more,
          hands-on, in small batches.
        </p>
        <a
          href="https://wa.me/8961248160?text=Hey%2C%20I%27m%20interested%20in%20the%20tattoo%20course"
          target="_blank"
          rel="noopener"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
        >
          Enroll on WhatsApp
        </a>
      </div>
    </section>
  );
};
