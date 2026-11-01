import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";
import { Dancing_Script } from "next/font/google";
import { PhoneIcon } from "@heroicons/react/24/solid";
import {
  siteConfig,
  formattedAddress,
  whatsappLink,
  type OpeningHours,
} from "@/data/site";
import { serviceAreas } from "@/data/serviceAreas";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function to12Hour(time: string) {
  const [hourText, minute] = time.split(":");
  const hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}${minute === "00" ? "" : `:${minute}`} ${suffix}`;
}

/** "Mon – Sat" when the days run consecutively, otherwise a comma list. */
function formatDays(days: readonly string[]) {
  const indices = days.map((day) => WEEK.indexOf(day)).sort((a, b) => a - b);
  const consecutive = indices.every(
    (value, i) => i === 0 || value === indices[i - 1] + 1
  );

  if (consecutive && indices.length > 2) {
    return `${WEEK[indices[0]].slice(0, 3)} – ${WEEK[
      indices[indices.length - 1]
    ].slice(0, 3)}`;
  }
  return indices.map((index) => WEEK[index].slice(0, 3)).join(", ");
}

function formatHours(slot: OpeningHours) {
  return `${formatDays(slot.days)}: ${to12Hour(slot.opens)} – ${to12Hour(
    slot.closes
  )}`;
}

export function Footer() {
  const navigation = [
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Why Ink Room", href: "/#whyinkroom" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
  ];

  const services = [
    { label: "Tattoo Parlour in Kolkata", href: "/tattoo-parlour-in-kolkata" },
    { label: "Female Tattoo Artist", href: "/female-tattoo-artist-kolkata" },
    { label: "Scar Cover-Ups", href: "/scar-cover-up-tattoos-kolkata" },
    { label: "Tattoo Course", href: "/tattoo-course" },
    { label: "Blog", href: "/blog" },
    { label: "Aftercare Guide", href: "/blog/tattoo-aftercare-guide-kolkata" },
    { label: "Choosing an Artist", href: "/blog/how-to-choose-a-tattoo-artist-in-kolkata" },
  ];

  const address = formattedAddress();

  return (
    <footer className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-12 mx-auto mt-5 border-t border-neutral-800 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand + NAP — the visible counterpart to the LocalBusiness schema */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <p
                className={`text-3xl text-neutral-100 ${dancingScript.className}`}
              >
                The Ink Room
              </p>
            </Link>
            <p className="max-w-md mt-4 text-neutral-400 leading-relaxed">
              Custom tattoo studio in Behala, Kolkata, led by{" "}
              {siteConfig.founder.name}. Studio sessions and at-home
              appointments across the city.
            </p>

            {siteConfig.social.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6">
                {siteConfig.social.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener"
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact block — real, crawlable NAP */}
          <div>
            <p className="text-neutral-100 font-bold mb-4">Visit or Contact</p>
            <address className="not-italic text-neutral-400 space-y-3">
              <p className="leading-relaxed">{address}</p>

              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 hover:text-red-500 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </p>

              {siteConfig.email && (
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-red-500 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              )}

              <p>
                <a
                  href={whatsappLink("Hey, I need a tattoo")}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-red-500 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </p>
            </address>

            {siteConfig.openingHours.length > 0 && (
              <div className="mt-6">
                <p className="text-neutral-100 font-bold mb-3">Opening Hours</p>
                <ul className="text-neutral-400 space-y-1">
                  {siteConfig.openingHours.map((slot) => (
                    <li key={slot.days.join()}>{formatHours(slot)}</li>
                  ))}
                </ul>
              </div>
            )}

            {siteConfig.googleBusinessProfile && (
              <a
                href={siteConfig.googleBusinessProfile}
                target="_blank"
                rel="noopener"
                className="inline-block mt-6 text-neutral-400 hover:text-red-500 transition-colors"
              >
                Find us on Google Maps
              </a>
            )}
          </div>

          <div>
            <p className="text-neutral-100 font-bold mb-4">Explore</p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-neutral-100 font-bold mb-4">Services &amp; Blog</p>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-neutral-100 font-bold mb-4">Areas We Serve</p>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/tattoo-parlour-in/${area.slug}`}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-neutral-500">
          Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
