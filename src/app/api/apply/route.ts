import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "Info@StrattonSecurityGroup.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "Stratton Security <onboarding@resend.dev>";

const schema = z.object({
  name: z.string().min(1, "Full name is required."),
  email: z.email("Valid email required."),
  phone: z.string().min(1, "Phone number is required."),
  position: z.string().min(1, "Please select a position."),
  guardCard: z.string().min(1, "Guard Card number is required."),
  experience: z.string().optional(),
  message: z.string().optional(),
  // Resume binary is never attached here — just the file name, if the form provides one.
  resumeFileName: z.string().optional(),
});

// Escape user-supplied values before interpolating into the HTML email.
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function applicationHtml(data: z.infer<typeof schema>): string {
  const { name, email, phone, position, guardCard, experience, message, resumeFileName } = data;
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a">
      <div style="background:#040d1e;padding:24px 32px;border-bottom:3px solid #1a3a6b">
        <h1 style="color:#ffffff;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
        <p style="color:#c0c8d4;margin:4px 0 0;font-size:13px">New Job Application</p>
      </div>
      <div style="background:#f4f6f9;padding:32px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px">Position</td><td style="padding:8px 0;font-weight:600">${esc(position)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Name</td><td style="padding:8px 0;font-weight:600">${esc(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${esc(email)}" style="color:#1a3a6b">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0"><a href="tel:${esc(phone)}" style="color:#1a3a6b">${esc(phone)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Guard Card #</td><td style="padding:8px 0;font-weight:600">${esc(guardCard)}</td></tr>
          ${experience ? `<tr><td style="padding:8px 0;color:#6b7280">Experience</td><td style="padding:8px 0">${esc(experience)}</td></tr>` : ""}
          ${resumeFileName ? `<tr><td style="padding:8px 0;color:#6b7280">Resume File</td><td style="padding:8px 0">${esc(resumeFileName)}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Notes</td><td style="padding:8px 0">${esc(message).replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
        <p style="font-size:12px;color:#6b7280;margin-top:16px;padding-top:16px;border-top:1px solid #e2e6ec">The resume file is not attached to this email and will be requested separately. Applicant was instructed to email their resume to ${esc(TO)} with subject: <em>Resume &ndash; Security Officer Application</em></p>
      </div>
      <div style="background:#040d1e;padding:16px 32px;text-align:center">
        <p style="color:#c0c8d4;font-size:12px;margin:0">strattonsecuritygroup.com &middot; (424) 440-5554</p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Graceful fallback: with no real API key (missing or placeholder), log the
  // application server-side so dev/demo still "works" instead of 500-ing.
  const resendKey = process.env.RESEND_API_KEY;
  const resendConfigured =
    !!resendKey && resendKey.startsWith("re_") && resendKey.length > 20 && !resendKey.includes("your_api_key");
  if (!resendConfigured) {
    console.log("[apply route] RESEND_API_KEY not configured — application logged instead of emailed:", data);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(resendKey);

    const res = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `New Job Application — ${data.position}`,
      html: applicationHtml(data),
    });
    if (res.error) {
      throw new Error(res.error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply route]", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit application. Please try again or call us directly." },
      { status: 500 },
    );
  }
}
