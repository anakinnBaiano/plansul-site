import { noticias, categoriaBadgeClass, categoriaCardHoverClass, isCategoriaAlerta } from "@/data/noticias";
import { cn } from "@/lib/utils";

/**
 * Lista de notícias/comunicados — usada em /noticias e
 * /prestadores/comunicados. Extraída como componente único para garantir que
 * as duas páginas fiquem sempre no mesmo formato.
 */
export default function NoticiaList() {
  return (
    <div className="mt-10 space-y-6">
      {noticias.map((noticia) => (
        <article
          key={noticia.slug}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8",
            categoriaCardHoverClass(noticia.categoria)
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-plansul-blue to-plansul-teal"
          />
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 uppercase tracking-wide",
                categoriaBadgeClass(noticia.categoria)
              )}
            >
              {isCategoriaAlerta(noticia.categoria) && (
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-red-600 motion-safe:animate-blink"
                />
              )}
              {noticia.categoria}
            </span>
            {noticia.dataPublicacao ? (
              <span className="text-xs text-slate-500">
                Publicado em: {noticia.dataPublicacao}
              </span>
            ) : null}
          </div>
          <h2 className="mt-3 text-xl font-bold text-plansul-blue">{noticia.titulo}</h2>
          <div className="prose-noticia mt-4 space-y-4 text-sm text-slate-600 sm:text-base [&_a]:text-plansul-blue [&_strong]:text-slate-800">
            {noticia.corpo}
          </div>
        </article>
      ))}
    </div>
  );
}
