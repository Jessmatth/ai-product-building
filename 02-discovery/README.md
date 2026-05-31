# 02 — Discovery

Find real customers, talk to them, and turn what you hear into structured artifacts you can act on.

## What's in this phase

| File | Type | What it does |
|---|---|---|
| [feature-brainstorm.md](feature-brainstorm.md) | prompt | Turns one user problem into 10 ranked feature ideas |
| [proto-persona.md](proto-persona.md) | prompt | Hypothesis-based persona for before you have research |
| [customer-journey-mapping.md](customer-journey-mapping.md) | prompt | Maps the customer's journey end to end |
| [company-profile-research.md](company-profile-research.md) | prompt | Executive-level company profile for strategic targeting |
| [interview-questions.md](interview-questions.md) | interactive | Generates 15 questions, sharpens them, analyzes transcripts |
| [assumption-testing.md](assumption-testing.md) | interactive | Surfaces and ranks risky assumptions, designs tests, reviews results |
| [painpoint-research/](painpoint-research/) | **skill** | Pulls themed verbatim quotes with source URLs from social media |
| [user-persona/](user-persona/) | **skill** | Turns research into a grounded persona + auto-generates derived copy |

## Recommended order in this phase

1. **proto-persona.md** — write a hypothesis-based draft persona to seed the rest of the work. Mark it explicitly as "before research."
2. **painpoint-research/** (skill) — pull real customer language before you write interview questions. The language they use online tells you what to listen for in interviews.
3. **interview-questions.md** (interactive) — generate questions, sharpen them.
4. **Run 5+ interviews.** This is the actual work, no prompt required.
5. **user-persona/** (skill) — turn the interview notes into a grounded persona. The skill refuses to run on less than 5 interviews. That's intentional.
6. **feature-brainstorm.md** — once you know the problem deeply, generate solutions.
7. **assumption-testing.md** (interactive) — surface what you're betting on and design tests before you commit to building.

## A note on the persona prompts

This phase has three persona-related artifacts at increasing levels of rigor:

- **proto-persona.md** — written before research. Always mark as draft.
- **user-persona/** (skill) — written after 5+ interviews. The real artifact.
- **derived-copy.md** (inside the user-persona skill) — copy artifacts (headlines, channels, outreach) generated from a real persona.

Use the right one for where you are. Don't run the skill on guesses; don't run the proto-persona on real research.
