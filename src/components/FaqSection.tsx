import { Container } from "@/components/Container";
import { Faq, type FaqItem } from "@/components/Faq";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  id?: string;
}

/**
 * FAQ block used across the site. The matching FAQPage JSON-LD is emitted by
 * each page alongside its other schema, so it lands in one @graph document.
 */
export const FaqSection = ({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  id = "faqs",
}: Readonly<FaqSectionProps>) => {
  return (
    <section className="py-16" id={id}>
      <Container>
        <div className="text-center mb-10">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-serif font-bold text-neutral-100">
            {title}
          </h2>
        </div>
      </Container>
      <Faq items={items} />
    </section>
  );
};
