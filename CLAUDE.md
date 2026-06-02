@AGENTS.md

# Ram Portfolio — Claude Code Guide

## Project Overview
Personal developer portfolio for **Ramkishore Namala**, an AI/ML Engineer with 4 years of experience. Built with Next.js 16 App Router, Tailwind CSS v4, TypeScript, Supabase, and D3.js.

## Stack & Versions
- **Next.js**: 16.2.7 (App Router — read `node_modules/next/dist/docs/` before touching routing or Server Actions)
- **React**: 19.2.4 (use `useActionState` from `react`, NOT `react-dom`)
- **Tailwind CSS**: v4 (CSS-first config — no `tailwind.config.js`; customize via `@theme` in `globals.css`)
- **Supabase**: `@supabase/supabase-js` — client initialized in `utils/supabase.ts`
- **D3.js**: v7 — used only in `components/SkillsGraph.tsx` (Client Component)
- **lucide-react**: does NOT export `Github` or `Linkedin` — use inline SVGs from `components/icons.tsx` instead

## Environment Variables
Required in `.env.local` (copy from `.env.local.example`):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
Without these, `getProjects()` returns `[]` silently and the contact Server Action returns a fallback error — the page still renders.

## File Structure
```
app/
  layout.tsx          Root layout (Geist font, dark bg #050508, metadata)
  page.tsx            Single-page home — assembles all sections with Suspense
  globals.css         Tailwind v4 @import, CSS vars, scrollbar, ::selection
  actions.ts          Server Action: submitContact() → Supabase contact_messages

components/
  Navbar.tsx          CLIENT — sticky, blur-on-scroll, mobile hamburger
  Hero.tsx            SERVER — gradient name, 3-sentence summary, social links
  SkillsGraph.tsx     CLIENT — D3 force-directed graph, 35 nodes, 7 categories, ResizeObserver
  ExperienceTimeline.tsx  SERVER — hardcoded resume data, reverse-chronological timeline
  ProjectCard.tsx     SERVER — hover effects, tech stack chips, GitHub/live links
  ProjectsGallery.tsx SERVER ASYNC — fetches from Supabase, wrapped in Suspense in page.tsx
  ContactForm.tsx     CLIENT — useActionState + submitContact Server Action
  ContactSection.tsx  SERVER — wraps ContactForm, adds contact info sidebar
  SectionHeader.tsx   SERVER — reusable label/title/subtitle header
  icons.tsx           GitHub + LinkedIn inline SVGs (lucide-react dropped branded icons)

utils/
  supabase.ts         createSupabaseClient() — throws if env vars missing

lib/
  data.ts             getProjects() — try/catch wraps Supabase call, returns [] on error

types/
  index.ts            Project, ContactMessage, ActionState interfaces

supabase/
  schema.sql          DDL for projects + contact_messages, RLS policies, 4 seed rows
```

## Key Conventions
- **Server vs Client**: Default to Server Components. Add `'use client'` only for interactivity (D3, forms, scroll events, useState/useEffect).
- **Path alias**: `@/` maps to project root (e.g. `@/utils/supabase`, `@/types`).
- **Tailwind v4**: Use utility classes directly. No `tailwind.config.js`. Extend theme in `app/globals.css` inside `@theme { }`.
- **Server Actions**: Defined with `'use server'` at top of `app/actions.ts`. Always validate input; never trust FormData directly.
- **Data fetching**: `ProjectsGallery` awaits `getProjects()` as an async Server Component — no `useEffect`/`fetch` on client side.

## Database Schema (Supabase)
```sql
projects          — id, title, description, tech_stack text[], github_url, live_url, created_at
contact_messages  — id, name, email, message, created_at
```
RLS: `projects` is public-read; `contact_messages` is insert-only (no public read).

## Dev Commands
```bash
npm run dev     # Start dev server on http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
npx tsc --noEmit  # Type check
```

## Running & Screenshots
To verify the UI after changes, start the dev server then use Playwright:
```bash
node screenshot.mjs   # Saves to screenshots/ (requires server running on :3000)
```

## What's Hardcoded vs. Dynamic
- **Hardcoded** (edit the component directly): Hero text, ExperienceTimeline jobs/education/certs, SkillsGraph nodes
- **Dynamic from Supabase**: Projects gallery (add rows to the `projects` table)
- **Written to Supabase**: Contact form submissions → `contact_messages` table
