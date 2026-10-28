"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import { contacts, portalList, whatsappHref } from "@/lib/links";
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

  const itemClass = "home-nav text-[12px] font-medium uppercase tracking-[0.18em] text-green-deep/75";
  const itemActive = "home-nav text-[12px] font-medium uppercase tracking-[0.18em] text-sand-deep";
  const menuPanel = "menu-float absolute z-20 rounded-2xl border border-line bg-white p-2 pt-3 text-green-deep shadow-card";
  const menuLink = "block rounded-xl px-3 py-2.5 text-sm font-semibold text-green-deep transition hover:bg-cream";

  const socials = [
    { href: contacts.instagram, label: "Instagram da Leal", icon: <Instagram size={16} /> },
    { href: contacts.facebook, label: "Facebook da Leal", icon: <Facebook size={16} /> },
    { href: contacts.youtube, label: "YouTube da Leal", icon: <Youtube size={16} /> },
    {
      href: whatsappHref(),
      label: "WhatsApp da Leal",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.7.7-3-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 4.7 4.7 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
        </svg>
      ),
    },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white ${scrolled ? "shadow-[0_8px_24px_rgba(15,43,63,0.06)]" : ""}`}>
      <div className="relative mx-auto flex h-[148px] w-full items-center px-4 lg:h-[188px] lg:px-12">
        <Link href="/" className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:hidden">
          <Image src="/images/logo-leal.png" alt="Leal Administradora de Condomínios" width={180} height={205} priority className="h-[118px] w-auto" />
        </Link>

        <nav className="absolute left-[40%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex" aria-label="Principal">
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
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted">{portal.description}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="absolute right-10 top-0 hidden h-full items-center lg:flex">
          <nav className="mt-3 flex items-center self-start pr-4" aria-label="Redes sociais">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="inline-flex h-8 w-8 items-center justify-center text-green-deep transition hover:text-sand">
                {item.icon}
              </a>
            ))}
          </nav>
          <Link href="/" className="ml-3">
            <Image src="/images/logo-leal.png" alt="Leal Administradora de Condomínios" width={180} height={205} priority className="h-[148px] w-auto" />
          </Link>
        </div>
        <nav className="absolute right-3 top-2 z-20 flex lg:hidden" aria-label="Redes sociais">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="inline-flex h-5 w-5 items-center justify-center text-green-deep [&_svg]:h-3.5 [&_svg]:w-3.5">
              {item.icon}
            </a>
          ))}
        </nav>

        <button type="button" className="relative z-20 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-green-deep lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 bottom-0 top-[148px] z-40 overflow-y-auto bg-white lg:hidden" aria-label="Menu">
          <div className="container-main flex flex-col pb-28 pt-2">
            {links.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-line">
                  <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-green-deep" onClick={() => setMobileServices((value) => !value)} aria-expanded={mobileServices}>
                    {item.label}
                    <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServices && (
                    <div className="grid pb-3">
                      <Link href={item.href} className="px-4 py-2 text-sm font-semibold text-muted">Ver todos</Link>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="px-4 py-2 text-sm text-green-deep">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="block border-b border-line px-1 py-4 font-bold text-green-deep">
                  {item.label}
                </Link>
              ),
            )}
            <div className="border-b border-line">
              <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-green-deep" onClick={() => setMobileOnline((value) => !value)} aria-expanded={mobileOnline}>
                On-line
                <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileOnline ? "rotate-180" : ""}`} />
              </button>
              {mobileOnline && (
                <div className="grid pb-3">
                  {portalList.map((portal) => (
                    <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm text-green-deep" onClick={() => setOpen(false)}>
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
