# painpoint-research skill

A Claude Code skill that pulls direct customer language from social media and review sites, organized by theme and ranked by emotional intensity.

## What this skill produces

For one ICP, in `~/painpoint-research/<icp-slug>/`:

- `painpoints.md` — themed list of direct quotes with source URLs, intensity tags, and frequency notes

## Install

```bash
cp -R skills/painpoint-research ~/.claude/skills/painpoint-research
```

## Dependencies

The skill uses Claude Code's built-in web search. No external API keys required.

## Working directory

Files land in `~/painpoint-research/<icp-slug>/`.

## How to invoke

In Claude Code, give a sharply-defined ICP:

> Find me painpoints for YouTube creators with under 10K subscribers trying to monetize.

Or:

> Research what solo founders building their first SaaS without a technical background are complaining about.

The skill triggers on phrases like "find painpoints," "research what [audience] is complaining about," "pull customer language for [ICP]."

## What to expect from a typical run

- Research: 2-5 minutes depending on ICP specificity and platform coverage
- Output: one markdown file with grouped themes, verbatim quotes, and source URLs

## The sharpness rule

The skill will push back if the ICP is too broad. "Small business owners" is too vague. "Family caregivers in the sandwich generation taking care of elderly parents" is the right level of specificity.

Vague ICPs produce vague research that you can't use in copy.

## What to do with the output

1. **Steal the language.** The strongest painpoint quotes become your headline drafts, your subject lines, your demo opener.
2. **Validate frequency.** Three independent sources naming the same painpoint is signal. One viral post is noise.
3. **Cross-reference with interviews.** Social signal points you at the right interview questions; interviews tell you which signals are worth betting on.

## Source

The research framework and tip set are adapted from the Escape Velocity Prompt Library (Polly Mallen, MIT). See repo-root `NOTICE.md`.
