# Busca da Rede Credenciada (arquivado)

Página local que ficava em `/rede-credenciada`, com filtros (cidade,
especialidade, tipo de estabelecimento, nome) que montavam uma query string e
abriam o Guia Médico oficial em nova aba. Substituída em 2026-08-25 por um
redirecionamento direto ao sistema já existente:
`https://mv.plansul.net/mvsaudeweb/#/guia-medico`.

Guardada aqui — fora de `src/app`, então não é servida como rota — para o
caso de a Plansul querer uma busca própria (com filtros locais) no futuro,
em vez de mandar direto para o Guia Médico externo.

## Arquivos

- `page.tsx` — página `/rede-credenciada`.
- `BuscaRede.tsx` — formulário de busca (client component).
- `especialidades.ts` / `unidades.ts` — listas usadas nos filtros do
  formulário (dados de exemplo/placeholder, nunca preenchidos com a lista
  oficial completa).

## Para reativar

1. `page.tsx` / `BuscaRede.tsx` → `src/app/rede-credenciada/`
2. `especialidades.ts` / `unidades.ts` → `src/data/`
3. Ajustar os imports de volta para `@/data/especialidades` e `@/data/unidades`.
4. Trocar os links de "Rede Credenciada" de volta para `/rede-credenciada` em:
   `src/lib/constants.ts` (NAV_LINKS), `src/data/links.ts` (quickAccessLinks),
   `src/app/beneficiario/page.tsx` (card "Rede Credenciada") e
   `src/app/beneficiario/guia-medico/page.tsx` (redirect).
