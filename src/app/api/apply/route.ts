import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "rami@strattonsecuritygroup.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "Stratton Security <onboarding@resend.dev>";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_EXT = [".pdf", ".doc", ".docx"];

const schema = z.object({
  name: z.string().min(1, "Full name is required."),
  email: z.email("Valid email required."),
  phone: z.string().min(1, "Phone number is required."),
  position: z.string().min(1, "Please select a position."),
  guardCard: z.string().min(1, "Guard Card number is required."),
  experience: z.string().optional(),
  message: z.string().optional(),
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

function applicationHtml(data: z.infer<typeof schema>, resumeNote: string): string {
  const { name, email, phone, position, guardCard, experience, message } = data;
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
          <tr><td style="padding:8px 0;color:#6b7280">Resume</td><td style="padding:8px 0;font-weight:600">${esc(resumeNote)}</td></tr>
          ${message ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Notes</td><td style="padding:8px 0">${esc(message).replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      </div>
      <div style="background:#040d1e;padding:16px 32px;text-align:center">
        <p style="color:#c0c8d4;font-size:12px;margin:0">strattonsecuritygroup.com &middot; (424) 440-5554</p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  // Applications are sent as multipart/form-data so the resume file rides along.
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: a filled hidden "website" field means a bot — accept silently, send nothing.
  if (form.get("website")) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: String(form.get("name") ?? ""),
    email: String(form.get("email") ?? ""),
    phone: String(form.get("phone") ?? ""),
    position: String(form.get("position") ?? ""),
    guardCard: String(form.get("guardCard") ?? ""),
    experience: form.get("experience") ? String(form.get("experience")) : undefined,
    message: form.get("message") ? String(form.get("message")) : undefined,
  };

  const parsed = schema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Optional resume upload — validated then attached to the email.
  let resumeBuffer: Buffer | null = null;
  let resumeName = "";
  const file = form.get("resume");
  if (file && typeof file === "object" && "arrayBuffer" in file && (file as File).size > 0) {
    const f = file as File;
    const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) {
      return NextResponse.json({ ok: false, error: "Resume must be a PDF, DOC, or DOCX file." }, { status: 400 });
    }
    if (f.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ ok: false, error: "Resume file is too large (max 5 MB)." }, { status: 400 });
    }
    resumeBuffer = Buffer.from(await f.arrayBuffer());
    resumeName = f.name;
  }
  const resumeNote = resumeName
    ? `Attached — ${resumeName} (${Math.round((resumeBuffer?.length ?? 0) / 1024)} KB)`
    : "No resume attached";

  // Graceful fallback: with no real API key (missing or placeholder), log the
  // application server-side so dev/demo still "works" instead of 500-ing.
  const resendKey = process.env.RESEND_API_KEY;
  const resendConfigured =
    !!resendKey && resendKey.startsWith("re_") && resendKey.length > 20 && !resendKey.includes("your_api_key");
  if (!resendConfigured) {
    console.log("[apply route] RESEND_API_KEY not configured — application logged instead of emailed:", {
      ...data,
      resume: resumeName || "(none)",
      resumeBytes: resumeBuffer?.length ?? 0,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(resendKey);

    const res = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `New Job Application — ${data.position}`,
      html: applicationHtml(data, resumeNote),
      attachments: resumeBuffer ? [{ filename: resumeName, content: resumeBuffer }] : undefined,
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
