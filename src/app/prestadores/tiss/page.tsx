import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "TISS",
  description: "Informações sobre o padrão TISS adotado pela Plansul.",
};

export default function TissPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Prestadores", href: "/prestadores" }, { label: "TISS" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">TISS</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Padrão TISS (Troca de Informações em Saúde Suplementar) adotado pela Plansul
          para o envio de guias e comunicação com a rede credenciada.
        </p>
      </section>
    </>
  );
}
