import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ContactCta from "@/components/sections/ContactCta";
import { contacts, whatsappHref } from "@/lib/links";

export const metadata: Metadata = {
  title: "Modelos de síndico",
  description: "Síndico independente e síndico exclusivo para mandato tampão ou temporário, com a Leal Administradora de Condomínios.",
};

const independente = [
  "Profissionalismo Dedicado: um síndico focado 100% na gestão do seu patrimônio",
  "Qualificação Comprovada: experiência em legislação, finanças, manutenção e mediação de conflitos",
  "Imparcialidade Total: decisões justas, sem favorecimentos",
  "Suporte Completo: todo o respaldo da estrutura administrativa da Leal",
];

const tampao = [
  "Gestão presente e profissional em seu condomínio",
  "Continuidade total da administração com prestação de contas do período",
  "Atendimento a moradores, fornecedores e emergências",
  "Acompanhamento de obras, manutenções e finanças",
  "Transparência, Eficiência e Valorização do seu Patrimônio",
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.7.7-3-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 4.7 4.7 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

function Phones({ dark = false }: { dark?: boolean }) {
  const link = dark
    ? "inline-flex items-center gap-3 text-lg font-semibold text-white transition hover:text-sand"
    : "inline-flex items-center gap-3 text-lg font-semibold text-green-deep transition hover:text-sand-deep";
  return (
    <div className="mt-4 grid gap-3">
      <a href={`tel:${contacts.phoneTel}`} className={link}>
        <Phone className="shrink-0 text-sand" size={18} aria-hidden="true" />
        {contacts.phoneDisplay}
      </a>
      <a href={whatsappHref()} target="_blank" rel="noreferrer" className={link}>
        <span className="shrink-0 text-sand">
          <WhatsAppIcon />
        </span>
        {contacts.whatsappDisplay}
      </a>
    </div>
  );
}

export default function SindicoPage() {
  return (
    <>
      <PageHero
        eyebrow="Síndico profissional"
        title="Modelos de síndico"
        description="Síndico independente e síndico exclusivo para mandato tampão ou temporário."
      />

      <section className="section-padding bg-cream">
        <div className="container-main grid gap-8">
          <article id="independente" className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative h-72 sm:h-80 lg:h-[440px]">
              <Image
                src="/images/sindico-independente.jpg"
                alt="Duas profissionais conversando com prancheta na frente de um edifício"
                fill
                className="object-cover object-[center_35%]"
                sizes="100vw"
              />
            </div>
            <div className="px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sand-deep">Leal</p>
              <h2 className="display mt-3 text-[clamp(32px,4vw,48px)] leading-[1.08] text-green-deep">Síndico independente Leal</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-green-deep">São profissionais dedicados e qualificados para atender seu condomínio, parceiros e parceiras da Administradora Leal.</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">O síndico independente é a solução moderna e imparcial para a gestão do seu prédio. Um profissional externo, sem vínculo com moradores, que traz visão técnica, isenção e profissionalismo para o dia a dia do condomínio.</p>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-green-deep">Com a parceria da Leal Administradora de Condomínios, você tem o melhor dos dois mundos:</p>
              <ul className="mt-4 grid max-w-3xl gap-3 text-base leading-7 text-green-deep">
                {independente.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-1 shrink-0 text-sand-deep" size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted">Transparência, eficiência e valorização. É o seu condomínio em boas mãos, com a segurança de uma das administradoras mais tradicionais de Curitiba.</p>
              <p className="mt-4 max-w-3xl text-lg font-semibold leading-snug text-green-deep">Síndico independente Leal. Gestão profissional que seu condomínio merece.</p>
              <p className="mt-6 text-base font-semibold text-green-deep">Fale conosco</p>
              <Phones />
              <Link href="/contato" className="btn btn-sand mt-6">Entre em contato</Link>
            </div>
          </article>

          <article id="tampao" className="overflow-hidden rounded-3xl bg-green-deep text-white shadow-card">
            <div className="relative h-72 sm:h-80 lg:h-[440px]">
              <Image
                src="/images/sindico-atendimento.jpg"
                alt="Profissional acompanhando moradores na análise de um documento"
                fill
                className="object-cover object-[center_42%]"
                sizes="100vw"
              />
            </div>
            <div className="px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sand">Leal</p>
              <h2 className="display mt-3 text-[clamp(32px,4vw,48px)] leading-[1.08] text-white">Síndico exclusivo para mandato tampão / temporário — Leal</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white">O síndico do seu prédio precisou se ausentar, tirar férias, renunciou ou o cargo ficou vago? Nenhum condômino quer o cargo?</p>
              <p className="mt-4 text-lg font-semibold leading-snug text-white">O condomínio não pode parar. Temos a solução.</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/90">A Leal Administradora de Condomínios oferece o serviço de síndico exclusivo para mandato tampão / temporário — a opção ideal quando existe a ausência, férias ou vacância do síndico do seu prédio.</p>
              <p className="mt-6 text-base font-semibold text-white">Com o nosso síndico exclusivo, você garante:</p>
              <ul className="mt-4 grid max-w-3xl gap-3 text-base leading-7 text-white/92">
                {tampao.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-1 shrink-0 text-sand" size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/90">Perfeito para cobrir férias, afastamentos médicos, renúncia, destituição ou quando não há candidatos na assembleia.</p>
              <p className="mt-4 max-w-3xl text-lg font-semibold leading-snug text-white">Mandato tampão / temporário exclusivo: seu condomínio nunca fica sem síndico.</p>
              <p className="mt-6 text-base text-white/85">Leal Administradora de Condomínios</p>
              <Phones dark />
              <Link href="/contato" className="mt-6 inline-flex items-center justify-center rounded-full border border-sand/80 px-5 py-2.5 text-sm font-semibold tracking-wide text-foam transition duration-200 hover:bg-sand hover:text-green-deep">
                Entre em contato
              </Link>
            </div>
          </article>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
