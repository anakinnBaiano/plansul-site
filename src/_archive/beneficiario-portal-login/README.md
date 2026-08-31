# Login do Portal do Beneficiário (arquivado)

Módulo de login (e-mail/senha, sem cadastro) que ficava em `/beneficiario`,
substituído em 2026-08-25 por um redirecionamento direto ao sistema já
existente: `https://mv.plansul.net/mvsaudeweb/#/login/beneficiario`.

Guardado aqui — fora de `src/app`, então não é servido como rota — para o
caso de a Plansul querer autenticar dentro do próprio site no futuro em vez
de redirecionar para o MV.

## Arquivos

- `page.tsx` — página `/beneficiario`: mostra `LoginForm` sem sessão, e os
  cards de serviço (Autorizações, Segunda via, Aplicativo etc.) com sessão.
- `LoginForm.tsx` / `LogoutButton.tsx` — componentes client do formulário.
- `auth.ts` — nome do cookie de sessão.
- `api-login-route.ts` / `api-logout-route.ts` — rotas de API. O login
  sempre responde "indisponível" até `BENEFICIARIO_DB_URL` (banco externo de
  usuários) ser configurado — nunca simula autenticação com sucesso.

## Para reativar

1. `page.tsx` → `src/app/beneficiario/page.tsx`
2. `LoginForm.tsx` → `src/components/LoginForm/index.tsx`
3. `LogoutButton.tsx` → `src/components/LogoutButton/index.tsx`
4. `auth.ts` → `src/lib/auth.ts`
5. `api-login-route.ts` → `src/app/api/beneficiario/login/route.ts`
6. `api-logout-route.ts` → `src/app/api/beneficiario/logout/route.ts`
7. Ajustar os imports de volta para `@/components/...` e `@/lib/auth`.
8. Trocar o botão "Portal do Beneficiário" (`src/components/Header/index.tsx`)
   de volta para apontar para `/beneficiario` em vez do link externo.
