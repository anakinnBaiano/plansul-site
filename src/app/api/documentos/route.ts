import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/documentos?categoria=idss
// GET /api/documentos?categoria=reajuste-coletivo
export async function GET(request: NextRequest) {
  const categoria = request.nextUrl.searchParams.get("categoria");

  const documentos = await prisma.documento.findMany({
    where: categoria ? { categoria } : undefined,
    orderBy: [{ categoria: "asc" }, { ano: "asc" }],
  });

  return NextResponse.json(documentos);
}
