"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Troca a cor do ícone conforme o que está atrás dele: branco sobre fundo
// escuro (rodapé, seção "Como podemos ajudar?"), azul sobre fundo claro —
// essas seções são marcadas com o atributo data-bg="dark".
function useIconeSobreFundoEscuro(ref: React.RefObject<HTMLElement>) {
  const [fundoEscuro, setFundoEscuro] = useState(false);

  useEffect(() => {
    let frame = 0;

    const checar = () => {
      frame = 0;
      const icone = ref.current;
      if (!icone) return;
      const iconeRect = icone.getBoundingClientRect();
      const secoesEscuras = document.querySelectorAll<HTMLElement>('[data-bg="dark"]');

      let sobrepoe = false;
      secoesEscuras.forEach((secao) => {
        const r = secao.getBoundingClientRect();
        if (
          r.top < iconeRect.bottom &&
          r.bottom > iconeRect.top &&
          r.left < iconeRect.right &&
          r.right > iconeRect.left
        ) {
          sobrepoe = true;
        }
      });
      setFundoEscuro(sobrepoe);
    };

    const agendar = () => {
      if (frame) return;
      frame = requestAnimationFrame(checar);
    };

    checar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [ref]);

  return fundoEscuro;
}

export default function AppDownloadBanner() {
  const iconeRef = useRef<HTMLAnchorElement>(null);
  const fundoEscuro = useIconeSobreFundoEscuro(iconeRef);

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
        ref={iconeRef}
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
