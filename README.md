# AI Product Building

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Claude Code](https://img.shields.io/badge/Claude_Code-Skills-blue)
![Phase: 1.0](https://img.shields.io/badge/Phase-1.0-green)

A working library of prompts and skills for taking an AI product from idea to launch. Organized by build phase so you can walk through the repo as a build sequence.

## How the repo is organized

Four phase folders, in order. Inside each phase, you'll find a mix of three artifact types. The file tree tells you which is which without any metadata.

| Phase | What's in it |
|---|---|
| `01-strategy/` | Problem framing, positioning, jobs-to-be-done, market analysis |
| `02-discovery/` | Customer research, painpoint mining, personas, interviews |
| `03-build/` | PRDs, MVPs, user stories, UX flows, scoped engineering prompts |
| `04-launch/` | Landing pages, press releases, storytelling, end-of-life |

Plus a `principles/` folder for cross-cutting habits.

## Three artifact types, identified by structure

The artifact types are tier 1, tier 2, tier 3 in increasing automation weight. You can tell which is which by looking at the file or folder:

- **A single `.md` file with one prompt** — Tier 1. Copy, fill in placeholders, paste into a model.
- **A single `.md` file with multiple labeled steps** — Tier 2 (interactive). A primary prompt with built-in follow-ups, or a role-based multi-turn dialogue prompt. Run the steps in order.
- **A folder containing a `SKILL.md`** — Tier 3 (a full Claude Code skill). Install into `~/.claude/skills/` and invoke from Claude Code.

No frontmatter, no tags. The structure carries the type.

## Skills index (by phase)

Three skills, all installable into Claude Code:

| Skill | Phase | What it does |
|---|---|---|
| [user-persona](02-discovery/user-persona/) | discovery | Builds a research-grounded persona + auto-generates derived copy |
| [painpoint-research](02-discovery/painpoint-research/) | discovery | Pulls themed verbatim quotes with source URLs from social media |
| [landing-page-experiment](04-launch/landing-page-experiment/) | launch | Generates a three-variant landing page test with router and analytics dashboard |

Install one with:

```bash
cp -R 02-discovery/user-persona ~/.claude/skills/user-persona
```

Each skill folder has its own `README.md` with install instructions and dependencies.

## Interactive prompts index (by phase)

These are multi-step prompts. Run all steps in the same conversation.

| Prompt | Phase | What it does |
|---|---|---|
| [interview-questions.md](02-discovery/interview-questions.md) | discovery | Generates 15 questions, then sharpens them, then analyzes transcripts |
| [assumption-testing.md](02-discovery/assumption-testing.md) | discovery | Surfaces assumptions, designs tests, then reviews test results |
| [guided-prd-creation.md](03-build/guided-prd-creation.md) | build | Conversational PRD elicitation |
| [guided-mvp-concept.md](03-build/guided-mvp-concept.md) | build | Defines an MVP concept from the PRD |
| [guided-mvp-plan.md](03-build/guided-mvp-plan.md) | build | Builds the MVP development plan |
| [guided-ux-user-flow.md](03-build/guided-ux-user-flow.md) | build | Translates the PRD into UX user flows + screen specs |
| [guided-test-plan.md](03-build/guided-test-plan.md) | build | Builds a structured test plan from feature scope |

The five "Guided" prompts chain together: PRD → MVP Concept → MVP Plan → UX Flow → Test Plan.

## How to use a single prompt

1. Open the markdown file in the right phase folder.
2. Copy the prompt body (inside the code fence).
3. Replace anything in `{{DOUBLE_BRACES}}` or `[SQUARE BRACKETS]` with your specifics.
4. Run it in Claude, ChatGPT, Gemini, or another model. Treat the first output as a draft.

The HTML comment blocks at the top of each file describe the attribution, required context, and any pedagogic notes. They render invisibly on GitHub but are visible in raw view.

## Recommended build sequence

If you're using this as a curriculum, here's a defensible order through the repo:

1. **`01-strategy/framing-the-problem.md`** — get the problem honest first
2. **`01-strategy/jobs-to-be-done.md`** — frame it as a job, not a feature
3. **`02-discovery/painpoint-research/`** — pull real customer language
4. **`02-discovery/interview-questions.md`** — generate the questions
5. **(Run actual interviews)**
6. **`02-discovery/user-persona/`** — turn the research into a grounded persona
7. **`02-discovery/assumption-testing.md`** — find what you're betting on
8. **`03-build/guided-prd-creation.md`** — start the PRD as a dialogue
9. **`03-build/guided-mvp-concept.md`** → `guided-mvp-plan.md` → `guided-ux-user-flow.md` → `guided-test-plan.md` — the chain
10. **`03-build/user-story-template.md`** + **`user-story-splitting.md`** — break into work
11. **`04-launch/landing-page-experiment/`** — test the messaging before launch
12. **`04-launch/visionary-press-release.md`** — write the future-state press release for alignment

Skip steps that don't fit. The order is a starting point, not a script.

## Working principles

See `principles/` for the cross-cutting habits. Two highlights:

- **Customize every prompt.** Generic inputs produce generic outputs.
- **Validate with real users.** AI-generated insights are hypotheses, not findings.

## License

MIT. See `LICENSE`.

## Attribution

This repo combines and adapts work from three open-source libraries. See `NOTICE.md` for the full attribution and license trail.
