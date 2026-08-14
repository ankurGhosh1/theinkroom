import type { ServiceArea } from "@/data/serviceAreas";
import type { FaqItem } from "@/components/Faq";

export function getAreaFaq(area: ServiceArea): FaqItem[] {
  return [
    {
      question: `Do you offer tattoo services in ${area.name}?`,
      answer: `Yes. We run at-home tattoo appointments across ${area.name}, including ${area.landmarks
        .slice(0, 4)
        .join(", ")}. You can also book a session at our studio in Behala if you would rather be tattooed in a permanent setup.`,
    },
    // Area-specific — this is the question that only makes sense here.
    area.localFaq,
    {
      question: `How far is ${area.name} from your Behala studio?`,
      answer:
        area.travel.distanceKm === 0
          ? area.travel.note
          : `${area.name} is roughly ${area.travel.distanceKm} km from the studio. ${area.travel.note}`,
    },
    {
      question: `Is the at-home tattoo service in ${area.name} hygienic?`,
      answer:
        "Yes. Every at-home session uses single-use needles and fresh ink caps opened in front of you, disposable barrier film on all surfaces, and autoclave-sterilised reusable tools. Nothing that touches your skin is reused, and sharps are carried out and disposed of properly rather than left behind.",
    },
    {
      question: `What do I need to arrange for a session in ${area.name}?`,
      answer: area.sessionNote,
    },
    {
      question: `How do I book a tattoo appointment in ${area.name}?`,
      answer: `Message us on WhatsApp with your design idea, a rough size, where on the body you want it, and your preferred date. You will get a quote and a slot before anything is confirmed — there is no deposit taken over chat before the design is agreed.`,
    },
    {
      question: "Can I get a fully custom design done?",
      answer:
        "Yes, and that is the default. Every piece is drawn for the individual client after a conversation about the idea, placement and size. We do not work from a pre-made flash catalogue, though you are welcome to bring references to build from.",
    },
  ];
}
