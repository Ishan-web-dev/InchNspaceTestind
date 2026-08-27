"use client";

import { useState } from "react";

const GALLERY_DATA = {
  categories: [
    {
      id: "all",
      name: "All",
    },
    {
      id: "residential",
      name: "Residential",
    },
    {
      id: "commercial",
      name: "Commercial",
    },
    {
      id: "interiors",
      name: "Interiors",
    },
  ],

  projects: {
    residential: [
      {
        id: 1,
        title: "The Obsidian Retreat",
        location: "Aspen, Colorado",
        colSpan: "md:col-span-8",
        height: "h-[600px]",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBmibe4Hs10d04pMilOhru4mMnNpHloMKO_r2DWm2WdmeAnTbb6DcZZf0jCVCCZsfFhk-Lc1oQhwCcXIkEbtd9Qn9Mtx8bRHEj_fnir4u9MhES1Y4e4QlgyDciHj-jMmsfjtxPuQpAdR05iJ_FMOWBp6VX8GkWgOd4SsluDGJz8womEsek6XzOhe_P0DLzRcGyAK8y-suLH3cd_w40rcpvU4c2xjb60n2xvsoB7SdsowK1Ec086iH5O",
        isLargeHeadline: true,
      },
      {
        id: 4,
        title: "Zen Pavilion",
        location: "Seattle, WA",
        colSpan: "md:col-span-6",
        height: "h-[500px]",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAkmaM5kqjmvlWnXSKzJtQ_2ye6NIi6blME5RLnOwQkOxyE-wI7YaHIKYmADHnB7jZyrxmqnrXZAbnBAoBrxE8_OXwRneFuJlMkxFvd5r9j1HGOZ1W3ss49EW9MXZS2A5l3EVGYUoHnJbMO7w2U7ZeV3rM9r__smn4frQFwEeQ0yFIuLkEr_nItOSH0KruwuNzACZoXClO4TbEcGXJ8qn9SXhYr21ncxH48FUtC78_YhpQq8_hAfm1D",
        isLargeHeadline: false,
      },
    ],

    commercial: [
      {
        id: 3,
        title: "Aura Gallery",
        location: "Kyoto, Japan",
        colSpan: "md:col-span-6",
        height: "h-[500px]",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDpyGIpDQKrIh7egdI6bastIg-eJ96S-6zDj7mWqrrnmmO7kLmjSvmFsfEVpMGYy0-vLCR0yoVNq9nQ0JqJkKCyQjZf0lhHwUN7049yuDgo5KsxYYGUnjyvr4yB6zjvi8YauGiwzVvxjs7R5ynsoO8inTboPM1rCIEVhxpOGW9-rOozeyQRaX416bkpFWc_gs3eExWP78m05wFi38TIVxc3GnaWKlDCEvBa70XGmK_PMFKNZPUIUn35",
        isLargeHeadline: false,
      },
    ],

    interiors: [
      {
        id: 2,
        title: "Monolith Kitchen",
        location: "London, UK",
        colSpan: "md:col-span-4",
        height: "h-[600px]",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC5tx_bvu3WPxoNGyFM260mISv8SQsjfBJna4lLFRSLvSGDR0LQ6Kpo6CbkPDkaQ86DoNcdiMweQEavxJq3MTeVQtCmgoyuHOYUE9AUjtZz9np2KSDxWribiE-QEjDgpMbMPbGo60X2g1Vc_awWfDaVlKgVIKWd6g7VikDBL7kN8sTJJgMA2XkBhiSgW-c8X04LB4uXKYkqMaOLNEako8IKZ3hmvKx7P3KOT7AurygTHZFVERJV4DSP",
        isLargeHeadline: false,
      },
      {
        id: 5,
        title: "Monolith Kitchen",
        location: "London, UK",
        colSpan: "md:col-span-4",
        height: "h-[600px]",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC5tx_bvu3WPxoNGyFM260mISv8SQsjfBJna4lLFRSLvSGDR0LQ6Kpo6CbkPDkaQ86DoNcdiMweQEavxJq3MTeVQtCmgoyuHOYUE9AUjtZz9np2KSDxWribiE-QEjDgpMbMPbGo60X2g1Vc_awWfDaVlKgVIKWd6g7VikDBL7kN8sTJJgMA2XkBhiSgW-c8X04LB4uXKYkqMaOLNEako8IKZ3hmvKx7P3KOT7AurygTHZFVERJV4DSP",
        isLargeHeadline: false,
      },
    ],
  },

  messages: {
    emptyState: "No projects found in this category.",
    loadMore: "Load More Projects",
  },
};

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? Object.values(GALLERY_DATA.projects).flat()
      : GALLERY_DATA.projects[activeFilter] || [];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-32 md:py-40 bg-[#18120d]">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-[#444748]/30 pb-4">
        {GALLERY_DATA.categories.map((category) => {
          const isActive = activeFilter === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-300 pb-2 ${
                isActive
                  ? "text-[#e9c176] border-b border-[#e9c176]"
                  : "text-[#c4c7c7] hover:text-[#eee0d6]"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`${project.colSpan} ${project.height} group relative overflow-hidden bg-[#211a15] cursor-pointer`}
          >
            {/* Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.7]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />

            {/* Hover Reveal Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-[#18120d]/90 to-transparent opacity-0 translate-y-5 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              {project.category && (
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] block mb-2">
                  {project.category}
                </span>
              )}

              <h3
                className={`font-serif text-[#eee0d6] ${
                  project.isLargeHeadline
                    ? "text-2xl md:text-5xl"
                    : "text-2xl md:text-3xl"
                }`}
              >
                {project.title}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-[#c4c7c7] text-base leading-7 tracking-[0.02em] font-normal">
                <svg
                  className="w-4 h-4 text-[#c4c7c7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7]">
            {GALLERY_DATA.messages.emptyState}
          </p>
        </div>
      )}

      {/* Load More Action */}
      {filteredProjects.length > 0 && (
        <div className="flex justify-center mt-20">
          <button
            type="button"
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] border border-[#8e9192] px-8 py-4 hover:border-[#e9c176] hover:text-[#e9c176] transition-colors duration-300"
          >
            {GALLERY_DATA.messages.loadMore}
          </button>
        </div>
      )}
    </section>
  );
}
