import Link from "next/link";

export default function PortfolioPreview() {
  const portfolioData = {
    sectionLabel: "Selected Works",
    sectionTitle: "Curated Spaces",
    viewAllText: "View All Projects",
    viewAllHref: "#projects",

    projects: [
      {
        id: 1,
        title: "The Obsidian Residence",
        category: "Residential • Living",
        image:
          "https://i.pinimg.com/736x/09/d5/6c/09d56c9dea4a74eb4531442d55d332b4.jpg",
        alt: "Minimalist open-plan living area with ivory sofa and dark stone wall",
        isLarge: true,
      },
      {
        id: 2,
        title: "Aura Suite",
        category: "Residential • Bedroom",
        image:
          "https://i.pinimg.com/736x/b6/ad/bc/b6adbc0a43908b506af28ce6a5392a5b.jpg",
        alt: "Moody bedroom interior with floating dark oak bed frame",
        isLarge: false,
      },
      {
        id: 3,
        title: "Equinox Atelier",
        category: "Commercial • Wellness",
        image:
          "https://i.pinimg.com/736x/08/84/ba/0884ba540658a5ca938cbce43fb4166c.jpg",
        alt: "High-end commercial gym space with architectural strip lighting",
        isLarge: false,
      },
      {
        id: 4,
        title: "Apex Headquarters",
        category: "Commercial • Office",
        image:
          "https://i.pinimg.com/736x/29/b2/85/29b28599fc13095f198fa39f1429eb8c.jpg",
        alt: "Minimalist corporate boardroom with dark walnut conference table",
        isLarge: true,
      },
    ],
  };

  return (
    <section className="py-24 md:py-40 bg-[#130d08] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] block mb-4">
              {portfolioData.sectionLabel}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight text-[#eee0d6]">
              {portfolioData.sectionTitle}
            </h2>
          </div>

          <Link
            href={portfolioData.viewAllHref}
            className="inline-flex items-center font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] hover:text-[#e9c176] transition-colors duration-300 group"
          >
            {portfolioData.viewAllText}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Bento Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {portfolioData.projects.map((project) => (
            <Link
              key={project.id}
              href={`#project-${project.id}`}
              className={`relative group overflow-hidden bg-[#18120d] block ${project.isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              {/* Project Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/80 via-[#18120d]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] mb-2 block">
                  {project.category}
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-[#eee0d6] font-normal">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}