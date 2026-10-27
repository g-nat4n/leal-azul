import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactCta from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Leal Administradora de Condomínios, com serviços de excelência em Curitiba e região.",
};

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Leal Administradora de Condomínios"
        description="Serviços de excelência no mercado de Curitiba e região."
        crumbs={[{ label: "Home", href: "/" }, { label: "Empresa" }]}
      />
      <section className="section-padding bg-cream">
        <div className="container-main grid gap-8 md:grid-cols-2">
          <article className="feature-card">
            <h2 className="display text-4xl text-green-deep">Quem somos</h2>
            <p className="mt-4 leading-relaxed text-muted">
              A satisfação do cliente é a marca da Leal. Com mais de 15 anos de mercado, a carteira reúne empreendimentos em bairros de Curitiba. Atendemos condomínios comerciais e residenciais em toda a região.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              A parceria com síndicos e condôminos é tratada como parte da organização do prédio. A missão é desenvolver uma convivência humana e harmoniosa, sem abrir mão da valorização do condomínio.
            </p>
          </article>
          <article className="rounded-3xl bg-green-deep p-8 text-white">
            <p className="eyebrow-light">Como trabalhamos</p>
            <ul className="mt-6 grid gap-4 text-white/85">
              <li>Assessoria próxima ao síndico nas decisões do dia a dia.</li>
              <li>Relatórios financeiros e de cobrança para o conselho acompanhar.</li>
              <li>Canal on-line para boletos, documentos e comunicados.</li>
              <li>Atendimento em Curitiba e região, residencial e comercial.</li>
            </ul>
          </article>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
