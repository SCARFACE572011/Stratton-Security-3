# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Stratton Security Group — Website

Premium marketing/lead-gen site for a Los Angeles private-security firm. Custom
Next.js 16 rebuild of a former Squarespace site. Live at strattonsecuritygroup.com
(prod alias `stratton-v3.vercel.app`). The site's job is phone calls + quote
requests from LA businesses/properties.

## Model strategy (route work by phase for speed + rigor)

- **Planning → Fable 5** (`claude-fable-5`): brainstorming, audits, design/UX
  reviews, writing implementation plans, content strategy, scoping. Fast and
  cheap where breadth beats deep reasoning. Caveat: Fable 5 has a separate usage
  cap that can be hit mid-session — fall back to Sonnet 5 for planning if so.
- **Execution → best model for the task:**
  - **Opus 5** (`claude-opus-5`) for correctness-critical work: tricky bugs (the
    form-submit race, LazyMotion/hydration issues), architecture calls, and
    **every verification / adversarial review pass before a deploy**.
  - **Sonnet 5** (`claude-sonnet-5`) — the execution default: routine
    implementation, refactors, and content/copy generation. Fast, strong enough
    for most edits in this repo.
  - **Haiku 4.5 / Sonnet 5** for cheap, parallel, mechanical subtasks.

What this actually controls: when **delegating via the Agent/Workflow tools, set
`model` per phase** (planning→Fable 5, implementation→Sonnet 5, verify/review→
Opus 5) — that is the direct lever. The **main interactive loop's** model is set
by the user with `/model`; at a planning↔execution boundary, recommend the
switch rather than assume it. Default to closing every execution phase with an
Opus-5 review before deploying.

