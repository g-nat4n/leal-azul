import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = {
  nome: 120,
  email: 160,
  telefone: 40,
  assunto: 160,
  mensagem: 4000,
} as const;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const honeypot = clean(body.website, 200);
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const nome = clean(body.nome, MAX.nome);
    const email = clean(body.email, MAX.email);
    const telefone = clean(body.telefone, MAX.telefone);
    const assunto = clean(body.assunto, MAX.assunto);
    const mensagem = clean(body.mensagem, MAX.mensagem);

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Nome, e-mail e mensagem são obrigatórios." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contato@lealcondominios.com.br";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "O envio por e-mail ainda não está configurado.", code: "SMTP_MISSING" },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const safeName = escapeHtml(nome);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(telefone || "Não informado");
    const safeSubject = escapeHtml(assunto || "Contato");
    const safeMessage = escapeHtml(mensagem).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: smtpFrom,
      to: contactEmail,
      replyTo: email,
      subject: `[Leal Condomínios] ${assunto || "Contato"} — ${nome}`,
      text: [`Nome: ${nome}`, `E-mail: ${email}`, `Telefone: ${telefone || "Não informado"}`, `Assunto: ${assunto || "Contato"}`, "", "Mensagem:", mensagem].join("\n"),
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Telefone:</strong> ${safePhone}</p>
        <p><strong>Assunto:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
  }
}
