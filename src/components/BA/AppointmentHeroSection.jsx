"use client";

import React from "react";
import { motion } from "framer-motion";

const APPOINTMENT_HERO_DATA = {
  image: {
    src: "https://lh3.googleusercontent.com/aida/AP1WRLudrBMvdWQNuoIO4foLH0G_j9p7N41jn_Qzrcsx_lWHtXuz4LcrfHXcjjQz7wsbO4Zfdf2KivX0mstIiyxAhUcvg4KldBqIJPv6OjTpqFtnXGlH4AFrIVQCxXHTG2Fg4LlZG8F3PQoCZtvpS0QUzb70SeYH-XA5LlNwttCpJgH-zi3O5XJuR9DwtTnt3FC9WR2RmbmdZFIm35OqiSbzElKXdu5ZCGvdr933w_oHBU5ZrlsdnQ14lyG_jg",
    alt: "Luxurious architectural interior",
  },

  content: [
    {
      id: "eyebrow",
      type: "eyebrow",
      text: "Concierge Service",
    },
    {
      id: "heading",
      type: "heading",
      text: "Begin Your Transformation",
      breakAfter: "Your",
    },
    {
      id: "description",
      type: "description",
      text: "Schedule a private consultation with our principal architects to discuss your vision for bespoke luxury.",
    },
  ],
};

export default function AppointmentHeroSection() {
  return (
    <motion.section
      className="relative w-full h-[70vh] min-h-[600px] flex items-end pb-12 md:pb-20 bg-cover bg-center"
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        backgroundImage: `url('${APPOINTMENT_HERO_DATA.image.src}')`,
      }}
    >
      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(24, 18, 13, 0.4) 0%, rgba(24, 18, 13, 1) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 min-[320px]:px-5 sm:px-6 md:px-20 w-full">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {APPOINTMENT_HERO_DATA.content.map((item, index) => {
            switch (item.type) {
              case "eyebrow":
                return (
                  <motion.span
                    key={item.id}
                    className="font-['Montserrat',sans-serif] text-[10px] min-[320px]:text-xs font-semibold text-[#e9c176] block mb-4 min-[320px]:mb-6 tracking-[0.15em] min-[320px]:tracking-[0.2em] uppercase break-words"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35,
                    }}
                  >
                    {item.text}
                  </motion.span>
                );

              case "heading":
                return (
                  <motion.h1
                    key={item.id}
                    className="font-['Playfair_Display',serif] text-[38px] min-[320px]:text-5xl sm:text-5xl md:text-[84px] md:leading-[96px] leading-[1.08] font-normal tracking-[-0.02em] min-[320px]:tracking-tight text-[#eee0d6] mb-5 min-[320px]:mb-8 break-words"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item.text.split(" ").map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {word === item.breakAfter ? <br /> : " "}
                      </React.Fragment>
                    ))}
                  </motion.h1>
                );

              case "description":
                return (
                  <motion.p
                    key={item.id}
                    className="font-['Montserrat',sans-serif] text-sm min-[320px]:text-base sm:text-lg leading-6 min-[320px]:leading-7 sm:leading-8 tracking-[0.02em] min-[320px]:tracking-[0.03em] text-[#c4c7c7] font-light break-words"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item.text}
                  </motion.p>
                );

              default:
                return null;
            }
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}