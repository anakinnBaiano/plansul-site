import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-plansul-blue">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-slate-600">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white hover:bg-plansul-blue-light"
      >
        Voltar para a página inicial
      </Link>
    </section>
  );
}
