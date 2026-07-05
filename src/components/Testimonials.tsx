import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    text: "I had an amazing experience at the Ink Room! Soniya is incredibly talented and made me feel comfortable throughout the entire process. Highly recommend!",
  },
  {
    name: "Ritwik D.",
    text: "The tattoo I got from the Ink Room exceeded my expectations. The artist was professional, and the studio was clean and welcoming. I'm thrilled with my new ink!",
  },
  {
    name: "Ananya M.",
    text: "If you're looking for a skilled tattoo artist, look no further than the Ink Room. The attention to detail and creativity displayed by Soniya is truly impressive.",
  },
  {
    name: "Sourav B.",
    text: "Booked an at-home session for a small script tattoo and it was seamless — Soniya carried full sterilized equipment and the result looked exactly like the reference I sent.",
  },
  {
    name: "Ishita R.",
    text: "As a first-timer I was nervous about the pain and hygiene, but Soniya walked me through every step. The studio felt spotless and the healing was smooth.",
  },
  {
    name: "Arjun K.",
    text: "Got a fine-line piece done here and the precision is unreal. Booking on WhatsApp was easy and Soniya was flexible with timing.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24" id="testimonials">
      {/* Section header — constrained */}
      <div className="container mx-auto px-8 xl:px-0 mb-12 text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
          Here&apos;s what our clients said
        </h2>
      </div>

      {/* Mobile: horizontal snap-scroll. Desktop: full-width grid */}
      <div className="container mx-auto px-8 xl:px-0">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-8 px-8 md:mx-0 md:px-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-80 md:w-auto flex-shrink-0 snap-start bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col"
            >
              <span className="text-5xl text-red-600 font-serif leading-none mb-4 select-none">&ldquo;</span>
              <p className="text-neutral-200 text-lg leading-relaxed flex-grow">{t.text}</p>
              <p className="mt-6 text-sm font-bold text-neutral-400 uppercase tracking-widest">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
