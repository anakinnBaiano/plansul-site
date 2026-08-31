# Site Plansul — Redesign (MVP + Banco de Dados + Docker)

Novo site institucional da Plansul: moderno, responsivo, acessível e orientado a
tarefas ("Sou beneficiário", "Sou prestador", "Quero contratar um plano"...).

Esta entrega inclui o **MVP completo do front-end** e o **início do back-end**:
banco de dados (Prisma + SQLite) e rotas de API para os conteúdos que o próprio
site publica (documentos, unidades, equipe, textos institucionais). Beneficiário,
Rede Credenciada e Portal do Cliente continuam apontando para os sistemas
externos já existentes — este banco não duplica esses dados, só o conteúdo
institucional que é do próprio site.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react (ícones)
- **Prisma + SQLite** (banco de dados e ORM)
- **Docker + Docker Compose** (deploy via Rancher ou VPS)
- ESLint

## Como rodar

```bash
npm install
npm run db:migrate    # cria o banco SQLite local (prisma/dev.db) a partir do schema
npm run db:seed       # popula com os dados já confirmados (unidades, equipe, documentos)
npm run dev
```

Abra http://localhost:3000

### Build de produção

```bash
npm run build
npm start
```

### Banco de dados — comandos úteis

```bash
npm run db:migrate    # aplica o schema (prisma/schema.prisma) ao banco
npm run db:seed       # popula/atualiza os dados iniciais (prisma/seed.ts) — idempotente, pode rodar de novo
npm run db:studio     # abre uma interface visual para ver/editar os dados do banco no navegador
```

O arquivo do banco fica em `prisma/dev.db` (SQLite), definido por `DATABASE_URL`
no `.env`. Como você escolheu hospedar em VPS/servidor próprio com disco
persistente, esse arquivo local funciona bem em produção — só garanta que ele
esteja num volume que sobrevive a redeploys (fora da pasta que o `git pull`/CI
recria do zero).

### Lint

```bash
npm run lint
```

> Este projeto foi desenvolvido em um ambiente sem acesso à internet/registro
> npm, então as dependências **não foram instaladas nem o build foi
> executado** durante a geração dos arquivos (isso inclui o Prisma — o
> `schema.prisma` e o `seed.ts` não puderam ser validados com `prisma
> generate`/`migrate` de verdade). Rode os comandos acima no seu ambiente e
> corrija eventuais erros de versão de pacote antes de publicar.

## Estrutura de diretórios

```
Dockerfile                 # build multi-stage (Next.js standalone + Prisma)
docker-compose.yml          # stack para Rancher/VPS
docker-entrypoint.sh         # roda db push + seed antes de subir o servidor

prisma/
├── schema.prisma         # modelos do banco (Documento, Unidade, MembroEquipe, ConteudoTexto)
└── seed.ts                # dados iniciais (idempotente)

src/
├── app/
│   └── api/                # rotas de API (documentos, unidades, equipe)
├── components/              # componentes reutilizáveis
├── data/                    # dados estáticos que ainda não migraram para o banco
└── lib/
    ├── constants.ts         # constantes institucionais (contato, links, menu)
    └── prisma.ts             # cliente Prisma (singleton)
```

## O que já foi adicionado nesta entrega

- **Nossa História** (`/institucional/historia`): texto de fundação (15/03/1993,
  Santa Casa de Itabuna, modalidade hospitalar) — vem do banco
  (`ConteudoTexto`, slug `historia`), editável sem mexer em código.
- **Nossa Equipe** (`/institucional/equipe`): Dr. Eric Ettinger Júnior
  (Diretor Médico) e Celso Roberto dos Santos (Gestor), com foto e depoimento
  — dados no banco (`MembroEquipe`). As fotos já recebidas estão em
  `public/equipe/`.
- **Nossas Unidades** (`/institucional/unidades`): unidade Itabuna com
  endereço e telefone oficiais — dado no banco (`Unidade`). O telefone e
  endereço também já atualizam o rodapé/atendimento em `src/lib/constants.ts`.
- **IDSS** (`/institucional/idss`) e **Reajuste de Contratos Coletivos**
  (`/institucional/reajustes`): páginas novas, cada uma listando os anos
  configurados com botão de download em PDF — dado no banco (`Documento`).
  IDSS também traz um botão de direcionamento para o Portal ANS. Ambas foram
  adicionadas ao menu principal (Header) e ao rodapé.

