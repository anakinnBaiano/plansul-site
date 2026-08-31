import { NextRequest, NextResponse } from "next/server";
import { documentosPorAno } from "@/data/documentosPorAno";

// GET /api/documentos?categoria=idss
// GET /api/documentos?categoria=reajuste-coletivo
export async function GET(request: NextRequest) {
  const categoria = request.nextUrl.searchParams.get("categoria");

  const documentos = (categoria ? documentosPorAno.filter((d) => d.categoria === categoria) : documentosPorAno)
    .slice()
    .sort((a, b) => a.categoria.localeCompare(b.categoria) || a.ano - b.ano);

  return NextResponse.json(documentos);
}
