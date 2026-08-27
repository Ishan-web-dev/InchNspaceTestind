"use client";

import { useState } from "react";

const HERO_DATA = {
  heading: "Selected Works",
  description:
    "A curated gallery of spatial intelligence. Exploring the intersection of architectural precision, material honesty, and editorial luxury.",
};

const CATEGORIES = [
  "All Projects",
  "Residential",
  "Commercial",
  "Living Spaces",
  "Sanctuaries",
  "Workspaces",
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "The Obsidian Residence",
    tag: "Residential | London",
    category: "Residential",
    colSpan: "md:col-span-8",
    height: "h-[500px] md:h-[700px]",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEgj6Ss7KVu11cRwDR7ddoJrO35g5yS5D2giGNoTvxkSoX_cIeEwKgj9iApC2RvUW3Vn1I33O0VH5pl7Hfp2TzvJ_Z2MsJKg4DFqvZUW9jpl86w-o6HDtri_XPBVoFYSJ6wY_PPdkr_3v9TqU6c0pjD27StokLNlYusJwGi8oxJF8R3Qx-e-Gdp7RuoLv6SFilmcaYywmmsltJs0JvnZl0Pt9_-I4QslgJq2D-6ocHyUf0OhU044fP",
    ctaText: "View Project",
    isLarge: true,
  },
  {
    id: 2,
    title: "Material Honesty",
    tag: "Detail | New York",
    category: "Sanctuaries",
    colSpan: "md:col-span-4",
    height: "h-[500px] md:h-[700px]",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQP2f4S05gYQIFszzDIlDA7Uw--9R-uDVv-lmCziCVMtUvrpWBf0AGv4Olhf5bORycls0gIIidNXL8nndRuDJduYsCqYkvUNLFaVUUbHNSgnXXdJdbixkdb1svE1JtcpKkEgLJzevXzTAyndbzaS3eW_DUqEGs3e6_pbgduj-hHieLbW4DBWbFciRJPkfpr7VZXOB94OiYQo1dB_qO3KQtphInUbQ6rQYPUvlgNhGour8qsr2_jG2c",
    ctaText: "Explore",
    isLarge: false,
  },
  {
    id: 3,
    title: "Apex Headquarters",
    tag: "Commercial | Dubai",
    category: "Commercial",
    colSpan: "md:col-span-12",
    height: "h-[400px] md:h-[600px]",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClGGBUCHwDfR6FKR-VGUbicmdZueMp9ODdXrLLYn2q5ttVZ4SESSQV9Il2nbfTHpq4xrmXz-g28XZ9XGliE3LB6LluVNBQqO3751SaARZyyyWIhSrZs6Di17feWmM0vbhVD6siZ9bbBraOxdRoRZiDBec3HI7iqBmYx66zZ34Bu9S-zhucMN0yf0xyKFDbg3r1P7vDxsVGl0Uqwtk8-AhP7VwQs6Ata1-WbkVL7Y9BXSie2SPDm-T2",
    ctaText: "View Project",
    isLarge: true,
  },
  {
    id: 4,
    title: "Maison L'Aube",
    tag: "Sanctuary | Paris",
    category: "Sanctuaries",
    colSpan: "md:col-span-6",
    height: "h-[400px] md:h-[600px]",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBH4eEOGdWZi7f8C_E0TRP9iUF__ze5hKOGzZFeS0Q3-tqQ5QD0qfTQ9FqKZIK8YjxuE4UKd1Jvv0e_mZkx7sR-Ezb2tURCXL5KM2pV-O3snQpc-VyR6523hIx3HCrQLxLSf7tw46k1EKBJUkR2-yk20DHvldITqd9VEKYcc5CZIXJA7Viqa6irHhrvBlltNDUSQaDd0f5YYfnD49kU2kU3mS3c9-60YNZQnIQorLofb3yZcinHIbJc",
    ctaText: "Explore",
    isLarge: false,
  },
  {
    id: 5,
    title: "Villa Vento",
    tag: "Living | Milan",
    category: "Living Spaces",
    colSpan: "md:col-span-6",
    height: "h-[400px] md:h-[600px]",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz5GXnGezXgKkw_IJ60KHziiVm3tcwyz0PVpNuWY99sdAKxQNCUS1HxNEto-3h9PWhdJMEnEPBeJaLmtaBFYu6j9nHmhuy9014hyRbDZmv6AQBPlTK6Xmk2yUV8k0lZpdzQSq_BqmHeAzxFDyYnwPx05AbCCGq_tvwEUxd2h9Nf9HugqiDdPs2p6q3MH5pUsaPDiuaM4Tr6C6p94OPO7WYoNQcpDMvzgbVJaOTXITGbez1_AcVqTPc",
    ctaText: "Explore",
    isLarge: false,
  },
];

const UI_TEXT = {
  emptyMessage: "No projects found in this category.",
  loadMore: "Load More Projects",
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeTab === "All Projects"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeTab);

  return (
    <div className="bg-[#18120d] text-[#eee0d6] min-h-screen antialiased selection:bg-[#e9c176] selection:text-[#18120d] font-sans">
      <main>
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              {HERO_DATA.heading && (
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[84px] md:leading-[96px] tracking-[-0.02em] text-[#eee0d6] mb-6">
                  {HERO_DATA.heading}
                </h1>
              )}
            </div>

            <div className="md:col-span-4 pb-4">
              {HERO_DATA.description && (
                <p className="text-base md:text-lg font-light leading-relaxed tracking-wide text-[#c4c7c7]">
                  {HERO_DATA.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Category Filters */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 mb-16 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex space-x-8 whitespace-nowrap border-b border-[#444748]/30 pb-4">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 pb-1 ${
                    isActive
                      ? "text-[#e9c176] border-b-2 border-[#e9c176]"
                      : "text-[#c4c7c7] hover:text-[#eee0d6]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Project Gallery Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href="#"
                className={`group relative block ${project.colSpan} ${project.height} overflow-hidden bg-[#251e19]`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/90 via-[#18120d]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div
                  className={`absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col ${
                    project.isLarge
                      ? "md:flex-row md:justify-between md:items-end"
                      : ""
                  }`}
                >
                  <div>
                    {project.tag && (
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e9c176] block mb-3">
                        {project.tag}
                      </span>
                    )}

                    {project.title && (
                      <h2
                        className={`font-serif text-[#eee0d6] ${
                          project.isLarge
                            ? "text-2xl md:text-4xl"
                            : "text-2xl md:text-3xl mb-4"
                        }`}
                      >
                        {project.title}
                      </h2>
                    )}
                  </div>

                  {project.ctaText && (
                    <div
                      className={`${
                        project.isLarge ? "mt-4 md:mt-0" : ""
                      } opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0`}
                    >
                      <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#eee0d6] border-b border-[#eee0d6] pb-1 inline-flex items-center gap-2">
                        {project.ctaText}

                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-sm uppercase tracking-widest text-[#c4c7c7]">
                {UI_TEXT.emptyMessage}
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredProjects.length > 0 && (
            <div className="mt-16 text-center">
              <button
                type="button"
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#eee0d6] border border-[#444748] px-8 py-4 hover:bg-[#3b332d] transition-colors duration-300"
              >
                {UI_TEXT.loadMore}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
