"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const whyUsData = {
    eyebrow: "The Inch N Space Difference",
    title: "Excellence in Every Dimension",

    features: [
      {
        id: 1,
        title: "Customized Design",
        description:
          "Tailored spatial solutions that respond uniquely to your lifestyle, brief, and the inherent character of the property.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <circle cx="12" cy="5" r="2" />
            <path d="m9 20 3-6 3 6" />
            <path d="m6 16 6-12 6 12" />
            <path d="M8 12h8" />
          </svg>
        ),
      },
      {
        id: 2,
        title: "One Unified Team",
        description:
          "A seamless collaboration between architects, interior designers, and master craftsmen ensuring flawless execution.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: 3,
        title: "Premium Aesthetics",
        description:
          "Curated materials, uncompromising quality, and an editorial eye for detail that elevates every corner.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
          </svg>
        ),
      },
      {
        id: 4,
        title: "Timely Delivery",
        description:
          "Rigorous project management protocols ensure your space is delivered exactly when promised, without compromise.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        id: 5,
        title: "Transparent Process",
        description:
          "Clear communication, detailed costings, and regular updates provide peace of mind throughout the journey.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.3 1.3" />
            <path d="m18 10 3.3-3.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6" />
            <path d="m2 14 6 6" />
            <path d="M14 6 8.3 11.7a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0L18 10" />
            <path d="m3 7 3-3a1 1 0 0 1 1.4 0l4.3 4.3" />
          </svg>
        ),
      },
      {
        id: 6,
        title: "Sustainable Practices",
        description:
          "Integrating intelligent environmental design and responsibly sourced materials for future-proof spaces.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        ),
      },
    ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <section className="py-24 md:py-40 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 md:mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] block mb-4">
            {whyUsData.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight text-[#eee0d6]">
            {whyUsData.title}
          </h2>
        </motion.div>

        {/* Features 3-Column Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {whyUsData.features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col border-t border-[#444748]/30 pt-8 p-6 rounded-lg transition-all duration-500 hover:-translate-y-2 hover:bg-[#211a15]"
            >
              <div className="text-[#e9c176] mb-6">
                {feature.icon}
              </div>

              <h4 className="font-serif text-2xl text-[#eee0d6] font-normal mb-4">
                {feature.title}
              </h4>

              <p className="font-sans font-normal text-sm md:text-base leading-relaxed text-[#c4c7c7] tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}