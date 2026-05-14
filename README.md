# SRYNIC — Future in Hand

Landing page Next.js untuk SRYNIC. Multi-page (Home / Projects / Contact), modern minimalist, dengan dukungan dua bahasa (Bahasa Indonesia default + English).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4
- next-intl (i18n, locale via cookie)

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

---

## Daftar Warna (Color Palette)

Semua warna brand di-define sebagai CSS variables di [src/app/globals.css](src/app/globals.css) dan di-expose ke Tailwind via `@theme inline` sehingga bisa dipakai sebagai utility class (`bg-brand`, `text-muted`, dsb.).

### Brand colors

| Token         | Hex       | CSS variable     | Tailwind class       | Pemakaian                                                                |
| ------------- | --------- | ---------------- | -------------------- | ------------------------------------------------------------------------ |
| Brand         | `#7b1e2b` | `--brand`        | `bg-brand`, `text-brand` | Warna utama maroon dari logo. Tombol primer, link aktif, accent heading. |
| Brand Dark    | `#5a131e` | `--brand-dark`   | `bg-brand-dark`      | Hover state untuk tombol primer.                                         |
| Brand Soft    | `#f7eaec` | `--brand-soft`   | `bg-brand-soft`      | Background card icon, badge, radial gradient hero.                       |

### Neutrals / UI

| Token       | Hex (light) | CSS variable     | Tailwind class                 | Pemakaian                                                  |
| ----------- | ----------- | ---------------- | ------------------------------ | ---------------------------------------------------------- |
| Background  | `#ffffff`   | `--background`   | `bg-background`                | Background utama halaman.                                  |
| Foreground  | `#1a1a1a`   | `--foreground`   | `text-foreground`              | Warna teks default (heading, body utama).                  |
| Muted       | `#6b7280`   | `--muted`        | `text-muted`                   | Teks sekunder, deskripsi, label, footer.                   |
| Muted BG    | `#f8f9fb`   | `--muted-bg`     | `bg-muted-bg`                  | Section zebra (About, Goals, Footer). Background card tag. |
| Border      | `#e7e7ec`   | `--border`       | `border-border`                | Border default semua card, divider section.                |

### Section zebra pattern

Urutan section di Home memakai pola selang-seling warna agar pemisahan visual jelas:

```
Hero            → background (gradient brand-soft → transparent)
About           → bg-muted-bg
Services        → background
Goals           → bg-muted-bg
CTA banner      → bg-brand (full maroon)
Footer          → bg-muted-bg
```

### Catatan implementasi

- Hindari hard-code warna hex langsung di JSX — selalu pakai token (`text-brand`, bukan `text-[#7b1e2b]`). Kalau butuh varian baru, tambahkan dulu di [globals.css](src/app/globals.css) → `@theme inline`.
- Untuk hover dengan opacity di token border/foreground gunakan pattern `text-foreground/70`, `bg-background/60`, `bg-white/80` — Tailwind v4 mendukung opacity modifier langsung di custom property.

---

## Daftar Icon

Semua icon di project ini adalah **inline SVG** (tidak pakai library eksternal seperti Lucide / Heroicons). Stroke `currentColor` jadi warnanya mengikuti `text-*` di parent.

### Services (di [src/app/page.tsx](src/app/page.tsx) section Services)

Ditampilkan di card berukuran 44×44 dengan background `bg-brand-soft` dan stroke `text-brand`.

| Service              | Visual                                           | viewBox  |
| -------------------- | ------------------------------------------------ | -------- |
| Software Desktop     | Monitor + stand (rectangle + base line)          | 0 0 24 24 |
| Aplikasi Mobile      | Smartphone outline + indicator bawah             | 0 0 24 24 |
| Platform Web         | Browser window (rect + tab bar + traffic dots)   | 0 0 24 24 |
| Integrasi AI         | Burst rays + lingkaran center (sun/AI core)      | 0 0 24 24 |

### UI / Navigation

| Lokasi                                                   | Icon              | File                                                |
| -------------------------------------------------------- | ----------------- | --------------------------------------------------- |
| Navbar mobile toggle (closed)                            | Hamburger 3-line  | [src/components/Navbar.tsx](src/components/Navbar.tsx) |
| Navbar mobile toggle (open)                              | X (close)         | [src/components/Navbar.tsx](src/components/Navbar.tsx) |
| Contact form — success state                             | Checkmark         | [src/components/ContactForm.tsx](src/components/ContactForm.tsx) |

### Brand asset

| Asset           | File                               | Catatan                                                       |
| --------------- | ---------------------------------- | ------------------------------------------------------------- |
| Logo icon SRYNIC | [public/logo.webp](public/logo.webp) | 347×347 webp transparent, hasil crop dari `srynic.png`. Dipakai di [Logo.tsx](src/components/Logo.tsx) via `next/image`. |
| Source PNG      | [public/srynic.png](public/srynic.png) | Logo asli + wordmark "SRYNIC / FUTURE IN HAND". Tidak dipakai di UI; simpan sebagai master.            |

### Konvensi penulisan icon

```tsx
<svg
  width="22" height="22"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
>
  {/* path... */}
</svg>
```

- **Size:** 18px (toggle button), 22px (service card), 22px (form success).
- **Stroke width:** 1.8 untuk service card, 2 untuk toggle/checkmark, 2.5 untuk checkmark sukses.
- **Fill:** umumnya `none`, kecuali brand asset.
- **Color:** selalu `currentColor` agar warnanya mengikuti parent (`text-brand`, `text-muted`, dll.).

---

## Struktur folder

```
src/
├── app/
│   ├── page.tsx           # Home (Hero, About, Services, Goals, CTA)
│   ├── projects/page.tsx  # Daftar proyek
│   ├── contact/page.tsx   # Halaman kontak + form
│   ├── layout.tsx         # Root layout + NextIntlClientProvider
│   └── globals.css        # CSS vars + Tailwind theme tokens
├── components/
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── LanguageSwitcher.tsx
├── data/projects.ts       # Sumber data dummy projects
└── i18n/
    ├── config.ts          # Daftar locale + default
    ├── request.ts         # Resolver locale dari cookie
    └── actions.ts         # Server action setLocale
messages/
├── id.json                # Bahasa Indonesia (default)
└── en.json                # English
public/
├── logo.webp              # Icon brand siap dipakai
└── srynic.png             # Source logo asli
```
