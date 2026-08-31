import Breadcrumb, { type BreadcrumbItem } from "@/components/Breadcrumb";

type StubPageProps = {
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  children?: React.ReactNode;
};

/**
 * Layout mínimo para rotas que ainda não têm conteúdo completo nesta primeira
 * entrega (MVP). Mantém o link do menu/rodapé funcionando (nenhum 404) e já
 * traz breadcrumb + estrutura semântica corretas para expandir depois.
 */
export default function StubPage({
  title,
  description,
  breadcrumbItems,
  children,
}: StubPageProps) {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section className="mx-auto max-w-content px-4 pb-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">{title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{description}</p>

        {children ? (
          <div className="mt-8">{children}</div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-sm text-slate-500">
            Conteúdo desta página em construção. Estrutura e rota já disponíveis;
            o conteúdo final entra na próxima etapa do projeto.
          </div>
        )}
      </section>
    </>
  );
}
