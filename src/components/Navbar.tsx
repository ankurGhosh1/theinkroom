"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Dancing_Script } from "next/font/google";
import { useState, useEffect } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

export const Navbar = () => {
  const navigation = [
    { label: "Why Ink Room", href: "/#whyinkroom" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Areas We Serve", href: "/tattoo-parlour-in-kolkata" },
    { label: "Tattoo Course", href: "/tattoo-course" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <p className={`text-3xl text-neutral-100 ${dancingScript.className}`}>The Ink Room</p>
        </Link>

        {/* CTA */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.me/8961248160?text=Hey%20I%20need%20a%20tattoo"
              className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md md:ml-5"
              target="_blank"
            >
              Connect on Whatsapp
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-neutral-400 rounded-md lg:hidden hover:text-red-500 focus:text-red-500 focus:bg-neutral-800 focus:outline-none"
              >
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {open ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden bg-neutral-950/95 rounded-lg p-4">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 text-neutral-400 rounded-md hover:text-red-500 focus:text-red-500 focus:bg-neutral-800 focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/8961248160?text=Hey%20I%20need%20a%20tattoo"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-red-600 hover:bg-red-700 transition-colors rounded-md"
                >
                  Connect on Whatsapp
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-neutral-300 no-underline rounded-md hover:text-red-500 focus:text-red-500 focus:outline-none"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
