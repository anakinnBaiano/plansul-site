"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [saindo, setSaindo] = useState(false);

  async function handleLogout() {
    setSaindo(true);
    try {
      await fetch("/api/beneficiario/logout", { method: "POST" });
      router.refresh();
    } finally {
      setSaindo(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={saindo}
      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-plansul-blue disabled:cursor-not-allowed disabled:opacity-60"
    >
      <LogOut size={16} aria-hidden="true" />
      {saindo ? "Saindo..." : "Sair"}
    </button>
  );
}
