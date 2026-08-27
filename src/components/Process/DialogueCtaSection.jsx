"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DIALOGUE_CTA_DATA = {
  eyebrow: "Private Inquiries",
  title: "Initiate a Dialogue",
  description:
    "Begin the journey toward defining your space. Schedule a private consultation and site evaluation with our principal architects.",
  button: {
    label: "Book a Site Visit",
    href: "/contact",
  },
};

export default function DialogueCtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-26 overflow-hidden bg-[#18120d]"
    >
      {/* Ambient Radial Glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(233, 193, 118, 0.15) 0%, rgba(24, 18, 13, 0) 70%)",
        }}
      />

      {/* Decorative Architecture Coordinate Line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#e9c176]/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {[
            {
              type: "eyebrow",
              content: DIALOGUE_CTA_DATA.eyebrow,
            },
            {
              type: "heading",
              content: DIALOGUE_CTA_DATA.title,
            },
            {
              type: "description",
              content: DIALOGUE_CTA_DATA.description,
            },
          ].map((item, index) => {
            if (item.type === "eyebrow") {
              return (
                <motion.span
                  key={item.type}
                  className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.25em] text-[#e9c176]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                >
                  {item.content}
                </motion.span>
              );
            }

            if (item.type === "heading") {
              return (
                <motion.h2
                  key={item.type}
                  className="font-['Playfair_Display'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#eee0d6] font-normal tracking-tight leading-[1.1]"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.content}
                </motion.h2>
              );
            }

            return (
              <motion.p
                key={item.type}
                className="font-['Montserrat'] text-base sm:text-lg text-[#c4c7c7] font-light leading-relaxed max-w-xl mx-auto"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item.content}
              </motion.p>
            );
          })}

          {/* CTA Action */}
          <motion.div
            className="pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={DIALOGUE_CTA_DATA.button.href}
              className="inline-flex items-center justify-center bg-[#eee0d6] text-[#18120d] font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.2em] px-9 py-4 border border-transparent hover:border-[#e9c176] hover:bg-transparent hover:text-[#e9c176] transition-all duration-300 shadow-xl"
            >
              {DIALOGUE_CTA_DATA.button.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}