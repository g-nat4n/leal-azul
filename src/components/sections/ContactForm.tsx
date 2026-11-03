"use client";

import { FormEvent, useState } from "react";
import { contacts, whatsappHref } from "@/lib/links";

const initial = { nome: "", email: "", telefone: "", assunto: "", mensagem: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function update(field: keyof typeof initial, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setStatus("error");
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data: { error?: string; code?: string } = {};
      try {
        data = (await response.json()) as { error?: string; code?: string };
      } catch {
        throw new Error("Não foi possível enviar. Tente de novo em instantes.");
      }

      if (!response.ok) {
        if (data.code === "SMTP_MISSING") {
          setStatus("error");
          setError(
            `O envio automático ainda não está disponível. Fale pelo WhatsApp ${contacts.whatsappDisplay} ou pelo telefone ${contacts.phoneDisplay}.`,
          );
          return;
        }
        throw new Error(data.error || "Não foi possível enviar.");
      }

      setForm(initial);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Não foi possível enviar.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
      <div>
        <h2 className="display text-4xl leading-none text-green-deep">Envie uma mensagem</h2>
        <p className="mt-1 text-sm text-muted">Solicite uma proposta e conheça o que a Leal pode oferecer ao condomínio.</p>
      </div>
      <label className="sr-only" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" className="hidden" value={form.website} onChange={(event) => update("website", event.target.value)} />
      </label>
      <label className="text-sm font-bold text-green-deep">
        Seu nome
        <input className="form-input" value={form.nome} onChange={(event) => update("nome", event.target.value)} required />
      </label>
      <label className="text-sm font-bold text-green-deep">
        Seu e-mail
        <input type="email" className="form-input" value={form.email} onChange={(event) => update("email", event.target.value)} required />
      </label>
      <label className="text-sm font-bold text-green-deep">
        Telefone
        <input className="form-input" value={form.telefone} onChange={(event) => update("telefone", event.target.value)} />
      </label>
      <label className="text-sm font-bold text-green-deep">
        Assunto
        <input className="form-input" value={form.assunto} onChange={(event) => update("assunto", event.target.value)} />
      </label>
      <label className="text-sm font-bold text-green-deep">
        Sua mensagem
        <textarea className="form-input min-h-32 resize-y" value={form.mensagem} onChange={(event) => update("mensagem", event.target.value)} required />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>
      {status === "success" && <p className="text-sm font-semibold text-green">Mensagem enviada. Em breve a equipe retorna o contato.</p>}
      {status === "error" && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-red-700">{error}</p>
          {error.includes("WhatsApp") && (
            <a
              href={whatsappHref("Olá, gostaria de solicitar uma proposta para o meu condomínio.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-bold text-green-deep underline underline-offset-4 hover:text-sand-deep"
            >
              Abrir WhatsApp
            </a>
          )}
        </div>
      )}
    </form>
  );
}
