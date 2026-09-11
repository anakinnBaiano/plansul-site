"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Smartphone, X } from "lucide-react";

const STORAGE_KEY = "plansul-app-banner-dismissed";

export default function AppDownloadBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const fechar = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Se o localStorage não estiver disponível, o aviso só some nesta sessão.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso sobre o aplicativo Plansul"
      className="app-fab fixed bottom-6 right-6 z-50 flex max-w-[calc(100vw-3rem)] items-center gap-2"
    >
      <div className="flex items-center gap-1 rounded-full bg-plansul-blue py-2.5 pl-4 pr-2 text-white shadow-lg">
        <Link
          href="/beneficiario/aplicativo"
          className="whitespace-nowrap text-sm font-semibold hover:underline"
        >
          Baixe nosso aplicativo
        </Link>
        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar aviso"
          className="shrink-0 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>

      <Link
        href="/beneficiario/aplicativo"
        aria-label="Baixar aplicativo Plansul"
        title="Baixar aplicativo Plansul"
        className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-plansul-blue text-white shadow-lg transition-transform hover:scale-105 hover:bg-plansul-blue-light"
      >
        <Smartphone size={30} aria-hidden="true" />
      </Link>
    </div>
  );
}
