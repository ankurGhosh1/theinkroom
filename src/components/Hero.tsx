import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import HeroSlider from "@/components/Slider";

const heroImages = [
  "/img/tattoo12.jpg",
  "/img/tattoo16.jpg",
  "/img/tattoo13.jpg",
  "/img/tattoo14.jpg",
  "/img/tattoo1.jpg",
  "/img/tattoo5.jpg",
  "/img/tattoo5.jpg",
];

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Best Female Tattoo Artist in Kolkata – The Ink Room Tattoo Parlour
              Behala
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              A premier tattoo studio offering custom designs, skilled artists,
              and a welcoming atmosphere for all tattoo enthusiasts. Experience
              exceptional artistry and personalized service from the best Female
              Tattoo Artist In Kolkata!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/8961248160?text=Hey%20I%20need%20a%20tattoo"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <HeroSlider
            images={heroImages}
            interval={5500} // slide every 5.5 seconds
            height="h-[60vh]" // or "h-screen", "h-[700px]", etc.
            width="w-[500px]"
            fadeDuration={1200} // 1.2s smooth fade
            objectFit="cover"
          />
        </div>
      </Container>
    </>
  );
};
