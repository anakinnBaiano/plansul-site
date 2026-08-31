/**
 * Concatena classes condicionalmente (sem dependência externa).
 * Uso: cn("base", condicao && "classe-extra", outra && "outra-classe")
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Type guard simples para checar se um link é externo (http/https/mailto/tel).
 */
export function isExternalLink(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
