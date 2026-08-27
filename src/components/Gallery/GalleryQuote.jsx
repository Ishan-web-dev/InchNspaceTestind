const GALLERY_QUOTE_DATA = [
  {
    quote:
      '"True architectural luxury is not found in excess, but in the precise curation of light, material, and empty space".',
    citation: "Inch N Space Design Philosophy",
  },
];

export default function GalleryQuote() {
  return (
    <section className="w-full bg-[#251e19] py-32 md:py-15 border-y border-[#444748]/10">
      {GALLERY_QUOTE_DATA.map((quoteData, index) => (
        <div
          key={index}
          className="max-w-[1000px] mx-auto px-6 md:px-20 text-center"
        >
          {/* Quote Icon */}
          <div className="text-[#e9c176] text-5xl mb-8 opacity-50 flex justify-center">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote Body */}
          {quoteData.quote && (
            <h2 className="font-serif text-2xl md:text-5xl text-[#eee0d6] mb-8 leading-tight font-normal">
              {quoteData.quote}
            </h2>
          )}

          {/* Gold Divider */}
          <div className="w-12 h-px bg-[#e9c176] mx-auto mb-6" />

          {/* Citation Label */}
          {quoteData.citation && (
            <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7]">
              {quoteData.citation}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
