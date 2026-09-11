import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = { title: "Nossa história" };

const timelineItems = [
  {
    ano: "1993",
    titulo: "Fundação do PLANSUL",
    descricao:
      "O PLANSUL nasceu em 15 de março de 1993, conectado à Santa Casa de Misericórdia de Itabuna, com o propósito de oferecer saúde de qualidade, cuidado e dignidade à população.",
  },
  {
    ano: "1998",
    titulo: "Regulamentação da saúde suplementar",
    descricao:
      "Com a regulamentação do setor de saúde suplementar, fortalecemos nossa atuação.",
  },
  {
    ano: "1999",
    titulo: "Operadora oficial da Santa Casa",
    descricao:
      "Tornamo-nos oficialmente a Operadora de Plano de Saúde da Santa Casa, ampliando nossas modalidades de atendimento e nossa presença na região.",
  },
  {
    ano: "2015",
    titulo: "Criação da Associação PLANSUL",
    descricao:
      "Iniciamos uma nova etapa com a criação da Associação do Plano de Saúde da Santa Casa de Misericórdia de Itabuna. Com o nome PLANSUL e maior autonomia, passamos a investir ainda mais em um cuidado próximo, humano e dedicado às necessidades de cada beneficiário.",
  },
  {
    ano: "Pandemia",
    titulo: "Modernização dos serviços",
    descricao:
      "Avançamos na modernização dos nossos serviços, implantando o monitoramento de grupos de risco, ações de Atenção Primária à Saúde e atendimento por telemedicina.",
  },
  {
    ano: "Hoje",
    titulo: "33 anos de história",
    descricao:
      "Celebramos 33 anos de história, aprendizado e evolução. Mais do que um plano de saúde, somos uma instituição comprometida em cuidar de pessoas e fazer a diferença na vida de milhares de famílias.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Nossa história" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Nossa história</h1>

        <div className="mt-10">
          <Timeline items={timelineItems} />
        </div>

        <p className="mt-12 max-w-2xl border-l-2 border-plansul-teal/30 pl-6 text-lg font-semibold italic text-plansul-blue">
          PLANSUL: há 33 anos, conhecendo, cuidando e fazendo história.
        </p>
      </section>
    </>
  );
}
