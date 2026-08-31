/**
 * ARQUIVADO em 2026-08-25 — página local de busca na rede credenciada
 * (filtros de cidade/especialidade/tipo/nome que montavam uma query string e
 * abriam o Guia Médico externo). Substituída por um redirecionamento direto
 * ao sistema já existente (https://mv.plansul.net/mvsaudeweb/#/guia-medico),
 * então não está mais em uso no site. Guardada aqui — junto com
 * BuscaRede.tsx, especialidades.ts e unidades.ts — caso decidam voltar a ter
 * uma busca própria no futuro.
 *
 * Para reativar: mover page.tsx e BuscaRede.tsx para
 * src/app/rede-credenciada/, especialidades.ts/unidades.ts para src/data/,
 * ajustar os imports de volta para "@/data/...", e trocar os links de
 * "Rede Credenciada" (NAV_LINKS/quickAccessLinks/cards) de volta para
 * "/rede-credenciada".
 */
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BuscaRede from "./BuscaRede";

export const metadata: Metadata = {
  title: "Rede Credenciada",
  description: "Encontre médicos, clínicas e serviços da rede Plansul.",
};

export default function RedeCredenciadaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Rede Credenciada" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">
          Encontre médicos, clínicas e serviços da rede Plansul.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          A busca completa por médicos e especialidades é feita no Guia Médico oficial —
          aqui você já filtra o que precisa antes de consultar.
        </p>

        <BuscaRede />
      </section>
    </>
  );
}
