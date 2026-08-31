"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// O menu desktop tem 9 itens (incluindo IDSS, Reajustes e Notícias Plansul)
// — em telas médias (lg, 1024px) ele não cabe mais numa linha só. Por isso a
// troca para navegação mobile (hambúrguer/drawer) acontece em "xl" (1280px),
// não "lg".
const DESKTOP_BREAKPOINT = 1280;

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu mobile automaticamente se a tela crescer para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Trava o scroll do body quando o drawer mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-plansul-blue to-plansul-teal"
      />
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Página inicial da Plansul">
          <Image
            src="/logo-plansul.png"
            alt="Plansul"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-lg font-bold text-plansul-blue">Plansul</span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-x-4 gap-y-1 text-[13px] font-medium text-slate-700 2xl:gap-x-6 2xl:text-sm">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap rounded-sm transition-colors hover:text-plansul-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plansul-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="whitespace-nowrap rounded-sm transition-colors hover:text-plansul-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plansul-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden shrink-0 xl:block">
          <a
            href={EXTERNAL_LINKS.portalBeneficiario}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-plansul-blue px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-plansul-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plansul-blue 2xl:px-5 2xl:text-sm"
          >
            Portal do Beneficiário
          </a>
        </div>

        {/* Botão hambúrguer mobile/tablet */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-plansul-blue xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Drawer mobile/tablet */}
      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-white xl:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav aria-label="Navegação mobile" className="flex h-full flex-col justify-between overflow-y-auto px-4 pb-8 pt-4">
          <ul className="flex flex-col divide-y divide-slate-100 text-base">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block min-h-[48px] py-3 font-medium text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block min-h-[48px] py-3 font-medium text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <a
            href={EXTERNAL_LINKS.portalBeneficiario}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-5 py-3 text-base font-semibold text-white"
          >
            Portal do Beneficiário
          </a>
        </nav>
      </div>
    </header>
  );
}
