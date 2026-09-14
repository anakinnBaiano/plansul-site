"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Posição fixa do ícone (ver classes "bottom-6 right-6" + "h-16 w-16" no
// JSX abaixo) usada pra calcular a região observada. Não medimos o
// elemento em si via getBoundingClientRect porque ele tem uma animação de
// pulso (scale) rodando o tempo todo, o que faria o retângulo medido
// oscilar e desalinhar a detecção.
const ICONE_OFFSET_PX = 24; // bottom-6 / right-6 (1.5rem)
const ICONE_TAMANHO_PX = 64; // h-16 / w-16 (4rem)

// Troca a cor do ícone conforme o que está atrás dele: branco sobre fundo
// escuro (rodapé, seção "Como podemos ajudar?"), azul sobre fundo claro —
// essas seções são marcadas com o atributo data-bg="dark".
//
// Usa IntersectionObserver (em vez de recalcular getBoundingClientRect a
// cada evento de scroll) porque é a API do navegador feita pra essa
// pergunta ("isso está visível numa região da tela?") e continua correta
// em telas pequenas, onde a barra de endereço do navegador some/aparece
// durante o scroll e muda a altura da viewport no meio do caminho.
function useIconeSobreFundoEscuro() {
  const [fundoEscuro, setFundoEscuro] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const visiveis = new Map<Element, boolean>();

    const atualizarEstado = () => {
      setFundoEscuro([...visiveis.values()].some(Boolean));
    };

    const recriarObserver = () => {
      observer?.disconnect();
      visiveis.clear();

      const top = window.innerHeight - ICONE_OFFSET_PX - ICONE_TAMANHO_PX;
      const right = ICONE_OFFSET_PX;
      const bottom = ICONE_OFFSET_PX;
      const left = window.innerWidth - ICONE_OFFSET_PX - ICONE_TAMANHO_PX;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visiveis.set(entry.target, entry.isIntersecting);
          });
          atualizarEstado();
        },
        {
          root: null,
          rootMargin: `${-top}px ${-right}px ${-bottom}px ${-left}px`,
          threshold: 0,
        }
      );

      document.querySelectorAll<HTMLElement>('[data-bg="dark"]').forEach((secao) => {
        visiveis.set(secao, false);
        observer!.observe(secao);
      });
    };

    recriarObserver();
    window.addEventListener("resize", recriarObserver);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", recriarObserver);
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
