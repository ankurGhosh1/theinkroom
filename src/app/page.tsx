import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/components/Metadata";

export const metadata = createPageMetadata({
  title: "Best Female Tattoo Artist in Kolkata | The Ink Room",
  description:
    "Discover custom tattoos by Soniya, one of the best female tattoo artists in Kolkata. Safe, hygienic tattoo parlour in Behala offering unique designs for men & women.",
  image: "/img/tattoo1.jpg",
  url: "/",
  keywords: [
    "Best Female Tattoo Artist",
    "tattoo parlour behala",
    "behala tattoo",
    "female tattoo artist kolkata",
    "custom tattoo artist kolkata",
    "fine line tattoo kolkata",
    "tattoo studio kolkata",
    "at home tattoo service kolkata",
    "hygienic tattoo parlour kolkata",
    "tattoo parlour in kolkata",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Gallery />
      <WhyUs />
      <Testimonials />

      <section className="py-16" id="faqs">
        <Container>
          <div className="text-center mb-10">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">FAQ</p>
            <h2 className="text-4xl font-serif font-bold text-neutral-100">
              Frequently Asked Questions
            </h2>
          </div>
        </Container>
        <Faq />
      </section>

      <Cta />
    </>
  );
}
