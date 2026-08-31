import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import NoticiaList from "@/components/NoticiaList";

export const metadata: Metadata = {
  title: "Notícias Plansul",
  description: "Novidades, comunicados e notícias da Plansul.",
};

export default function NoticiasPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Notícias Plansul" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Notícias Plansul</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Acompanhe aqui os comunicados e novidades da Plansul.
        </p>

        <NoticiaList />
      </section>
    </>
  );
}
