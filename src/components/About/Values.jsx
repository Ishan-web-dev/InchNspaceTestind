"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Values() {
  const valuesData = [
    {
      id: 1,
      title: "Quality & Craftsmanship",
      description:
        "We collaborate exclusively with artisans and fabricators who share our obsessive attention to detail. Every material is sourced for its longevity and intrinsic beauty, ensuring our spaces age gracefully and stand as testaments to true craftsmanship. We reject the superficial in favor of the substantial.",
      background: "bg-[#130d08]",
    },
    {
      id: 2,
      title: "Residential & Commercial",
      description:
        "Our portfolio spans serene private residences and impactful commercial environments. While the functional requirements differ, our methodology remains constant: rigorous spatial analysis, elevated aesthetic curation, and a commitment to creating atmospheres that profoundly impact those within them.",
      background: "bg-[#211a15]",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        const cardWidth = slider.offsetWidth;

        slider.scrollTo({
          left:
            slider.scrollLeft + cardWidth >= slider.scrollWidth
              ? 0
              : slider.scrollLeft + cardWidth,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-10 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div
          ref={sliderRef}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            md:gap-12

            max-md:flex
            max-md:overflow-x-auto
            max-md:snap-x
            max-md:snap-mandatory
            max-md:scroll-smooth
            max-md:[scrollbar-width:none]
            max-md:[&::-webkit-scrollbar]:hidden
          "
        >
          {valuesData.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{
                opacity: 0,
                x: index === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15,
              }}
              className={`
                p-8
                sm:p-12
                ${value.background}
                border
                border-[#444748]/20
                flex
                flex-col
                justify-center

                max-md:min-w-full
                max-md:snap-center
              `}
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-[#eee0d6] font-normal mb-6">
                {value.title}
              </h3>

              <p className="font-sans font-light text-base leading-relaxed text-[#c4c7c7] tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}