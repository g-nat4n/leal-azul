import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { contacts } from "@/lib/links";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Leal trata os dados enviados pelo site.",
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de privacidade"
        description="A E N Leal Contabilidade trata os dados enviados neste site para responder contatos e enviar propostas."
      />
      <section className="section-padding bg-cream">
        <div className="container-main max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>Última atualização de referência do site anterior: 21 de janeiro de 2021.</p>
          <p>
            No formulário de contato coletamos nome, e-mail, telefone e a mensagem, para retornar o pedido. O prazo de resposta é de até 2 dias úteis.
          </p>
          <p>
            O site também pode registrar dados técnicos de navegação, como endereço IP, conforme o aparelho e o navegador. Os dados ficam pelo tempo necessário para o atendimento, o envio de propostas e a comunicação com o cliente.
          </p>
          <p>
            Para falar sobre os seus dados, use o telefone {contacts.whatsappDisplay} ou o e-mail {contacts.emailAdmin}.
          </p>
        </div>
      </section>
    </>
  );
}
