import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — SRYNIC",
  description: "Selected work by SRYNIC across fintech, edtech, agritech, and logistics.",
};

export default async function ProjectsPage() {
  const t = await getTranslations("Projects");

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("eyebrow")}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative rounded-2xl border border-border bg-background p-7 transition hover:border-brand hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground transition group-hover:text-brand">
                {project.title}
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted-bg px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t("ctaTitle")}
          </h2>
          <p className="mt-3 text-muted">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
