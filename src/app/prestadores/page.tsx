import type { Metadata } from "next";
import { FileCheck2, FileStack, Megaphone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Prestadores",
  description: "Área exclusiva para prestadores da rede Plansul: portal, autorizações e notícias.",
};

const cards = [
  {
    titulo: "Portal do Prestador",
    descricao: "Acesse o sistema externo do prestador.",
    href: EXTERNAL_LINKS.portalPrestador,
    external: true,
    icon: FileCheck2,
  },
  {
    titulo: "Autorizações",
    descricao: "Consulte e solicite autorizações de procedimentos.",
    href: EXTERNAL_LINKS.portalPrestador,
    external: true,
    icon: FileStack,
  },
  {
    titulo: "Notícias Plansul",
    descricao: "Fique por dentro dos avisos oficiais para a rede credenciada.",
    href: "/prestadores/comunicados",
    icon: Megaphone,
  },
];

export default function PrestadoresPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Prestadores" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Área do Prestador</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          O acesso completo ao Portal do Prestador é feito em sistema externo — seu login
          e dados ficam com o sistema oficial da Plansul.
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
