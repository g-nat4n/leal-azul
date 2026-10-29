import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[640px] lg:min-h-[620px]">
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/hero-cidade-fundo.jpg?v=1600" />
          <img
            src="/images/hero-cidade-mobile.jpg?v=1170"
            alt="Horizonte de uma cidade à noite, com prédios iluminados"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,36,52,0.78)_0%,rgba(12,36,52,0.55)_52%,rgba(12,36,52,0.32)_100%)]" />
      </div>
      <div className="relative z-10 flex min-h-[640px] flex-col items-center justify-center px-6 pb-16 pt-[168px] text-center text-white sm:px-10 lg:min-h-[620px] lg:px-16 lg:pb-16 lg:pt-[210px]">
        <div className="w-full max-w-3xl" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}>
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sand sm:text-base">{eyebrow}</p>}
          <h1 className="display mt-4 text-[clamp(42px,6vw,72px)] leading-[0.98] text-white">{title}</h1>
          <span className="mx-auto mt-5 block h-px w-16 bg-sand" />
          {description && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
