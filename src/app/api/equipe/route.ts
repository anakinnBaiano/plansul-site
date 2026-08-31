import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const equipe = await prisma.membroEquipe.findMany({
    orderBy: { ordem: "asc" },
  });

  return NextResponse.json(equipe);
}