## Commands

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # production build — run before deploying; catches type errors
npm run lint         # eslint (eslint-config-next)
npx tsc --noEmit     # typecheck only
npx vercel --prod --yes   # deploy to production (project stratton-v3)
```

No test suite exists. Verification is done by building + driving the real site
(see **Verifying changes**).

## Tech stack (verify APIs against the vendored Next.js docs — see AGENTS.md)

- **Next.js 16** App Router + TypeScript, **React 19**.
- **Tailwind CSS v4**, CSS-first: the entire design system lives in
  `src/app/globals.css` under `@theme` and `@utility`. There is **no
  tailwind.config.ts** and there must never be one.
- **Framer Motion v12 under LazyMotion strict** (wired in `SiteChrome.tsx`).
  Import **`m`** (never `motion`) from `framer-motion`. `motion.*` compiles fine
  but **throws at runtime** inside the strict tree. Only `domAnimation` features
  load — no `drag`/`layout`/`layoutId`/`Reorder`. When mapping over data in a
  component that renders `<m.*>`, don't name the callback param `m` (it shadows
  the import).
- **Fonts** (`layout.tsx`, `next/font/google`): **Rajdhani** (display, uppercase
  headings, `--font-rajdhani`, weights 500/600/700 — all three are load-bearing;
  bare `font-display` text inherits weight 400 and font-matches to the 500 face),
  **Hanken Grotesk** (body, `--font-hanken`), **JetBrains Mono** (tactical
  micro-labels, `--font-mono-jb`).
  **Font-family trap:** apply fonts with the `@theme`-backed utilities
  `font-display` / `font-sans` / `font-mono`. The arbitrary-value form (`font-`
  plus a bracketed `var(--font-*)`) does **not** work — Tailwind v4 parses it as
  a font-*weight* and emits an invalid `font-weight: <font stack>`, applying no
  family at all. It silently rendered 15 display headings in the body font until
  it was caught in the compiled CSS. Don't write that literal string anywhere in
  the repo (including docs) — Tailwind's source scanner picks it up from comments
  and markdown and compiles the dead rule back into the stylesheet.
- **Icons:** `lucide-react`. **Smooth scroll:** `lenis` (gated behind
  `prefers-reduced-motion`). **Forms:** `react-hook-form` + `zod`. **Email:**
  `nodemailer`. **CMS:** Keystatic.

## Architecture

### Content is data, not markup
`src/lib/constants.ts` is the single source of truth for site content:
`SITE_CONFIG` (phone/email/address/geo/social — everything derives from here,
including the maps URL), `NAV_ITEMS`, `SERVICES`, `INDUSTRIES`, `SERVICE_AREAS`,
`RESOURCES`, `STATS`, `CLIENT_LOGOS`, `GENERAL_INQUIRY_POSITION`. The dynamic
routes (`/services/[slug]`, `/industries/[slug]`, `/service-areas/[slug]`,
`/resources/[slug]`) are generated from these arrays via `generateStaticParams`,
and their `generateMetadata` builds titles/descriptions from the same objects.
To add or change a service/area/industry/guide, edit the array — do not create a
bespoke page. `ServiceDetail.seoTitle` and `ServiceArea.localContext`/`faqs`
exist specifically to drive per-page SEO content + FAQPage schema.

### The dark-theme override (important gotcha)
The site is a dark navy/black/white "tactical/HUD" theme. `globals.css` has an
**unlayered override block** (search "DARK CONTENT SURFACES") that force-recolors
former light surfaces/text to dark equivalents, keyed on **arbitrary-value
classes** like `.text-\[\#4b5563\]` and `.text-\[\#0a0a0a\]`. The named token
classes (`.text-steel-700` etc.) are **not** covered by the remap. So the ESLint
"can be written as `text-steel-700`" suggestion is a **trap** — switching an
arbitrary color class to the token silently breaks the dark theme (text renders
dark on dark). Keep body/heading text as the arbitrary `text-[#4b5563]` /
`text-[#0a0a0a]` classes. Section rhythm comes from stepped `--surface-*` tones +
`main > section` seams; `.card` hover-lift uses `!important` to beat Framer's
inline transform, and `.card-static` opts non-clickable cards out of the lift.

### Site chrome & the homepage intro
`SiteChrome.tsx` wraps all public routes in the `LazyMotion` provider plus
`ScrollProgress`, `LenisProvider`, `MobileStickyBar`, `BackToTop`. It renders
bare (no provider) **only** for exact `/keystatic` or `/keystatic/*` — the guard
is exact-or-slash on purpose (a bare `startsWith("/keystatic")` would strip the
motion provider from 404s like `/keystatic-foo` and break their `m.*` menus).
`BrandIntro.tsx` is a **server-rendered, pure-CSS** intro (radar sweep → blast
doors) rendered only from `app/page.tsx` (homepage). It's CSS-timed (can't hang),
plays once per session (inline sessionStorage script), skips on first
interaction, and is disabled for reduced-motion. Do **not** gate an intro on
hydration timing — an earlier client-only version silently never fired in prod.

### Above-the-fold motion is CSS, not JS
Hero entrances use the `anim-rise`/`anim-fade`/`anim-word` utilities in
globals.css so the LCP element paints before any JS hydrates. Keep it that way;
reserve Framer for scroll-linked/looping motion below the fold.

### Email (forms → inboxes)
`src/lib/mailer.ts` sends via **Gmail SMTP** (nodemailer), not Resend (a Resend
integration is provisioned but unused). Two API routes — `src/app/api/contact/route.ts`
and `src/app/api/apply/route.ts` — validate with zod, escape HTML, honeypot-check
(`website` field), and deliver: **contact inquiries → `CONTACT_TO` (default
omar@)**, **job applications + resume attachment → `CAREERS_TO` (default
careers@)**. Without `GMAIL_USER`/`GMAIL_APP_PASSWORD` set, routes run in demo
mode (log the submission, return ok — never 500 a visitor). Contextual CTAs pass
`?service=/?area=/?industry=/?ref=` which `ContactForm` reads (from
`window.location.search`, not `useSearchParams`) to prefill.

