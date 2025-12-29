// components/Hero/HeroSlider.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroSliderProps {
  images: string[]; // Array of image paths (e.g. '/images/hero1.jpg')
  interval?: number; // ms between slides (default: 5000)
  height?: string; // e.g. 'h-screen', 'h-[80vh]', 'h-[600px]'
  width?: string; // usually 'w-full'
  objectFit?: "cover" | "contain"; // default: cover
  fadeDuration?: number; // fade animation duration in ms (default: 1000)
}

export default function HeroSlider({
  images,
  interval = 5000,
  height = "h-screen",
  width = "w-[500px]",
  objectFit = "cover",
  fadeDuration = 1000,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto slide with fade effect
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(false); // start fade out

      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(true); // fade in new image
      }, fadeDuration / 2);

      return () => clearTimeout(timeout);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, fadeDuration]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden bg-black ${width} ${height}`}>
      {/* All slides stacked absolutely */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`
            absolute inset-0 transition-opacity duration-[${fadeDuration}ms] ease-in-out
            ${
              index === currentIndex && isAnimating
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <Image
            src={src}
            alt={`Hero slide ${index + 1} - The Ink Room Tattoo Studio Kolkata`}
            fill
            priority={index === 0} // eager load first image
            quality={85}
            sizes="(max-width: 768px) 100vw, 100vw"
            className={`object-${objectFit}`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//HLfwAJAgM1v6WzQAAAABJRU5ErkJggg=="
          />
        </div>
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />

      {/* Optional: Container for your hero text/content */}
      {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">The Ink Room</h1>
        <p className="text-xl md:text-3xl max-w-2xl">
          Best Female Tattoo Artist in Kolkata • Behala
        </p>
      </div> */}
    </div>
  );
}
