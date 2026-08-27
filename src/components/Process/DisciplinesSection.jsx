"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DISCIPLINES_DATA = [
  {
    id: "01",
    title: "Architectural Design",
    description:
      "We conceptualize structures that respect their environment while commanding presence. Our approach is deeply rooted in structural integrity, spatial flow, and the sculptural manipulation of natural light. Every line is intentional; every void is considered.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYEe8sjBZ59tgXii2gXvRHDqKGBUJBdK52SNwsgLiqGCKXNMBoNGx1w4GzGDLFAcZQY73W4yfqWm7os8L-RZ-1hpRhWnazlzQD-I8FTqTDthCMx2PZ5T_phBDZkhK91UTNnh-A4S3hNB0Kw8iL7sN-ZT2khnbeWfeeeT16stsnb3-upj4KmPGQf4qOdJpX5gvu3VwPNXjxSVzKbJ3qfxa6_B1rDwLxUmVffV0r8KpiIATxOGRd1uHt",
      alt: "Minimalist monumental concrete architectural exterior under dramatic dark sky",
    },
  },
  {
    id: "02",
    title: "Interior Curation",
    description:
      "Moving beyond mere decoration, we curate atmospheres. By sourcing rare materials and collaborating with master artisans, we create interior landscapes that reflect the client's identity while maintaining our signature minimalist restraint.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFCMvlC84xAa3O3I2k5dkJMKToTtQGlCtRv2tDWDHspfkLjAEkxRxVovZL40eIPbDQh4S63AYcD79Klkrm15sJDtHOrWD614WOW-LIX6FDp9_DgDY9CYP-I22pnLsUaCMTRCbhqPG0F7oDS55nsJpXRwZ6bwbySsa6_iNZ1e6RUC5W6FWEWwn2QVO2vcVfhkOUGXBj_BBKIPczCI9cPX3yzpn5_oIAHFYo5NUzhj4rbnOuJQ2245Zo",
      alt: "Curated luxury interior living space with dark stone flooring and ambient lighting",
    },
  },
  {
    id: "03",
    title: "Project Execution",
    description:
      "The translation of vision to reality requires absolute control. Our execution phase involves rigorous oversight, ensuring that the theoretical perfection of our design is matched by the physical manifestation on site, down to the millimeter.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbIgnxIb1h8RekNbDyOO7p_fzlgVPySixqNtzEAWIl_YiOUl0bBY00CIIVo1UA-R2IRa6a7xqHC69SWOYg6y3HgxgdTehF4HpYqibscjuL9fE5fD_440EmHOUxQdb4H66a2WZO17Uiq_ttIhXCoLKhN6RPGz8HPDetXymZLxYf7tyrBUR8im7E0S2AVk_rEKJo_MfGknl3Zy2zif3ZPQzK9VTZyHMIbo8yj-QCbFJSBNFCx-zq5cBd",
      alt: "Detailed intersection of textured concrete and brushed architectural brass",
    },
  },
];

const DISCIPLINES_SECTION_DATA = [
  {
    eyebrow: "Core Pillars",
    heading: "Disciplines of Form",
  },
];

export default function DisciplinesSection() {
  return (
    <section
      id="disciplines"
      className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-20 md:py-32"
    >
      {DISCIPLINES_SECTION_DATA.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Sticky Section Title */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="lg:sticky lg:top-28 space-y-4">
              {section.eyebrow && (
                <span className="font-['Montserrat'] text-xs font-semibold uppercase tracking-[0.25em] text-[#e9c176]">
                  {section.eyebrow}
                </span>
              )}

              {section.heading && (
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#eee0d6] font-normal leading-tight">
                  {section.heading}
                </h2>
              )}

              <div className="w-12 h-[1px] bg-[#444748]/60 mt-4" />
            </div>
          </motion.div>

          {/* Right Column: Pillar Articles */}
          <div className="lg:col-span-8 flex flex-col gap-24 sm:gap-32">
            {DISCIPLINES_DATA.map((pillar, pillarIndex) => (
              <motion.article
                key={pillar.id}
                className="group flex flex-col space-y-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.9,
                  delay: pillarIndex * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Image Container with Editorial Zoom */}
                <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden rounded-sm bg-[#251e19] border border-[#444748]/20">
                  <img
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Text Meta Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pt-2">
                  {/* Number & Headline */}
                  <div className="md:col-span-5 space-y-2">
                    <span className="font-['Montserrat'] text-xs uppercase tracking-[0.2em] text-[#e9c176] font-semibold block">
                      {pillar.id}
                    </span>

                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#eee0d6] group-hover:text-[#e9c176] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Narrative Description */}
                  <div className="md:col-span-7">
                    <p className="font-['Montserrat'] text-sm sm:text-base text-[#c4c7c7] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}