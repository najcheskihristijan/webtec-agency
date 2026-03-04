# CLAUDE.md — Webtec Agency Project Context

## Project Overview
This is the **Webtec Agency** website — a premium tech news/blog built with Astro v5.
It is live on a self-hosted Vultr VPS managed via Coolify.
**Antigravity AI** (the previous assistant) does all content and code management — no CMS dashboard is needed.

---

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Astro v5 (server output mode) |
| Adapter | `@astrojs/node` (standalone mode) |
| Styling | TailwindCSS v4 + `@tailwindcss/vite` |
| Fonts | Inter (Google Fonts) |
| OG Images | Satori + @resvg/resvg-js |
| Sitemap | `@astrojs/sitemap` |
| Hosting | Vultr VPS ($12/mo, 1 vCPU, 2GB RAM, NVMe) |
| Deployment | Coolify (self-hosted on the VPS) |
| Version Control | GitHub (`najcheskihristijan/webtec-agency`) |

---

## Server & Deployment Info
- **VPS IP:** `149.28.224.92`
- **VPS OS:** Ubuntu 24.04 LTS
- **VPS Root Password:** *(stored in password manager)*
- **Coolify Dashboard:** `http://149.28.224.92:8000`
- **Coolify Login:** `najcheski.hristijan@gmail.com` *(password in password manager)*
- **Live URL:** `http://t8kwc0scgog488s00w0k8008.149.28.224.92.sslip.io` (temporary, until domain is pointed)
- **GitHub Remote:** `https://github.com/najcheskihristijan/webtec-agency.git`

### Coolify Deployment Notes
- App port: `3000` (must be set in Coolify "Ports Exposes")
- **"Force HTTPS" must be OFF** — no SSL cert for sslip.io. Turn on only after a real domain is pointed to the server.
- Nixpacks detects the project automatically. The `start` script in `package.json` runs the server: `HOST=0.0.0.0 node ./dist/server/entry.mjs`

---

## Project Structure
```
/src
  /components     — Navbar.astro, Hero.astro, Footer.astro
  /content/blog   — All .md blog posts (20 published articles)
  /data           — authors.ts (Christian Webtec author profile)
  /layouts        — Layout.astro (main page wrapper)
  /pages          — index, blog index/slug, author pages, 404, OG image gen
  /styles         — global.css (CSS variables, dark mode tokens)
  /utils          — slugify.ts
/public           — favicon, robots.txt
```

---

## Content Management
All blog content is managed as **Markdown files** in `/src/content/blog/`.
A new blog post requires:
```yaml
---
title: "Post Title"
description: "Short description for SEO and card preview"
pubDate: 2026-01-15
author: "christian-webtec"    # must match key in authors.ts
tags: ["tag1", "tag2"]
featured: false               # set true to pin to hero
image:
  url: "/images/my-image.jpg"
  alt: "Image description"
---
Post body in Markdown here.
```
Upload images to `/public/images/`. Use WebP for photos, PNG for diagrams.

---

## Planned Future Work (Phase 8 - Gap Analysis)
- [ ] **Search** — Pagefind static search (Cmd+K)
- [ ] **Categories** — Tag/category pages (Hardware, AI, Privacy, etc.)
- [ ] **Newsletter** — Email capture form
- [ ] **Comments** — Giscus (GitHub-based) or similar
- [ ] **Domain + SSL** — Point `webtec.agency` to `149.28.224.92` then enable Let's Encrypt via Coolify

---

## Key Decisions & Context
- **No Vercel** — Replaced `@astrojs/vercel` with `@astrojs/node`. Do NOT re-add Vercel.
- **No Keystatic** — Removed to reduce build complexity. Content is AI-managed via flat Markdown files.
- **No Shared hosting** — Self-hosted on Vultr for privacy and performance.
- **Design aesthetic** — Premium tech dark mode, glassmorphism hero, Inter font, subtle gradients.
