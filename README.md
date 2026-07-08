```
>  ███████╗███████╗███████╗██████╗  ██████╗ ███╗   ██╗████████╗
>  ██╔════╝██╔════╝██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝
>  █████╗  █████╗  █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║
>  ██╔══╝  ██╔══╝  ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║
>  ███████╗██║     ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║
>  ╚══════╝╚═╝     ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝
                     Tech for eSports
```

<div align="center">

[![Next.js](https://img.shields.io/badge/next.js-16.2.10-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-19.2.4-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/i18n-next--intl-C89B3C)](https://next-intl.dev/)

</div>

---

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  EFFRONT - Next.js 16 (App Router)                                          ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  Institutional site for the company behind ProStaff, ArenaBR,               ║
║  scrims.lol and peneira.gg. EN default · PT-BR · ES · KO                    ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

<details>
<summary><kbd>▶ Key Features (click to expand)</kbd></summary>

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [■] i18n real                - next-intl, locale prefix always on 4 langs  │
│  [■] Design tokens próprios    - paleta herdada do ProStaff, tipo próprio   │
│  [■] Careers honesto           - 0 vagas reais em vez de vaga fantasma      │
│  [■] Privacy policy real       - texto próprio, escopado ao que o site faz  │
│  [■] Media kit                 - cores, tipografia e logos pra baixar       │
│  [■] Fonts otimizadas          - next/font/local (Inter + Bricolage)        │
│  [■] SEO técnico               - sitemap.ts + robots.ts por idioma          │
│  [■] Lint/format automatizado  - ESLint + Prettier + Husky/lint-staged      │
│  [■] CI                        - GitHub Actions: format, lint, typecheck    │
└─────────────────────────────────────────────────────────────────────────────┘
```

</details>

---

## Table of Contents

```
┌──────────────────────────────────────────────────────┐
│  01 · Quick Start                                    │
│  02 · Technology Stack                               │
│  03 · Project Structure                              │
│  04 · Environment Variables                          │
│  05 · Pages & Routes                                 │
│  06 · Internacionalização                            │
│  07 · Design System                                  │
│  08 · Content Rules                                  │
│  09 · Scripts                                        │
│  10 · Deployment (Vercel)                            │
│  11 · Open Items                                     │
│  12 · License                                        │
└──────────────────────────────────────────────────────┘
```

---

## 01 · Quick Start

```bash
# Install dependencies
npm install

# Configure environment (opcional em dev)
cp .env.example .env.local

# Start development server (Turbopack, port 6767)
npm run dev
```

```
  App:  http://localhost:6767
```

Locale padrão (`en`) vive em `/en`; os outros em `/pt`, `/es`, `/ko`. A raiz
`/` redireciona pro locale padrão.

---

## 02 · Technology Stack

```
╔══════════════════════╦════════════════════════════════════════════════════╗
║  LAYER               ║  TECHNOLOGY                                        ║
╠══════════════════════╬════════════════════════════════════════════════════╣
║  Framework           ║  Next.js 16 (App Router, Turbopack)                ║
║  Language            ║  TypeScript 5                                      ║
║  Styling             ║  Tailwind CSS 4                                    ║
║  i18n                ║  next-intl (routing always-prefixed)               ║
║  Fonts               ║  next/font/local - Inter + Bricolage Grotesque     ║
║  Lint/Format         ║  ESLint (flat config) + Prettier + lint-staged     ║
║  Git Hooks           ║  Husky (pre-commit)                                ║
║  CI                  ║  GitHub Actions                                    ║
╚══════════════════════╩════════════════════════════════════════════════════╝
```

---

## 03 · Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx           - root layout (fonts, NextIntlClientProvider)
│   │   ├── page.tsx              - landing page
│   │   ├── about/                - /about
│   │   ├── products/             - /products (conteúdo completo dos 4 produtos)
│   │   ├── careers/              - /careers + /careers/[id] (vaga)
│   │   ├── news/                 - /news
│   │   ├── privacy/              - /privacy
│   │   └── media-kit/            - /media-kit
│   ├── globals.css               - design tokens + todo o CSS custom da marca
│   ├── sitemap.ts                - sitemap.xml (4 locales × todas as rotas)
│   └── robots.ts                 - robots.txt
├── components/                    - SiteNav, SiteFooter, CareersBoard, ícones...
├── data/
│   └── vagas.ts                   - vagas reais (array vazio = nada aberto)
├── fonts/                         - Inter-Variable.woff2 + BricolageGrotesque-Variable.woff2
└── i18n/                          - routing.ts, navigation.ts, request.ts (next-intl)
messages/                          - pt.json, en.json, es.json, ko.json
public/
└── logos/                         - PNGs: ProStaff, ArenaBR, scrims.lol, peneira.gg
```

---

## 04 · Environment Variables

Crie `.env.local` na raiz do projeto (opcional em dev, obrigatório em produção):

```env
NEXT_PUBLIC_SITE_URL=https://effront.gg
```

Usado por `sitemap.ts` e `robots.ts` pra gerar URLs absolutas corretas. Sem
essa variável, cai no fallback hardcoded `https://effront.gg`.

---

## 05 · Pages & Routes

```
┌──────────────────────────────────┬──────────────────────────────────────────┐
│  ROUTE                           │  DESCRIPTION                             │
├──────────────────────────────────┼──────────────────────────────────────────┤
│  /                               │  Redireciona pro locale padrão (en)      │
│  /[locale]                       │  Landing page                            │
│  /[locale]/about                 │  Missão, o que já construímos, time      │
│  /[locale]/products              │  Os 4 produtos, conteúdo completo        │
│  /[locale]/careers               │  Vagas abertas (filtro por área)         │
│  /[locale]/careers/[id]          │  Detalhe de uma vaga                     │
│  /[locale]/news                  │  Linha do tempo de marcos reais          │
│  /[locale]/privacy               │  Política de privacidade                 │
│  /[locale]/media-kit             │  Cores, tipografia, logos pra baixar     │
└──────────────────────────────────┴──────────────────────────────────────────┘
```

`[locale]` é sempre um de `en | pt | es | ko` - roteamento `always`-prefixed
via next-intl (ver seção 06).

---

## 06 · Internacionalização

Config em `src/i18n/routing.ts`, `navigation.ts` e `request.ts` (next-intl).

```tsx
export const routing = defineRouting({
  locales: ["en", "pt", "es", "ko"],
  defaultLocale: "en",
  localePrefix: "always", // todo locale tem URL propria e estavel - inclusive o default
});
```

Traduções em `messages/{locale}.json`, um namespace flat por seção (`Hero`,
`Products`, `About`, `Careers`, `Privacy`, etc). Pra adicionar texto novo,
precisa de entrada nos 4 arquivos.

**Importante**: `NextIntlClientProvider` recebe `locale` explicitamente no
`layout.tsx` - sem isso, sob Turbopack em dev com requisições concorrentes de
locales diferentes, acontece hydration mismatch (já debugado nesta sessão).

---

## 07 · Design System

Paleta herdada do design system real do ProStaff (dourado Hextech, azul
profundo, teal) - herança de família legítima, Effront é a empresa por trás
do produto. Tipografia e layout são próprios da Effront.

```
Paleta (src/app/globals.css):
  bg:      #0A0E1A     card:      #0F1823     border: #24303c
  gold:    #C89B3C     gold-hi:   #E8C878      teal:   #0596AA
  blue:    #0C223F     blue-dark: #0A1929

Fontes:
  Display:  Bricolage Grotesque   (títulos)
  Body:     Inter                 (texto e UI)
```

**Don'ts** (herdados do README real do ProStaff Design System - não
reintroduzir):

- Sem gradiente azul-arroxeado
- Sem emoji na UI
- Sem "colored-left-border card" (já violado e corrigido uma vez nesta sessão)
- Sem imagem fotográfica em superfície
- Sem preenchimento sólido de dourado - só borda, texto ou gradiente-a-transparente

---

## 08 · Content Rules

- **Zero conteúdo fabricado.** Nenhuma estatística, cliente, citação de
  imprensa ou membro de equipe entra sem ser real e verificável - ver
  `src/data/vagas.ts` (array vazio = nenhuma vaga aberta, não é placeholder;
  `/careers` mostra isso explicitamente em vez de inventar vaga).
- **`/privacy` é texto real**, escopado ao que o `effront.gg` institucional
  realmente faz (sem conta, sem formulário, só e-mail) - não confundir com a
  política de privacidade do produto ProStaff (que cobre dados de jogo, Riot
  API, etc - essa é outra política, de outro produto).

---

## 09 · Scripts

```bash
npm run dev            # desenvolvimento (Turbopack, porta 6767)
npm run build          # build de produção
npm run start           # serve o build de produção (porta 6767)
npm run lint             # ESLint
npm run typecheck         # tsc --noEmit
npm run format             # Prettier - grava
npm run format:check        # Prettier - só verifica (usado no CI)
```

Hook de pre-commit (Husky + lint-staged) roda ESLint e Prettier nos arquivos
staged automaticamente.

---

## 10 · Deployment (Vercel)

1. Conectar o repositório na Vercel - detecção automática de Next.js, sem
   config extra necessária (sem `vercel.json`).
2. Configurar variável de ambiente na Vercel:
   ```
   NEXT_PUBLIC_SITE_URL=https://effront.gg
   ```
   (ajustar pro domínio real assim que registrado)
3. Apontar o DNS do domínio comprado pra Vercel (CNAME/A record conforme a
   própria Vercel instrui ao adicionar o domínio no projeto).
4. Confirmar que `contato@effront.gg` tem inbox real configurada antes de
   publicar - vários `mailto:` no site apontam pra esse endereço.

---

## 11 · Open Items

- [ ] Busca formal de marca registrada pra "Effront" (INPI/USPTO) antes de
      considerar o nome 100% fechado
- [ ] Revisão jurídica formal do texto de `/privacy` antes de tratá-lo como
      documento definitivo (está em `messages/*.json` → `Privacy`)
- [ ] Logo/ícone de marca - em produção com uma designer (conceito explorado:
      figa, referenciando a etimologia de "effrontery"/afronta), ainda sem
      asset final. `public/logos/` só tem os logos dos produtos (ProStaff,
      ArenaBR, scrims.lol, peneira.gg), não um logo próprio da Effront
- [ ] Registro do domínio + DNS (em andamento)
- [ ] D4: se ProStaff/ArenaBR/scrims.lol/peneira.gg devem linkar de volta pra
      Effront como marca-mãe - ainda não feito nesses códigos-fonte

---

## 12 · License

Propriedade privada - © 2026 Effront. Todos os direitos reservados.

<div align="center">
  <strong>Effront</strong> · Tech for eSports
</div>
