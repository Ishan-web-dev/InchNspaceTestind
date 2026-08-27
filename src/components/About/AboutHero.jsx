"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const aboutHeroData = {
    bgImageUrl:
      "https://i.pinimg.com/736x/0c/5a/f8/0c5af80ea4a0dd7ade43e09f51b88751.jpg",

    ariaLabel:
      "Ultra-luxury architectural study with dark oak and ambient lighting",

    title: {
      primary: "Designing Spaces.",
      secondary: "Shaping Experiences.",
    },

    description:
      "We believe that exceptional spaces should be beautiful, functional, and deeply personal. Our philosophy is rooted in architectural precision and editorial luxury, creating environments that recede to let life command attention.",
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center pt-24 pb-16 bg-[#18120d] text-[#eee0d6] overflow-hidden">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed opacity-40"
          style={{ backgroundImage: `url('${aboutHeroData.bgImageUrl}')` }}
          role="img"
          aria-label={aboutHeroData.ariaLabel}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#18120d] via-[#18120d]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-5 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 lg:col-span-7 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-normal leading-[1.1] text-[#eee0d6]"
          >
            {aboutHeroData.title.primary}
            <br />
            <span className="text-[#c8c6c5] italic font-normal">
              {aboutHeroData.title.secondary}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-sans font-light text-base md:text-lg lg:text-xl text-[#c4c7c7] max-w-xl leading-relaxed tracking-wide"
          >
            {aboutHeroData.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}