import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const tHero = await getTranslations("Hero");
  const tAbout = await getTranslations("About");
  const tServices = await getTranslations("Services");
  const tGoals = await getTranslations("Goals");
  const tCta = await getTranslations("CTA");

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, var(--brand-soft) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {tHero("badge")}
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
            {tHero("title1")}
            <br />
            <span className="text-brand">{tHero("title2")}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            {tHero("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              {tHero("primary")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              {tHero("secondary")}
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-muted-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {tAbout("eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {tAbout("title")}
            </h2>
            <p className="mt-5 text-muted leading-relaxed">{tAbout("p1")}</p>
            <p className="mt-4 text-muted leading-relaxed">{tAbout("p2")}</p>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {[
              { k: tAbout("stat1Value"), v: tAbout("stat1") },
              { k: tAbout("stat2Value"), v: tAbout("stat2") },
              { k: tAbout("stat3Value"), v: tAbout("stat3") },
              { k: tAbout("stat4Value"), v: tAbout("stat4") },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <dt className="text-3xl font-bold text-brand">{s.k}</dt>
                <dd className="mt-2 text-sm text-muted">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {tServices("eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {tServices("title")}
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              {tServices("subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="13" rx="2" strokeLinejoin="round" />
                    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                  </svg>
                ),
                title: tServices("desktopTitle"),
                body: tServices("desktopBody"),
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="6" y="2" width="12" height="20" rx="2.5" strokeLinejoin="round" />
                    <path d="M11 18h2" strokeLinecap="round" />
                  </svg>
                ),
                title: tServices("mobileTitle"),
                body: tServices("mobileBody"),
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinejoin="round" />
                    <path d="M2 9h20M6 6.5h.01M9 6.5h.01" strokeLinecap="round" />
                  </svg>
                ),
                title: tServices("webTitle"),
                body: tServices("webBody"),
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5l-2 2m-7 7l-2 2m11 0l-2-2m-7-7l-2-2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                ),
                title: tServices("aiTitle"),
                body: tServices("aiBody"),
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-background p-6 transition hover:border-brand hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="goals" className="border-t border-border bg-muted-bg">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {tGoals("eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {tGoals("title")}
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              {tGoals("subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: tGoals("g1Title"), body: tGoals("g1Body") },
              { title: tGoals("g2Title"), body: tGoals("g2Body") },
              { title: tGoals("g3Title"), body: tGoals("g3Body") },
            ].map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl border border-border bg-background p-6 transition hover:border-brand hover:shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand font-semibold">
                  0{i + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {g.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {tCta("title")}
            </h2>
            <p className="mt-2 text-white/80">{tCta("subtitle")}</p>
          </div>
          <Link
            href="/contact"
            className="mt-6 md:mt-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white/90"
          >
            {tCta("button")}
          </Link>
        </div>
      </section>
    </>
  );
}
