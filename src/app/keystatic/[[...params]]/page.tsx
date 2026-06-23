import { notFound } from "next/navigation";
import KeystaticApp from "../keystatic";

export default function Page() {
  // Only expose the admin in local dev, or in production once GitHub storage is
  // configured (KEYSTATIC_STORAGE_REPO). Otherwise the unauthenticated CMS UI
  // would be publicly reachable but unable to save (read-only FS on Vercel).
  if (process.env.NODE_ENV === "production" && !process.env.KEYSTATIC_STORAGE_REPO) {
    notFound();
  }
  return <KeystaticApp />;
}
