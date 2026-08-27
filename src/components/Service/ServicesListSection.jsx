"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES_DATA = {
  intro: {
    eyebrow: "Our Services",
    heading: "Spaces Designed Around You",
    description:
      "From initial planning to final execution, we create refined interiors that balance functionality, architecture, materiality, and timeless aesthetics.",
  },

  featureImage: {
    src: "https://i.pinimg.com/1200x/a1/46/de/a146de9fe5c2d72e2ae0dab5fc6538a5.jpg",
    alt: "Luxurious minimalist modern interior",
  },

  action: {
    label: "Explore All Capabilities",
    href: "#",
  },

  services: [
    {
      id: "01",
      title: "Interior Planning",
      description:
        "Space planning, zoning, circulation planning, furniture layouts, and functional optimization.",
      href: "#",
    },
    {
      id: "02",
      title: "Interior Design",
      description:
        "Concept development, bespoke color palettes, tailored materials, curated furniture, architectural lighting, textures, and styling.",
      href: "#",
    },
    {
      id: "03",
      title: "Residential Interiors",
      description:
        "Bespoke interiors designed for luxury residences, penthouses, modern villas, private apartments, and retreats.",
      href: "#",
    },
    {
      id: "04",
      title: "Commercial Interiors",
      description:
        "Sophisticated environments designed for dynamic corporate offices, luxury retail spaces, hospitality, and dining venues.",
      href: "#",
    },
    {
      id: "05",
      title: "Architectural Design",
      description:
        "Integrated architectural planning focused on clean proportions, structural flow, volume, and natural light integration.",
      href: "#",
    },
    {
      id: "06",
      title: "Turnkey Execution",
      description:
        "Comprehensive end-to-end execution including project management, vendor coordination, site supervision, and final handover styling.",
      href: "#",
    },
  ],
};

export default function ServicesListSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Editorial Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:col-span-5 flex flex-col space-y-8 lg:sticky lg:top-28"
        >
          <div className="space-y-4">
            {/* Eyebrow */}
            {SERVICES_DATA.intro?.eyebrow && (
              <span className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176]">
                {SERVICES_DATA.intro.eyebrow}
              </span>
            )}

            {/* Heading */}
            {SERVICES_DATA.intro?.heading && (
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#eee0d6] leading-tight font-normal">
                {SERVICES_DATA.intro.heading}
              </h2>
            )}

            {/* Description */}
            {SERVICES_DATA.intro?.description && (
              <p className="font-['Montserrat'] text-base md:text-lg text-[#c4c7c7] font-light leading-relaxed max-w-md">
                {SERVICES_DATA.intro.description}
              </p>
            )}
          </div>

          {/* Feature Visual Card */}
          {SERVICES_DATA.featureImage?.src && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-[#251e19] group border border-[#444748]/20 shadow-2xl"
            >
              <img
                src={SERVICES_DATA.featureImage.src}
                alt={SERVICES_DATA.featureImage.alt || ""}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          )}

          {/* Action Link */}
          {SERVICES_DATA.action?.label && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={SERVICES_DATA.action.href}
                className="inline-flex items-center space-x-3 font-['Montserrat'] text-xs uppercase tracking-widest text-[#eee0d6] border-b border-[#8e9192]/40 pb-1.5 hover:text-[#e9c176] hover:border-[#e9c176] transition-all duration-300 group"
              >
                <span>{SERVICES_DATA.action.label}</span>

                <svg
                  className="w-4 h-4 text-current group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Services List */}
        <div
          className="lg:col-span-7 mt-4 lg:mt-0"
          id="services-list"
        >
          <div className="flex flex-col border-t border-[#444748]/30 divide-y divide-[#444748]/30">
            {SERVICES_DATA.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={service.href}
                  className="group relative py-8 sm:py-10 px-4 sm:px-6 hover:bg-[#251e19]/40 border-l-2 border-transparent hover:border-l-[#e9c176] transition-all duration-500 cursor-pointer block"
                >
                  <div className="flex items-start justify-between gap-4 sm:gap-8">
                    <div className="flex items-start space-x-4 sm:space-x-8">
                      {/* Service Number */}
                      {service.id && (
                        <span className="font-['Montserrat'] text-sm sm:text-base text-[#8e9192] group-hover:text-[#e9c176] transition-colors duration-300 pt-1">
                          {service.id}
                        </span>
                      )}

                      <div className="space-y-2">
                        {/* Service Title */}
                        {service.title && (
                          <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl text-[#eee0d6] group-hover:text-[#e9c176] transition-colors duration-300">
                            {service.title}
                          </h3>
                        )}

                        {/* Service Description */}
                        {service.description && (
                          <p className="font-['Montserrat'] text-sm sm:text-base text-[#c4c7c7] font-light leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 pt-1">
                      <svg
                        className="w-6 h-6 text-[#e9c176]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}