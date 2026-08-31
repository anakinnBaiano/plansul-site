import { PrismaClient } from "@prisma/client";

// Evita criar múltiplas instâncias do PrismaClient durante hot-reload no
// modo de desenvolvimento do Next.js (padrão recomendado pela própria Prisma).
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
