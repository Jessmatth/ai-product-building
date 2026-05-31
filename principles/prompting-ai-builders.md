<!--
ATTRIBUTION
Source: Escape Velocity Prompt Library — Polly Mallen
Upstream: https://github.com/pollymallen/escape-velocity-prompt-library
License: MIT
This file is adapted from the upstream library. See NOTICE.md at repo root.
-->

# Prompting AI builders

The principles below hold across Replit, Lovable, Cursor, v0.dev, and any other tool that takes a natural-language prompt and writes code.

## Build incrementally

Prompt for one feature at a time. Trying to generate a whole app in one shot produces incoherent code, expensive debug loops, and an unhappy agent. One feature per prompt; iterate.

## Be specific

The more detail you give, the better the result. Vague prompts produce vague apps.

Bad: "Build a waitlist page."

Better: "Build a single-page waitlist form. Email input, submit button, mobile-first, dark text on white background. After submit, show a thank-you message. Store emails in a simple flat file. Use Tailwind. No frameworks."

## Use positive instructions

Tell the agent what to do, not what to avoid. "Use Tailwind" works better than "Don't use Bootstrap." Negative instructions confuse the planner and the agent often does the thing you told it not to.

The exception: when constraints matter more than goals (e.g., "do not modify the existing UI"), state both. See `components/03-build/add-auth-without-breaking-ui.md`.

## Provide context

Paste in:

- Code samples that demonstrate the style you want
- Screenshots of what good looks like
- Docs or API references the agent might not know

Context cuts iterations dramatically.

## Front to back

Start with the UI; layer in backend functionality after. Generating a database schema and an API before the UI is decided usually produces the wrong shape, because the UI is what tells you what the backend actually needs.

## Iterate

Prompting is a conversation, not a search box. When the output misses, rephrase. Add detail. Show the agent the specific thing that's wrong.

## Cost tip

On agent-based builders that bill by output, good prompts save money. Only finished work counts toward billing, so a clear, scoped prompt is cheaper than a vague one you have to redo.

## Starting points by platform

- **Replit Agent** — docs.replit.com/replitai/agent and the "effective prompting" tutorial
- **Lovable** — the Lovable Prompting Handbook and docs.lovable.dev/prompting
- **GitHub** — used as the bridge for version control and for migrating a project between platforms (e.g. Lovable → GitHub → Replit)
- **v0.dev** — see `interactive/guided-ux-user-flow.md` for the UX flow that feeds a v0.dev prompt cleanly
