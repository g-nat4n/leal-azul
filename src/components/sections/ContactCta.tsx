import { whatsappHref } from "@/lib/links";

export default function ContactCta() {
  return (
    <section className="bg-mint">
      <div className="container-main flex flex-wrap items-center justify-between gap-6 py-14">
        <div>
          <p className="eyebrow">Suporte para o seu condomínio</p>
          <h2 className="display mt-2 text-[clamp(32px,4vw,44px)] leading-none text-green-deep">
            A Leal tem a solução para você.
          </h2>
          <p className="mt-2 max-w-xl text-muted">Entre em contato, solicite uma proposta ou fale com a equipe pelo telefone e pelo WhatsApp.</p>
        </div>
        <a href={whatsappHref("Olá, gostaria de solicitar uma proposta para o meu condomínio.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#128C7E] px-6 py-3.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#075E54]">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
