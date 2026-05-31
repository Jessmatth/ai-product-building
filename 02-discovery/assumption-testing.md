<!--
ATTRIBUTION
Source: Escape Velocity Prompt Library — Polly Mallen
Upstream: https://github.com/pollymallen/escape-velocity-prompt-library
License: MIT
This file is adapted from the upstream library. See NOTICE.md at repo root.

TIER 2 (INTERACTIVE): A primary prompt that surfaces and ranks your riskiest
assumptions, followed by a results-review prompt to be run after you've
actually executed the tests.
-->

# Assumption Testing Framework (Interactive)

List the assumptions underneath your idea, rank them by risk, design the fastest possible test for each, and define clear proceed/pivot/stop criteria. Then re-run the framework after the tests come back.

## When to use it

- You're about to commit to building something and want to know what you're betting on.
- You've already run some tests and need to decide what to do with the results.
- A pilot or POC is wobbling and you can't tell why.

## Step 1 — Surface and design tests

```
I'm building [PRODUCT DESCRIPTION] for [TARGET CUSTOMER].

Help me identify and test my riskiest assumptions using the
following framework:

Step 1: List My Assumptions
Extract all assumptions I'm making about:
- The problem exists and is painful enough to solve
- Who has this problem
- Current solutions are inadequate
- Customers will pay for a solution
- How customers will discover my solution
- Technical feasibility
- My ability to build/deliver this

Step 2: Risk Ranking
Rank these assumptions by:
- Impact (if wrong, does the business fail?)
- Uncertainty (how confident am I this is true?)

Step 3: Test Design
For the top 5 riskiest assumptions, design a test:
- What's the fastest way to validate or invalidate this?
- What evidence would prove it true or false?
- What's the minimum viable test I can run this week?
- What does success look like? What does failure look like?

Step 4: Decision Criteria
For each test, define:
- What result means "proceed"
- What result means "pivot"
- What result means "stop"

Format this as an action plan I can execute in priority order.
```

## Step 2 — Review the test results (follow-up, after you've run the tests)

```
Here are my assumption test results:
[PASTE YOUR FINDINGS]

Based on these results:
1. Which assumptions were validated?
2. Which were invalidated?
3. Should I proceed, pivot, or stop?
4. If pivoting, what should I change?
5. What are my NEW riskiest assumptions after this learning?
```

## Green lights — keep going

- People interrupt you to share their painpoint stories.
- They ask "when can I buy this?" and have already spent money on inadequate solutions.
- You find active online communities discussing the problem, and people refer you to others with it.

## Red flags — consider pivoting

- You can't find 10 people who actively experience the problem.
- People say "nice to have" instead of "I need this now," and no one has ever paid to solve it.
- You can't reach customers without a huge marketing budget, or they don't understand the solution after three explanations.
