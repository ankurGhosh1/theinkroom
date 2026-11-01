import { Container } from "@/components/Container";

const stats = [
  { value: "80+", label: "Tattoos Done" },
  { value: "5★", label: "Google Rating" },
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Custom Designs" },
];

export const Stats = () => {
  return (
    <section className="py-16 border-b border-neutral-800">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-serif font-bold text-red-500">{stat.value}</p>
              <p className="mt-3 uppercase tracking-widest text-xs text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
