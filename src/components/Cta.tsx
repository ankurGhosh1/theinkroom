import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";
import { BookingForm } from "@/components/BookingForm";
import { siteConfig } from "@/data/site";

interface CtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  whatsappMessage?: string;
  /** Adds a Call button beside WhatsApp and the enquiry form below. */
  showContactOptions?: boolean;
}

export const Cta = ({
  title = "Ready to get a tattoo?",
  description = "Contact us today to schedule your appointment and start your tattoo journey!",
  buttonText = "Connect on Whatsapp",
  whatsappMessage = "Hey I need a tattoo",
  showContactOptions = false,
}: Readonly<CtaProps>) => {
  const whatsappHref = `https://wa.me/8961248160?text=${encodeURIComponent(whatsappMessage)}`;

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
        <div className="flex flex-wrap justify-center flex-shrink-0 w-full gap-3 text-center lg:w-auto lg:flex-nowrap">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener"
            className="inline-block py-3 text-lg font-medium text-center text-red-600 bg-white hover:bg-neutral-100 transition-colors rounded-md px-7 lg:px-10 lg:py-5"
          >
            {buttonText}
          </a>
          {showContactOptions && (
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 py-3 text-lg font-medium text-white border border-white/70 hover:bg-white/10 transition-colors rounded-md px-7 lg:py-5"
            >
              <PhoneIcon className="w-5 h-5" aria-hidden="true" />
              Call
            </a>
          )}
        </div>
      </div>

      {showContactOptions && (
        <div className="w-full max-w-4xl mx-auto mt-8">
          <BookingForm whatsappHref={whatsappHref} />
        </div>
      )}
    </Container>
  );
};
