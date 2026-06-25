import { config, fields, collection } from "@keystatic/core";

/**
 * Keystatic CMS configuration.
 *
 * Storage: `local` edits files on disk (great for dev). For production editing
 * on Vercel, switch to GitHub mode by setting KEYSTATIC_STORAGE_REPO to
 * "owner/repo" — Keystatic then commits changes through a GitHub App, which
 * triggers a redeploy. See docs/LAUNCH.md.
 */
const repo = process.env.KEYSTATIC_STORAGE_REPO; // e.g. "SCARFACE572011/stratton"

export default config({
  storage: repo
    ? { kind: "github", repo: repo as `${string}/${string}` }
    : { kind: "local" },
  ui: {
    brand: { name: "Stratton Security" },
  },
  collections: {
    faqs: collection({
      label: "FAQs",
      slugField: "question",
      path: "src/content/faqs/*",
      format: { data: "json" },
      columns: ["question"],
      schema: {
        question: fields.slug({
          name: { label: "Question", validation: { length: { min: 1 } } },
        }),
        answer: fields.text({
          label: "Answer",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        order: fields.integer({
          label: "Display order",
          description: "Lower numbers appear first.",
          defaultValue: 0,
        }),
      },
    }),

    testimonials: collection({
      label: "Testimonials",
      slugField: "author",
      path: "src/content/testimonials/*",
      format: { data: "json" },
      columns: ["author"],
      schema: {
        author: fields.slug({
          name: { label: "Author", validation: { length: { min: 1 } } },
        }),
        quote: fields.text({
          label: "Quote",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        company: fields.text({ label: "Company / Role" }),
        initials: fields.text({
          label: "Initials",
          description: "2 letters shown in the avatar, e.g. MM.",
        }),
        stars: fields.integer({ label: "Stars (1–5)", defaultValue: 5 }),
        order: fields.integer({
          label: "Display order",
          description: "Lower numbers appear first.",
          defaultValue: 0,
        }),
      },
    }),

    barkReviews: collection({
      label: "Bark.com Reviews",
      slugField: "author",
      path: "src/content/bark-reviews/*",
      format: { data: "json" },
      columns: ["author"],
      schema: {
        author: fields.slug({
          name: { label: "Author", validation: { length: { min: 1 } } },
        }),
        quote: fields.text({
          label: "Quote",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        role: fields.text({ label: "Role / Location" }),
        date: fields.text({ label: "Date", description: "e.g. April 2025" }),
        stars: fields.integer({ label: "Stars (1–5)", defaultValue: 5 }),
        order: fields.integer({
          label: "Display order",
          description: "Lower numbers appear first.",
          defaultValue: 0,
        }),
      },
    }),
  },
});
