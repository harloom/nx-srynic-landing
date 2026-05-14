import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Logo from "./Logo";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="border-t border-border bg-muted-bg mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted max-w-xs">{t("tagline")}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            {t("navHeading")}
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-brand">{tNav("home")}</Link></li>
            <li><Link href="/projects" className="hover:text-brand">{tNav("projects")}</Link></li>
            <li><Link href="/contact" className="hover:text-brand">{tNav("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            {t("contactHeading")}
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>hello@srynic.com</li>
            <li>{t("office")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted flex justify-between">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("tag")}</span>
        </div>
      </div>
    </footer>
  );
}
