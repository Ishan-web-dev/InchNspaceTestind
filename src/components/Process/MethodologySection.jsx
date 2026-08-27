"use client";

import { motion } from "framer-motion";

const METHODOLOGY_DATA = [
  {
    header: {
      eyebrow: "Our Process",
      title: "The Methodology",
      description:
        "A rigorous, linear progression from abstract thought to tangible form.",
    },

    steps: [
      {
        number: "01",
        title: "Consult",
        description:
          "Establishing the narrative. We deeply analyze the client's needs, site constraints, and spatial ambitions.",
      },
      {
        number: "02",
        title: "Concept",
        description:
          "Ideation and formal exploration. Developing the spatial language and material palette through massing studies.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "Technical precision. Translating concepts into highly detailed construction documents and 3D visualizations.",
      },
      {
        number: "04",
        title: "Build",
        description:
          "Uncompromising execution. On-site supervision to ensure every detail aligns with our exacting standards.",
      },
    ],
  },
];

export default function MethodologySection() {
  return (
    <section className="w-full bg-[#130d08] py-20 md:py-32 border-y border-[#444748]/20">
      {METHODOLOGY_DATA.map((section, index) => (
        <div
          key={index}
          className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20"
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-24 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {section.header.eyebrow && (
              <span className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.25em] text-[#e9c176]">
                {section.header.eyebrow}
              </span>
            )}

            {section.header.title && (
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#eee0d6] font-normal leading-tight">
                {section.header.title}
              </h2>
            )}

            {section.header.description && (
              <p className="font-['Montserrat'] text-base md:text-lg text-[#c4c7c7] font-light leading-relaxed max-w-xl mx-auto">
                {section.header.description}
              </p>
            )}
          </motion.div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <motion.div
              className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-[1px] bg-[#444748]/30 z-0 pointer-events-none"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {section.steps.map((step, stepIndex) => (
              <motion.div
                key={step.number}
                className="relative z-10 group flex flex-col items-center text-center p-4 sm:p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + stepIndex * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Step Number Badge */}
                <motion.div
                  className="w-14 h-14 rounded-full bg-[#18120d] border border-[#e9c176]/30 text-[#e9c176] flex items-center justify-center font-['Montserrat'] text-xs font-semibold tracking-widest mb-6 group-hover:bg-[#e9c176] group-hover:text-[#18120d] group-hover:border-[#e9c176] transition-all duration-300 shadow-lg"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + stepIndex * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Title */}
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#eee0d6] mb-3 group-hover:text-[#e9c176] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-['Montserrat'] text-sm text-[#c4c7c7] font-light leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}