# Contributing

This is a curated library, not a kitchen sink. Quality bar over volume. The curation is the value.

## What we accept

Three submission types, increasing in weight:

### 1. New prompts (Tier 1)

A single-shot prompt for a specific product-building task. Lives in one phase folder. Must include:

- A clear one-paragraph purpose statement
- A "When to use it" section
- Required and optional context placeholders
- A "Tips" section with concrete advice
- Either original work, or correct attribution to an MIT-licensed source

### 2. Interactive prompts (Tier 2)

Multi-step prompt sequences with built-in follow-ups, or role-based conversational prompts. Same requirements as Tier 1, plus:

- Steps clearly labeled and intended to run in order
- A note on whether each step depends on output from a prior step

### 3. Skills (Tier 3)

Full Claude Code skills with `SKILL.md` + `README.md` + templates. Higher bar:

- Must have a QA check that can actually fail
- Must produce a structured artifact, not just prose
- Must compress 20+ minutes of work into roughly 2 minutes
- Skills that wrap a single prompt don't qualify (submit the prompt instead)

## What we won't accept

- Prompts already covered by an existing file (deduplication matters)
- Prompts under non-MIT licenses we can't redistribute
- Prompts found in a screenshot or tweet without verifiable attribution
- Marketing copy disguised as a prompt
- AI-generated prompts that haven't been tested by a human at least three times

## Voice and style rules

This repo has a deliberate voice. PRs that ignore the rules get rewritten before merge.

- **Sentence case** for headers (not Title Case, not ALL CAPS)
- **No em-dashes** in prose. Use commas, periods, parentheses
- **No banned hype words**: leverage, unlock, supercharge, revolutionize, harness, robust, seamless, game-changer, paradigm
- **No negative parallelism**: "This isn't X, it's Y" is banned. Just say what it is
- **Active voice**, contractions are fine
- **Specific over generic**. Numbers, names, real examples

## File format expected

Every prompt file starts with an HTML comment block carrying attribution:

```html
<!--
ATTRIBUTION
Source: [where this came from]
Author: [who]
License: [MIT, original, etc.]
[Any additional metadata]
-->
```

Followed by:

- `# Title in sentence case`
- A one-paragraph description
- A "When to use it" section
- The actual prompt body in a fenced code block
- A "Tips" or follow-up section where relevant

## Where things go

| Submission | Lives in |
|---|---|
| Strategy / positioning / framing | `01-strategy/` |
| Customer research / personas / interviews | `02-discovery/` |
| PRDs / MVPs / user stories / engineering prompts | `03-build/` |
| Launch / landing pages / press releases | `04-launch/` |
| Cross-cutting habits | `principles/` |

If a prompt could go in two places, pick the earlier phase. A prompt about personas during build is still really a discovery artifact.

## Submission process

1. Fork the repo
2. Add your prompt in the correct phase folder
3. Add an entry to `NOTICE.md` if attribution is needed
4. Update the relevant phase README's table
5. Open a PR with:
   - A one-sentence summary of what the prompt does
   - A sample output from a real run, pasted in the PR body
   - Confirmation you've checked the voice and style rules

## What happens after you open a PR

- A maintainer reviews for quality, fit, and voice
- Maintainers may rewrite passages for voice consistency without asking. The curation is the product, not democracy
- If accepted, the PR is merged with credit in the commit message and (where appropriate) in `NOTICE.md`
- If declined, you'll get a specific reason

## A note on the AI-generated submissions

We expect submissions to be tested by a real person, on a real product question, at least three times. We can usually tell when a prompt has only ever been generated, not used. Those PRs get closed.

## License

By contributing, you agree your contributions are licensed under MIT and that you have the right to submit them.
