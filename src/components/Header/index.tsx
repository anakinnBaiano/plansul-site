"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/constants";
import { noticias, isCategoriaAlerta } from "@/data/noticias";
import { cn } from "@/lib/utils";

const TEM_NOTICIA_ALERTA = noticias.some((n) => isCategoriaAlerta(n.categoria));

// O menu desktop tem 9 itens (incluindo IDSS, Reajustes e Notícias Plansul).
// Em "xl" (1280px) ele até cabe, mas espremido a ponto de o próprio menu
// invadir o botão "Portal do Beneficiário" — por isso a troca pra navegação
// mobile (hambúrguer/drawer) só acontece em "2xl" (1536px), faixa em que
// sobra espaço de verdade pra logo + 9 itens + botão numa linha só.
const DESKTOP_BREAKPOINT = 1536;

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
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-plansul-blue to-plansul-teal"
      />
      <div className="mx-auto flex h-16 max-w-[1360px] items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Página inicial da Plansul">
          <Image
            src="/logo-plansul.png"
            alt="Plansul"
            width={1405}
            height={375}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden min-w-0 2xl:ml-6 2xl:block">
          <ul className="flex items-center gap-x-3 gap-y-1 text-[13px] font-medium text-slate-700 2xl:gap-x-4 2xl:text-sm">
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
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-sm transition-colors hover:text-plansul-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plansul-teal"
                  >
                    {link.label}
                    {link.label === "Notícias Plansul" && TEM_NOTICIA_ALERTA && (
                      <span aria-hidden="true" className="motion-safe:animate-blink">
                        ⚠️
                      </span>
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="ml-auto hidden shrink-0 2xl:block">
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
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg text-plansul-blue 2xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>
    </header>

    {/* Drawer mobile/tablet — fora do <header> de propósito: o header usa
        backdrop-blur (backdrop-filter), que no Chrome vira containing block
        para descendentes fixed e espremia esse drawer dentro dos 64px do
        header (altura 0, nada visível). */}
    <div
      id="menu-mobile"
      className={cn(
        "fixed inset-0 top-16 z-[60] bg-white 2xl:hidden",
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
                  className="flex min-h-[48px] items-center gap-1.5 py-3 font-medium text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal"
                >
                  {link.label}
                  {link.label === "Notícias Plansul" && TEM_NOTICIA_ALERTA && (
                    <span aria-hidden="true" className="motion-safe:animate-blink">
                      ⚠️
                    </span>
                  )}
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
    </>
  );
}
