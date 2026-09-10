import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ do Prestador",
  description: "Respostas para as dúvidas mais comuns de prestadores e empresas credenciadas.",
};

// [PREENCHER] substituir pelas perguntas e respostas oficiais aprovadas pela Plansul.
const faqs = [
  {
    pergunta: "Como acesso o Portal do Prestador?",
    resposta: (
      <>
        Acesse o{" "}
        <a
          href={EXTERNAL_LINKS.portalPrestador}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-plansul-blue hover:underline"
        >
          Portal do Prestador
        </a>{" "}
        e informe seu usuário e senha para entrar.
      </>
    ),
  },
  {
    pergunta: "Como solicito ou consulto autorizações de procedimentos?",
    resposta: "As solicitações e consultas de autorizações são feitas diretamente pelo Portal do Prestador.",
  },
  {
    pergunta: "Como minha empresa se credencia à rede Plansul?",
    resposta: "Entre em contato pelo canal de atendimento (73) 3214-3800 para iniciar o processo de credenciamento.",
  },
  {
    pergunta: "Onde encontro comunicados e avisos oficiais para prestadores?",
    resposta: "Na área de Avisos, dentro da seção Prestadores.",
  },
];

export default function PrestadorFaqPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Prestadores", href: "/prestadores" }, { label: "FAQ" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">FAQ do Prestador</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Dúvidas frequentes para prestadores e empresas credenciadas à rede Plansul.
        </p>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map((item) => (
            <details key={item.pergunta} className="group p-6 open:bg-slate-50">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal">
                {item.pergunta}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.resposta}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
