# Stratton Security Group — Launch & Ops Guide

Everything needed to take the site from the current build to a fully live,
lead-capturing production site. Work top to bottom.

---

## 1. Environment variables

Set these in the **Vercel project → Settings → Environment Variables (Production)**.
`.env.local` only affects local `npm run dev`; production reads Vercel's env.
After changing env vars in Vercel you must **redeploy** for them to take effect.

| Variable | Purpose | Example |
|---|---|---|
| `GMAIL_USER` | Google account that *sends* the form emails (Gmail SMTP). Until set (with the app password), forms run in "demo mode" (submissions are logged server-side, **not emailed**). | `rami@strattonsecuritygroup.com` |
| `GMAIL_APP_PASSWORD` | 16-char Google App Password for `GMAIL_USER` (myaccount.google.com/apppasswords — requires 2-Step Verification; never the real password). | `abcdefghijklmnop` |
| `CONTACT_TO_EMAIL` | Inbox that receives contact + application submissions. Defaults to `rami@strattonsecuritygroup.com`. (Info@ stays the public-facing address shown on the site.) | `rami@strattonsecuritygroup.com` |
| `NEXT_PUBLIC_INDEXABLE` | Set to `true` at domain cutover (fresh build required) — until then every host serves noindex + empty sitemap. See §4.5. | `true` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID. GA is a no-op until set. | `G-XXXXXXXXXX` |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token (emits the `<meta>` tag). | `abc123…` |
| `KEYSTATIC_STORAGE_REPO` | Switches the `/keystatic` CMS to GitHub mode so edits persist in production. With its GitHub App vars (see §7). | `owner/stratton` |

---

## 2. Email — make the forms actually send (Item #1)

Both forms (`/contact` and `/careers/apply`) send via **Gmail SMTP** (`src/lib/mailer.ts`)
and deliver to **rami@strattonsecuritygroup.com** (override with `CONTACT_TO_EMAIL`).
Without credentials they run in **demo mode** (submissions logged, never emailed).

