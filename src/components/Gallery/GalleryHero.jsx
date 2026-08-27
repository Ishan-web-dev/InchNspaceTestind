"use client";

const GALLERY_HERO_DATA = [
  {
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSQoK-Lf7bF3BrcxPY2lqRACUo7YNCVW87SCEgsa4iMg-Hqbd38zb3w6PKqbsv1xaebHM3Rr8NZIbiWGvE24xB9sIWcdAt-VQlfwif915TbLVuV3Z3Vupmq9jfiuzT14WQU1g_t_FDzN5smHTFVtr7SI1jqsoZlH-eGcbRRSkvqLD0TfFCgOJhNkTRHCMfaeh3tp36aHgUOqwwwHbqDRN91BvzKLN9EOXEtuYh2VGM8uxpmoO70mEE",
      alt: "Gallery Hero",
    },
    overlay:
      "bg-gradient-to-b from-[#18120d]/40 via-[#18120d]/10 to-[#18120d]/90",
    content: {
      heading: "Gallery",
      description:
        "A curated selection of our finest spatial narratives, where architectural precision meets editorial luxury.",
    },
  },
];

export default function GalleryHero() {
  return (
    <section className="relative h-[819px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {GALLERY_HERO_DATA.map((hero, index) => (
        <div key={index} className="contents">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            {hero.image?.src && (
              <img
                src={hero.image.src}
                alt={hero.image.alt || ""}
                className="w-full h-full object-cover"
              />
            )}

            {/* Layered Gradient Overlay */}
            {hero.overlay && (
              <div
                className={`absolute inset-0 ${hero.overlay}`}
              />
            )}
          </div>

          {/* Content Container */}
          <div className="relative z-10 text-center px-6 md:px-20 max-w-[1440px] mx-auto">
            {hero.content?.heading && (
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[84px] lg:leading-[96px] tracking-[-0.02em] text-[#eee0d6] mb-6 animate-[fadeInUp_1s_ease-out_forwards]">
                {hero.content.heading}
              </h1>
            )}

            {hero.content?.description && (
              <p className="font-sans text-base md:text-lg font-light leading-8 tracking-[0.03em] text-[#c4c7c7] max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
                {hero.content.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}