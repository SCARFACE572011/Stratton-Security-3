import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, mailerConfigured, MAIL_TO } from "@/lib/mailer";

export const dynamic = "force-dynamic";

const schema = z.object({
  propertyType: z.string().min(1, "Please select a property type."),
  serviceType: z.string().min(1, "Please select a service."),
  name: z.string().min(1, "Name is required."),
  company: z.string().optional(),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
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

function teamHtml(data: z.infer<typeof schema>): string {
  const { propertyType, serviceType, name, company, email, phone, message, hearAbout } = data;
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a">
      <div style="background:#040d1e;padding:24px 32px;border-bottom:3px solid #1a3a6b">
        <h1 style="color:#ffffff;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
        <p style="color:#c0c8d4;margin:4px 0 0;font-size:13px">New Contact Form Submission</p>
      </div>
      <div style="background:#f4f6f9;padding:32px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px">Property Type</td><td style="padding:8px 0;font-weight:600">${esc(propertyType)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Service Needed</td><td style="padding:8px 0;font-weight:600">${esc(serviceType)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Name</td><td style="padding:8px 0;font-weight:600">${esc(name)}</td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0">${esc(company)}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${esc(email)}" style="color:#1a3a6b">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0"><a href="tel:${esc(phone)}" style="color:#1a3a6b">${esc(phone)}</a></td></tr>
          ${hearAbout ? `<tr><td style="padding:8px 0;color:#6b7280">Heard About Us</td><td style="padding:8px 0">${esc(hearAbout)}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:8px 0">${esc(message).replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      </div>
      <div style="background:#040d1e;padding:16px 32px;text-align:center">
        <p style="color:#c0c8d4;font-size:12px;margin:0">strattonsecuritygroup.com &middot; (424) 440-5554</p>
      </div>
    </div>
  `;
}

function confirmationHtml(data: z.infer<typeof schema>): string {
  const { name, serviceType } = data;
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a">
      <div style="background:#040d1e;padding:24px 32px;border-bottom:3px solid #1a3a6b">
        <h1 style="color:#ffffff;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
      </div>
      <div style="padding:32px">
        <p style="font-size:15px">Hi ${esc(name)},</p>
        <p style="font-size:14px;color:#4b5563;line-height:1.6">Thank you for reaching out. We&rsquo;ve received your inquiry about <strong>${esc(serviceType)}</strong> and a Stratton security advisor will contact you within one business day.</p>
        <p style="font-size:14px;color:#4b5563">For immediate assistance, call us at <a href="tel:+14244405554" style="color:#1a3a6b">(424) 440-5554</a>.</p>
        <p style="font-size:13px;color:#6b7280;margin-top:32px">Excellence In Protection &middot; CA PPO License #122163</p>
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

  // Honeypot: real users never fill the hidden "website" field — bots do.
  // Silently accept so the bot thinks it succeeded, but send nothing.
  if (raw && typeof raw === "object" && (raw as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Graceful fallback: with no Gmail credentials configured, log the lead
  // server-side so dev/demo still "works" instead of 500-ing every visitor.
  if (!mailerConfigured) {
    console.log("[contact route] GMAIL_USER/GMAIL_APP_PASSWORD not configured — submission logged instead of emailed:", data);
    return NextResponse.json({ ok: true });
  }

  try {
    await sendMail({
      to: MAIL_TO,
      replyTo: data.email,
      subject: `New Security Inquiry — ${data.serviceType} (${data.propertyType})`,
      html: teamHtml(data),
    });

    // Visitor confirmation is best-effort; don't fail the request if it bounces.
    try {
      await sendMail({
        to: data.email,
        subject: "We received your inquiry — Stratton Security Group",
        html: confirmationHtml(data),
      });
    } catch (confirmErr) {
      console.warn("[contact route] confirmation email failed:", confirmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again or call us directly." },
      { status: 500 },
    );
  }
}
