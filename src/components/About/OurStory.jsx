export default function OurStory() {
  const storyData = {
    label: "Our Story",

    title: "Bringing design and execution under one roof.",

    paragraphs: [
      "INCH N SPACE was born from a desire to remove the inherent complexity of architectural projects. We recognized that true luxury lies not just in the final aesthetic, but in a seamless, unified process.",

      "By integrating rigorous spatial intelligence with master craftsmanship, we bridge the gap between vision and reality. We design with intent and build with uncompromising precision, ensuring every detail reflects the unique identity of those who inhabit the space.",
    ],

    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-_9Edb3-JNCi1xblr_pDk61RZDLwUCEclvGxToM4XZWkbXTXkQpeIOV69cqGa4APGYXUdMX6tClmrQUxLG5Q-fbyYAzfkCWWWdx6QFFi3HO1HKQD6op9N4uBK_KOlPmSSayCQyF3Ciic9TEASFY8JwtR9ZbuQmEQYnMJLU71Wd4-l4f-0MLPGpb3DnvOqp7iMeJJWB87GtsMC_XoZnyCwEHnZZPU4CEqfcWxPiT2--YYNkjAcuuW",
      alt: "Luxury living space architectural interior",
    },
  };

  return (
    <section className="py-24 md:py-10 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <div className="md:col-span-5 space-y-6">
            <span className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#e9c176] block">
              {storyData.label}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#eee0d6] font-normal">
              {storyData.title}
            </h2>

            {storyData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans font-light text-base leading-relaxed text-[#c4c7c7] tracking-wide"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Visual */}
          <div className="md:col-span-6 md:col-start-7 relative">
            <div className="aspect-[4/5] bg-[#211a15] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={storyData.image.src}
                alt={storyData.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Architectural Grid Accent Frame */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 border-t border-l border-[#444748]/40 hidden md:block pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}