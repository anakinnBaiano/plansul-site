import { NextResponse } from "next/server";
import { unidades } from "@/data/unidades";

export async function GET() {
  const ordenadas = [...unidades].sort((a, b) => a.ordem - b.ordem);
  return NextResponse.json(ordenadas);
}
