export type TimelineItem = {
  ano: string;
  titulo: string;
  descricao: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

/**
 * Linha do tempo institucional.
 * Usar apenas fatos e datas oficiais da história da empresa (ver item 13 do briefing).
 */
export default function Timeline({ items }: TimelineProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        [PREENCHER: história oficial da Plansul — datas e marcos confirmados pela empresa]
      </p>
    );
  }

  return (
    <ol className="relative space-y-10 border-l-2 border-plansul-teal/30 pl-6">
      {items.map((item) => (
        <li key={`${item.ano}-${item.titulo}`} className="relative">
          <span
            className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-plansul-teal"
            aria-hidden="true"
          />
          <p className="text-sm font-semibold text-plansul-teal">{item.ano}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.titulo}</h3>
          <p className="mt-1 text-sm text-slate-600">{item.descricao}</p>
        </li>
      ))}
    </ol>
  );
}
