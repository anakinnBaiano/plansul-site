/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self)",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Ajuste os domínios abaixo conforme os sistemas externos reais
    // (Portal do Usuário, Portal da Empresa, Portal do Prestador, Guia Médico, Google Maps, etc.)
    //
    // 'unsafe-eval' só entra em desenvolvimento: o hot-reload do "next dev"
    // executa os módulos via eval() e, sem essa permissão, o navegador
    // bloqueia a execução — nenhum onClick/useState funciona (ex.: o menu
    // hambúrguer mobile fica sem resposta). Em produção o bundle não usa
    // eval, então o CSP continua estrito.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: https:",
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "frame-src 'self' https://www.google.com",
      "connect-src 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  // "standalone" gera um build enxuto (server.js + só as dependências usadas)
  // dentro de .next/standalone — é o que o Dockerfile copia pra imagem final,
  // evitando levar node_modules inteiro pro container de produção.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
