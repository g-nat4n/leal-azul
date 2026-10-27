"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { services } from "@/lib/data";

const filters = ["Todos", ...services.map((service) => service.title)];

export default function ServiceGrid() {
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () => (filter === "Todos" ? services : services.filter((service) => service.title === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`border-b-2 px-1 py-2 text-sm font-semibold ${filter === item ? "border-sand text-green-deep" : "border-transparent text-muted"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((service) => (
          <Link key={service.slug} href={`/servicos/${service.slug}`} className="group block rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white">
            <h2 className="display text-[clamp(28px,3vw,34px)] text-green-deep transition group-hover:text-sand-deep">{service.title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
            <ul className="mt-4 grid gap-1 text-sm text-muted">
              {service.items.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
