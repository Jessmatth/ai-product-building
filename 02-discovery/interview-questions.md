<!--
ATTRIBUTION
Source: Escape Velocity Prompt Library — Polly Mallen
Upstream: https://github.com/pollymallen/escape-velocity-prompt-library
License: MIT
This file is adapted from the upstream library. See NOTICE.md at repo root.

TIER 2 (INTERACTIVE): A primary prompt followed by two scripted follow-ups
that act on the artifacts the primary prompt generates. Run them in order
in the same conversation.
-->

# User Interview Question Generator (Interactive)

Generate 15 open-ended, story-driven interview questions organized into research-ready categories, plus follow-up prompts to sharpen them and analyze the resulting transcripts.

## When to use it

- You're planning customer discovery interviews and want a question set you can actually run.
- You've drafted questions yourself and want them stress-tested.
- You've finished an interview and want to extract the signal from the transcript.

## Step 1 — Generate the question set

```
I'm building [PRODUCT DESCRIPTION] for [TARGET CUSTOMER].

Generate 15 user interview questions that will help me:
1. Understand their current workflow and painpoints
2. Validate whether this problem is worth solving
3. Discover what solutions they've already tried
4. Learn their decision-making criteria
5. Identify potential objections or concerns

Organize the questions into these categories:
- Current State (how they do things now)
- Painpoints & Frustrations
- Past Attempts & Workarounds
- Ideal Solution
- Buying Criteria & Objections

Use open-ended questions that encourage storytelling.
Avoid yes/no questions.
```

## Step 2 — Sharpen the questions (follow-up)

After step 1, run this against the generated set:

```
Review these interview questions. Remove any that:
- Could be answered with yes/no
- Lead the interviewee toward a specific answer
- Ask about hypothetical future behavior instead of past behavior
- Are too vague or broad

Replace them with more specific, story-driven questions.
```

## Step 3 — Analyze a transcript (follow-up, after running an interview)

Paste your interview transcript in for the `[TRANSCRIPT]` placeholder:

```
Here's a transcript from a user interview. Extract:
1. Top 3 painpoints mentioned
2. Current solutions they're using (and why they're inadequate)
3. Exact quotes I can use in marketing
4. Red flags or reasons they might not buy
5. Unexpected insights I should explore further

Transcript:
[TRANSCRIPT]
```

## Interview discipline

**Do:**
- Ask "Tell me about the last time you..." to get specific stories.
- Ask about money spent on current solutions, and let silence hang.

**Don't:**
- Pitch your solution during research, or ask "Would you use this?" People lie about hypotheticals.
- Lead with your assumptions, or interview only friends and family.
