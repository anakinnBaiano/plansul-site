"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { especialidades } from "./especialidades";
import { unidades } from "./unidades";
import { EXTERNAL_LINKS } from "@/lib/constants";

/**
 * Esta página NÃO simula uma base de médicos: o Guia Médico é fornecido por
 * sistema externo (ver briefing, item 12). Os filtros aqui só preparam a
 * consulta e direcionam o usuário para o sistema oficial via query string —
 * ajuste os nomes dos parâmetros conforme o Guia Médico real exigir.
 */
export default function BuscaRede() {
  const [cidade, setCidade] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    if (cidade) params.set("cidade", cidade);
    if (especialidade) params.set("especialidade", especialidade);
    if (tipo) params.set("tipo", tipo);
    if (nome) params.set("nome", nome);

    const query = params.toString();
    const destino = EXTERNAL_LINKS.guiaMedico + (query ? `?${query}` : "");
    window.open(destino, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="cidade" className="block text-sm font-medium text-slate-700">
            Cidade
          </label>
          <input
            id="cidade"
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            list="unidades-list"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          />
          <datalist id="unidades-list">
            {unidades.map((u) => (
              <option key={u.slug} value={u.cidade} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="especialidade" className="block text-sm font-medium text-slate-700">
            Especialidade
          </label>
          <select
            id="especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          >
            <option value="">Todas</option>
            {especialidades.map((esp) => (
              <option key={esp.slug} value={esp.slug}>
                {esp.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="block text-sm font-medium text-slate-700">
            Tipo de estabelecimento
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          >
            <option value="">Todos</option>
            <option value="consultorio">Consultório</option>
            <option value="clinica">Clínica</option>
            <option value="hospital">Hospital</option>
            <option value="laboratorio">Laboratório</option>
          </select>
        </div>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-slate-700">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Médico, clínica ou hospital"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
      >
        <Search size={18} aria-hidden="true" />
        Buscar médico
      </button>

      <p className="mt-4 text-xs text-slate-500">
        A busca abre o Guia Médico oficial em uma nova aba, com os filtros já aplicados
        quando suportado pelo sistema.
      </p>
    </form>
  );
}
