import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-panel relative px-6 pb-20 pt-[168px] text-center text-white sm:px-10 lg:pt-[220px]">
      <div className="container-main">
        <p className="eyebrow-light">404</p>
        <h1 className="display mt-3 text-5xl text-white">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/75">O endereço não existe ou foi movido. Volte para a página inicial.</p>
        <Link href="/" className="btn btn-sand mt-6">
          Ir para a home
        </Link>
      </div>
    </section>
  );
}
