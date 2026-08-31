import { NextResponse } from "next/server";
import { equipe } from "@/data/equipe";

export async function GET() {
  const ordenada = [...equipe].sort((a, b) => a.ordem - b.ordem);
  return NextResponse.json(ordenada);
}
