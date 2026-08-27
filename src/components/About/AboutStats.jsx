export default function AboutStats() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '12+', label: 'Years Expertise' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#18120d] border-y border-[#444748]/15 text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#444748]/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center py-6 md:py-0">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#eee0d6] font-normal mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#c4c7c7]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}