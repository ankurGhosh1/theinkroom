import { Container } from "@/components/Container";

const modules = [
  {
    step: "01",
    title: "Tattoo Fundamentals & Machine Handling",
    desc: "Understanding machines, needle groupings, power supplies, and how to hold and move the machine correctly.",
  },
  {
    step: "02",
    title: "Hygiene, Sterilization & Safety",
    desc: "Autoclave use, single-use equipment, glove protocol, and setting up a safe, compliant workstation.",
  },
  {
    step: "03",
    title: "Line Work & Shading Techniques",
    desc: "Building steady hand control, consistent line weight, and smooth shading gradients on practice skin.",
  },
  {
    step: "04",
    title: "Stencils, Placement & Design",
    desc: "Transferring designs, reading body contours, and choosing placement and sizing that ages well.",
  },
  {
    step: "05",
    title: "Color Theory & Skin Tones",
    desc: "Choosing ink combinations that heal well across different skin tones and design styles.",
  },
  {
    step: "06",
    title: "Portfolio & First Client Session",
    desc: "Preparing your first pieces, documenting your work, and guidance on taking on your first real clients.",
  },
];

export const CourseCurriculum = () => {
  return (
    <section className="py-24 bg-neutral-900/40" id="curriculum">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Course Structure
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            Curriculum
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-neutral-400 leading-relaxed">
            Contact us on WhatsApp for current batch schedule, seats, and fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <div
              key={i}
              className="flex gap-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
            >
              <span className="text-4xl font-serif font-bold text-red-600 leading-none">
                {m.step}
              </span>
              <div>
                <h3 className="text-xl font-serif font-bold text-neutral-100 mb-2">
                  {m.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
