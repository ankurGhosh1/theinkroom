import { CourseHero } from "@/components/CourseHero";
import { CourseHighlights } from "@/components/CourseHighlights";
import { CourseCurriculum } from "@/components/CourseCurriculum";
import { CourseInstructor } from "@/components/CourseInstructor";
import { FaqSection } from "@/components/FaqSection";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import type { FaqItem } from "@/components/Faq";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, faqSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Tattoo Course in Kolkata | Learn Tattoo Making",
  description:
    "Learn tattoo making in Kolkata under Soniya, an experienced female tattoo artist. Hands-on training in machine handling, hygiene protocols, line work, shading and portfolio building.",
  image: "/img/tattoo3.jpg",
  url: "/tattoo-course",
});

const courseFaqData: FaqItem[] = [
  {
    question: "Do I need any prior experience to join?",
    answer:
      "No. The course is designed for beginners and starts from the fundamentals (machine parts, hand control, and hygiene basics) before moving to practice skins and then real skin.",
  },
  {
    question: "What will I need to bring for the course?",
    answer:
      "Practice skins and studio equipment are provided for training sessions. Anything specific you should bring is shared with you when you enroll.",
  },
  {
    question: "Is there a certificate after completion?",
    answer:
      "Yes, students who complete the course receive a certificate of completion from The Ink Room.",
  },
  {
    question: "Can this course help me become a professional tattoo artist?",
    answer:
      "That is what it is built for. Alongside hands-on technique, the course covers hygiene and safety standards, portfolio building, and practical guidance on pricing and taking on your first clients: the parts that usually get skipped.",
  },
  {
    question: "How big are the batches?",
    answer:
      "Small, deliberately. Tattooing is taught by watching hand position and correcting it in real time, which does not work in a large classroom. Message on WhatsApp for current batch size and seat availability.",
  },
  {
    question: "How do I check batch schedule and fees?",
    answer:
      "Message us on WhatsApp for the current batch schedule, seat availability, and course fees.",
  },
];

/**
 * ⚠️ TODO: add `hasCourseInstance` (with courseMode, courseWorkload, start
 * date) and `offers` (with price) once the batch format and fees are fixed.
 * Google needs both for Course rich results — they are left out rather than
 * guessed at, since inventing them risks a structured-data penalty.
 */
const courseSchema = {
  "@type": "Course",
  name: "Tattoo Making Course",
  description:
    "Hands-on tattoo making course in Behala, Kolkata covering machine handling, hygiene protocols, line work, shading, and portfolio building.",
  url: `${siteConfig.url}/tattoo-course`,
  inLanguage: "en-IN",
  provider: { "@id": `${siteConfig.url}/#business` },
  instructor: { "@id": `${siteConfig.url}/#soniya` },
  educationalLevel: "Beginner",
  teaches: [
    "Tattoo machine handling",
    "Hygiene and sterilisation protocols",
    "Line work",
    "Shading technique",
    "Stencil application",
    "Portfolio building",
  ],
};

export default function TattooCourse() {
  const schema = jsonLdGraph(
    courseSchema,
    faqSchema(courseFaqData),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Tattoo Course", path: "/tattoo-course" },
    ])
  );

  return (
    <>
      <JsonLd data={schema} />

      <CourseHero />
      <CourseHighlights />
      <CourseCurriculum />
      <CourseInstructor />

      <FaqSection items={courseFaqData} id="course-faqs" />

      <Cta
        title="Ready to start learning tattoo making?"
        description="Message us on WhatsApp for the current batch schedule, seats, and fees."
        buttonText="Enroll on WhatsApp"
        whatsappMessage="Hey, I'm interested in the tattoo course"
      />
    </>
  );
}
