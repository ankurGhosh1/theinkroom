import { Container } from "@/components/Container";

const highlights = [
  {
    title: "Beginner Friendly",
    desc: "No prior experience needed. We start from the fundamentals — machine parts, needle grouping, and basic hand control — before moving to skin practice.",
  },
  {
    title: "Hands-On Training",
    desc: "Practice on synthetic skin under direct supervision before working on real sessions, so you build muscle memory and confidence safely.",
  },
  {
    title: "Hygiene & Safety Protocols",
    desc: "Learn hospital-grade sterilization, single-use needle handling, and cross-contamination prevention — the same standards used at The Ink Room.",
  },
  {
    title: "Small Batch Sizes",
    desc: "Limited seats per batch so every student gets focused, one-on-one attention from Soniya throughout the course.",
  },
  {
    title: "Portfolio Building Guidance",
    desc: "Get direction on building a portfolio that showcases your style and helps you start taking on your own clients.",
  },
  {
    title: "Certificate of Completion",
    desc: "Walk away with a certificate from The Ink Room recognizing your training, along with ongoing guidance as you start out.",
  },
];

export const CourseHighlights = () => {
  return (
    <section className="py-24" id="course-highlights">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Why Train With Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            What You&apos;ll Get
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {highlights.map((h, i) => (
            <div key={i} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{h.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
