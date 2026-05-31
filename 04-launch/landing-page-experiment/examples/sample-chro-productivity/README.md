# Example: Stratum (CHRO productivity-measurement product)

This is a sample output of the `landing-page-experiment` skill. The fictional product is **Stratum**, an outcome-tied workforce analytics tool sold to CHROs at hybrid enterprises.

## How the variants differ

All three variants hold these things constant:
- Pricing tiers (Pilot $25K, Company-wide $80K, Enterprise+ Contact us)
- Feature lists in each tier
- Layout, CTA text ("Join the waitlist"), button placement
- Brand color (#1a2540, navy executive)

They vary only in messaging angle:

| Variant | Angle | Headline |
|---|---|---|
| A | Board-credibility envy | "The people data your CFO will actually read." |
| B | The 85/87 trust gap | "85% of leaders don't trust hybrid productivity. 87% say it's happening. Close the gap without the surveillance." |
| C | Desired end state | "Outcomes, not hours. Finally a way to prove it." |

These three angles came from the persona document (`02-discovery/user-persona/examples/sample-persona-chro.md`) and the painpoint research (`02-discovery/painpoint-research/examples/sample-chro-productivity.md`). Each variant leads with a different theme from the research.

## How to read the results

If Variant A wins, the dominant motivator is comparison-shame vs other C-suite peers. Lean into "the slide your CFO will read" framing in all downstream copy.

If Variant B wins, the dominant motivator is the trust gap and the surveillance-avoidance frame. Lean into anti-monitoring positioning, regulatory exposure, and the 85/87 stat.

If Variant C wins, the dominant motivator is the aspirational end state. Lean into "outcomes" framing and what the CHRO wants to be true.

Need at least 100 visitors per variant (300 total) before drawing conclusions. Don't crown a winner on a sub-2% CTR gap — that's noise.

## Files in this example

- `index.html` — entry point that loads `router.js` to assign each visitor a variant
- `variant-a.html` — board-credibility messaging
- `variant-b.html` — trust-gap messaging
- `variant-c.html` — outcomes-not-hours messaging
- `router.js` — cookie-based assignment + direct-link override
- `admin.html` — password-protected analytics dashboard (default password: `change-me`)

## How to run it locally

```bash
cd 04-launch/landing-page-experiment/examples/sample-chro-productivity
python3 -m http.server 8000
```

Then visit `http://localhost:8000` and watch the router assign you a variant. Try `/variant-a.html?v=a` to force a specific variant. Visit `/admin.html` to see the dashboard (use `change-me` as password).

## What this is NOT

This is a sample output meant to demonstrate the skill, not a launchable site. Before going live with anything like this:

1. Replace localStorage tracking with a real analytics provider (Plausible, PostHog, Google Analytics)
2. Change the admin password from `change-me` to something real, ideally with server-side auth
3. Hook the CTA up to a real waitlist backend (a Form-spree or Tally form is enough for v1)
4. Use a real brand and confirm the metrics in the persona section are still current
