<!--
ATTRIBUTION
Source: Escape Velocity Prompt Library — Polly Mallen
Upstream: https://github.com/pollymallen/escape-velocity-prompt-library
License: MIT
This file is adapted from the upstream library. See NOTICE.md at repo root.
-->

# Feature Brainstorm from User Problem

Turn one user problem into 10 ranked feature ideas, from quick wins to ambitious bets, with effort estimates and a recommendation on what to prototype first.

## When to use it

- You've found a pain point but aren't sure how to solve it.
- You want options before committing, or your team is stuck on a single approach.
- You're opening a discovery phase for a new feature area.

## Prompt

```
I'm working on {{PRODUCT_NAME}}, which is {{PRODUCT_DESCRIPTION}}.

Our users are experiencing this problem: {{USER_PROBLEM}}

Context:
- Target users: {{TARGET_USERS}}
- Current behavior/workaround: {{CURRENT_BEHAVIOR}}
- Impact of the problem: {{IMPACT}}
- Constraints: {{CONSTRAINTS}}

Please help me brainstorm feature ideas to solve this problem by:

1. Restating the core user need in 2-3 different ways to ensure
   we're solving the right problem
2. Generating 10 diverse feature ideas ranging from quick wins to
   ambitious solutions
3. For each idea, include:
   - Feature name
   - One-sentence description
   - Estimated effort (Low/Medium/High)
   - Unique advantage of this approach
   - Potential risks or drawbacks
4. Categorizing ideas by:
   - Quick wins (high impact, low effort)
   - Strategic bets (high impact, high effort)
   - Experiments (learning-focused, low effort)
5. Suggesting which 3 ideas to prototype first and why
```

## Filling in the placeholders

- `{{PRODUCT_NAME}}` / `{{PRODUCT_DESCRIPTION}}` — name and a one-line description (e.g. "a project management tool for remote teams").
- `{{USER_PROBLEM}}` — the specific pain point, ideally in the user's own words.
- `{{CURRENT_BEHAVIOR}}` — how they work around it today (spreadsheets, Slack threads, paper).
- `{{IMPACT}}` / `{{CONSTRAINTS}}` — why it matters, and the real limits (budget, timeline, must work on mobile).

## Tips

- Explicitly ask for a range from simple to complex, or you'll only get ambitious ideas.
- After the first pass, pick 2-3 ideas and ask for detailed implementation approaches.
- If nothing resonates, reframe the core problem statement and run it again.
- Mention what you've already tried and why it didn't work.
