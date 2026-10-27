import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ContactCta from "@/components/sections/ContactCta";
import { getService, services } from "@/lib/data";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: service.title },
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="container-main grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <ul className="check-list">
            {service.items.map((item) => (
              <li key={item}>
                <Check size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-sm">
            <p className="text-sm font-extrabold uppercase tracking-[2px] text-sand-deep">Outros serviços</p>
            <ul className="mt-4 grid gap-2">
              {services
                .filter((item) => item.slug !== slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link href={`/servicos/${item.slug}`} className="font-bold text-green-deep hover:text-green">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
