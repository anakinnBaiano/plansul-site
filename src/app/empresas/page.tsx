import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Empresas",
  description: "Planos de saúde para empresas de todos os portes.",
};

export default function EmpresasPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Empresas" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Planos para empresas</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Cuidar das pessoas também é cuidar do negócio.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={EXTERNAL_LINKS.portalEmpresa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-plansul-blue px-6 py-3 text-sm font-semibold text-plansul-blue hover:bg-plansul-blue hover:text-white"
          >
            Portal da Empresa
          </Link>
          <Link
            href={CONTACT.whatsappPlanosHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-plansul-teal px-6 py-3 text-sm font-semibold text-plansul-teal hover:bg-plansul-teal hover:text-white"
          >
            Falar com atendimento
          </Link>
        </div>
      </section>
    </>
  );
}
