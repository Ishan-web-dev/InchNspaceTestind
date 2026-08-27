"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const heroData = {
    bgImageUrl:
      "https://i.pinimg.com/1200x/e4/f2/2f/e4f22f5a4cb161874048bee0fe6a5825.jpg",

    ariaLabel: "Luxurious modern interior with ambient lighting",

    title: "Spaces That Define the Way You Live.",

    description:
      "Inch N Space creates refined residential and commercial spaces through customized design, thoughtful planning, and seamless execution — all under one roof.",

    buttons: [
      {
        label: "Book a Site Visit",
        href: "/ba",
        type: "primary",
        icon: true,
      },
      {
        label: "View Our Projects",
        href: "/projects",
        type: "secondary",
        icon: false,
      },
      {
        label: "Request a Quote",
        href: "/ba",
        type: "tertiary",
        icon: false,
      },
    ],

    scrollText: "Scroll",
  };

  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedTitle(heroData.title.slice(0, index + 1));
      index++;

      if (index === heroData.title.length) {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#18120d] text-[#eee0d6]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroData.bgImageUrl}')` }}
          role="img"
          aria-label={heroData.ariaLabel}
        />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-[#18120d]/60" />

        {/* Linear Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18120d] via-transparent to-[#18120d]/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full text-center md:text-left flex flex-col items-center md:items-start justify-center h-full">
        <div className="max-w-3xl space-y-8">
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-7xl tracking-tight leading-[1.1] text-[#eee0e6]">
            {typedTitle}
            <span className="inline-block w-[2px] h-[0.9em] bg-[#e9c176] ml-1 animate-pulse align-middle" />
          </h1>

          {/* Subheading */}
          <p className="font-sans font-light text-base md:text-lg lg:text-xl text-[#c4c7c7] max-w-2xl leading-relaxed tracking-wide">
            {heroData.description}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
            {heroData.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.type === "primary"
                    ? "w-full sm:w-auto inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.18em] font-semibold bg-[#eee0d6] text-[#130d08] px-8 py-4 hover:bg-[#e9c176] hover:text-[#412d00] transition-all duration-300 group border border-transparent shadow-lg"
                    : button.type === "secondary"
                      ? "w-full sm:w-auto inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.18em] font-semibold border border-[#444748] text-[#eee0d6] px-8 py-4 hover:border-[#e9c176] hover:text-[#e9c176] transition-all duration-300"
                      : "w-full sm:w-auto inline-flex items-center justify-center relative font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#c4c7c7] hover:text-[#e9c176] transition-colors duration-300 py-3 group"
                }
              >
                {button.label}

                {button.icon && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 0 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                {button.type === "tertiary" && (
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#e9c176] group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#c4c7c7]/80">
          {heroData.scrollText}
        </span>

        <div className="w-px h-10 bg-gradient-to-b from-[#c4c7c7]/80 to-transparent" />
      </div>
    </section>
  );
}