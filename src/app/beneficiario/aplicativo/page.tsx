import type { Metadata } from "next";
import { Apple, PlayCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { APP_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aplicativo",
  description: "Baixe o aplicativo Plansul para Android e iOS e acompanhe seu plano pelo celular.",
};

export default function AplicativoPage() {
  const appStoreDisponivel = APP_LINKS.appStore.startsWith("http");

  return (
    <>
      <Breadcrumb items={[{ label: "Beneficiário", href: "/beneficiario" }, { label: "Aplicativo" }]} />
      <section className="mx-auto max-w-content px-4 pb-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Aplicativo Plansul</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Baixe o aplicativo do beneficiário Plansul e tenha carteirinha digital, boletos e
          autorizações sempre à mão.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={APP_LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
          >
            <PlayCircle size={20} aria-hidden="true" />
            Baixar na Play Store (Android)
          </a>

          {appStoreDisponivel ? (
            <a
              href={APP_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
            >
              <Apple size={20} aria-hidden="true" />
              Baixar na App Store (iOS)
            </a>
          ) : (
            <span className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-dashed border-slate-300 px-6 py-3 text-sm font-medium text-slate-400">
              <Apple size={20} aria-hidden="true" />
              App Store (iOS) em breve
            </span>
          )}
        </div>
      </section>
    </>
  );
}
