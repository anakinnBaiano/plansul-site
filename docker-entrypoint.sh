#!/bin/sh
set -e

# Roda a cada start do container (deploy novo, restart, etc).
#
# "prisma db push" sincroniza o schema (prisma/schema.prisma) com o arquivo
# SQLite apontado por DATABASE_URL, criando o banco/tabelas se não existirem
# ainda. Não usamos "migrate deploy" porque este projeto ainda não tem uma
# pasta prisma/migrations gerada (isso exige rodar "npx prisma migrate dev"
# localmente com internet, o que não foi possível neste ambiente) — "db push"
# não depende disso e é seguro para o tamanho/uso atual deste banco.
#
# "--accept-data-loss" é necessário para rodar sem prompt interativo dentro
# do container; nas mudanças atuais do schema não há nada destrutivo, mas
# fique atento ao log se um dia adicionar uma coluna obrigatória sem default
# a uma tabela que já tem dados.
echo "==> Sincronizando o schema do banco de dados..."
npx prisma db push --accept-data-loss --skip-generate

echo "==> Aplicando seed (idempotente)..."
npx tsx prisma/seed.ts

echo "==> Iniciando o servidor Next.js..."
exec "$@"
