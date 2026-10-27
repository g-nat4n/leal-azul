import { Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { getLaw } from "@/lib/data";

export default function LawDetail({ slug }: { slug: string }) {
  const law = getLaw(slug);

  return (
    <>
      <PageHero
        eyebrow="Legislação"
        title={law.title}
        description={law.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Legislação", href: "/legislacao" },
          { label: law.title },
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="container-main grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="text-sm text-muted">Publicado no site em {law.date}</p>
            <ul className="check-list mt-6">
              {law.points.map((point) => (
                <li key={point}>
                  <Check size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-3xl bg-green-deep p-6 text-white">
            <p className="text-sm font-extrabold uppercase tracking-[2px] text-foam">Texto oficial</p>
            <p className="mt-3 leading-relaxed text-white/80">
              O resumo acima organiza o que importa para o condomínio. O texto completo está na fonte oficial.
            </p>
            <a href={law.officialHref} target="_blank" rel="noreferrer" className="btn btn-sand mt-6">
              {law.officialLabel}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
