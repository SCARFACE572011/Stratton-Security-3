"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Upload, CheckCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Full name is required."),
  email: z.string().min(1, "Email is required.").email("Valid email required."),
  phone: z.string().min(1, "Phone number is required."),
  position: z.string().min(1, "Please select a position."),
  guardCard: z.string().min(1, "Guard Card number is required."),
  experience: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const POSITIONS = [
  "Unarmed Security Officer",
  "Armed Security Officer",
  "Mobile Patrol Officer",
  "Concierge / Lobby Officer",
  "Other / General Inquiry",
];

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_EXT = [".pdf", ".doc", ".docx"];
const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const inputClass =
  "w-full bg-platinum-50 border border-platinum focus:border-[#1a3a6b] focus:ring-1 focus:ring-[#1a3a6b] text-[#040d1e] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#6b7280]";
const labelClass =
  "block text-[0.6875rem] text-[#4b5563] tracking-widest uppercase mb-2";
const errorClass =
  "text-[0.6875rem] text-[#4b5563] mt-1.5";

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const f = e.target.files?.[0];
    if (!f) {
      setResumeFile(null);
      return;
    }
    const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) {
      setResumeFile(null);
      setFileError("Please upload a PDF, DOC, or DOCX file.");
      return;
    }
    if (f.size > MAX_RESUME_BYTES) {
      setResumeFile(null);
      setFileError("File is too large — maximum size is 5 MB.");
      return;
    }
    setResumeFile(f);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v != null && v !== "") fd.append(k, String(v));
      });
      if (resumeFile) fd.append("resume", resumeFile);

      // No Content-Type header — the browser sets the multipart boundary.
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error ?? "Submission failed.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center py-16">
        <div className="text-center max-w-xl">
          <div className="w-16 h-16 border border-[#1a3a6b]/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="display-title text-[2rem] text-[#040d1e] mb-4 uppercase tracking-wide">
            Application Received
          </h2>
          <p className="text-[#4b5563] text-[0.9375rem] leading-relaxed mb-8">
            Thank you for your interest in joining Stratton Security Group. Our operations team will review your application and follow up within 2–3 business days.
          </p>
          <Link href="/careers" className="btn-secondary text-xs">
            <ArrowLeft size={13} />
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-name" className={labelClass}>
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="apply-name"
                  type="text"
                  {...register("name")}
                  className={inputClass}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="apply-phone" className={labelClass}>
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="apply-phone"
                  type="tel"
                  {...register("phone")}
                  className={inputClass}
                  placeholder="(310) 555-0100"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className={errorClass} role="alert">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="apply-email" className={labelClass}>
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="apply-email"
                type="email"
                {...register("email")}
                className={inputClass}
                placeholder="you@email.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="apply-position" className={labelClass}>
                Position Applying For <span className="text-accent">*</span>
              </label>
              <select
                id="apply-position"
                {...register("position")}
                className={`${inputClass} appearance-none cursor-pointer`}
                aria-invalid={!!errors.position}
              >
                <option value="">Select a position…</option>
                {POSITIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.position && <p className={errorClass} role="alert">{errors.position.message}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-guard-card" className={labelClass}>
                  CA Guard Card # <span className="text-accent">*</span>
                </label>
                <input
                  id="apply-guard-card"
                  type="text"
                  {...register("guardCard")}
                  className={inputClass}
                  placeholder="BSIS Guard Card #"
                  aria-invalid={!!errors.guardCard}
                />
                {errors.guardCard && <p className={errorClass} role="alert">{errors.guardCard.message}</p>}
              </div>
              <div>
                <label htmlFor="apply-experience" className={labelClass}>
                  Years of Experience
                </label>
                <select
                  id="apply-experience"
                  {...register("experience")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select…</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="apply-resume" className={labelClass}>
                Resume{" "}
                <span className="text-[#6b7280] normal-case tracking-normal">
                  (PDF, DOC, or DOCX — max 5 MB)
                </span>
              </label>
              <label
                htmlFor="apply-resume"
                className="flex cursor-pointer items-center gap-3 border border-dashed border-platinum bg-platinum-50 px-4 py-4 text-[0.8125rem] text-[#4b5563] transition-colors hover:border-[#1a3a6b]"
              >
                <Upload size={16} className="text-accent shrink-0" strokeWidth={1.5} />
                {resumeFile ? (
                  <span className="text-[#040d1e] font-medium">
                    {resumeFile.name}{" "}
                    <span className="font-normal text-[#6b7280]">
                      ({Math.round(resumeFile.size / 1024)} KB) — click to replace
                    </span>
                  </span>
                ) : (
                  <span>Click to upload your resume</span>
                )}
                <input
                  id="apply-resume"
                  type="file"
                  accept={RESUME_ACCEPT}
                  onChange={onFileChange}
                  className="sr-only"
                />
              </label>
              {fileError && <p className={errorClass} role="alert">{fileError}</p>}
            </div>

            <div>
              <label htmlFor="apply-message" className={labelClass}>Additional Notes</label>
              <textarea
                id="apply-message"
                rows={4}
                {...register("message")}
                className={`${inputClass} resize-none`}
                placeholder="Anything else we should know — certifications, availability, referrals…"
              />
            </div>

            {submitError && (
              <p className="text-[0.75rem] text-steel-700" role="alert">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary text-xs w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight size={13} />
                </>
              )}
            </button>
          </form>

          <div className="lg:col-span-5 space-y-6">
            <div className="card p-6">
              <p className="label-overline mb-4">What Happens Next</p>
              <ol className="space-y-4">
                {[
                  "We review your application and Guard Card status",
                  "Operations will reach out within 2–3 business days",
                  "Screening call and in-person interview",
                  "Background check and onboarding",
                ].map((stepText, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-[var(--font-display)] text-accent text-[0.8125rem] tracking-wide pt-px shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.875rem] text-[#4b5563] leading-relaxed">{stepText}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-5 text-[0.8125rem] text-[#4b5563]">
              <p className="text-[#040d1e] font-medium mb-1">Questions about the role?</p>
              <p className="mb-3">Call our operations team directly — we&apos;re available 24/7.</p>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="text-accent font-[var(--font-display)] tracking-wide">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
