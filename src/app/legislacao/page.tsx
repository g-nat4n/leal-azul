import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { laws } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legislação",
  description: "Normas e leis que organizam a vida em condomínio: Código Civil, Lei do Condomínio, Inquilinato e NBR 16280.",
};

export default function LegislacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Legislação"
        title="Referências para síndico e condômino"
        description="Resumos do que cada norma trata, com link para o texto oficial."
        crumbs={[{ label: "Home", href: "/" }, { label: "Legislação" }]}
      />
      <section className="section-padding bg-cream">
        <div className="container-main grid gap-5">
          {laws.map((law) => (
            <Link key={law.slug} href={`/legislacao/${law.slug}`} className="block rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white">
              <p className="text-xs font-bold uppercase tracking-[2px] text-sand-deep">{law.date}</p>
              <h2 className="display mt-2 text-3xl text-green-deep">{law.title}</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-muted">{law.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
