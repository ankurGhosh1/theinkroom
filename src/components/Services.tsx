import Link from "next/link";
import { Container } from "@/components/Container";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";

const services = [
  {
    title: "Custom tattoos",
    desc: "Fine line, script, floral, geometric and minimal work, drawn for you from scratch and tattooed by Soniya.",
    href: "/female-tattoo-artist-kolkata",
    cta: "Meet the artist",
  },
  {
    title: "At-home sessions",
    desc: `The full sterile setup brought to you, across ${serviceAreas.length} areas of Kolkata and Howrah, with a minimum spend of ${siteConfig.pricing.atHomeMinimum}.`,
    href: "/tattoo-parlour-in-kolkata",
    cta: "See the areas we cover",
  },
  {
    title: "Scar cover-ups",
    desc: "Designs drawn around surgical, C-section and burn scars and stretch marks, after a private consultation.",
    href: "/scar-cover-up-tattoos-kolkata",
    cta: "About scar cover-ups",
  },
  {
    title: "Tattoo course",
    desc: "Hands-on training with Soniya in machine handling, hygiene, line work and shading.",
    href: "/tattoo-course",
    cta: "About the course",
  },
];

export const Services = () => {
  return (
    <section className="py-24 border-b border-neutral-800" id="services">
      <Container>
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {services.map((service) => (
            <div key={service.title} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">{service.desc}</p>
              <Link
                href={service.href}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
