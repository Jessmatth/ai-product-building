# 03 — Build

From validated problem to working spec, MVP, UX, and stories. The phase where ideas become engineering work.

## What's in this phase

| File | Type | What it does |
|---|---|---|
| [user-story-template.md](user-story-template.md) | prompt | Standard As a / I want / So that user story format |
| [user-story-splitting.md](user-story-splitting.md) | prompt | Breaks oversized stories into shippable units |
| [user-story-mapping.md](user-story-mapping.md) | prompt | Builds the full story map across user activities |
| [backlog-epic-hypothesis.md](backlog-epic-hypothesis.md) | prompt | Frames an epic as a testable hypothesis |
| [reverse-engineer-prd-ieee830.md](reverse-engineer-prd-ieee830.md) | prompt | Reverse-engineers a PRD from an IEEE 830 SRS |
| [reverse-engineer-prd-iso29148.md](reverse-engineer-prd-iso29148.md) | prompt | Reverse-engineers a PRD from an ISO 29148 spec |
| [add-auth-without-breaking-ui.md](add-auth-without-breaking-ui.md) | prompt | Scoped engineering prompt for layering auth into a working app |
| [guided-prd-creation.md](guided-prd-creation.md) | interactive | Conversational PRD elicitation, question by question |
| [guided-mvp-concept.md](guided-mvp-concept.md) | interactive | Distills the PRD into a focused MVP concept |
| [guided-mvp-plan.md](guided-mvp-plan.md) | interactive | Builds the development plan for the MVP |
| [guided-ux-user-flow.md](guided-ux-user-flow.md) | interactive | Translates the PRD into UX user flows + screen specs |
| [guided-test-plan.md](guided-test-plan.md) | interactive | Builds a structured test plan from feature scope |

## The Guided chain

The five `guided-*` prompts chain together. They're separate files so you can stop at any point, but together they form a pipeline:

```
PRD → MVP Concept → MVP Plan → UX User Flow → Test Plan
```

Each later step expects the artifact from the prior step as input. The cleanest way to use them is in a single long conversation with the model, pasting each prior artifact as you advance.

## Recommended order in this phase

1. **guided-prd-creation.md** — start here. Conversational; takes about an hour of real-time work.
2. **guided-mvp-concept.md** → **guided-mvp-plan.md** — runs the PRD through MVP scoping.
3. **guided-ux-user-flow.md** — translates the PRD into UX. Feeds cleanly into v0.dev or any frontend builder.
4. **user-story-mapping.md** → **user-story-template.md** → **user-story-splitting.md** — break the MVP into shippable stories.
5. **guided-test-plan.md** — build the test plan against the feature scope.
6. Engineering prompts (e.g. **add-auth-without-breaking-ui.md**) when you need a scoped change to existing code.

## When to skip

- If you already have a PRD, skip `guided-prd-creation.md` and use the reverse-engineer prompts instead.
- If you're shipping a quick experiment rather than a full MVP, skip the MVP chain and go straight to landing pages in `04-launch/`.
- If your engineering team has its own story format, skip the story prompts and just use the Guided MVP outputs.
