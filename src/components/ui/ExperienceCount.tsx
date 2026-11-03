"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCount({ to = 15 }: { to?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  useEffect(() => {
    if (!active) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, to]);

  return (
    <p
      ref={ref}
      className={`display mt-4 text-[clamp(72px,14vw,128px)] font-semibold leading-none tracking-tight text-sand transition duration-700 ${
        active ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
      }`}
      aria-label={`Mais de ${to} anos de experiência`}
    >
      +{value}
    </p>
  );
}
