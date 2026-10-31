import { Container } from "@/components/Container";

const features = [
  {
    title: "Best Female Tattoo Artist",
    desc: "Soniya brings years of experience, artistic precision, and a deep understanding of what clients truly want, from delicate fine-line work to bold statement pieces.",
  },
  {
    title: "Hygiene & Safety First",
    desc: "Single-use needles, hospital-grade sterilization, fresh ink caps every session. International safety protocols so you can relax completely.",
  },
  {
    title: "100% Custom Designs",
    desc: "No cookie-cutter tattoos. We collaborate closely with you on minimal, realism, traditional, geometric, floral, script or whatever speaks to your soul.",
  },
  {
    title: "At-Home Services",
    desc: "We bring our expertise directly to your doorstep. Detailed 1-on-1 consultations to understand your vision before we even start sketching.",
  },
  {
    title: "Multiple Styles Mastered",
    desc: "Fine line, realism, neo-traditional, geometric, floral and script, executed with precision and refined until you're 100% in love with the result.",
  },
  {
    title: "Single-Use Equipment",
    desc: "Every needle, grip, and tip is brand new and disposed of after your session. Autoclave sterilization for all reusable tools, every time.",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-24" id="whyinkroom">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            The Ink Room Advantage
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            Why Choose The Ink Room?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((f, i) => (
            <div key={i} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{f.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
