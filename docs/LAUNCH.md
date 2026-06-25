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
| `RESEND_API_KEY` | Activates email for the contact + apply forms. Until set, forms run in "demo mode" (submissions are logged server-side, **not emailed**). | `re_xxxxxxxxxxxxxxxxxxxx` |
| `CONTACT_EMAIL` | Inbox that receives contact + application submissions. Defaults to `rami@strattonsecuritygroup.com`. (Info@ stays the public-facing address shown on the site.) | `rami@strattonsecuritygroup.com` |
| `CONTACT_FROM_EMAIL` | Verified "from" sender. Defaults to Resend's test sender until set. | `Stratton Security <noreply@strattonsecuritygroup.com>` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID. GA is a no-op until set. | `G-XXXXXXXXXX` |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token (emits the `<meta>` tag). | `abc123…` |
| `KEYSTATIC_STORAGE_REPO` | Switches the `/keystatic` CMS to GitHub mode so edits persist in production. With its GitHub App vars (see §7). | `owner/stratton` |

---

## 2. Email — make the forms actually send (Item #1)

Both forms (`/contact` and `/careers/apply`) are wired to [Resend](https://resend.com)
and are currently in **demo mode** (no key = submissions logged, never emailed).

1. Create a free Resend account.
2. **Add & verify the sending domain** `strattonsecuritygroup.com` (Resend gives you
   DNS records — SPF/DKIM — to add at the registrar). This must be done **after** the
   domain transfer (Item #4), or verify a subdomain you control.
3. Create an API key (starts with `re_`).
4. In Vercel, set `RESEND_API_KEY`, `CONTACT_EMAIL`, and `CONTACT_FROM_EMAIL`
   (the from-address must be on the verified domain).
5. Redeploy.
6. **Test both forms** and confirm the emails arrive at `CONTACT_EMAIL`.

> Routes: `src/app/api/contact/route.ts`, `src/app/api/apply/route.ts`.
> Both validate input (zod), escape HTML, and fall back to logging if the key is absent.

---

## 3. Career applications & resumes (Item #2)

**Fixed.** The apply form now has a real file upload (PDF/DOC/DOCX, max 5 MB) and the
resume is **attached to the application email** sent to `CONTACT_EMAIL`. So once email
is live (Item #2), each application email arrives with the applicant's resume attached.

- In demo mode (no Resend key) the upload is accepted and logged (filename + size) but
  not stored — you'll only receive resumes once `RESEND_API_KEY` is set.
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
