import nodemailer from "nodemailer";

/**
 * Site email goes out through Gmail SMTP (chosen over Resend so delivery to
 * rami@ works without domain DNS verification).
 *
 * Required env (Vercel + .env.local):
 *   GMAIL_USER          — full address of the Google account that sends
 *                         (needs 2-Step Verification enabled)
 *   GMAIL_APP_PASSWORD  — 16-char App Password from myaccount.google.com/apppasswords
 *                         (NOT the account password; revocable anytime)
 * Optional:
 *   CONTACT_TO_EMAIL    — override the delivery inbox (defaults to rami@)
 */
const GMAIL_USER = process.env.GMAIL_USER;
// Google displays app passwords with spaces ("abcd efgh ijkl mnop") — strip them.
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

export const MAIL_TO =
  process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "rami@strattonsecuritygroup.com";

export const mailerConfigured = !!(GMAIL_USER && GMAIL_APP_PASSWORD && GMAIL_APP_PASSWORD.length >= 16);

let transporter: nodemailer.Transporter | null = null;
function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });
  }
  return transporter;
}

export async function sendMail(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Array<{ filename: string; content: Buffer }>;
}): Promise<void> {
  // Gmail forces the authenticated account as the sender; the display name still shows.
  await getTransporter().sendMail({
    from: `"Stratton Security Website" <${GMAIL_USER}>`,
    ...opts,
  });
}
