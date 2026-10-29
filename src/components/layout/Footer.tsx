import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { contacts, portalList } from "@/lib/links";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-green-deep text-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="display text-5xl leading-none text-white">Leal</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-sand">Administradora de condomínios</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Administradora de condomínios em Curitiba. Gestão, atendimento e um canal on-line para síndico e condôminos.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Leal" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-foam hover:text-foam">
              <Instagram size={16} />
            </a>
            <a href={contacts.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Leal" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-foam hover:text-foam">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow-light">Páginas</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            <li><Link href="/empresa" className="hover:text-white">Empresa</Link></li>
            <li><Link href="/servicos/sindico" className="hover:text-white">Modelos de síndico</Link></li>
            <li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link href="/legislacao" className="hover:text-white">Legislação</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato e endereço</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow-light">Serviços</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`} className="hover:text-white">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow-light">On-line</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            {portalList.map((portal) => (
              <li key={portal.href}>
                <a href={portal.href} target="_blank" rel="noreferrer" className="hover:text-white">{portal.label}</a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/75">
            {contacts.street}
            <br />
            {contacts.district}
            <br />
            CEP {contacts.cep}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-main grid gap-3 py-5 text-xs text-white/60 sm:grid-cols-3 sm:items-center">
          <p>© {new Date().getFullYear()} Leal Administradora de Condomínios. Todos os direitos reservados.</p>
          <p className="flex flex-wrap items-center gap-x-1.5 text-white/75 sm:justify-center">
            <span>Site construído por</span>
            <a href="https://grupocostabr.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold text-white transition hover:text-foam">
              Grupo Costa Brasil
            </a>
            <a href="https://www.instagram.com/grupocostabrasil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Grupo Costa Brasil" className="inline-flex text-white/80 transition hover:text-foam">
              <Instagram size={14} strokeWidth={2} />
            </a>
          </p>
          <Link href="/politica-de-privacidade" className="hover:text-white sm:justify-self-end">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
