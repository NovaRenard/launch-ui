# Mobile Design — Flow AI Landing Page

**Date:** 2026-04-21  
**Scope:** Mobile-first responsive improvements for B2B business clients  
**Approach:** Progressive enhancement within existing components + one new StickyMobileCTA component

---

## Context

Most business clients view the site on mobile. The current design is desktop-first and suffers from:
- Text overload in hero and card sections
- Small tap targets for CTAs
- No persistent conversion path during scroll

---

## Design Decisions

| Area | Decision |
|------|----------|
| Navigation | Hamburger + small CTA button in header, sticky |
| Hero | Text + reduced screenshot; single primary CTA button |
| Cards (Problem/Solution) | Horizontal rows: icon left, title + description right |
| Scroll CTA | Sticky bottom bar appears when hero leaves viewport |
| Footer | CTA button + Telegram link + 3 nav links + copyright |

---

## Components

### 1. Navbar (`components/sections/navbar/default.tsx`)

**Mobile changes:**
- Keep logo left, CTA button center-right (compact, `text-xs px-3 py-1.5`), hamburger far right
- Desktop nav links already `hidden md:flex` — no change needed
- CTA button visible on mobile (currently may be hidden) — ensure `flex` not `hidden` on mobile

### 2. Hero (`components/sections/hero/default.tsx`)

**Mobile changes:**
- Remove badge on `xs` screens (`hidden sm:inline-flex`)
- Heading: `text-2xl sm:text-4xl md:text-6xl lg:text-8xl` (reduce from current `text-4xl` base)
- Description: tighten `max-w` to `max-w-[320px] sm:max-w-[740px]`
- Buttons: show only primary CTA as full `Button`; second button becomes an `<a>` text link (`text-sm text-muted-foreground underline`)
- Screenshot mockup: reduce top padding `pt-6 sm:pt-12`, add `max-h-[200px] sm:max-h-none overflow-hidden` to crop on mobile

### 3. Problem & Solution (`components/sections/problem/default.tsx`, `solution/default.tsx`)

**Mobile changes to `Item` layout:**
- On mobile: switch from vertical card to horizontal row
- Add `flex flex-row items-start gap-3 sm:flex-col` to the Item container
- `ItemIcon`: fixed width `w-8 shrink-0`
- Remove card background/border on mobile: `bg-transparent border-0 sm:bg-card sm:border` 
- Add `border-b border-border last:border-0 sm:border-0` for row dividers
- Section grid: `grid-cols-1` on mobile (already), but reduce `gap-0 sm:gap-4`

### 4. StickyMobileCTA (new — `components/ui/sticky-mobile-cta.tsx`)

New client component. Renders a `fixed bottom-0 left-0 right-0 md:hidden` bar.

**Behavior:**
- Hidden by default (`opacity-0 translate-y-full`)
- Uses `IntersectionObserver` on `#hero` element
- When hero leaves viewport: animate in (`opacity-100 translate-y-0`, transition 300ms)
- When hero re-enters viewport: animate out
- Hides when user reaches `#footer` (second IntersectionObserver)

**Layout:**
```
[ Автоматизируйте продажи с AI ]  [ Консультация → ]
```
- Left: short tagline, `text-xs text-muted-foreground`
- Right: `Button` that opens `ContactModal`
- Bar: `bg-background/95 backdrop-blur border-t border-border px-4 py-3`
- Add `pb-safe` (env safe-area-inset-bottom) for iPhone notch

**Integration:** Add `<StickyMobileCTA />` to `app/layout.tsx` or `app/page.tsx` below all sections.

### 5. Footer (`components/sections/footer/default.tsx`)

**Mobile layout:**
- Hide multi-column link grid: `hidden sm:grid`
- Show mobile-only block: logo, CTA button (full width), Telegram link, 3 inline nav links, copyright
- CTA button opens `ContactModal`
- Telegram: `href="https://t.me/FlowAi_Manager"` with icon
- Nav links: `flex justify-center gap-6 flex-wrap`

---

## Typography & Spacing (global mobile rules)

- Section padding: `py-12 sm:py-24` (reduce from current `py-16 sm:py-32` if applicable)
- Section headings: `text-2xl sm:text-3xl md:text-5xl` 
- Section descriptions: `text-sm sm:text-base md:text-xl`
- Body copy in cards: `text-xs sm:text-sm`

---

## Out of Scope

- Pricing section: already `grid-cols-1` on mobile — no changes needed
- FAQ section: already uses accordion — no changes needed
- Industry Cases / Items sections: addressed separately if needed
- Dark/light mode toggle behavior on mobile
