import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiceGrid from "@/components/sections/ServiceGrid";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Administração, síndico profissional, cobrança, contabilidade, recursos humanos e condomínio on-line.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Tudo o que o condomínio precisa no dia a dia"
        description="Escolha uma área para ver o que está incluído na administração."
      />
      <section className="section-padding bg-cream">
        <div className="container-main">
          <ServiceGrid />
        </div>
      </section>
    </>
  );
}
