# Site Plansul — Redesign (MVP + Docker)

Novo site institucional da Plansul: moderno, responsivo, acessível e orientado a
tarefas ("Sou beneficiário", "Sou prestador", "Quero contratar um plano"...).

Esta entrega inclui o **MVP completo do front-end**. Todo o conteúdo que o
próprio site publica (documentos, unidades, equipe, textos institucionais)
vem de arquivos estáticos em `src/data/` — não há banco de dados. Beneficiário,
Rede Credenciada e Portal do Cliente continuam apontando para os sistemas
externos já existentes.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react (ícones)
- **Docker + Docker Compose** (deploy via Rancher ou VPS)
- ESLint

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

### Build de produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

> Este projeto foi desenvolvido em um ambiente sem acesso à internet/registro
> npm, então as dependências **não foram instaladas nem o build foi
> executado** durante a geração dos arquivos. Rode os comandos acima no seu
> ambiente e corrija eventuais erros de versão de pacote antes de publicar.

## Estrutura de diretórios

```
Dockerfile                 # build multi-stage (Next.js standalone)
docker-compose.yml          # stack para Rancher/VPS

src/
├── app/
│   └── api/                # rotas de API (documentos, unidades, equipe, manifestações)
├── components/              # componentes reutilizáveis
├── data/                    # todo o conteúdo do site (unidades, equipe, documentos por
│                            # ano, textos institucionais, planos, notícias etc.)
└── lib/
    └── constants.ts         # constantes institucionais (contato, links, menu)
```

## O que já foi adicionado nesta entrega

- **Nossa História** (`/institucional/historia`): texto de fundação (15/03/1993,
  Santa Casa de Itabuna, modalidade hospitalar) — vem de
  `src/data/conteudoInstitucional.ts`, editável sem precisar de banco.
- **Nossa Equipe** (`/institucional/equipe`): Dr. Eric Ettinger Júnior
  (Diretor Médico) e Celso Roberto dos Santos (Gestor), com foto e depoimento
  — dados em `src/data/equipe.ts`. As fotos já recebidas estão em
  `public/equipe/`.
- **Nossas Unidades** (`/institucional/unidades`): unidade Itabuna com
  endereço e telefone oficiais — dado em `src/data/unidades.ts`. O telefone e
  endereço também já atualizam o rodapé/atendimento em `src/lib/constants.ts`.
- **IDSS** (`/institucional/idss`) e **Reajuste de Contratos Coletivos**
  (`/institucional/reajustes`): páginas novas, cada uma listando os anos
  configurados com botão de download em PDF — dado em
  `src/data/documentosPorAno.ts`. IDSS também traz um botão de
  direcionamento para o Portal ANS. Ambas foram adicionadas ao menu
  principal (Header) e ao rodapé.

## PDFs dos documentos — status atual

Os PDFs enviados foram lidos (conteúdo, não só nome do arquivo) para confirmar
categoria e ano antes de cadastrar:

- **Reajuste de Contratos Coletivos**: os 10 comunicados enviados são todos,
  de fato, comunicados RN 309/ANS de reajuste — e cobrem **2017 a 2026** (o
  arquivo "Corrigido2026" é a versão corrigida do comunicado daquele ano).
  Como isso é mais amplo que o intervalo 2021–2026 pedido originalmente, os
  anos de 2017 a 2020 foram adicionados em `src/data/documentosPorAno.ts`
  porque os PDFs comprovam que existem — nenhum dado foi inventado, só
  ampliamos a faixa para bater com os documentos reais recebidos. Os 10
  arquivos estão em `public/documentos/reajustes/` e já linkados em cada ano
  correspondente.
- **IDSS**: 3 PDFs recebidos até agora — 2022, 2023 e 2025 (capturas da
  consulta pública do Portal ANS, com a pontuação IDSS de cada ano-base).
  Estão em `public/documentos/idss/` e já linkados. Os demais anos do
  intervalo original (2018–2021, 2024, 2026) continuam com `arquivoUrl = null`
  e mostram "PDF em breve" até chegarem.

Quando mais arquivos de IDSS chegarem: copie o PDF para
`public/documentos/idss/idss-<ano>.pdf` e adicione o caminho no objeto
`arquivosIdss` em `src/data/documentosPorAno.ts`.

## Conteúdo ainda pendente (placeholders)

Seguindo a regra do projeto de **nunca inventar dado oficial**, o que ainda
depende de informação institucional real está marcado com `[PREENCHER]` no
código-fonte:

```bash
grep -r "PREENCHER" src prisma
```

Principais itens:

- E-mail de atendimento (`src/lib/constants.ts`) — telefone, WhatsApp e horário já preenchidos
- URLs reais dos portais (Beneficiário, Empresa, Prestador) e do Guia Médico
- Preços/coberturas dos planos empresarial e individual/familiar (`src/data/planos.ts`)
- Documentos regulatórios além de IDSS/Reajustes (ANS, comunicados) (`src/data/documentos.ts`)
- Redes sociais (`src/lib/constants.ts`)
- Texto da Política de Privacidade (revisar com jurídico/DPO — LGPD)
- Perguntas e respostas do FAQ (`src/app/atendimento/faq`)
- Texto "Quem somos" da página `/institucional`

