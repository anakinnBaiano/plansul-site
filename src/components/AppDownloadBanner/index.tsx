"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleAlert, X } from "lucide-react";

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
    <div role="region" aria-label="Aviso sobre o aplicativo Plansul" className="bg-red-600 text-white">
      <div className="mx-auto flex max-w-[1360px] items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <CircleAlert size={20} className="shrink-0" aria-hidden="true" />
        <p className="flex-1 text-sm font-medium leading-snug">
          Baixe agora o aplicativo Plansul — já disponível para{" "}
          <span className="font-bold">Android</span> e <span className="font-bold">iOS</span>.
        </p>
        <Link
          href="/beneficiario/aplicativo"
          className="shrink-0 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Baixar agora
        </Link>
        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar aviso"
          className="shrink-0 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
