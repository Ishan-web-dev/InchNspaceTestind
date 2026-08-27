"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_DATA = {
  brand: {
    label: "INCH N SPACE",
    href: "/",
  },

  items: [
    {
      id: 1,
      label: "Home",
      href: "/",
      active: false,
    },
    {
      id: 2,
      label: "About",
      href: "about",
      active: false,
    },
    {
      id: 3,
      label: "Services",
      href: "services",
      active: false,
    },
    {
      id: 4,
      label: "Projects",
      href: "projects",
      active: false,
    },
    {
      id: 5,
      label: "Process",
      href: "process",
      active: false,
    },
    {
      id: 6,
      label: "Products",
      href: "products",
      active: false,
    },
    {
      id: 7,
      label: "Contact",
      href: "contact",
      active: false,
    },
  ],

  cta: {
    label: "Book a Site Visit",
    href: "ba",
  },
};

export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-[1440px] bg-[#251e19]/80 backdrop-blur-md border border-[#444748]/20 rounded-full transition-all duration-500 hover:bg-[#251e19]/95">
      <div className="mx-auto px-10 flex justify-between items-center h-16">
        {/* Brand Logo */}
        {NAV_DATA.brand && (
          <a
            href={NAV_DATA.brand.href}
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
            aria-label="Inch N Space"
          >
            <Image
              src="/2.png"
              alt="Inch N Space"
              width={2000}
              height={50}
              priority
              className="w-auto h-12 md:h-14 lg:h-16 object-contain"
            />
          </a>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_DATA.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 ease-in-out ${item.active
                ? "text-[#c8c6c5] border-b border-[#c8c6c5] pb-1"
                : "text-[#c4c7c7] hover:text-[#eee0d6] hover:opacity-70"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Trailing CTA */}
        {NAV_DATA.cta && (
          <a
            href={NAV_DATA.cta.href}
            className="hidden md:inline-block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#18120d] bg-[#eee0d6] px-5 py-2 rounded-full hover:bg-[#e9c176] hover:text-[#412d00] transition-colors duration-300"
          >
            {NAV_DATA.cta.label}
          </a>
        )}

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#eee0d6] focus:outline-none"
        >
          <span
            className={`absolute w-6 h-[1px] bg-current transition-all duration-500 ease-out ${mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
          />

          <span
            className={`absolute w-6 h-[1px] bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          />

          <span
            className={`absolute w-6 h-[1px] bg-current transition-all duration-500 ease-out ${mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[calc(100%+12px)] left-0 right-0 overflow-hidden rounded-[28px] border border-[#444748]/30 bg-[#18120d]/98 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen
          ? "visible opacity-100 translate-y-0 scale-100"
          : "invisible opacity-0 -translate-y-4 scale-[0.98] pointer-events-none"
          }`}
      >
        <div className="px-6 py-7">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-5 mb-3 border-b border-[#444748]/20">
            <span className="font-['Montserrat'] text-[10px] uppercase tracking-[0.25em] text-[#8e9192]">
              Navigation
            </span>

            <span className="font-['Montserrat'] text-[10px] uppercase tracking-[0.2em] text-[#e9c176]">
              Menu
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col">
            {NAV_DATA.items.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 45}ms` : "0ms",
                }}
                className={`group relative flex items-center justify-between py-4 border-b border-[#444748]/15 transition-all duration-500 ${mobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
                  }`}
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <span
                    className={`font-['Montserrat'] text-[10px] tracking-[0.15em] transition-colors duration-300 ${item.active ? "text-[#e9c176]" : "text-[#666967]"
                      }`}
                  >
                    0{item.id}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-['Playfair_Display'] text-2xl transition-colors duration-300 ${item.active
                      ? "text-[#e9c176]"
                      : "text-[#eee0d6] group-hover:text-[#e9c176]"
                      }`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-[#666967] group-hover:text-[#e9c176] group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          {NAV_DATA.cta && (
            <div
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${NAV_DATA.items.length * 45 + 100}ms`
                  : "0ms",
              }}
              className={`pt-6 transition-all duration-500 ${mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
                }`}
            >
              <a
                href={NAV_DATA.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between w-full px-6 py-4 bg-[#eee0d6] text-[#18120d] rounded-full hover:bg-[#e9c176] transition-colors duration-300"
              >
                <span className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.15em]">
                  {NAV_DATA.cta.label}
                </span>

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          )}

          {/* Bottom Detail */}
          <div className="pt-6 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#e9c176]/50" />

              <span className="font-['Montserrat'] text-[9px] uppercase tracking-[0.25em] text-[#666967]">
                Architectural Interiors
              </span>

              <span className="w-6 h-[1px] bg-[#e9c176]/50" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
