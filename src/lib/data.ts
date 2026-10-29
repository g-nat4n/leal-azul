export type Service = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "administracao",
    title: "Administração",
    summary: "Gestão condominial com assessoria completa ao síndico.",
    items: [
      "Emissão de boletos de taxas ordinárias, extraordinárias e outras, com código de barras para pagamento na rede bancária.",
      "Relatório com a composição das receitas e o último balancete do condomínio.",
      "Controle, cobrança administrativa e jurídica de inadimplentes.",
      "Consultoria financeira.",
      "Orientação ao síndico quanto aos seus atos administrativos.",
      "Elaboração de edital para convocação de assembleias.",
      "Orientação em assembleias gerais, ordinárias e extraordinárias.",
      "Indicação e assessoria em negociações com fornecedores, empreiteiras e prestadores de serviços.",
      "Pagamentos do condomínio (água, luz, fornecedores, INSS, FGTS, PIS e contribuição social), com cheques nominais aos favorecidos e planejamento mensal.",
      "Sistema de malote para transporte de documentos.",
    ],
  },
  {
    slug: "cobranca",
    title: "Cobrança",
    summary: "Rotina de boletos e acompanhamento da inadimplência.",
    items: ["Envio de boletos.", "Cobrança terceirizada.", "Relatórios de cobrança."],
  },
  {
    slug: "contabilidade",
    title: "Contabilidade",
    summary: "Demonstrativos claros para o síndico e para o conselho.",
    items: [
      "Processamento contábil das receitas e despesas.",
      "Demonstrativos financeiros com balancete mensal.",
      "Relatórios contábeis e conciliação bancária.",
      "Relatório de análise financeira mensal.",
      "Relatório de inadimplentes.",
      "Encadernação dos demonstrativos contábeis.",
    ],
  },
  {
    slug: "recursos-humanos",
    title: "Recursos Humanos",
    summary: "Folha, encargos e apoio na relação com a equipe do condomínio.",
    items: [
      "Elaboração de folha de pagamento e cálculos trabalhistas.",
      "Elaboração de guias de recolhimento de INSS, PIS e contribuições.",
      "Seleção, admissão e treinamento de funcionários, ou terceirização.",
      "Assessoria no recolhimento dos tributos de funcionários terceirizados.",
      "Consultoria jurídica de profissionais especializados em condomínio.",
    ],
  },
  {
    slug: "servicos-extras",
    title: "Serviços extras",
    summary: "Apoio cartorário, documental e operacional do dia a dia.",
    items: [
      "Cadastro do condomínio no CNPJ.",
      "Abertura de conta corrente, poupança ou aplicação.",
      "Elaboração e registro de atas.",
      "Elaboração de edital e participação nas assembleias.",
      "Pagamentos de tributos e taxas na rede bancária.",
      "Seleção de funcionários e empresas prestadoras de serviços.",
      "Pagamento de faturas.",
      "Serviço de boy, com documentação via malote personalizado.",
      "Elaboração de previsão orçamentária para aprovação do orçamento anual e das taxas.",
      "Consultoria e assessoria jurídica verbal.",
      "Serviço de postagem de correspondência.",
      "Serviço de protocolar documento em cartório.",
      "Assembleias gerais ordinárias e extraordinárias.",
      "Eventos para síndicos e zeladores.",
      "Espaço para assembleias.",
      "Treinamento para funcionários.",
    ],
  },
  {
    slug: "sindico",
    title: "Modelos de síndico",
    summary: "Síndico independente e síndico exclusivo para mandato tampão ou temporário.",
    items: [
      "Síndico independente, profissional e sem vínculo com moradores.",
      "Mandato tampão ou temporário quando o cargo fica vago.",
      "Gestão presente, com prestação de contas do período.",
    ],
  },
  {
    slug: "online",
    title: "Serviços on-line",
    summary: "Canal digital para síndico e condôminos acompanharem o condomínio.",
    items: [
      "Site personalizado do condomínio, com canal aberto entre síndico e condôminos.",
      "2ª via de boletos on-line e por e-mail.",
      "Pagamento de boletos via DDA.",
      "Relatórios financeiros detalhados: balancete e contas pagas.",
      "Documentos do condomínio, como regimento interno e convenção.",
      "Classificados e aniversariantes.",
      "Envios automatizados por e-mail de editais de assembleia, comunicados e informativos.",
    ],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Serviço não encontrado: ${slug}`);
  return service;
}

export type Law = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  points: string[];
  officialLabel: string;
  officialHref: string;
};

export const laws: Law[] = [
  {
    slug: "nbr-16280",
    title: "NBR 16280/2014",
    date: "11 de agosto de 2015",
    summary:
      "Norma da ABNT sobre reformas em edificações. Organiza projeto, execução e segurança para que a obra não coloque o prédio ou a vizinhança em risco.",
    points: [
      "A norma trata do sistema de gestão de reformas: processos, projetos, execução e segurança.",
      "Reforma que altere ou comprometa a segurança da edificação ou do entorno precisa de análise técnica.",
      "Dentro do prazo de garantia, a análise envolve construtora, incorporadora e projetista. Depois disso, exige laudo de engenheiro ou arquiteto.",
      "Com base no parecer do especialista, o síndico ou a administradora podem autorizar, autorizar com ressalvas ou proibir a reforma.",
    ],
    officialLabel: "Consultar a norma na ABNT",
    officialHref: "https://www.abntcatalogo.com.br/normagrid.aspx?Q=NBR%2016280",
  },
  {
    slug: "codigo-civil",
    title: "Lei 10.406 — Código Civil",
    date: "25 de julho de 2015",
    summary:
      "O condomínio edilício está nos artigos 1.331 e seguintes. É a regra geral sobre partes exclusivas, partes comuns e a vida em condomínio.",
    points: [
      "Unidades como apartamentos, salas e vagas podem ser de propriedade exclusiva, com a fração ideal correspondente.",
      "Solo, estrutura, telhado, redes gerais e o acesso à rua são partes comuns e não podem ser vendidos separadamente.",
      "A convenção de condomínio organiza direitos, deveres e a administração.",
      "O síndico representa o condomínio e responde pela gestão, com o apoio da administradora.",
    ],
    officialLabel: "Ler o Código Civil no Planalto",
    officialHref: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm",
  },
  {
    slug: "lei-do-inquilinato",
    title: "Lei do Inquilinato",
    date: "25 de julho de 2015",
    summary:
      "A Lei 8.245/1991 regula a locação de imóveis urbanos: contrato, deveres do locador e do locatário e os procedimentos da locação.",
    points: [
      "A locação de imóvel urbano segue esta lei, com exceções previstas no próprio texto, como imóveis públicos e vagas autônomas de garagem.",
      "O contrato define prazo, aluguel e encargos. Na falta de regra específica, valem as disposições da lei.",
      "Em condomínio, a locação convive com a convenção e o regimento interno: o inquilino também precisa observar as normas do prédio.",
    ],
    officialLabel: "Ler a Lei 8.245 no Planalto",
    officialHref: "https://www.planalto.gov.br/ccivil_03/leis/l8245.htm",
  },
  {
    slug: "lei-do-condominio",
    title: "Lei do Condomínio",
    date: "25 de julho de 2015",
    summary:
      "A Lei 4.591/1964 dispõe sobre o condomínio em edificações e as incorporações imobiliárias. Continua relevante ao lado do Código Civil.",
    points: [
      "Edificações em unidades isoladas podem ser vendidas como propriedades autônomas, cada uma com fração ideal do terreno e das áreas comuns.",
      "Cada unidade recebe uma identificação própria, numérica ou alfabética.",
      "A lei também trata da incorporação imobiliária, da construção e da instituição do condomínio.",
    ],
    officialLabel: "Ler a Lei 4.591 no Planalto",
    officialHref: "https://www.planalto.gov.br/ccivil_03/leis/l4591.htm",
  },
];

export function getLaw(slug: string) {
  const law = laws.find((item) => item.slug === slug);
  if (!law) throw new Error(`Legislação não encontrada: ${slug}`);
  return law;
}
