import { Check } from "lucide-react";
import type { Plano } from "@/data/planos";
import { CONTACT } from "@/lib/constants";

type PlanCardProps = {
  plano: Plano;
};

export default function PlanCard({ plano }: PlanCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-teal hover:shadow-lg">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-plansul-blue to-plansul-teal"
      />
      <h3 className="text-xl font-bold text-plansul-blue">{plano.nome}</h3>
      <p className="mt-2 text-sm text-slate-600">{plano.publico}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plano.caracteristicas.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
            <Check size={18} className="mt-0.5 shrink-0 text-plansul-teal" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={CONTACT.whatsappPlanosHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
        >
          Falar com atendimento
        </a>
      </div>
    </div>
  );
}
