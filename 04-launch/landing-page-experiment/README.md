# landing-page-experiment skill

A Claude Code skill that generates a three-variant landing-page A/B test, with routing logic and an analytics dashboard.

## What this skill produces

For one product, in `~/landing-experiment/<slug>/`:

- `variant-a.html`, `variant-b.html`, `variant-c.html` — three messaging variants, mobile-responsive, same layout
- `router.js` — cookie-based random assignment + direct-link override
- `admin.html` — password-protected analytics dashboard with views, conversions, CTR, time on page, CSV export
- `index.html` — the landing page entry that triggers the router

## Install

```bash
cp -R skills/landing-page-experiment ~/.claude/skills/landing-page-experiment
```

## Dependencies

None for generation. To go live, you'll want to host the static files (Vercel, Netlify, Cloudflare Pages, GitHub Pages) and at some point swap localStorage tracking for a real analytics provider.

## Working directory

Files land in `~/landing-experiment/<slug>/` by default.

## How to invoke

In Claude Code:

> Build a landing page experiment for [product]. Test these three angles: [A, B, C].

Or:

> Three variants of a waitlist page for [audience], leading with: time saved, outcomes, and peace of mind.

The skill triggers on phrases like "landing page experiment," "test 3 variants," "A/B test the messaging," "build a waitlist landing page."

## What to expect from a typical run

- Variant generation: 1-2 minutes for all three
- Router and dashboard: copied from template
- Total: 2-3 minutes from prompt to working files

## Going from generated files to live

1. Set up a static host (Vercel is fastest)
2. Deploy the folder
3. Visit the admin page, set a real password
4. Drive at least 100 visitors per variant (300 total) before reading the result
5. Don't crown a winner on a sub-2% CTR gap — that's noise

## Reading the numbers

- All variants under 5% CTR — the problem is likely the offer or pricing, not the headline
- High views but under 30 seconds on page — the headline isn't matching expectations
- Long time on page but low conversion — the CTA isn't clear or compelling enough

## Source

The variant generation rules, A/B framework, and dashboard structure are adapted from the Escape Velocity Prompt Library (Polly Mallen, MIT). See repo-root `NOTICE.md`.
