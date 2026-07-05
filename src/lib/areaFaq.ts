import type { ServiceArea } from "@/data/serviceAreas";
import type { FaqItem } from "@/components/Faq";

export function getAreaFaq(area: ServiceArea): FaqItem[] {
  return [
    {
      question: `Do you offer tattoo services in ${area.name}?`,
      answer: `Yes, we offer at-home tattoo appointments across ${area.name} and nearby areas including ${area.landmarks.join(", ")}. You can also visit our studio in Behala.`,
    },
    {
      question: `Is the at-home tattoo service in ${area.name} hygienic and safe?`,
      answer:
        "Yes. We carry single-use needles, fresh ink caps, and hospital-grade sterilized equipment to every at-home appointment, following the same safety protocols used at our studio.",
    },
    {
      question: `How do I book a tattoo appointment in ${area.name}?`,
      answer: `Message us on WhatsApp with your design idea and preferred date, and we'll confirm an at-home appointment in ${area.name} or a studio visit in Behala.`,
    },
    {
      question: "Can I get a fully custom design done?",
      answer:
        "Yes, every tattoo is custom designed in consultation with you — we don't do cookie-cutter or pre-made designs.",
    },
  ];
}
