"use client";

import React, { useState } from "react";

const PRODUCT_DATA = {
  breadcrumb: [
    {
      id: 1,
      label: "Seating",
      type: "category",
    },
    {
      id: 2,
      label: "Curated Essentials",
      type: "collection",
    },
  ],

  product: {
    title: "The Obsidian Sofa",
    price: "On Request",
    description:
      "A study in architectural massing and comfort. Handcrafted with deep-textured charcoal boucle and a solid charred oak base, the Obsidian anchors any space with quiet authority.",
  },

  specifications: [
    {
      id: 1,
      label: "Dimensions",
      value: "280cm L x 110cm D x 65cm H",
    },
    {
      id: 2,
      label: "Materials",
      value: "Italian Boucle, Charred Oak, High-density Foam",
    },
    {
      id: 3,
      label: "Lead Time",
      value: "12 - 14 Weeks",
    },
  ],

  galleryImages: [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0G0uaIAqQHJ0QeOzPT7Ef3koC83f42mryjuPdp6DsJzIqPDq-tSnymYu-jrtzUZq2370ofJUqtl5xx29g9Qd7L9cfvXG-ZayPv7PQEQBZSOh9bR5rRjyowKOdyQGRjCIomJEeC7Kl14Utwy8reiA2D5lPGaJIHgsrvv32j0LuNhn2_m7YSoCoihxssDv6OLrsj7IBF3M8cjN_ZC78VhxcJctJFknP1KyqWOZSCB1-MerTZfQqt9C-",
      alt: "Macro shot of dark textured charcoal boucle fabric weave",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcWdmgWgAPwokTVVQMH0zP2SeGGPtDKDwbi1UXfxyFOockjHcGMC6zTIBwsuG2xiorrzfG1YEL2D-FRf_iRNWSlRLa9Ov5rmhr05jnkoDMc3WUtMlbZvmlYTsIVqwCBZog_QOCpD4ee0CTED-3gFHZc8Im1RwhuHe0zImdSrM2IZifsQjFtVnG2G4gXUokVvS4qAEdEMuD3jL8OZc5hfO49OUFGYRuuRvaV7D9HcmQUYx_w8N_uHHN",
      alt: "Detail shot of the solid charred oak wood base",
    },
  ],

  actions: [
    {
      id: 1,
      label: "Enquire for Bespoke Sizing",
      type: "primary",
      icon: "arrow",
    },
    {
      id: 2,
      label: "Download Technical Sheet",
      type: "secondary",
      icon: "download",
    },
  ],
};

export default function ProductDetailSection() {
  const [activeImage, setActiveImage] = useState(
    "https://lh3.googleusercontent.com/aida/AP1WRLudrBMvdWQNuoIO4foLH0G_j9p7N41jn_Qzrcsx_lWHtXuz4LcrfHXcjjQz7wsbO4Zfdf2KivX0mstIiyxAhUcvg4KldBqIJPv6OjTpqFtnXGlH4AFrIVQCxXHTG2Fg4LlZG8F3PQoCZtvpS0QUzb70SeYH-XA5LlNwttCpJgH-zi3O5XJuR9DwtTnt3FC9WR2RmbmdZFIm35OqiSbzElKXdu5ZCGvdr933w_oHBU5ZrlsdnQ14lyG_jg",
  );

  return (
    <main className="w-full bg-[#18120d] text-[#eee0d6] pt-32 md:pt-48 pb-28 md:pb-40 transition-all duration-700 ease-in-out">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Breadcrumb Category */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2">
          {PRODUCT_DATA.breadcrumb.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <span className="text-[#444748]">/</span>}

              <span
                className={`font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.15em] ${item.type === "category" ? "text-[#e9c176]" : "text-[#c4c7c7]"
                  }`}
              >
                {item.label}
              </span>
            </React.Fragment>
          ))}
        </nav>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24">
          {/* Left Side: Imagery */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-8">
            {/* Hero / Main Image Display */}
            <div className="w-full aspect-[4/3] md:aspect-square bg-[#251e19] rounded-sm overflow-hidden relative group">
              <img
                src={activeImage}
                alt={PRODUCT_DATA.product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {PRODUCT_DATA.galleryImages.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(img.src)}
                  className={`aspect-square bg-[#251e19] rounded-sm overflow-hidden relative group focus:outline-none focus:ring-1 focus:ring-[#e9c176] ${activeImage === img.src ? "ring-1 ring-[#e9c176]" : ""
                    }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="lg:col-span-5 flex flex-col pt-8 md:pt-0 lg:sticky lg:top-36 self-start h-fit">
            {/* Title & Price */}
            <h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl md:leading-[56px] font-normal text-[#eee0d6] mb-4">
              {PRODUCT_DATA.product.title}
            </h1>

            <p className="font-['Montserrat',sans-serif] text-lg font-light tracking-[0.03em] text-[#e9c176] mb-10">
              {PRODUCT_DATA.product.price}
            </p>

            {/* Divider */}
            <hr className="border-t border-[#444748]/30 mb-10" />

            {/* Description */}
            <div className="mb-10">
              <p className="font-['Montserrat',sans-serif] text-base leading-7 tracking-[0.02em] text-[#c4c7c7] font-normal">
                {PRODUCT_DATA.product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-12">
              <h3 className="font-['Montserrat',sans-serif] text-xs font-semibold tracking-[0.15em] text-[#e9c176] uppercase mb-6">
                Specifications
              </h3>

              <dl className="flex flex-col gap-4 font-['Montserrat',sans-serif]">
                {PRODUCT_DATA.specifications.map((spec) => (
                  <div
                    key={spec.id}
                    className="grid grid-cols-3 gap-4 border-b border-[#444748]/20 pb-4"
                  >
                    <dt className="text-sm md:text-base text-[#c4c7c7] col-span-1">
                      {spec.label}
                    </dt>

                    <dd className="text-sm md:text-base text-[#eee0d6] col-span-2 text-right md:text-left">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              {PRODUCT_DATA.actions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className={
                    action.type === "primary"
                      ? "w-full bg-[#3b332d] text-[#eee0d6] py-4 px-8 font-['Montserrat',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase border border-[#444748]/30 hover:border-[#e9c176]/50 hover:bg-[#e9c176] hover:text-[#1a1000] transition-all duration-300 group flex items-center justify-center gap-3"
                      : "w-full bg-transparent text-[#c4c7c7] py-4 px-8 font-['Montserrat',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase border border-[#444748]/30 hover:border-[#eee0d6] hover:text-[#eee0d6] transition-all duration-300 flex items-center justify-center gap-3"
                  }
                >
                  {action.icon === "arrow" && (
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}

                  {action.icon === "download" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  )}

                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
