"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: 150,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      id: 2,
      value: 12,
      suffix: "+",
      label: "Years of Excellence",
    },
    {
      id: 3,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.5,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      const duration = 1800;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easing
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }, [isInView, value]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <section className="py-24 md:py-32 bg-[#18120d] text-[#eee0d6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-[#444748]/20">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="py-8 md:py-0 flex flex-col items-center justify-center"
            >
              {/* Number with Gold Accent */}
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#eee0d6] mb-4 block">
                <Counter value={stat.value} />
                <span className="text-[#e9c176]">{stat.suffix}</span>
              </span>

              {/* Label */}
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#c4c7c7]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}