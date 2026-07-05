"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export type FaqItem = {
  question: string;
  answer: string;
};

interface FaqProps {
  items?: FaqItem[];
}

export const Faq = ({ items = faqdata }: Readonly<FaqProps>) => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {items.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-neutral-100 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-red-600 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-red-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-neutral-400">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is tattoo painful?",
    answer:
      "Pain is subjective and varies from person to person. However, many people find that the discomfort is manageable and worth the end result.",
  },
  {
    question: "Can I get a tattoo at home?",
    answer:
      "Yes, we offer at-home tattoo services for your convenience. Please contact us to schedule an appointment.",
  },
  {
    question: "How long does a tattoo take?",
    answer:
      "The duration of a tattoo session depends on the size and complexity of the design. Small tattoos may take as little as 30 minutes, while larger pieces can take several hours or multiple sessions.",
  },
  {
    question: "Do you offer custom designs?",
    answer:
      "Yes, we specialize in creating custom tattoo designs tailored to your vision and preferences. I will work closely with you to bring your ideas to life.",
  },
];
