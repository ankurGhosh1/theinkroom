import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

export function Footer() {
  const navigation = [
    { label: "Why Ink Room", href: "/#whyinkroom" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Areas We Serve", href: "/tattoo-parlour-in-kolkata" },
    { label: "Tattoo Course", href: "/tattoo-course" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-neutral-800 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <p className={`text-3xl text-neutral-100 ${dancingScript.className}`}>
                The Ink Room
              </p>
            </Link>
            <div className="max-w-md mt-4 text-neutral-400">
              The Ink Room is your go-to destination for exceptional tattoo
              artistry in Kolkata. Led by the talented Soniya, we specialize in
              creating unique and personalized tattoos that reflect your style
              and personality.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-neutral-400 rounded-md hover:text-red-500 focus:text-red-500 focus:bg-neutral-800 focus:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-neutral-500">
          Copyright © {new Date().getFullYear()} The Ink Room. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
