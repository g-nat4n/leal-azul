import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import SiteLayout from "@/components/layout/SiteLayout";
import "@/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: {
    default: "Leal Administradora de Condomínios",
    template: "%s | Leal Administradora de Condomínios",
  },
  description:
    "Administradora de condomínios em Curitiba. Gestão, cobrança, contabilidade e atendimento ao síndico com a Leal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
