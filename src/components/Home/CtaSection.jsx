import Link from "next/link";

export default function CtaSection() {
  const ctaData = {
    bgImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC063GpjQDNVm6eEoX39Is2gbvtiwhd_9Eyeo0sScKbvMUeH13Cfkv9eLnvbirT9qmTJ_NxMF918q3IpoJG8rHosswu_BgXoWuHzCDJhkTlTUOZgdUtJJ9a8sAqgSkhDXw8BZVE4fGjonEpwQZM4zeuFyMMk5AL2J45XGRSSUSCoLUrKYq2huUDRIU8ZJZ2zXUQHGm9IaTLKypeEElBrqXcZI2Vafg8sgj9J_oXfHg3cyH2LmSvghm3",

    ariaLabel:
      "Modern architectural building facade illuminated at night",

    title: "Let's Create a Space Worth Coming Home To.",

    button: {
      label: "Start Your Project",
      href: "#contact",
    },
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#18120d] text-[#eee0d6]">
      
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${ctaData.bgImageUrl}')`,
          }}
          role="img"
          aria-label={ctaData.ariaLabel}
        />

        {/* Deep Tint Overlay */}
        <div className="absolute inset-0 bg-[#18120d]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 text-center flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight text-[#eee0d6] mb-10 max-w-3xl">
          {ctaData.title}
        </h2>

        <Link
          href={ctaData.button.href}
          className="inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.18em] font-semibold bg-[#e9c176] text-[#412d00] px-10 py-5 hover:bg-[#ffdea5] transition-all duration-300 shadow-xl"
        >
          {ctaData.button.label}
        </Link>
      </div>
    </section>
  );
}