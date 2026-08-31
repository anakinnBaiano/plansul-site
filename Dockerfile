# syntax=docker/dockerfile:1

# Build multi-stage para o site Plansul (Next.js 14).
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
COPY package.json package-lock.json* ./
RUN npm install

# ---------- builder: builda o Next.js ----------
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

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

RUN npm run build

# ---------- runner: imagem final, enxuta ----------
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Site sem banco de dados: todo o conteúdo (unidades, equipe, documentos por
# ano etc.) vem de arquivos estáticos em src/data — o build "standalone" do
# Next.js já traz tudo que é preciso, sem passo de inicialização.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
