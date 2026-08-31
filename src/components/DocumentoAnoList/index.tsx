import { Download, FileX2 } from "lucide-react";

export type DocumentoAno = {
  id: string;
  ano: number;
  titulo: string;
  descricao: string | null;
  arquivoUrl: string | null;
};

type DocumentoAnoListProps = {
  documentos: DocumentoAno[];
};

/**
 * Lista de documentos por ano (usada em IDSS e Reajuste de Contratos
 * Coletivos). Os dados vêm do banco (tabela Documento) — quando o PDF
 * oficial ainda não foi recebido, arquivoUrl é null e mostramos
 * "PDF em breve" em vez de um link quebrado ou inventado.
 */
export default function DocumentoAnoList({ documentos }: DocumentoAnoListProps) {
  const ordenados = [...documentos].sort((a, b) => b.ano - a.ano);

  return (
    <ul className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {ordenados.map((doc) => (
        <li
          key={doc.id}
          className="group relative flex flex-col gap-3 p-5 pl-6 transition-colors duration-300 hover:bg-gradient-to-r hover:from-plansul-blue/5 hover:to-plansul-teal/5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-plansul-blue to-plansul-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div>
            <p className="font-semibold text-slate-900">{doc.titulo}</p>
            {doc.descricao && <p className="text-sm text-slate-500">{doc.descricao}</p>}
          </div>

          {doc.arquivoUrl ? (
            <a
              href={doc.arquivoUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-plansul-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
              aria-label={`Baixar PDF: ${doc.titulo}`}
            >
              <Download size={16} aria-hidden="true" />
              Baixar PDF
            </a>
          ) : (
            <span className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-dashed border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-400">
              <FileX2 size={16} aria-hidden="true" />
              PDF em breve
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
