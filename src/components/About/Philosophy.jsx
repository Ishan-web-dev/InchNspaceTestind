export default function Philosophy() {
  const philosophyData = {
    label: "The Philosophy",
    heading: "A tripartite approach to spatial intelligence.",

    pillars: [
      {
        id: 1,
        title: "Creative Design Thinking",
        description:
          "A relentless focus on spatial harmony. We conceptualize how a space looks, feels, and breathes, prioritizing material honesty and light manipulation to evoke a quiet, atmospheric presence.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
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
        title: "Practical Execution",
        description:
          "Design is only as good as its realization. We anchor our creative vision in rigorous technical planning, emphasizing master craftsmanship, precision coordination, and uncompromising quality control.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect x="2" y="6" width="20" height="8" rx="1" />
            <path d="M17 14v7" />
            <path d="M7 14v7" />
            <path d="M17 3v3" />
            <path d="M7 3v3" />
          </svg>
        ),
      },
      {
        id: 3,
        title: "Personal Connection",
        description:
          "Architecture is an intimate reflection of its inhabitants. We delve deep into understanding your lifestyle or brand ethos, ensuring the final environment is deeply resonant and distinctly yours.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
      },
    ],
  };

  return (
    <section className="py-24 md:py-20 bg-[#211a15] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#e9c176] mb-3 block">
            {philosophyData.label}
          </span>

          <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#eee0d6] font-normal leading-tight">
            {philosophyData.heading}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 md:p-10 border border-[#444748]/20 hover:border-[#e9c176]/40 transition-colors duration-500 bg-[#18120d] group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mb-8 flex items-center justify-center border border-[#444748]/40 rounded-full text-[#e9c176] group-hover:border-[#e9c176] group-hover:bg-[#251e19] transition-all duration-300">
                  {pillar.icon}
                </div>

                <h3 className="font-serif text-2xl text-[#eee0d6] font-normal mb-4">
                  {pillar.title}
                </h3>

                <p className="font-sans font-light text-sm md:text-base leading-relaxed text-[#c4c7c7] tracking-wide">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
