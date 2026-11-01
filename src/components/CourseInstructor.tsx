import Image from "next/image";
import { Container } from "@/components/Container";

export const CourseInstructor = () => {
  return (
    <section className="py-24" id="instructor">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/tattoo5.jpg"
              alt="Soniya, female tattoo artist and instructor at The Ink Room, Kolkata"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
              Your Instructor
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100 mb-6">
              Learn Directly From Soniya
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Soniya is a female tattoo artist based in Behala, Kolkata, with
              7+ years of experience and 80+ tattoos across fine line,
              realism, neo-traditional, geometric, floral, and script styles.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Through this course, she teaches the same techniques and
              hygiene standards used at The Ink Room, so you learn to tattoo
              safely and confidently from day one.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-3xl font-serif font-bold text-red-500">80+</p>
                <p className="mt-2 uppercase tracking-widest text-xs text-neutral-400">Tattoos Done</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-red-500">7+</p>
                <p className="mt-2 uppercase tracking-widest text-xs text-neutral-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-red-500">5★</p>
                <p className="mt-2 uppercase tracking-widest text-xs text-neutral-400">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
