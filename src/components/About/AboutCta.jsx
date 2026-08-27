"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCta() {
  const ctaData = {
    bgImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3KGTfW2wAFhE8YtZ9xpcjKCkD6haPE9WMBz1VXvQn80NdoHCRxHMiySDw13B_N2lYkHmCQeoKyzRxRlVFx9vuMksOH5p6JRSC601SidvxTFsyt4IriLMcjuna02emLRSaB4P39VuBt_ioZrM6cmTj-AlbOR5sIfRhbp-gT3vEd-Qq4H6VZsh3kQ0vRgUaI1tFZPDctsVrdio5-ZzRUgb0YVaiOGwoHHB19ezerTe4n2-lLsDCGNHX",

    ariaLabel: "Minimalist architectural concrete and oak detail",

    title: "Let's Create a Space Worth Coming Home To",

    button: {
      label: "Book a Site Visit",
      href: "/ba",
    },
  };

  return (
    <section className="py-22 md:py-20 relative overflow-hidden flex items-center justify-center text-center bg-[#18120d] text-[#eee0d6]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${ctaData.bgImageUrl}')` }}
          role="img"
          aria-label={ctaData.ariaLabel}
        />

        <div className="absolute inset-0 bg-[#18120d]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#eee0e6] mb-10"
        >
          {ctaData.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href={ctaData.button.href}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#eee0d6] text-[#18120d] font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#e9c176] hover:text-[#412d00] transition-colors duration-300 shadow-xl"
          >
            {ctaData.button.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}