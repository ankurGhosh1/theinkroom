import { CourseHero } from "@/components/CourseHero";
import { CourseHighlights } from "@/components/CourseHighlights";
import { CourseCurriculum } from "@/components/CourseCurriculum";
import { CourseInstructor } from "@/components/CourseInstructor";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/components/Metadata";

export const metadata = createPageMetadata({
  title: "Tattoo Course in Kolkata | Learn Tattoo Making at The Ink Room",
  description:
    "Learn tattoo making in Kolkata under Soniya, an experienced female tattoo artist. Hands-on training in machine handling, hygiene protocols, line work, shading and more.",
  image: "/img/tattoo3.jpg",
  url: "/tattoo-course",
  keywords: [
    "tattoo course in kolkata",
    "learn tattoo making kolkata",
    "tattoo training institute kolkata",
    "tattoo classes for beginners kolkata",
    "become a tattoo artist kolkata",
    "tattoo workshop kolkata",
  ],
});

const courseFaqData = [
  {
    question: "Do I need any prior experience to join?",
    answer:
      "No. The course is designed for beginners and starts from the fundamentals — machine parts, hand control, and hygiene basics — before moving to skin practice.",
  },
  {
    question: "What will I need to bring for the course?",
    answer:
      "We provide practice skins and studio equipment for training sessions. Any specific items you should bring will be shared with you when you enroll.",
  },
  {
    question: "Is there a certificate after completion?",
    answer:
      "Yes, students who complete the course receive a certificate of completion from The Ink Room.",
  },
  {
    question: "Can this course help me become a professional tattoo artist?",
    answer:
      "Yes. Along with hands-on technique, we cover hygiene standards, portfolio building, and guidance on taking on your first clients.",
  },
  {
    question: "How do I check batch schedule and fees?",
    answer:
      "Message us on WhatsApp for the current batch schedule, seat availability, and course fees.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Tattoo Making Course",
  description:
    "Hands-on tattoo making course in Behala, Kolkata covering machine handling, hygiene protocols, line work, shading, and portfolio building.",
  provider: {
    "@type": "LocalBusiness",
    name: "The Ink Room",
    sameAs: "https://www.theinkroom.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Behala, Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },
};

export default function TattooCourse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CourseHero />
      <CourseHighlights />
      <CourseCurriculum />
      <CourseInstructor />

      <section className="py-16" id="course-faqs">
        <Container>
          <div className="text-center mb-10">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">FAQ</p>
            <h2 className="text-4xl font-serif font-bold text-neutral-100">
              Frequently Asked Questions
            </h2>
          </div>
        </Container>
        <Faq items={courseFaqData} />
      </section>

      <Cta
        title="Ready to start learning tattoo making?"
        description="Message us on WhatsApp for the current batch schedule, seats, and fees."
        buttonText="Enroll on WhatsApp"
        whatsappMessage="Hey, I'm interested in the tattoo course"
      />
    </>
  );
}
