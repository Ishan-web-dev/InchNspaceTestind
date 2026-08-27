  "use client";

  import Link from "next/link";
  import { motion } from "framer-motion";

  const PROCESS_HERO_DATA = [
    {
      background: {
        image:
          "https://i.pinimg.com/1200x/be/73/5c/be735cbf66d826b6749582e2429196f3.jpg",
        opacity: "opacity-40",
        scale: "scale-105",
        overlay: "bg-[#18120d]/70",
      },

      grid: {
        lineColor: "#444748",
        backgroundSize: "100px 100px",
        opacity: "opacity-10",
      },

      content: {
        eyebrow: "Disciplines & Expertise",
        title: "SERVICES",

        description:
          "From architectural planning to bespoke interiors, we bring together design, materiality, and execution to create refined spaces that are both timeless and deeply considered.",

        action: {
          label: "Explore Our Services",
          href: "#services",
        },
      },

      scrollIndicator: {
        label: "Scroll to Discover",
      },
    },
  ];

  export default function ServicesHero() {
    return (
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-32 overflow-hidden bg-[#18120d]">
        {PROCESS_HERO_DATA.map((hero, index) => (
          <div key={index} className="contents">
            {/* Background Precision Architecture Grid */}
            {hero.grid && (
              <div
                className={`absolute inset-0 z-0 ${hero.grid.opacity} pointer-events-none`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${hero.grid.lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${hero.grid.lineColor} 1px, transparent 1px)`,
                    backgroundSize: hero.grid.backgroundSize,
                  }}
                />

                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#e9c176]/20" />

                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#e9c176]/20" />
              </div>
            )}

            {/* Fixed Background Image Layer */}
            {hero.background?.image && (
              <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
                <div
                  className={`absolute inset-0 ${hero.background.overlay} z-10`}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 1.08 }}
                  whileInView={{ opacity: 1, scale: 1.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`w-full h-full bg-cover bg-center bg-fixed ${hero.background.opacity} ${hero.background.scale}`}
                  style={{
                    backgroundImage: `url('${hero.background.image}')`,
                  }}
                />
              </div>
            )}

            {/* Main Content Container */}
            <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Eyebrow */}
                {hero.content?.eyebrow && (
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="w-8 h-[1px] bg-[#e9c176]" />

                    <span className="font-['Montserrat'] text-xs uppercase tracking-[0.3em] text-[#e9c176] font-semibold">
                      {hero.content.eyebrow}
                    </span>

                    <span className="w-8 h-[1px] bg-[#e9c176]" />
                  </div>
                )}

                {/* Large Title */}
                {hero.content?.title && (
                  <h1 className="font-['Playfair_Display'] text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-none text-[#eee0d6] tracking-tight mb-8 font-normal">
                    {hero.content.title}
                  </h1>
                )}

                {/* Subheading / Narrative */}
                <div className="max-w-2xl space-y-8">
                  {hero.content?.description && (
                    <p className="font-['Montserrat'] text-base sm:text-lg md:text-xl text-[#c4c7c7] font-light leading-relaxed">
                      {hero.content.description}
                    </p>
                  )}

                  {/* Action Cue */}
                  {hero.content?.action && (
                    <div className="pt-2">
                      <Link
                        href={hero.content.action.href}
                        className="inline-flex items-center gap-4 group cursor-pointer"
                      >
                        <span className="font-['Montserrat'] text-xs uppercase tracking-[0.2em] text-[#e9c176] group-hover:text-[#eee0d6] transition-colors duration-300">
                          {hero.content.action.label}
                        </span>

                        <div className="w-12 h-[1px] bg-[#e9c176] group-hover:w-20 transition-all duration-500" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            {hero.scrollIndicator?.label && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-8 right-6 md:right-16 hidden sm:flex items-center gap-4 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="font-['Montserrat'] text-[10px] uppercase tracking-[0.2em] text-[#c4c7c7]">
                  {hero.scrollIndicator.label}
                </span>

                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#eee0d6]/20 rounded-full" />

                  <div className="w-[1px] h-4 bg-[#e9c176] animate-pulse" />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </section>
    );
  }