1. Pick the Google account that will *send* the mail (e.g. rami@'s own account).
   It must have **2-Step Verification** enabled.
2. On that account, create an **App Password**: https://myaccount.google.com/apppasswords
   → name it "Stratton website" → copy the 16-character code. (Revocable anytime;
   never use the real account password.)
3. In Vercel (Production), set `GMAIL_USER` (the full address) and
   `GMAIL_APP_PASSWORD` (the 16-char code). Same two lines in `.env.local` for dev.
4. Redeploy (env vars only apply to new deployments).
5. **Test both forms** and confirm the emails arrive at rami@ (resume attached for
   applications; visitors/applicants also get a confirmation email).

> Routes: `src/app/api/contact/route.ts`, `src/app/api/apply/route.ts`; transport in
> `src/lib/mailer.ts`. Both validate input (zod), escape HTML, honeypot bots, and fall
> back to logging if credentials are absent. Gmail limit: ~500 recipients/day — far
> above expected lead volume.
>
> Note: a Resend marketplace integration is also installed on the Vercel project
> (provisions `RESEND_API_KEY`, currently unused by code). If the domain's DNS is ever
> verified with Resend, switching back to branded-domain sending is a small change —
> see git history of the two routes.

---

## 3. Career applications & resumes (Item #2)

**Fixed.** The apply form now has a real file upload (PDF/DOC/DOCX, max 5 MB) and the
resume is **attached to the application email** sent to `CONTACT_EMAIL`. So once email
is live (Item #2), each application email arrives with the applicant's resume attached.

- In demo mode (no Gmail credentials) the upload is accepted and logged (filename +
  size) but not stored — you'll only receive resumes once `GMAIL_USER` /
  `GMAIL_APP_PASSWORD` are set.
- Files: `src/components/forms/ApplyForm.tsx`, `src/app/api/apply/route.ts`.
- If you later want resumes archived in a bucket (not just email), add Vercel Blob and
  store the file there in the apply route, then include the link in the email.

---

## 4. Domain transfer (Item #4)

1. In Vercel → Project → **Settings → Domains**, add `strattonsecuritygroup.com`
   (and `www.`).
2. At the current registrar, point DNS to Vercel (A record `76.76.21.21` for the apex,
   or the CNAME Vercel shows; Vercel's dialog lists the exact records).
3. Wait for propagation + SSL issuance.
4. `robots.ts` and `sitemap.ts` already reference `https://strattonsecuritygroup.com`,
   so they become correct automatically once the domain is live.
5. **Set `NEXT_PUBLIC_INDEXABLE=true` in Vercel (Production), then trigger a FRESH
   BUILD** (`vercel --prod` or a new git push — NOT "promote existing deployment" or an
   instant rollback, and not a redeploy with build cache for these routes). The flag is
   inlined at build time: until a build runs with it set, every host serves
   `<meta robots noindex>` and an empty sitemap, so the temporary vercel.app host never
   gets indexed. Crawling itself stays allowed so Google can *see* the noindex.
   ⚠️ Any later rollback to a pre-flag build silently reverts production to noindex.
   **Verify after cutover:** `curl -s https://strattonsecuritygroup.com | grep robots`
   should show `index, follow`, and `/sitemap.xml` should list all URLs.
   (Flag lives in `src/lib/utils.ts`; used by layout.tsx, robots.ts, sitemap.ts.)

---

## 5. Backend / Google sync (Item #5)

Only Vercel Analytics is currently active. To sync with Google:

1. **GA4** — create a property at analytics.google.com, copy the Measurement ID
   (`G-…`), set `NEXT_PUBLIC_GA_ID` in Vercel, redeploy. (Code already wired:
   `src/components/analytics/GoogleAnalytics.tsx`.)
2. **Search Console** — add the property at search.google.com/search-console, choose
   the HTML-tag method, set `GOOGLE_SITE_VERIFICATION` in Vercel, redeploy, then verify.
3. Submit `https://strattonsecuritygroup.com/sitemap.xml` in Search Console.
4. **Google Business Profile** — claim/verify the LA listing (address, hours 24/7, phone,
   category "Security Guard Service") for local SEO. (Manual, no code.)

---

## 6. Replace stock images with Stratton-approved photos (Item #3)

All currently use Unsplash placeholders. Replace each with an approved image
(ideally drop the file in `/public/images/` and reference it locally instead of a
remote URL). Inventory:

| File | What the image is for |
|---|---|
| `src/components/home/ImageStrip.tsx` (×3) | Homepage cinematic photo strip |
| `src/components/home/CTASection.tsx` | Final call-to-action background |
| `src/app/about/page.tsx` | About page hero/section |
| `src/app/contact/page.tsx` | Contact page imagery |
| `src/app/industries/page.tsx` | Industries index image |
| `src/app/industries/[slug]/page.tsx` | Per-industry detail image |
| `src/components/services/ServicesPageContent.tsx` | Services index image |
| `src/components/services/ServiceDetailContent.tsx` | Per-service detail image |
| `src/components/training/TrainingContent.tsx` | Training page image |
| `src/components/careers/CareersContent.tsx` | Careers page image |
| `src/components/service-areas/ServiceAreasContent.tsx` | Service-areas image |

**Also still pending media:**
- Hero video — `SITE_CONFIG.heroVideoSrc` is empty (causes a console 404). Add an MP4.
- Hero poster — `/public/images/hero-poster.svg` placeholder → real photographic poster.
- Leadership photos + bios (currently none).

---

## 7. Employee / owner editing — CMS (Item #6)

**In progress — Keystatic (git-based CMS).** The admin lives at **`/keystatic`** and is
isolated from the site chrome (no preloader/smooth-scroll) and blocked from search engines.

**Migrated so far:** FAQs (`src/content/faqs/*.json`, edited at `/keystatic`, rendered on
`/faq`). The page reads content via `src/lib/content.ts` (Keystatic Reader) at build time,
so edits appear on the next deploy.

**Remaining to migrate** (each: define a collection in `keystatic.config.ts`, seed
`src/content/...`, add a reader in `src/lib/content.ts`, point the component at it):
services, testimonials + Bark reviews, client logos, site info/contact (SITE_CONFIG),
guides/articles, team/leadership, page images.

**Activate editing in production (GitHub mode).** Local mode (current default) only
persists edits on a developer's machine — on Vercel the filesystem is read-only, so the
admin loads but can't save. To let owners edit the live site:
1. Run the app locally and visit `/keystatic`; Keystatic walks you through creating a
   **GitHub App** connected to the repo (or use Keystatic Cloud).
2. Set the resulting env vars in Vercel: `KEYSTATIC_STORAGE_REPO` (e.g. `owner/stratton`),
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`.
3. Redeploy. Editors then sign in with GitHub at `/keystatic`; saving commits to the repo
   and auto-triggers a redeploy (~1 min to go live).
4. (Recommended) Restrict who can edit via the GitHub App's repo collaborators.
