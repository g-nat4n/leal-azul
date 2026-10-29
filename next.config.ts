import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/sindico", destination: "/servicos/sindico", permanent: false },
      { source: "/contac-us", destination: "/contato", permanent: true },
      { source: "/clientes", destination: "/empresa", permanent: true },
      { source: "/portfolio/administracao", destination: "/servicos/administracao", permanent: true },
      { source: "/portfolio/cobranca", destination: "/servicos/cobranca", permanent: true },
      { source: "/portfolio/contabilidade", destination: "/servicos/contabilidade", permanent: true },
      { source: "/portfolio/rh", destination: "/servicos/recursos-humanos", permanent: true },
      { source: "/portfolio/cartorio", destination: "/servicos/servicos-extras", permanent: true },
      { source: "/portfolio/online", destination: "/servicos/online", permanent: true },
      { source: "/nbr-162802014", destination: "/legislacao/nbr-16280", permanent: true },
      { source: "/lei-10-406-novo-codigo-civil", destination: "/legislacao/codigo-civil", permanent: true },
      { source: "/lei-do-inquilinato", destination: "/legislacao/lei-do-inquilinato", permanent: true },
      { source: "/lei-do-condominio", destination: "/legislacao/lei-do-condominio", permanent: true },
    ];
  },
};

export default nextConfig;
