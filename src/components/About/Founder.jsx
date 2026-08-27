export default function Founder() {
  const founderData = {
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMZYil_qTeP4w3Mrl9It_ryR_HOv8GPvHduwNdA4ikyh-PHlppiIFgtFTtZBLPdqnh3QC9pD-8Hqkrf7Pqc1gCrxkZOJbpt-3gbE5wg3kWvRSU86bxMoBmUeGXftjfu0OSRKrQlEA27gT3Hu-oQU6Xo5_pGowv1ZixVhW9qWpgWhUJgBKhAnqxod9HHm6LY5KTdjeFeJy2-kxfCWGrPyXbeuACSCs2i2yeVMY3acgrfR7doetPdT6t",
      alt: "Portrait of Eleanor Vance, Principal Designer",
    },

    role: "Principal Designer",
    name: "Eleanor Vance",
    designation: "Founder & Lead Architect",

    quote:
      '"True luxury is found in the restraint of design. It is the careful curation of space, light, and material that allows the human experience to take center stage."',

    bio: "With a background rooted in both classical architecture and modern interior styling, Eleanor established INCH N SPACE to challenge the fragmented nature of traditional property development. Her vision is singular: to deliver environments of profound beauty and impeccable function through a singular, curated lens.",

    experience: {
      value: "15+",
      label: "Years of Experience",
    },
  };

  return (
    <section className="py-14 md:py-20 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Portrait */}
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 relative">
            <div className="aspect-square bg-[#3b332d] overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={founderData.image.src}
                alt={founderData.image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Bio & Details */}
          <div className="md:col-span-5 order-1 md:order-2 space-y-6">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#e9c176] block mb-2">
                {founderData.role}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#eee0d6] font-normal leading-tight">
                {founderData.name}
              </h2>

              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8e9192] mt-1">
                {founderData.designation}
              </p>
            </div>

            <blockquote className="font-sans font-light text-base leading-relaxed text-[#c4c7c7] italic border-l-2 border-[#e9c176]/50 pl-6 my-6">
              {founderData.quote}
            </blockquote>

            <p className="font-sans font-light text-sm md:text-base leading-relaxed text-[#c4c7c7] tracking-wide">
              {founderData.bio}
            </p>

            <div className="pt-4 flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl text-[#eee0d6] leading-none font-normal">
                {founderData.experience.value}
              </span>

              <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#8e9192] mt-2">
                {founderData.experience.label}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}