## PDFs dos documentos — status atual

Os PDFs enviados foram lidos (conteúdo, não só nome do arquivo) para confirmar
categoria e ano antes de cadastrar:

- **Reajuste de Contratos Coletivos**: os 10 comunicados enviados são todos,
  de fato, comunicados RN 309/ANS de reajuste — e cobrem **2017 a 2026** (o
  arquivo "Corrigido2026" é a versão corrigida do comunicado daquele ano).
  Como isso é mais amplo que o intervalo 2021–2026 pedido originalmente, os
  anos de 2017 a 2020 foram adicionados ao banco (`prisma/seed.ts`) porque os
  PDFs comprovam que existem — nenhum dado foi inventado, só ampliamos a
  faixa para bater com os documentos reais recebidos. Os 10 arquivos estão em
  `public/documentos/reajustes/` e já linkados em cada ano correspondente.
- **IDSS**: 3 PDFs recebidos até agora — 2022, 2023 e 2025 (capturas da
  consulta pública do Portal ANS, com a pontuação IDSS de cada ano-base).
  Estão em `public/documentos/idss/` e já linkados. Os demais anos do
  intervalo original (2018–2021, 2024, 2026) continuam com `arquivoUrl = null`
  e mostram "PDF em breve" até chegarem.

Quando mais arquivos de IDSS chegarem: copie o PDF para
`public/documentos/idss/idss-<ano>.pdf`, adicione o caminho no objeto
`arquivosIdss` em `prisma/seed.ts` e rode `npm run db:seed` de novo (o seed é
idempotente e também atualiza `arquivoUrl` de linhas já existentes).

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

O projeto inclui `Dockerfile`, `docker-compose.yml`, `.dockerignore` e
`docker-entrypoint.sh` prontos para rodar como um stack no Rancher (ou
`docker compose` puro num VPS).

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

Abra http://localhost:3000 — no primeiro start, o `docker-entrypoint.sh` roda
automaticamente `prisma db push` (cria as tabelas no banco) e o seed (popula
unidades/equipe/documentos), então já sobe com os dados que confirmamos nesta
conversa.

### 3. No Rancher

- **Via stack Compose**: em Apps, importe este mesmo `docker-compose.yml`
  (Rancher aceita Compose como definição de stack). Configure as variáveis de
  build (`NEXT_PUBLIC_*`) na tela de variáveis do stack antes de subir.
- **Via imagem já buildada**: se preferir buildar a imagem num pipeline de CI
  e só apontar o Rancher para ela, publique a imagem (`docker build -t
  seu-registry/plansul-site:tag .` e `docker push`) e crie o Workload no
  Rancher apontando pra essa tag, replicando as mesmas `environment` e
  `volumes` do `docker-compose.yml` (principalmente o volume em `/app/data` —
  sem ele, o banco SQLite se perde a cada redeploy).

### Persistência do banco

O SQLite fica em `/app/data/dev.db` **dentro do container**, montado a partir
do volume nomeado `plansul_db_data` (definido no `docker-compose.yml`). Isso é
o que garante que o banco sobrevive a um `docker compose up` novo, restart do
container ou redeploy da imagem. Sem esse volume — ou se o Rancher recriar o
volume do zero — o banco volta vazio e o entrypoint recria as tabelas e
resemeia os dados iniciais, mas qualquer dado adicionado manualmente depois
(fora do `seed.ts`) seria perdido.

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
- O **`docker-entrypoint.sh` tem sintaxe válida** (`sh -n`).

Ainda assim, um build real (`docker compose build`) pode revelar ajustes
necessários que só aparecem executando de verdade — rode localmente antes de
publicar em produção, e me manda o erro se algo não passar.

Não existe ainda um `package-lock.json` neste projeto (nunca rodei `npm
install` de verdade). O Dockerfile usa `npm install` por causa disso; depois
que você rodar `npm install` localmente e commitar o lockfile gerado, troque
para `npm ci` no `Dockerfile` (mais rápido e reprodutível).

## Limitações desta entrega

- Dependências não foram instaladas nem o build (Next.js, Prisma ou Docker)
  foram totalmente testados neste ambiente (sem acesso à internet/registro) —
  rode os comandos das seções acima localmente e corrija eventuais erros de
  versão de pacote.
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
