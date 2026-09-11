import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function AppDownloadBanner() {
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
        className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-plansul-blue text-white shadow-lg transition-transform hover:scale-105 hover:bg-plansul-blue-light"
      >
        <Smartphone size={28} aria-hidden="true" />
      </Link>
    </div>
  );
}
