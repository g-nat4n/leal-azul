import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { contacts, googleReview, portalList } from "@/lib/links";
import ContactCta from "@/components/sections/ContactCta";
import ServiceRail from "@/components/sections/ServiceRail";
import Reveal from "@/components/ui/Reveal";

const portalPhotos = [
  { src: "/images/card-condomino.jpg", alt: "Sala de estar de um apartamento" },
  { src: "/images/card-gestao.jpg", alt: "Equipe analisando relatórios em uma mesa de trabalho" },
  { src: "/images/card-portaria.jpg", alt: "Fachada de um edifício" },
];

export default function HomeContent() {
  return (
    <>
      <section className="relative min-h-[100svh] lg:grid lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)]">
        <div className="absolute inset-0 lg:relative lg:col-start-2 lg:row-start-1 lg:min-h-full">
          <Image
            src="/images/hero-condominio.jpg"
            alt="Fachada de um condomínio residencial, com varandas e janelas"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
          <div className="absolute inset-0 bg-[#0c2434]/68 lg:bg-transparent lg:bg-gradient-to-t lg:from-black/35 lg:via-transparent lg:to-black/20" />
        </div>
        <div className="hero-copy relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-12 pt-[148px] text-center text-white sm:px-10 lg:col-start-1 lg:row-start-1 lg:px-12 lg:pb-16 lg:pt-[200px]">
          <div className="flex w-full max-w-xl flex-col items-center">
            <p className="text-[12px] uppercase tracking-[0.28em] text-sand sm:text-[13px] sm:tracking-[0.32em]">Curitiba, região e litoral</p>
            <h1 className="display mt-4 text-[clamp(64px,16vw,188px)] uppercase leading-[0.78] tracking-[0.04em] text-white lg:mt-5 lg:tracking-[0.05em]">Leal</h1>
            <p className="mt-4 max-w-[16rem] text-[12px] uppercase leading-relaxed tracking-[0.28em] text-foam sm:max-w-none sm:text-[13px] sm:tracking-[0.32em]">Administradora de condomínios</p>
            <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-6 text-[12px] uppercase leading-relaxed tracking-[0.16em] text-white/80 sm:gap-8 sm:text-[13px] sm:tracking-[0.2em] lg:mt-10">
              <p>Mais de<br />15 anos</p>
              <p>Residencial<br />e comercial</p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link href="/contato" className="btn btn-sand rounded-full">
                Solicite uma proposta
              </Link>
              <a href={portalList[0].href} target="_blank" rel="noreferrer" className="text-[12px] uppercase tracking-[0.2em] text-white/85 underline decoration-white/40 underline-offset-8 hover:text-sand">
                Acessar o sistema
              </a>
            </div>
          </div>
        </div>
        <p className="absolute inset-x-0 bottom-5 z-10 hidden px-6 text-center text-[11px] uppercase tracking-[0.32em] text-white/85 lg:block">
          Gestão condominial em Curitiba, região e litoral
        </p>
      </section>

      <Reveal>
      <section className="bg-cream">
        <div className="container-main py-16 lg:py-24">
          <h2 className="display text-[clamp(36px,4vw,56px)] leading-none text-green-deep">Serviços para condomínios</h2>
          <article className="relative mt-10 min-h-[420px] overflow-hidden rounded-3xl bg-[#0c2434] shadow-card lg:grid lg:min-h-[460px] lg:grid-cols-[0.72fr_1.28fr]">
            <Image
              src="/images/hero-condominio.jpg"
              alt=""
              fill
              className="object-cover object-[72%_center] lg:hidden"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0c2434]/72 lg:hidden" />
            <div className="relative z-10 hidden items-center justify-center bg-cream px-8 py-10 lg:flex">
              <Image
                src="/images/logo-leal.png"
                alt="Leal Administradora de Condomínios"
                width={456}
                height={519}
                className="h-auto w-[240px]"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 text-white sm:px-10 lg:px-12">
              <Image
                src="/images/hero-condominio.jpg"
                alt=""
                fill
                className="hidden object-cover lg:block"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 hidden bg-[#0c2434]/78 lg:block" />
              <div className="relative max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sand">Síndico profissional</p>
                <h3 className="display mt-4 text-[clamp(34px,3.6vw,52px)] leading-[1.02]">Se está precisando de um síndico profissional</h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">Duas formas de contar com um síndico profissional no condomínio.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Síndico exclusivo", "Síndico independente"].map((option) => (
                    <Link key={option} href="/contato" className="inline-flex items-center justify-center rounded-full border border-sand/80 px-5 py-2.5 text-sm font-semibold tracking-wide text-foam transition duration-200 hover:bg-sand hover:text-green-deep">
                      {option}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
          <ServiceRail />
          <div className="mt-8 flex justify-center">
            <Link href="/servicos" className="inline-flex items-center justify-center rounded-full border border-sand/80 px-5 py-2.5 text-sm font-semibold tracking-wide text-green-deep transition duration-200 hover:bg-sand hover:text-green-deep">Conheça mais serviços</Link>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="bg-white">
        <div className="container-main py-16 lg:py-24">
          <p className="eyebrow">CondPrime · código 12</p>
          <h2 className="display mt-3 text-[clamp(36px,4vw,56px)] leading-none text-green-deep">Condomínio on-line</h2>
          <p className="mt-4 max-w-xl text-muted">O síndico, os condôminos e a portaria entram no sistema da administradora.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portalList.map((portal, index) => (
              <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-cream shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(15,43,63,0.12)]">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={portalPhotos[index].src}
                    alt={portalPhotos[index].alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display text-4xl text-green-deep transition group-hover:text-sand-deep">{portal.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{portal.description}</p>
                  <span className="mt-6 text-xs uppercase tracking-[0.18em] text-sand-deep">Entrar</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="relative overflow-hidden bg-green-deep text-white">
        <Image src="/images/bg-cidade.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="container-main relative grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-24">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-sand">A empresa</p>
            <h2 className="display mt-3 text-[clamp(36px,4vw,56px)] leading-[1.05]">Excelência no mercado de Curitiba e região</h2>
          </div>
          <div>
            <p className="leading-relaxed text-white/80">
              A satisfação do cliente é a marca da Leal. Com mais de 15 anos de mercado, a carteira reúne empreendimentos em bairros de Curitiba. Atendemos condomínios comerciais e residenciais em toda a região.
            </p>
            <Link href="/empresa" className="btn btn-sand mt-8">
              Conheça a Leal
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="bg-cream">
        <div className="container-main grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-24">
          <div className="rounded-[28px] bg-white p-7 shadow-card sm:p-9">
            <p className="eyebrow">Avaliações no Google</p>
            <div className="mt-5 flex items-center gap-4">
              <p className="display text-[68px] leading-none text-green-deep">{googleReview.scoreLabel}</p>
              <div>
                <span className="flex gap-1 text-sand" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <p className="mt-1 text-sm text-muted">{googleReview.count} avaliações</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4">
              {googleReview.quotes.map((quote) => (
                <blockquote key={quote.date} className="rounded-3xl bg-cream p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <p className="display text-[clamp(22px,2.4vw,28px)] leading-snug text-green-deep">“{quote.text}”</p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.18em] text-sand-deep">{quote.date} · Google</footer>
                </blockquote>
              ))}
            </div>
            <a href={googleReview.href} target="_blank" rel="noreferrer" className="btn btn-sand mt-7 rounded-full">
              Ver no Google
            </a>
          </div>
          <div className="rounded-[28px] bg-white p-5 shadow-card sm:p-6">
            <p className="eyebrow px-2 pt-2">Onde estamos</p>
            <p className="mt-3 px-2 text-sm leading-relaxed text-muted">
              {contacts.street}
              <br />
              {contacts.district}
              <br />
              CEP {contacts.cep}
            </p>
            <div className="mt-5 overflow-hidden rounded-3xl">
              <iframe
                title="Mapa do escritório da Leal na Rua Voluntários da Pátria, 233, Centro, Curitiba"
                src={contacts.mapEmbed}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={contacts.mapLink} target="_blank" rel="noreferrer" className="link-more mx-2 mt-4">
              Abrir no mapa
            </a>
          </div>
        </div>
      </section>
      </Reveal>

      <ContactCta />
    </>
  );
}
