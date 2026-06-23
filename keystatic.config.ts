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
  },
});
