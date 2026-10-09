# PROJECT BRIEF — Photography & Videography Portfolio

> Feed this entire file to Claude Code as the project specification.
> Recommended first prompt: "Read PORTFOLIO_PLAN.md and build Phase 1. Use the design-taste-frontend skill if installed."

---

## 1. Overview

A multi-page portfolio website for a client showcasing **photography**, **videography**, and **editing** work. The site must feel like a premium creative portfolio — image-first, generous whitespace, confident typography — not a generic template.

**Priorities, in order:** visual impression → performance → easy content replacement by a non-developer.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + **Vite** | Fast dev, simple static deploy |
| Styling | **Tailwind CSS** (class-based dark mode: `darkMode: 'class'`) | Token-driven light/dark theming |
| Routing | **react-router-dom** | True multi-page layout (client requirement) |
| Animation | **framer-motion** | Page transitions, scroll reveals, hover effects |
| Icons | **lucide-react** | Clean, consistent icon set |
| Photo lightbox | **yet-another-react-lightbox** | Fullscreen photo viewing with keyboard/swipe nav |
| Image placeholders | `https://picsum.photos` seeded URLs | Stable placeholders, trivially replaceable |

Deploy target: Vercel or Netlify (static). Do not assume a backend; everything is static data files.

---

## 3. Pages & Routes

| Route | Page | Content |
|---|---|---|
| `/` | Home | Hero (name, tagline, featured image), teaser rows linking to Photos / Videos, brief intro, CTA to contact |
| `/photos` | Photography | Filterable masonry grid (categories: e.g. Portrait, Event, Street, Landscape — make filters data-driven), click → lightbox |
| `/videos` | Videography | Grid of video cards (thumbnail + title + role + year), click → in-page player modal (see §5) |
| `/about` | About + Toolkit | Bio, photo of the client (placeholder), and the **Software/Tools section** (see §6) |
| `/contact` | Contact | Email, socials, optional simple mailto form. No backend form handling. |

Shared layout: sticky top nav (logo/name left; links + **theme toggle** right), footer with socials. Mobile: hamburger menu. Add a 404 page.

Use framer-motion for subtle route transitions (fade/slide, ~200–300ms, nothing flashy).

---

## 4. Content Architecture — CRITICAL

All portfolio content lives in **central data files** so the owner can replace placeholders without touching components:

```
src/data/
  photos.ts     // [{ id, src, alt, category, title, year, featured }]
  videos.ts     // [{ id, title, role, year, thumbnail, youtubeId, driveUrl?, featured }]
  tools.ts      // [{ id, name, icon, category, description, usedFor, since }]
  site.ts       // name, tagline, bio, email, socials
```

Rules:
- **No hardcoded image URLs or text inside components.** Components only render data.
- Placeholder photos: `https://picsum.photos/seed/photo-01/1200/800` (unique seed per entry, varied aspect ratios for the masonry grid). Include ~12 photo entries and ~6 video entries of sample data.
- Add a short `CONTENT_GUIDE.md` at repo root explaining exactly how to swap placeholders for real files (drop images in `/public/photos/`, update `photos.ts`, replace `youtubeId`s).

---

## 5. Video Handling — Decision

**Videos are NOT stored in the repo.** Git/GitHub is wrong for video (100MB file cap, repo bloat, no streaming).

**Primary approach — unlisted YouTube embeds:**
- Client uploads videos as *Unlisted* on YouTube (or Vimeo).
- Each video card shows a thumbnail (`https://i.ytimg.com/vi/{youtubeId}/hqdefault.jpg`, or a custom thumbnail path).
- Clicking opens an in-page modal with the iframe embed — the iframe is **only mounted on click** (lite-embed pattern), so the page loads no player JS upfront.
- `data/videos.ts` uses a placeholder `youtubeId` (e.g. `"dQw4w9WgXcQ"` is fine as a stand-in) until real IDs are provided.

**Fallback (if client insists on Google Drive):** the `driveUrl` field exists on each video entry; if `youtubeId` is empty and `driveUrl` is set, the card becomes an external link opening in a new tab with an "opens in Drive" indicator. Build this branch, but YouTube is the default path.

---

## 6. Software / Tools Section (on About page)

Grid of tool cards (Lightroom, Photoshop, Premiere Pro, DaVinci Resolve, After Effects, CapCut — sample data, driven by `tools.ts`).

