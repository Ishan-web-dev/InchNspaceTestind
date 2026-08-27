"use client";

import { motion } from "framer-motion";

export default function Process() {
  const processData = {
    eyebrow: "Our Methodology",
    title: "The Blueprint to Reality",

    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "Initial consultation, site analysis, and establishing the core narrative of your space.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "Spatial mapping, layout optimization, and detailed architectural planning.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "Material selection, 3D visualization, and refining the editorial aesthetic.",
      },
      {
        number: "04",
        title: "Execute",
        description:
          "Precision construction, custom fabrication, and rigorous site management.",
      },
      {
        number: "05",
        title: "Deliver",
        description:
          "Final styling, comprehensive handover, and revealing your transformed space.",
      },
    ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 md:py-40 bg-[#211a15] border-y border-[#444748]/10 text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] block mb-4">
            {processData.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight text-[#eee0d6]">
            {processData.title}
          </h2>
        </motion.div>

        {/* 5-Step Process Timeline */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-[#444748]/30 z-0" />

          {processData.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative z-10 flex flex-col group"
            >
              {/* Numbered Circle Indicator */}
              <div className="w-24 h-24 rounded-full bg-[#18120d] border border-[#444748]/50 flex items-center justify-center mb-8 group-hover:border-[#e9c176] transition-colors duration-300 shadow-md">
                <span className="font-serif text-3xl text-[#c4c7c7] group-hover:text-[#e9c176] transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              {/* Step Title & Details */}
              <h4 className="font-serif text-2xl text-[#eee0d6] font-normal mb-3">
                {step.title}
              </h4>

              <p className="font-sans font-normal text-sm md:text-base leading-relaxed text-[#c4c7c7] tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}