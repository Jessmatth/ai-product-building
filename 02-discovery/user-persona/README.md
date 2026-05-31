# user-persona skill

A Claude Code skill that turns user research into a grounded persona document, then auto-generates the downstream copy artifacts (headlines, channel plan, cold outreach).

## What this skill produces

For one persona, in `~/user-personas/<slug>/`:

- `persona.md` — full persona with demographics, goals, painpoints (ranked), behavior, buying criteria, objections, and a day-in-the-life scenario
- `derived-copy.md` — three headline alternatives, a channel plan, and a cold outreach draft, all tied to the persona

## Install

```bash
cp -R skills/user-persona ~/.claude/skills/user-persona
```

Verify it's loaded:

```bash
ls ~/.claude/skills/user-persona
# expect: SKILL.md  README.md  template/
```

## Dependencies

None. The skill is pure markdown templates plus Claude's reasoning.

## Working directory

Personas land in `~/user-personas/<slug>/` by default. Override by telling Claude which directory to write to.

## How to invoke

In Claude Code, paste your research material and ask:

> Build a user persona for B2B sales leaders from these interview notes: [paste notes]

Or:

> Turn this research into a persona, then draft the cold outreach for them.

The skill triggers on phrases like "build a persona," "turn research into a persona," "[audience] persona," "make me a persona doc."

## What to expect from a typical run

- Persona generation: 30-90 seconds depending on the size of the research.
- Derived copy generation: another 30 seconds.
- Output: two markdown files, one folder.

## The credibility rule

This skill refuses to build a persona from less than 5 data points. Personas built on 2-3 interviews are just structured guesses, and they harden assumptions in a way plain notes don't. If you don't have the research, use `components/02-discovery/proto-persona.md` instead, which is honest about being a draft.

## Source

The persona structure is adapted from the Escape Velocity Prompt Library (Polly Mallen, MIT). See repo-root `NOTICE.md`.
