import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="Página não encontrada"
      description="O endereço não existe ou foi movido. Volte para a página inicial."
    >
      <Link href="/" className="btn btn-sand mt-6">
        Ir para a home
      </Link>
    </PageHero>
  );
}
