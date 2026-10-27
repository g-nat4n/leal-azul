import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative flex flex-col lg:grid lg:min-h-[560px] lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)]">
      <div className="hero-panel relative flex flex-col items-center justify-center px-6 pb-12 pt-24 text-center text-white sm:px-10 lg:px-16 lg:pb-16 lg:pt-32">
        <div className="w-full max-w-2xl">
          <nav className="text-sm text-white/65" aria-label="Trilha">
            {crumbs.map((crumb, index) => (
              <span key={crumb.label}>
                {index > 0 && <span className="px-2">/</span>}
                {crumb.href ? <Link href={crumb.href} className="hover:text-sand">{crumb.label}</Link> : crumb.label}
              </span>
            ))}
          </nav>
          {eyebrow && <p className="eyebrow-light mt-5">{eyebrow}</p>}
          <h1 className="display mt-3 text-[clamp(40px,5vw,64px)] leading-[0.98] text-white">
            {title}
          </h1>
          {description && <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">{description}</p>}
        </div>
      </div>
      <div className="relative h-[32vh] min-h-52 lg:h-auto lg:min-h-full">
        <Image
          src="/images/hero-condominio.jpg"
          alt="Fachada de um condomínio residencial, com varandas e janelas"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
      </div>
    </section>
  );
}
