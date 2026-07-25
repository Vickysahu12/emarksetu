# eMark Setu — Website Redesign (Demo)

Stack: **React + Vite + Tailwind CSS v4 + Framer Motion + react-icons**

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to double-check
```

The production files land in `dist/` — upload that folder to any static
host (Vercel, Netlify, Hostinger, cPanel, etc.) to go live.

## What's inside

- `src/components/Navbar.jsx` — sticky nav, scroll-aware background, mobile menu
- `src/components/Hero.jsx` — headline, animated stat chips, signature growth-line graphic
- `src/components/About.jsx` — agency intro + mini dashboard visual
- `src/components/WhatWeDo.jsx` — services copy + 4 differentiator cards
- `src/components/WhyChooseUs.jsx` — animated counters, 4 trust points, dark CTA card
- `src/components/Testimonials.jsx` — client quotes carousel (3 up, arrows + dots)
- `src/components/Insights.jsx` — blog/insights teaser grid
- `src/components/Footer.jsx` — CTA banner, links, contact, socials
- `src/components/GrowthLine.jsx` — the recurring "growth trajectory" signature graphic
- `src/components/ui.jsx` — shared Button/Container/Reveal primitives

## Design notes for the client walkthrough

- Palette: deep navy (#0A1A3F) + electric blue (#2F6FEB) + gold accent
  (#F5A623), matching the "build, scale, grow" brand story.
- Type: Space Grotesk for headings, Inter for body.
- The animated line that appears in the hero, the "store performance" card,
  and the dark CTA card is the same signature motif — one continuous growth
  curve running through the page.
- Everything scroll-reveals with Framer Motion, respects
  prefers-reduced-motion, and has visible keyboard focus states.
- Fully responsive: mobile (< 640px), tablet (640-1024px), desktop (1024px+),
  with a real hamburger menu on mobile.

## Before going live

- Swap in real client testimonials + logos
- Real blog post links/images (currently icon-based placeholder thumbnails)
- Confirm phone/email/address are current
- Wire "Get Started" / "Get Free Consultation" to a real form or booking link
