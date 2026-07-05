import React from "react";
import { Container } from "@/components/Container";

interface CtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  whatsappMessage?: string;
}

export const Cta = ({
  title = "Ready to get a tattoo?",
  description = "Contact us today to schedule your appointment and start your tattoo journey!",
  buttonText = "Connect on Whatsapp",
  whatsappMessage = "Hey I need a tattoo",
}: Readonly<CtaProps>) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-serif font-bold lg:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-white/90 lg:text-xl">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href={`https://wa.me/8961248160?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-red-600 bg-white hover:bg-neutral-100 transition-colors rounded-md px-7 lg:px-10 lg:py-5"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </Container>
  );
};
