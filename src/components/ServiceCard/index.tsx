import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ExternalLink } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  href: string;
  external?: boolean;
};

export default function ServiceCard({
  icon: Icon,
  titulo,
  descricao,
  href,
  external,
}: ServiceCardProps) {
  // Links de telefone/e-mail não devem abrir em nova aba.
  const isDirectScheme = href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-plansul-teal/10 text-plansul-teal transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white group-focus-visible:bg-white/15 group-focus-visible:text-white">
        <Icon aria-hidden="true" size={24} />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
        {titulo}
      </h3>
      <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 group-hover:text-white/85 group-focus-visible:text-white/85">
        {descricao}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-plansul-blue transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
        Acessar
        {external && !isDirectScheme ? (
          <ExternalLink size={16} aria-hidden="true" />
        ) : (
          <ArrowRight size={16} aria-hidden="true" />
        )}
      </span>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-blue hover:bg-gradient-to-br hover:from-plansul-blue hover:to-plansul-teal hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-plansul-blue focus-visible:bg-gradient-to-br focus-visible:from-plansul-blue focus-visible:to-plansul-teal focus-visible:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plansul-teal";

  if (isDirectScheme) {
    return (
      <a href={href} className={className} aria-label={`${titulo}: ${descricao}`}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${titulo}: ${descricao} (abre em nova aba)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={`${titulo}: ${descricao}`}>
      {content}
    </Link>
  );
}
