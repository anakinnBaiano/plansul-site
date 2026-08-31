import { NextResponse } from "next/server";
import { BENEFICIARIO_SESSION_COOKIE } from "./auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(BENEFICIARIO_SESSION_COOKIE);
  return response;
}
