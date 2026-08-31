import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Respostas para as dúvidas mais comuns sobre a Plansul.",
};

// [PREENCHER] substituir pelas perguntas e respostas oficiais aprovadas pela Plansul.
const faqs = [
  {
    pergunta: "Como posso acessar o Portal do Beneficiário?",
    resposta: (
      <>
        Acesse o{" "}
        <a
          href={EXTERNAL_LINKS.portalBeneficiario}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-plansul-blue hover:underline"
        >
          Portal do Beneficiário
        </a>{" "}
        e informe seu usuário e senha para entrar.
      </>
    ),
  },
  {
    pergunta: "Como solicito uma autorização de exame ou procedimento?",
    resposta: "Atendimento presencial na unidade de Itabuna ou ligando para o número (73) 3214-3800.",
  },
  {
    pergunta: "Como encontro um médico da rede credenciada?",
    resposta: "Você pode entrar na área de Rede Credenciada ou ligando para nosso canal de atendimento no (73) 3214-3800.",
  },
  {
    pergunta: "Como entro em contato com a Ouvidoria?",
    resposta:
      "Pelo e-mail ouvidoria@plansul.net ou ligando para (73) 3214-3800, ramal 3804.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Atendimento", href: "/atendimento" }, { label: "FAQ" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Perguntas Frequentes</h1>

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