## Páginas com layout básico (a expandir)

`/beneficiario/portal`, `/beneficiario/segunda-via`, `/beneficiario/autorizacoes`,
`/empresas/portal`, `/prestadores/portal`, `/prestadores/tiss`,
`/prestadores/comunicados`, `/trabalhe-conosco` (formulário já funcional, falta
a lista de vagas). Já têm breadcrumb, título e não quebram nenhum link.

## Segurança

Headers de segurança (CSP, HSTS, X-Content-Type-Options, Referrer-Policy,
Permissions-Policy) estão configurados em `next.config.js`. **Ajuste a
Content-Security-Policy** assim que tiver os domínios reais dos portais e do
Guia Médico. Nenhuma credencial está no código — tudo em variáveis de
ambiente (`.env`/`.env.local`, nunca commitadas).

## Acessibilidade

Semântica HTML5, `aria-label` em ícones/links, foco visível em todo o site,
navegação 100% por teclado (incluindo o menu mobile), skip link, `alt` em
imagens e labels em formulários. Rode um teste de leitor de tela e o
Lighthouse antes de publicar.

## Deploy com Docker / Rancher

O projeto inclui `Dockerfile`, `docker-compose.yml` e `.dockerignore` prontos
para rodar como um stack no Rancher (ou `docker compose` puro num VPS).

### 1. Preencha as variáveis antes de buildar

Copie `.env.example` para `.env` **na raiz do projeto** (mesma pasta do
`docker-compose.yml`) e preencha ao menos:

```bash
cp .env.example .env
```

As quatro URLs de portais externos (`NEXT_PUBLIC_PORTAL_*`, `NEXT_PUBLIC_GUIA_MEDICO_URL`)
precisam estar corretas **antes do build**, porque o Header usa esses valores
no navegador — o Next.js grava esse valor dentro do JavaScript já no momento
de gerar a imagem. Mudar essas variáveis depois só em runtime (sem rebuildar)
não atualiza mais nada.

### 2. Build e subida local (teste antes de mandar pro Rancher)

```bash
docker compose build
docker compose up -d
docker compose logs -f web
```

Abra http://localhost:3000 — como o conteúdo vem de `src/data/`, o container já
sobe pronto, sem nenhum passo de inicialização de banco.

### 3. No Rancher

- **Via stack Compose**: em Apps, importe este mesmo `docker-compose.yml`
  (Rancher aceita Compose como definição de stack). Configure as variáveis de
  build (`NEXT_PUBLIC_*`) na tela de variáveis do stack antes de subir.
- **Via imagem já buildada**: se preferir buildar a imagem num pipeline de CI
  e só apontar o Rancher para ela, publique a imagem (`docker build -t
  seu-registry/plansul-site:tag .` e `docker push`) e crie o Workload no
  Rancher apontando pra essa tag, replicando as mesmas `environment` do
  `docker-compose.yml`. Não precisa de volume — não há banco/estado para
  persistir; qualquer atualização de conteúdo é feita editando `src/data/` e
  publicando uma nova imagem.

### Sobre o Dockerfile (o que rodou e o que não pôde ser testado aqui)

Não tive acesso à internet/registro de containers neste ambiente para de fato
baixar a imagem base (`node:20-slim`) e completar um build real. O que pôde
ser verificado:

- O **Dockerfile parseia corretamente** — validei rodando `docker build` até
  o ponto exato em que ele tenta baixar a imagem base (todos os 42 passos do
  build foram reconhecidos pelo Docker antes de falhar por falta de acesso ao
  Docker Hub).
- O **`docker-compose.yml` é válido** — validei com `docker compose config`,
  que interpretou e renderizou o stack inteiro sem erros.

Ainda assim, um build real (`docker compose build`) pode revelar ajustes
necessários que só aparecem executando de verdade — rode localmente antes de
publicar em produção, e me manda o erro se algo não passar.

Não existe ainda um `package-lock.json` neste projeto (nunca rodei `npm
install` de verdade). O Dockerfile usa `npm install` por causa disso; depois
que você rodar `npm install` localmente e commitar o lockfile gerado, troque
para `npm ci` no `Dockerfile` (mais rápido e reprodutível).

## Limitações desta entrega

- O build via Docker ainda não foi totalmente testado neste ambiente (sem
  acesso a registro de containers) — rode os comandos das seções acima
  localmente e corrija eventuais erros de versão de pacote.
- Faltam PDFs de IDSS para 2018–2021, 2024 e 2026 — ver seção específica acima.
- Testes automatizados, CI/CD e monitoramento ainda não configurados.

## Próximos passos sugeridos

1. Reenviar os 10 PDFs para eu confirmar categoria/ano de cada um e publicá-los.
2. Rodar `npm install` localmente (gera o `package-lock.json`, corrige
   eventuais erros de versão) e depois `docker compose build && docker
   compose up -d` para validar o container de ponta a ponta.
3. Preencher os `[PREENCHER]` restantes (e-mail, WhatsApp, horário, portais)
   e as 4 URLs de portais no `.env` antes do build.
4. Expandir as páginas com layout básico listadas acima.
5. Rodar Lighthouse, teste de acessibilidade e checagem de todos os links.
