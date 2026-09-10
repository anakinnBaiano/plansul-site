import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { faqSetores } from "@/data/faqBeneficiario";

export const metadata: Metadata = {
  title: "FAQ do Beneficiário",
  description: "Perguntas frequentes do beneficiário Plansul, organizadas por setor.",
};

export default function FaqBeneficiarioPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Beneficiário", href: "/beneficiario" }, { label: "FAQ" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">FAQ do Beneficiário</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Escolha um setor abaixo para ver as perguntas e respostas mais comuns.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqSetores.map((setor) => (
            <li key={setor.slug}>
              <ServiceCard
                icon={setor.icon}
                titulo={setor.nome}
                descricao={setor.descricao}
                href={`/beneficiario/faq/${setor.slug}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
