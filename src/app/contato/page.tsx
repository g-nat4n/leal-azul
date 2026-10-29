import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { contacts, whatsappHref } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contato",
  description: "Telefones, e-mail e endereço da Leal Administradora de Condomínios no Centro de Curitiba.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Leal"
        description="Solicite uma proposta e conheça o que a Leal Administradora de Condomínios tem a oferecer."
      />
      <section className="section-padding bg-cream">
        <div className="container-main grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <article className="rounded-3xl bg-green-deep p-6 text-white">
              <p className="eyebrow-light">Endereço</p>
              <h2 className="display mt-3 text-4xl">
                Escritório no Centro
              </h2>
              <p className="mt-3 flex gap-3 leading-relaxed text-white/85">
                <MapPin className="mt-1 shrink-0" size={18} />
                <span>
                  {contacts.street}
                  <br />
                  {contacts.district}
                  <br />
                  CEP {contacts.cep}
                </span>
              </p>
              <a href={contacts.mapLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-extrabold text-foam">
                Abrir no Google Maps
              </a>
            </article>
            <a href={`tel:${contacts.phoneTel}`} className="feature-card flex items-center gap-3">
              <Phone className="text-green" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[1px] text-muted">Telefone</span>
                {contacts.phoneDisplay}
              </span>
            </a>
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="feature-card flex items-center gap-3">
              <MessageCircle className="text-green" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[1px] text-muted">WhatsApp</span>
                {contacts.whatsappDisplay}
              </span>
            </a>
            <a href={`mailto:${contacts.emailContact}`} className="feature-card flex items-center gap-3">
              <Mail className="text-green" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[1px] text-muted">E-mail</span>
                {contacts.emailContact}
              </span>
            </a>
            <a href={`mailto:${contacts.emailAdmin}`} className="feature-card flex items-center gap-3">
              <Mail className="text-green" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[1px] text-muted">Administração</span>
                {contacts.emailAdmin}
              </span>
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="pb-16">
        <div className="container-main">
          <h2 className="display mb-4 text-4xl text-green-deep">
            Mapa
          </h2>
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Mapa do escritório da Leal na Rua Voluntários da Pátria, 233, Centro, Curitiba"
              src={contacts.mapEmbed}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
