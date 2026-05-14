"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { contactConfig } from "@/config/contact";

type Status = "idle" | "submitting" | "success";

function buildWhatsAppMessage(data: FormData): string {
  const name = (data.get("name") as string) ?? "";
  const email = (data.get("email") as string) ?? "";
  const company = (data.get("company") as string) ?? "";
  const type = (data.get("type") as string) ?? "";
  const message = (data.get("message") as string) ?? "";

  const lines = [
    "Halo SRYNIC! 👋",
    "",
    `*Nama:* ${name}`,
    `*Email:* ${email}`,
  ];
  if (company.trim()) lines.push(`*Perusahaan:* ${company}`);
  if (type.trim()) lines.push(`*Jenis proyek:* ${type}`);
  lines.push("", "*Pesan:*", message);

  return lines.join("\n");
}

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const text = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-foreground">
          {t("successTitle")}
        </h3>
        <p className="mt-2 text-sm text-muted max-w-sm">{t("successBody")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("fieldName")} name="name" placeholder={t("fieldNamePh")} required />
        <Field
          label={t("fieldEmail")}
          name="email"
          type="email"
          placeholder={t("fieldEmailPh")}
          required
        />
      </div>
      <Field label={t("fieldCompany")} name="company" placeholder={t("fieldCompanyPh")} />
      <Field label={t("fieldType")} name="type" placeholder={t("fieldTypePh")} />

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          {t("fieldMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("fieldMessagePh")}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A8.94 8.94 0 0 0 11.5 4C6.81 4 3 7.81 3 12.5c0 1.5.4 2.96 1.15 4.24L3 21l4.4-1.13a8.5 8.5 0 0 0 4.1 1.05h.01c4.69 0 8.5-3.81 8.5-8.5 0-2.27-.88-4.4-2.41-6.1Zm-6.1 13.07a7.07 7.07 0 0 1-3.6-.98l-.26-.15-2.61.67.7-2.54-.17-.27a7.05 7.05 0 0 1-1.07-3.72c0-3.9 3.17-7.07 7.07-7.07 1.88 0 3.66.74 4.99 2.07a7.04 7.04 0 0 1 2.07 5c-.01 3.9-3.18 7.07-7.12 7.07Zm3.88-5.3c-.21-.11-1.26-.62-1.45-.69-.19-.07-.34-.11-.48.11-.14.21-.55.69-.67.83-.12.14-.25.16-.46.05-.21-.11-.9-.33-1.71-1.06a6.4 6.4 0 0 1-1.18-1.47c-.12-.21-.01-.32.09-.43.1-.1.21-.25.32-.37.11-.12.14-.21.21-.35.07-.14.04-.27-.02-.37-.06-.11-.48-1.16-.66-1.58-.17-.42-.35-.36-.48-.36l-.41-.01a.79.79 0 0 0-.57.27c-.2.21-.76.74-.76 1.81 0 1.07.78 2.1.89 2.24.11.14 1.54 2.34 3.73 3.28.52.23.93.36 1.25.46.52.17 1 .14 1.38.08.42-.06 1.26-.51 1.44-1.01.18-.5.18-.93.13-1.01-.05-.09-.19-.14-.4-.25Z" />
        </svg>
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", placeholder, required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
      >
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
