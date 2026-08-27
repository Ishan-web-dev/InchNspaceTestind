import Link from "next/link";

export default function ServicesSplit() {
  const services = [
    {
      href: "#residential",
      imageUrl:
        "https://i.pinimg.com/1200x/e1/40/a8/e140a8c1a6469062a82296c695d68afb.jpg",
      ariaLabel: "Minimalist residential interior with warm ivory seating",
      category: "Residential Design",
      title: "Spaces Made Personal.",
      linkText: "Explore Residential",
      overlay:
        "absolute inset-0 bg-[#18120d]/40 group-hover:bg-[#18120d]/20 transition-colors duration-500",
    },
    {
      href: "#commercial",
      imageUrl:
        "https://i.pinimg.com/736x/a3/f3/50/a3f350732cab51bbbd42e11237b1980b.jpg",
      ariaLabel: "High-end commercial office space with dark marble reception",
      category: "Commercial Design",
      title: "Spaces Built For Business.",
      linkText: "Explore Commercial",
      overlay:
        "absolute inset-0 bg-[#18120d]/50 group-hover:bg-[#18120d]/30 transition-colors duration-500",
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-[#18120d]">
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.href}
          className="relative group overflow-hidden h-[50vh] md:h-auto block cursor-pointer"
        >
          {/* Background Image with Hover Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url('${service.imageUrl}')` }}
            role="img"
            aria-label={service.ariaLabel}
          />

          {/* Dark Overlay */}
          <div className={service.overlay} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#e9c176] mb-4 block">
              {service.category}
            </span>

            <h3 className="font-serif text-3xl md:text-5xl text-[#eee0d6] font-normal">
              {service.title}
            </h3>

            {/* Animated Hover Reveal Link */}
            <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="inline-flex items-center font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#eee0d6] border-b border-[#eee0d6] pb-1">
                {service.linkText}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
