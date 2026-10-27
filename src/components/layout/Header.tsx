"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { portalList } from "@/lib/links";
import { services } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicos", label: "Serviços", children: services.map((item) => ({ href: `/servicos/${item.slug}`, label: item.title })) },
  { href: "/legislacao", label: "Legislação" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileOnline, setMobileOnline] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
    setMobileOnline(false);
  }, [pathname]);

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "closed";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.dataset.menu = "closed";
      document.body.style.overflow = "";
    };
  }, [open]);
  const [onlineOpen, setOnlineOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const itemClass = "home-nav text-[12px] font-medium uppercase tracking-[0.18em] text-white/80";
  const itemActive = "home-nav text-[12px] font-medium uppercase tracking-[0.18em] text-sand";
  const menuPanel = "menu-float absolute z-20 rounded-2xl border border-white/15 bg-[#10283a]/70 p-2 pt-3 text-foam shadow-[0_22px_48px_rgba(0,0,0,0.28)] backdrop-blur-md";
  const menuLink = "block rounded-xl px-3 py-2.5 text-sm font-semibold text-foam transition hover:bg-white/10";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-[#0c2434] ${scrolled ? "lg:bg-[#0c2434]/70 lg:backdrop-blur-md" : "lg:bg-transparent"}`}>
      <div className="relative mx-auto flex h-24 w-full items-center gap-4 px-4 lg:px-12">
        <Link href="/" className="shrink-0 lg:hidden">
          <Image src="/images/logo-leal.png" alt="Leal Administradora de Condomínios" width={180} height={205} priority className="h-20 w-auto" />
        </Link>

        <nav className="absolute left-[40%] hidden -translate-x-1/2 items-center lg:flex" aria-label="Principal">
          {links.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="group/menu relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 ${isActive(item.href) ? itemActive : itemClass}`}
                  data-active={isActive(item.href) ? "true" : undefined}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover/menu:rotate-180" />
                </Link>
                {servicesOpen && (
                  <div className={`${menuPanel} left-0 top-full w-64`}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={menuLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 ${isActive(item.href) ? itemActive : itemClass}`}
                data-active={isActive(item.href) ? "true" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}

          <div className="group/menu relative" onMouseEnter={() => setOnlineOpen(true)} onMouseLeave={() => setOnlineOpen(false)}>
            <button type="button" className={`inline-flex items-center gap-1 px-3 py-2 ${itemClass}`}>
              On-line
              <ChevronDown size={14} className="transition-transform duration-200 group-hover/menu:rotate-180" />
            </button>
            {onlineOpen && (
              <div className={`${menuPanel} right-0 top-full w-72`}>
                {portalList.map((portal) => (
                  <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className={menuLink}>
                    <span className="block text-sm font-bold">{portal.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-foam/70">{portal.description}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link href="/" className="absolute right-6 top-3 hidden lg:right-10 lg:top-4 lg:block">
          <Image src="/images/logo-leal.png" alt="Leal Administradora de Condomínios" width={180} height={205} priority className="h-[148px] w-auto" />
        </Link>

        <button type="button" className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 bottom-0 top-24 z-40 overflow-y-auto bg-[#0c2434] lg:hidden" aria-label="Menu">
          <div className="container-main flex flex-col pb-28 pt-2">
            {links.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-white/15">
                  <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-foam" onClick={() => setMobileServices((value) => !value)} aria-expanded={mobileServices}>
                    {item.label}
                    <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServices && (
                    <div className="grid pb-3">
                      <Link href={item.href} className="px-4 py-2 text-sm font-semibold text-foam/70">Ver todos</Link>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="px-4 py-2 text-sm text-foam">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="block border-b border-white/15 px-1 py-4 font-bold text-foam">
                  {item.label}
                </Link>
              ),
            )}
            <div className="border-b border-white/15">
              <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-foam" onClick={() => setMobileOnline((value) => !value)} aria-expanded={mobileOnline}>
                On-line
                <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileOnline ? "rotate-180" : ""}`} />
              </button>
              {mobileOnline && (
                <div className="grid pb-3">
                  {portalList.map((portal) => (
                    <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm text-foam" onClick={() => setOpen(false)}>
                      {portal.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={portalList[0].href} target="_blank" rel="noreferrer" className="btn btn-primary mt-6" onClick={() => setOpen(false)}>
              Área do cliente
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
