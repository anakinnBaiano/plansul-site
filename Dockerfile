# syntax=docker/dockerfile:1

# Build multi-stage para o site Plansul (Next.js 14 + Prisma).
# Pensado para rodar num stack Docker Compose gerenciado pelo Rancher.
#
# Observação: este projeto foi gerado sem acesso à internet, então não existe
# ainda um package-lock.json (nunca rodamos "npm install" de verdade). Por
# isso a etapa de instalação usa "npm install" em vez de "npm ci". Assim que
# você rodar "npm install" localmente e commitar o package-lock.json gerado,
# troque a linha abaixo para "npm ci" — fica mais rápido e 100% reprodutível.

# ---------- deps: instala as dependências ----------
FROM node:20-slim AS deps
WORKDIR /app
# Prisma precisa de openssl para gerar/rodar o client nesta imagem (Debian).
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json* ./
RUN npm install

# ---------- builder: gera o Prisma Client e builda o Next.js ----------
FROM node:20-slim AS builder
WORKDIR /app
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# DATABASE_URL só precisa existir (valor qualquer) para "prisma generate"
# funcionar durante o build — o valor real vem do ambiente em runtime.
ENV DATABASE_URL="file:./dev.db"

# As variáveis NEXT_PUBLIC_* que o Header (client component) usa direto nos
# links (Portal do Beneficiário, da Empresa, do Prestador, Guia Médico)
# precisam existir NO MOMENTO DO BUILD — o Next.js grava o valor delas dentro
# do JavaScript enviado ao navegador; definir isso só como variável de
# ambiente do container em runtime não muda mais nada no bundle já buildado.
# Por isso viram build ARGs aqui, passados pelo docker-compose.yml.
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_PORTAL_BENEFICIARIO_URL
ARG NEXT_PUBLIC_PORTAL_EMPRESA_URL
ARG NEXT_PUBLIC_PORTAL_PRESTADOR_URL
ARG NEXT_PUBLIC_GUIA_MEDICO_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_PORTAL_BENEFICIARIO_URL=$NEXT_PUBLIC_PORTAL_BENEFICIARIO_URL
ENV NEXT_PUBLIC_PORTAL_EMPRESA_URL=$NEXT_PUBLIC_PORTAL_EMPRESA_URL
ENV NEXT_PUBLIC_PORTAL_PRESTADOR_URL=$NEXT_PUBLIC_PORTAL_PRESTADOR_URL
ENV NEXT_PUBLIC_GUIA_MEDICO_URL=$NEXT_PUBLIC_GUIA_MEDICO_URL

RUN npx prisma generate
RUN npm run build

# ---------- runner: imagem final, enxuta ----------
FROM node:20-slim AS runner
WORKDIR /app
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# node_modules completo (não só o subconjunto do build "standalone" do
# Next.js): o entrypoint roda "prisma db push" e "tsx prisma/seed.ts" na
# inicialização do container, e essas ferramentas (prisma CLI, tsx,
# typescript) não fazem parte do rastreamento de dependências do Next, então
# precisam estar disponíveis à parte. Deixa a imagem um pouco maior, mas é a
# forma confiável de garantir que o entrypoint sempre funciona.
COPY --from=deps /app/node_modules ./node_modules
# Sobrescreve com o Prisma Client já gerado (código + engine) do estágio de
# build — o node_modules acima é de antes do "prisma generate".
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

COPY --from=builder /app/public ./public
# O build "standalone" traz server.js + seu próprio node_modules podado; o
# COPY abaixo faz merge com o node_modules completo copiado acima (não apaga
# o que já está lá, só adiciona/sobrescreve).
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Schema e seed — necessários em runtime pelo entrypoint.
COPY --from=builder /app/prisma ./prisma

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Nota de segurança: este container roda como root de propósito, para evitar
# problemas de permissão no volume do banco SQLite montado pelo Rancher (um
# volume novo é criado com dono root por padrão). Se quiser rodar como
# usuário não-root, crie o volume já com a ownership certa (ou use um
# entrypoint com gosu/su-exec para trocar de usuário depois do chown) e
# adicione "USER node" antes do ENTRYPOINT abaixo.

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]
