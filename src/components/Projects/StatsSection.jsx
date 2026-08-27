"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: "120", suffix: "+", label: "Projects Delivered" },
  { value: "15", suffix: "+", label: "Design Awards" },
  { value: "30", suffix: "+", label: "Global Cities" },
  { value: "12", suffix: "Y", label: "Years of Precision" },
];

function CountUp({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * Number(value));

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(Number(value));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return count;
}

export default function StatsSection() {
  return (
    <section className="border-t border-b border-[#444748]/10 bg-[#130d08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {STATS.map((stat, idx) => (
            <div key={idx}>
              <div className="font-serif text-5xl md:text-7xl lg:text-[84px] md:leading-[96px] text-[#e9c176] mb-2 tracking-[-0.02em]">
                <CountUp value={stat.value} />
                <span className="text-[#c4c7c7]">{stat.suffix}</span>
              </div>

              <div className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}