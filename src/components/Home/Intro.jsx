"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const introData = {
    heading: "Designed With Intention. Created For You.",

    paragraphs: [
      "Every space has a story to tell. At Inch N Space, we transform empty and outdated properties into sophisticated environments designed around the people who use them. Our approach is deeply rooted in architectural precision and editorial luxury, ensuring every detail serves both function and aesthetic harmony.",

      "We believe in the power of spatial intelligence, material honesty, and minimalist refinement to elevate your daily experience.",
    ],
  };

  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedHeading(introData.heading.slice(0, index + 1));
      index++;

      if (index === introData.heading.length) {
        clearInterval(typingInterval);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-24 md:py-20 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Section Heading & Accent Line */}
          <div className="col-span-1 md:col-span-5 mb-8 md:mb-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight text-[#eee0d6] font-normal">
              {typedHeading}
              <span className="inline-block w-[2px] h-[0.9em] bg-[#e9c176] ml-1 animate-pulse align-middle" />
            </h2>

            <div className="w-24 h-[1px] bg-[#e9c176] mt-8" />
          </div>

          {/* Section Body Copy */}
          <div className="col-span-1 md:col-span-6 md:col-start-7 space-y-6">
            {introData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "font-sans font-light text-base sm:text-lg leading-relaxed text-[#c4c7c7] tracking-wide"
                    : "font-sans font-normal text-sm sm:text-base leading-relaxed text-[#c4c7c7]/80 tracking-wide"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}