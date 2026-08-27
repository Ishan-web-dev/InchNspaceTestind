"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PRE_FOOTER_CTA_DATA = [
  {
    eyebrow: "Initiate Collaboration",

    heading: "Looking to transform your space?",

    description:
      "Whether envisioning a private residence or an expansive commercial interior, let’s bring architectural precision to your vision.",

    actions: [
      {
        id: 1,
        label: "Book a Consultation",
        href: "/contact",
        type: "primary",
      },
      {
        id: 2,
        label: "Start Your Project",
        href: "/projects",
        type: "secondary",
      },
    ],
  },
];

export default function PreFooterCtaSection() {
  return (
    <section className="w-full border-t border-[#444748]/20 py-24 md:py-10 px-6 sm:px-10 lg:px-10 bg-[#130d08] text-center">
      {PRE_FOOTER_CTA_DATA.map((cta, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Eyebrow / Tagline */}
          {cta.eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176]"
            >
              {cta.eyebrow}
            </motion.span>
          )}

          {/* Main Heading */}
          {cta.heading && (
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#eee0d6] font-normal leading-tight"
            >
              {cta.heading}
            </motion.h2>
          )}

          {/* Supporting Paragraph */}
          {cta.description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Montserrat'] text-base md:text-lg text-[#c4c7c7] font-light leading-relaxed max-w-xl mx-auto"
            >
              {cta.description}
            </motion.p>
          )}

          {/* Action Buttons */}
          {cta.actions?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
            >
              {cta.actions.map((action) => {
                if (action.type === "primary") {
                  return (
                    <Link
                      key={action.id}
                      href={action.href}
                      className="relative w-full sm:w-auto inline-flex items-center justify-center border border-[#e9c176] px-9 py-4 font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.15em] text-[#e9c176] overflow-hidden group transition-colors duration-500"
                    >
                      <span className="absolute inset-0 bg-[#e9c176] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" />

                      <span className="relative z-10 group-hover:text-[#130d08] transition-colors duration-500">
                        {action.label}
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={action.id}
                    href={action.href}
                    className="inline-flex items-center space-x-3 font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.15em] text-[#eee0d6] hover:text-[#e9c176] transition-colors duration-300 group py-2"
                  >
                    <span>{action.label}</span>

                    <svg
                      className="w-4 h-4 text-current group-hover:translate-x-2 transition-transform duration-300"
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
                );
              })}
            </motion.div>
          )}
        </motion.div>
      ))}
    </section>
  );
}