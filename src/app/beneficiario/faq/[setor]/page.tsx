import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { faqSetores } from "@/data/faqBeneficiario";

type Props = {
  params: { setor: string };
};

export function generateStaticParams() {
  return faqSetores.map((setor) => ({ setor: setor.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const setor = faqSetores.find((item) => item.slug === params.setor);

  if (!setor) {
    return {};
  }

  return {
    title: `FAQ — ${setor.nome}`,
    description: setor.descricao,
  };
}

export default function FaqSetorPage({ params }: Props) {
  const setor = faqSetores.find((item) => item.slug === params.setor);

  if (!setor) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Beneficiário", href: "/beneficiario" },
          { label: "FAQ", href: "/beneficiario/faq" },
          { label: setor.nome },
        ]}
      />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-plansul-blue">
          <setor.icon size={30} className="shrink-0 text-plansul-teal" aria-hidden="true" />
          {setor.nome}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">{setor.descricao}</p>

        <div className="mt-8 space-y-8">
          {setor.intro && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              {setor.intro}
            </div>
          )}

          {setor.categorias.map((categoria, categoriaIndex) =>
            categoria.titulo ? (
              <details
                key={categoria.titulo}
                className="group rounded-2xl border border-slate-200 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-6 text-lg font-bold text-plansul-blue marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal">
                  {categoria.titulo}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-plansul-teal transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="space-y-4 border-t border-slate-200 p-6 pt-4">
                  {categoria.intro && <p className="text-sm text-slate-600">{categoria.intro}</p>}

                  <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                    {categoria.itens.map((item) => (
                      <details key={item.pergunta} className="group/item p-6 open:bg-slate-50">
                        <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal">
                          {item.pergunta}
                        </summary>
                        <div className="mt-3 text-sm text-slate-600">{item.resposta}</div>
                      </details>
                    ))}
                  </div>
                </div>
              </details>
            ) : (
              <div key={categoriaIndex}>
                {categoria.intro && <p className="mb-4 text-sm text-slate-600">{categoria.intro}</p>}

                <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
                  {categoria.itens.map((item) => (
                    <details key={item.pergunta} className="group p-6 open:bg-slate-50">
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal">
                        {item.pergunta}
                      </summary>
                      <div className="mt-3 text-sm text-slate-600">{item.resposta}</div>
                    </details>
                  ))}
                </div>
              </div>
            )
          )}

          {setor.rodape && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              {setor.rodape}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