**Hover interaction (client-approved concept):**
- Resting state: tool icon/logo + name.
- On hover (desktop): card flips or cross-fades to reveal `description` + `usedFor` + `since` (e.g. "Color grading & delivery — used on all client work since 2021").
- On touch devices: tap toggles the same reveal (hover must not be the only access path).
- Animate with framer-motion; keep it under ~250ms, no bounce.
- Use `lucide-react` icons or simple text monograms as placeholder logos — do not hotlink brand logo images.

---

## 7. Color System & Theming

Client reference palette: `#F7F7F7`, `#FFB22C`, `#854836`, `#000000`. **Do not use these raw** — derive a flexible token system (pure `#000000` backgrounds/text are banned; use near-blacks).

Define CSS variables in `:root` / `.dark`, consumed by Tailwind theme config:

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F7F7F7` | `#121212` |
| `--bg-elevated` | `#FFFFFF` | `#1C1A19` |
| `--text` | `#141414` | `#F2EFEA` |
| `--text-muted` | `#5C5650` | `#A8A098` |
| `--accent` | `#FFB22C` | `#FFB94A` |
| `--accent-contrast` (text on accent) | `#1A1208` | `#1A1208` |
| `--secondary` | `#854836` | `#B07A64` |
| `--border` | `#E4E1DC` | `#2A2724` |

Guidelines:
- Amber `--accent` is for CTAs, active nav state, filter pills, hover highlights — used sparingly so it stays special.
- Brown `--secondary` is for supporting elements: tags, subtle headings, dividers — never large fills.
- Verify all text/background pairs meet **WCAG AA (4.5:1)**; adjust the dark-mode values if needed.
- Photography pages should lean neutral so the images carry the color.

**Theme toggle:** sun/moon button in the nav. Toggles `.dark` on `<html>`, persists to `localStorage`, and on first visit respects `prefers-color-scheme`. No flash of wrong theme on load (inline script in `index.html`).

---

## 8. Performance & Quality Requirements

- All grid images: `loading="lazy"`, explicit `width`/`height` or aspect-ratio boxes (no layout shift).
- Video iframes mounted only on user click (§5).
- Route-level code splitting via `React.lazy` for the Photos and Videos pages.
- Scroll-reveal animations respect `prefers-reduced-motion`.
- Semantic HTML (`nav`, `main`, `figure`), alt text from data files, visible focus states, keyboard-navigable lightbox and modals.
- Responsive: mobile-first; masonry degrades to 1 col (mobile) → 2 (tablet) → 3–4 (desktop).

---

## 9. Suggested File Structure

```
src/
  components/
    layout/   Navbar.tsx, Footer.tsx, ThemeToggle.tsx, PageTransition.tsx
    photos/   PhotoGrid.tsx, PhotoCard.tsx, CategoryFilter.tsx
    videos/   VideoGrid.tsx, VideoCard.tsx, VideoModal.tsx
    tools/    ToolGrid.tsx, ToolCard.tsx
    ui/       Button.tsx, SectionHeading.tsx, Tag.tsx
  pages/      Home.tsx, Photos.tsx, Videos.tsx, About.tsx, Contact.tsx, NotFound.tsx
  data/       photos.ts, videos.ts, tools.ts, site.ts
  hooks/      useTheme.ts
  styles/     index.css (tokens + Tailwind)
```

---

## 10. Build Phases (execute in order)

**Phase 1 — Foundation:** Vite + React + Tailwind + Router scaffold. Token system (§7), ThemeToggle with persistence + no-flash script, Navbar/Footer, empty routed pages, sample data files, CONTENT_GUIDE.md.

**Phase 2 — Photography:** PhotoGrid masonry + category filter + lightbox integration, lazy loading, Home page hero + featured teasers.

**Phase 3 — Videography:** VideoGrid, click-to-mount YouTube modal, Drive-link fallback branch.

**Phase 4 — About & Contact:** Bio section, Tools grid with hover/tap reveal, Contact page, 404.

**Phase 5 — Polish:** Route transitions, scroll reveals, reduced-motion handling, AA contrast audit in both themes, responsive pass, Lighthouse check (target 90+ performance), README with deploy steps.

After each phase: run the dev server, verify both themes, and fix before moving on.

---

## 11. Open Items (placeholders until client provides)

- Client name, tagline, bio text, email, social links → stubbed in `site.ts` as `"[CLIENT NAME]"` etc.
- Real photo files and categories
- YouTube unlisted video IDs (or Drive links)
- Final tool list with dates/descriptions
