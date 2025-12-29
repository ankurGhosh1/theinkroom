import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { createPageMetadata } from "@/components/Metadata";
import { benefitOne, benefitTwo } from "@/components/data";

export const metadata = createPageMetadata({
  title:
    "Best Female Tattoo Artist in Kolkata | Tattoo Parlour Behala – The Ink Room",
  description:
    "Discover custom tattoos by Soniya, one of the best female tattoo artists in Kolkata. Safe, hygienic tattoo parlour in Behala offering unique designs for men & women. Book your appointment at theinkroom.in today!",
  image: "/og-home.jpg",
  url: "/",
  keywords: [
    "Best Female Tattoo Artist",
    "tattoo parlour behala",
    "behala tattoo",
  ],
});

export default function Home() {
  return (
    <Container>
      <Hero />
      <div id="whyinkroom">
        <SectionTitle
          preTitle="The Ink Room Advantage"
          title="Why Choose The Ink Room - Your Trusted Tattoo Parlour in Behala, Kolkata"
        >
          Looking for the <strong>best female tattoo artist in Kolkata</strong>?
          Welcome to The Ink Room – a premium{" "}
          <strong>tattoo parlour in Behala</strong>
          where hygiene, creativity, and your comfort come first.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      {/* Will add below section after we have a video */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> 

      <Video videoId="fZ0D0cnR88E" /> */}
      <div id="testimonials">
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          We value our customers&apos; feedback and are proud to share their
          testimonials. Their satisfaction is our top priority, and we strive to
          exceed their expectations with every tattoo we create.
        </SectionTitle>

        <Testimonials />
      </div>
      <div id="faqs">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
      </div>
      <Faq />
      <Cta />
    </Container>
  );
}
