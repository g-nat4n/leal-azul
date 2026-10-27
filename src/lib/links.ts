export const contacts = {
  phoneDisplay: "(41) 3233-0078",
  phoneTel: "+554132330078",
  whatsappDisplay: "(41) 98418-6775",
  whatsappNumber: "5541984186775",
  emailAdmin: "adm@lealcondominios.com.br",
  emailContact: "contato@lealcondominios.com.br",
  street: "Rua Voluntários da Pátria, 233, conjunto 56",
  district: "Centro, Curitiba — PR",
  cep: "80020-942",
  facebook: "https://www.facebook.com/leal.administradora",
  instagram: "https://www.instagram.com/leal.administradora/",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1485175314956!2d-49.27667778498581!3d-25.433297783786877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4729995bd29%3A0x5db2870a4b29c22!2sR.+Volunt%C3%A1rios+da+P%C3%A1tria%2C+233+-+Centro%2C+Curitiba+-+PR!5e0!3m2!1spt-BR!2sbr!4v1444357720698",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+Voluntarios+da+Patria+233+Centro+Curitiba+PR",
} as const;

export const googleReview = {
  scoreLabel: "5,0",
  count: 3,
  href: "https://www.google.com/maps/search/?api=1&query=Leal+Administradora+de+Condominios+Rua+Voluntarios+da+Patria+233+Curitiba",
  quotes: [
    {
      text: "Conheço o pessoal que trabalha lá. Leal são muito competentes, tudo bem transparente e ágil, facilitando a nossa vida.",
      date: "junho de 2023",
    },
    {
      text: "Trabalho muito profissional e nós atendem prontamente.",
      date: "abril de 2023",
    },
  ],
} as const;

export function whatsappHref(text = "Olá, gostaria de falar com a Leal Administradora de Condomínios.") {
  return `https://api.whatsapp.com/send?phone=${contacts.whatsappNumber}&text=${encodeURIComponent(text)}`;
}

export const portals = {
  condomino: {
    label: "Condômino",
    description: "Boletos, documentos e comunicados do condomínio.",
    href: "https://condprime.com/home/login/?id=12&painel=cond",
  },
  gestao: {
    label: "Gestão",
    description: "Painel do síndico para acompanhar a administração.",
    href: "https://condprime.com/home/login/?id=12&painel=sind",
  },
  portaria: {
    label: "Portaria",
    description: "Acesso da portaria ao sistema do condomínio.",
    href: "https://condprime.com/home/login/?id=12&painel=port",
  },
} as const;

export const portalList = [portals.condomino, portals.gestao, portals.portaria];
