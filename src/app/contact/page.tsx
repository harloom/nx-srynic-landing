import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SRYNIC",
  description: "Get in touch with SRYNIC to start your next digital project.",
};

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-24 grid gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("eyebrow")}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-5 text-muted leading-relaxed">{t("subtitle")}</p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {t("emailLabel")}
              </dt>
              <dd className="mt-1 text-lg font-medium text-foreground">
                <a href="mailto:hello@srynic.com" className="hover:text-brand">
                  hello@srynic.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {t("officeLabel")}
              </dt>
              <dd className="mt-1 text-lg font-medium text-foreground">
                {t("office")}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {t("responseLabel")}
              </dt>
              <dd className="mt-1 text-lg font-medium text-foreground">
                {t("responseValue")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-border bg-muted-bg p-8 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
