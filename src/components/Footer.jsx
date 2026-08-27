import React from "react";
import Link from "next/link";

const FOOTER_DATA = {
  brand: {
    name: "INCH N SPACE",
    description:
      "Curating spatial intelligence and material honesty for the discerning eye.",
    category: "Architecture · Interiors · Design",
  },

  navigation: [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
      ],
    },
    {
      title: "Work",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Process", href: "/process" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],

  social: [
    { label: "Instagram", href: "https://www.instagram.com/inchnspace/" },
    { label: "Facebook", href: "https://www.facebook.com/Inchnspace/" },
  ],

  offices: [
    {
      city: "Mumbai",
      address: [
        "L3, Lower Ground Floor, Gate No.5 East Court, Phoenix Market City Mall, Viman Nagar, ",
        " Maharashtra, Pune - 411014.",
      ],
      phone: "+91 22 555 0177",
      email: "bom@inchnspace.com",
      phoneHref: "tel:+91",
      emailHref: "mailto:info@inchnspace.com ",
    },
  ],

  studios: {
    eyebrow: "Global Studio",
    title: "Visit Us",
    description:
      "Architecture, interiors and thoughtful spatial design.",
  },

  legal: [
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Terms of Service", href: "/termsofservice" },
  ],

  bottomBar: {
    copyright: "INCH N SPACE",
    tagline: "Architectural Precision & Editorial Luxury",
  },
};

export default function Footer() {
  const labelCaps =
    "font-['Montserrat',sans-serif] text-[10px] sm:text-[11px] leading-none tracking-[0.2em] font-medium uppercase";

  const bodyText =
    "font-['Montserrat',sans-serif] text-sm sm:text-[15px] leading-7 tracking-[0.01em]";

  return (
    <footer className="relative bg-[#130d08] text-[#eee0d6] border-t border-[#444748]/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* BRAND */}
            <div className="lg:col-span-6">
              <div className="max-w-lg">

                <span
                  className={`${labelCaps} text-[#e9c176] block mb-6`}
                >
                  {FOOTER_DATA.brand.category}
                </span>

                <h2
                  className="
                    font-['Playfair_Display',serif]
                    text-[58px]
                    sm:text-7xl
                    md:text-[82px]
                    lg:text-[88px]
                    xl:text-[96px]
                    leading-[0.88]
                    tracking-[-0.055em]
                    font-normal
                    mb-8
                  "
                >
                  {FOOTER_DATA.brand.name.split(" ").map((word, index) => (
                    <React.Fragment key={`${word}-${index}`}>
                      {index > 0 && <br />}

                      <span
                        className={
                          index === 0 ? "" : "text-[#c8c6c5]"
                        }
                      >
                        {word}
                      </span>
                    </React.Fragment>
                  ))}
                </h2>

                <p
                  className={`${bodyText} text-[#8e9191] font-light max-w-md`}
                >
                  {FOOTER_DATA.brand.description}
                </p>

              </div>
            </div>

            {/* LINKS */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">

                {FOOTER_DATA.navigation.map((section) => (
                  <div key={section.title}>

                    <h3
                      className={`${labelCaps} text-[#e9c176] mb-6`}
                    >
                      {section.title}
                    </h3>

                    <nav className="flex flex-col gap-3">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`
                            ${bodyText}
                            text-[#aaaead]
                            w-fit
                            transition-colors
                            duration-300
                            hover:text-[#eee0d6]
                          `}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                  </div>
                ))}

                {/* SOCIAL */}
                <div>

                  <h3
                    className={`${labelCaps} text-[#e9c176] mb-6`}
                  >
                    Connect
                  </h3>

                  <div className="flex flex-col gap-3">
                    {FOOTER_DATA.social.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        className={`
                          ${bodyText}
                          text-[#aaaead]
                          w-fit
                          transition-colors
                          duration-300
                          hover:text-[#eee0d6]
                        `}
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            STUDIO
        ====================================================== */}
        <section className="border-t border-[#444748]/30 py-16 sm:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* HEADING */}
            <div className="lg:col-span-4">

              <span className={`${labelCaps} text-[#e9c176]`}>
                {FOOTER_DATA.studios.eyebrow}
              </span>

              <h3
                className="
                  font-['Playfair_Display',serif]
                  text-4xl
                  sm:text-5xl
                  font-normal
                  tracking-[-0.04em]
                  mt-4
                "
              >
                {FOOTER_DATA.studios.title}
              </h3>

              <p
                className={`${bodyText} text-[#777a7a] font-light mt-4 max-w-sm`}
              >
                {FOOTER_DATA.studios.description}
              </p>

            </div>

            {/* OFFICE */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                {FOOTER_DATA.offices.map((office) => (
                  <div
                    key={office.city}
                    className="border-l border-[#444748]/30 pl-6"
                  >

                    <span
                      className={`${labelCaps} text-[#c4c7c7] block mb-5`}
                    >
                      {office.city}
                    </span>

                    <p
                      className={`${bodyText} text-[#8e9191] font-light mb-5`}
                    >
                      {office.address.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index !== office.address.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>

                    <div className="flex flex-col gap-1">

                      <a
                        href={office.phoneHref}
                        className={`
                          ${bodyText}
                          text-[#eee0d6]
                          hover:text-[#e9c176]
                          transition-colors
                          duration-300
                        `}
                      >
                        {office.phone}
                      </a>

                      <a
                        href={office.emailHref}
                        className={`
                          ${bodyText}
                          text-[#777a7a]
                          hover:text-[#e9c176]
                          transition-colors
                          duration-300
                          break-all
                        `}
                      >
                        {office.email}
                      </a>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </section>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <section className="border-t border-[#444748]/30 py-6">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-between
              items-start
              sm:items-center
              gap-4
            "
          >

            <p className={`${labelCaps} text-[#666969]`}>
              © {new Date().getFullYear()}{" "}
              {FOOTER_DATA.bottomBar.copyright}
            </p>

            <p
              className={`
                ${labelCaps}
                text-[#666969]
                hidden
                xl:block
                text-center
              `}
            >
              {FOOTER_DATA.bottomBar.tagline}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">

              {FOOTER_DATA.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    ${labelCaps}
                    text-[#666969]
                    hover:text-[#e9c176]
                    transition-colors
                    duration-300
                  `}
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>

        </section>

      </div>
    </footer>
  );
}