"use client";

import { motion } from "framer-motion";

const CONSULTATION_CTA_DATA = {
  heading: "Let's Create a Space Worth Coming Home To.",
  description:
    "Begin the conversation with our architectural team to explore the potential of your next spatial endeavor.",
  buttonText: "Book a Consultation",
};

export default function ConsultationCTA() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-32 md:py-20 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {CONSULTATION_CTA_DATA.heading && (
          <h2 className="font-serif text-3xl md:text-6xl lg:text-[74px] lg:leading-[96px] text-[#eee0d6] mb-8 leading-tight tracking-[-0.02em]">
            {CONSULTATION_CTA_DATA.heading}
          </h2>
        )}

        {CONSULTATION_CTA_DATA.description && (
          <p className="font-sans text-base md:text-lg font-light leading-relaxed tracking-[0.03em] text-[#c4c7c7] mb-12">
            {CONSULTATION_CTA_DATA.description}
          </p>
        )}

        {CONSULTATION_CTA_DATA.buttonText && (
          <a
            href="#"
            className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#18120d] bg-[#c8c6c5] px-10 py-5 border border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#c8c6c5] hover:border-[#c8c6c5]"
          >
            {CONSULTATION_CTA_DATA.buttonText}
          </a>
        )}
      </motion.div>
    </section>
  );
}