"use client";

import { motion } from "framer-motion";

const PRODUCT_HERO_DATA = [
  {
    title: "Curated Essentials",
    description:
      "Custom furniture and bespoke elements designed to elevate every corner of your space.",
  },
];

export default function ProductHero() {
  return (
    <header className="max-w-[1440px] mx-auto px-6 md:px-20 pt-32 pb-24 md:pt-48 md:pb-32 bg-[#130d08]">
      {PRODUCT_HERO_DATA.map((item, index) => (
        <motion.div
          key={index}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[84px] lg:leading-[96px] tracking-[-0.02em] font-normal text-[#eee0d6] mb-8">
            {item.title}
          </h1>

          <p className="font-sans text-base md:text-lg font-light leading-8 tracking-[0.03em] text-[#c4c7c7] max-w-2xl">
            {item.description}
          </p>
        </motion.div>
      ))}
    </header>
  );
}