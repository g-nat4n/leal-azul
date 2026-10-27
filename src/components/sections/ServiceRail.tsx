import Link from "next/link";
import { services } from "@/lib/data";

function ServiceCards({ copy }: { copy: string }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4">
      {services.map((service) => (
        <Link key={`${copy}-${service.slug}`} href={`/servicos/${service.slug}`} className="group flex h-[220px] w-[260px] shrink-0 flex-col rounded-3xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-sand">
          <span className="display line-clamp-2 text-[32px] leading-none text-green-deep transition group-hover:text-sand-deep">{service.title}</span>
          <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{service.summary}</span>
        </Link>
      ))}
    </div>
  );
}

export default function ServiceRail() {
  return (
    <div className="relative mt-10 overflow-hidden py-3">
      <div className="service-marquee flex w-max">
        <ServiceCards copy="a" />
        <ServiceCards copy="b" />
      </div>
    </div>
  );
}
