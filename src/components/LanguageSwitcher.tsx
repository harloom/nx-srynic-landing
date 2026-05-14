"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import type { Locale } from "@/i18n/config";

const options: { value: Locale; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Lang");
  const [pending, startTransition] = useTransition();

  const handleChange = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(() => {
      setLocale(next);
    });
  };

  return (
    <div
      role="group"
      aria-label={t("switch")}
      className="inline-flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-semibold"
    >
      {options.map((opt) => {
        const active = locale === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleChange(opt.value)}
            disabled={pending}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition disabled:opacity-60 ${
              active
                ? "bg-brand text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
