"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Posição fixa do ícone (ver classes "bottom-6 right-6" + "h-16 w-16" no
// JSX abaixo) usada pra calcular o ponto observado.
const ICONE_OFFSET_PX = 24; // bottom-6 / right-6 (1.5rem)
const ICONE_TAMANHO_PX = 64; // h-16 / w-16 (4rem)

// Troca a cor do ícone conforme o que está exatamente atrás dele: branco
// sobre fundo escuro, azul sobre fundo claro. Em vez de perguntar "a seção
// inteira é clara ou escura?" (o que erra sempre que um elemento local tem
// a cor oposta da seção — um card branco dentro do bloco "Como podemos
// ajudar?", o botão azul "Falar com atendimento" dentro de uma seção
// clara), usamos elementsFromPoint no ponto exato do ícone e subimos até o
// elemento marcado mais próximo (data-bg="dark"/"light") — o elemento local
// sempre vence sobre a seção que o contém.
function useIconeSobreFundoEscuro() {
  const [fundoEscuro, setFundoEscuro] = useState(false);

  useEffect(() => {
    // Throttle por tempo (não por requestAnimationFrame): rAF fica pausado
    // em abas em segundo plano, o que travaria a cor do ícone na última
    // detecção feita antes de a aba perder o foco.
    let ultimaExecucao = 0;
    const INTERVALO_MIN_MS = 32;

    const detectar = () => {
      ultimaExecucao = Date.now();
      const fab = document.querySelector(".app-fab");
      if (!fab) return;

      const x = window.innerWidth - ICONE_OFFSET_PX - ICONE_TAMANHO_PX / 2;
      const y = window.innerHeight - ICONE_OFFSET_PX - ICONE_TAMANHO_PX / 2;
      const alvo = document.elementsFromPoint(x, y).find((el) => !fab.contains(el));
      const marcado = alvo?.closest("[data-bg]");

      setFundoEscuro(marcado?.getAttribute("data-bg") === "dark");
    };

    const agendar = () => {
      if (Date.now() - ultimaExecucao < INTERVALO_MIN_MS) return;
      detectar();
    };

    detectar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, []);

  return fundoEscuro;
}

export default function AppDownloadBanner() {
  const fundoEscuro = useIconeSobreFundoEscuro();

  return (
    <div
      role="region"
      aria-label="Aviso sobre o aplicativo Plansul"
      className="app-fab fixed bottom-6 right-6 z-50 flex max-w-[calc(100vw-3rem)] items-center gap-1"
    >
      <Link
        href="/beneficiario/aplicativo"
        className="whitespace-nowrap rounded-full bg-plansul-blue py-2.5 pl-4 pr-3 text-sm font-semibold text-white shadow-lg hover:underline"
      >
        Baixe nosso aplicativo
      </Link>

      <Link
        href="/beneficiario/aplicativo"
        aria-label="Baixar aplicativo Plansul"
        title="Baixar aplicativo Plansul"
        className="motion-safe:animate-pulse-scale inline-flex h-16 w-16 shrink-0 items-center justify-center drop-shadow-lg"
      >
        <Image
          src={fundoEscuro ? "/icons/app-qrcode-phone-white.png" : "/icons/app-qrcode-phone-blue.png"}
          alt=""
          width={252}
          height={256}
          className="h-full w-full object-contain"
        />
      </Link>
    </div>
  );
}