### Contact form (don't "simplify" the submit)
`ContactForm.tsx` is a 2-step form with **native submission deliberately
disabled** — `onSubmit` is `preventDefault`'d and submit runs only from the
step-2 button's explicit `onClick`. This guards a React 19 race where the shared
Continue/Submit button node morphs mid-click and fires an early submit dropping
lead data. The distinct `key` props and the button-only submit are load-bearing;
read the in-file comment before touching it.

### Indexing gate
`IS_INDEXABLE` (`src/lib/utils.ts`, = `NEXT_PUBLIC_INDEXABLE === "true"`) controls
`robots.ts` (allow-all + sitemap vs. disallow / no sitemap), `sitemap.ts` (URLs
vs. empty), and the root `metadata.robots`. It's a **build-time inlined** flag:
flipping it in Vercel requires a fresh build (not a promote/rollback). Keep it
off on preview/temp hosts; on at the production domain.

### SEO plumbing
`src/app/schema.tsx` exports JSON-LD helpers (`OrganizationSchema`,
`ServiceSchema`, `BreadcrumbSchema`); detail pages also emit `FAQPage` /
`Article` schema inline. `metaDescription()` in `utils.ts` caps descriptions at
~160 chars. Root `layout.tsx` sets the `%s | Stratton Security Group` title
template — page-level titles must **not** re-append the brand.

### CMS (Keystatic)
`keystatic.config.ts` + admin at `/keystatic` (git-based, free; 404s in prod
until a GitHub App is configured — works in `next dev`). Editable content
(FAQs, testimonials, Bark.com reviews) lives as JSON in `src/content/*` and is
read at build via `src/lib/content.ts` (`getFaqs`/`getTestimonials`/
`getBarkReviews`). Pages that render CMS content are `async` server components
that fetch via content.ts and pass results as props to client components.

## Environment variables (set in Vercel → Production)

| Var | Purpose |
|---|---|
| `GMAIL_USER`, `GMAIL_APP_PASSWORD` | Gmail SMTP sender for both forms (App Password, not the account password). Unset → demo mode. |
| `CONTACT_TO_EMAIL`, `CAREERS_TO_EMAIL` | Override delivery inboxes (defaults omar@ / careers@). |
| `NEXT_PUBLIC_INDEXABLE` | `true` makes the site indexable (build-time inlined — needs a fresh build). |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; GA is a no-op until set. |
| `GOOGLE_SITE_VERIFICATION` | Emits the Search Console `<meta>` tag when set. |
| `KEYSTATIC_STORAGE_REPO` + GitHub App vars | Switches `/keystatic` to GitHub mode so prod edits persist. |

Never commit `.env.local` (gitignored).

## Verifying changes

`npx next build` must pass. To exercise the real site: `npx next start -p 3001`,
then poll `curl -sf http://localhost:3001` until up, and drive with Playwright
via the npx cache (there is no local playwright dep) — see the
`stratton-verification-workflow` memory for the exact executable paths and
gotchas (the brand intro on first homepage load, Lenis intercepting
`window.scrollTo` → use `scrollIntoViewIfNeeded`, `page.emulateMedia({
reducedMotion: 'reduce' })` for reduced-motion checks). Every scroll/motion
effect must have a reduced-motion fallback.

Note: the developer's office machine sits behind a filtering proxy that serves
stale cached copies of the site — never diagnose the live site from `curl`
against the domain there; use `--resolve <domain>:443:<vercel-ip>` or the
`stratton-v3.vercel.app` alias, or check from a phone.

## Client-supplied assets still pending

Real photography (replaces the Unsplash stock used across service/industry/area/
about heroes + homepage strips), the homepage hero video (`SITE_CONFIG.heroVideoSrc`
is empty) + poster, named leadership photos/bios, and the Bark.com profile URL.
Office address is CONFIRMED: 10940 Wilshire Blvd, Suite 1720, Los Angeles, CA 90024.
