import { Ban, Check } from "lucide-react";
import type { Plano } from "@/data/planos";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlanCardProps = {
  plano: Plano;
};

export default function PlanCard({ plano }: PlanCardProps) {
  const desativado = plano.desativado ?? false;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-300",
        desativado
          ? "border-slate-200 bg-slate-50"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-plansul-teal hover:shadow-lg"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-1.5",
          desativado ? "bg-slate-300" : "bg-gradient-to-r from-plansul-blue to-plansul-teal"
        )}
      />
      <h3 className={cn("text-xl font-bold", desativado ? "text-slate-500" : "text-plansul-blue")}>
        {plano.nome}
      </h3>
      <p className="mt-2 text-sm text-slate-500">{plano.publico}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plano.caracteristicas.map((item) => (
          <li key={item} className="flex flex-col gap-2">
            <div className={cn("flex items-start gap-2 text-sm", desativado ? "text-slate-500" : "text-slate-700")}>
              <Check
                size={18}
                className={cn("mt-0.5 shrink-0", desativado ? "text-slate-400" : "text-plansul-teal")}
                aria-hidden="true"
              />
              <span>{item}</span>
            </div>
            {desativado && item.startsWith("Abrangência") && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <Ban size={14} aria-hidden="true" />
                Desativado
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        {desativado ? (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex min-h-[48px] cursor-not-allowed items-center justify-center rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-400"
          >
            Falar com atendimento
          </button>
        ) : (
          <a
            href={CONTACT.whatsappPlanosHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
          >
            Falar com atendimento
          </a>
        )}
      </div>
    </div>
  );
}
