import type { Metadata } from "next";
import {
  UserRound,
  Newspaper,
  RefreshCcw,
  Network,
  Smartphone,
  HelpCircle,
  Headset,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Beneficiário",
  description: "Tudo o que você precisa em um só lugar: portal, guia médico, autorizações e mais.",
};

const cards = [
  {
    titulo: "Portal do Usuário",
    descricao: "Acesse boletos, carteirinha digital e seus dados.",
    href: EXTERNAL_LINKS.portalBeneficiario,
    external: true,
    icon: UserRound,
  },
  {
    titulo: "Notícias Plansul",
    descricao: "Fique por dentro das novidades e comunicados da Plansul.",
    href: "/noticias",
    icon: Newspaper,
  },
  {
    titulo: "Segunda via",
    descricao: "Emita a segunda via de boletos e documentos.",
    href: "/beneficiario/segunda-via",
    icon: RefreshCcw,
  },
  {
    titulo: "Rede Credenciada",
    descricao: "Encontre médicos, clínicas, hospitais e laboratórios credenciados.",
    href: EXTERNAL_LINKS.guiaMedico,
    external: true,
    icon: Network,
  },
  {
    titulo: "Aplicativo",
    descricao: "Baixe o aplicativo Plansul para Android e iOS e acompanhe tudo pelo celular.",
    href: "/beneficiario/aplicativo",
    icon: Smartphone,
  },
  {
    titulo: "Dúvidas frequentes",
    descricao: "Respostas rápidas para as perguntas mais comuns.",
    href: "/atendimento/faq",
    icon: HelpCircle,
  },
  {
    titulo: "Atendimento",
    descricao: "Fale com a nossa central de atendimento.",
    href: "/atendimento",
    icon: Headset,
  },
];

export default function BeneficiarioPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Beneficiário" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">
          Tudo o que você precisa em um só lugar.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Escolha abaixo o que você precisa fazer — em poucos cliques você chega lá.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.titulo}>
              <ServiceCard
                icon={card.icon}
                titulo={card.titulo}
                descricao={card.descricao}
                href={card.href}
                external={card.external}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
