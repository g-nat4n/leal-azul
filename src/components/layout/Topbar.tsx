"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { contacts } from "@/lib/links";

export default function Topbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="hidden bg-green-deep text-white lg:block">
      <div className="container-main flex flex-wrap items-center gap-x-6 gap-y-2 py-2.5 text-[13px] text-white/85">
        <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${contacts.phoneTel}`}>
          <Phone size={14} />
          {contacts.phoneDisplay}
        </a>
        <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${contacts.emailAdmin}`}>
          <Mail size={14} />
          {contacts.emailAdmin}
        </a>
        <span className="inline-flex items-center gap-2">
          <MapPin size={14} />
          Rua Voluntários da Pátria, 233 cj 56 — Centro
        </span>
        <Link className="ml-auto font-bold text-foam" href="/contato">
          Ver endereço
        </Link>
      </div>
    </div>
  );
}
