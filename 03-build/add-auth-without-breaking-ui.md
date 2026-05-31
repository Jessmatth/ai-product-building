<!--
ATTRIBUTION
Source: Escape Velocity Prompt Library — Polly Mallen
Upstream: https://github.com/pollymallen/escape-velocity-prompt-library
License: MIT
This file is adapted from the upstream library. See NOTICE.md at repo root.
-->

# Add Authentication Without Breaking the UI

Layer user accounts and sessions beneath an interface that's already built and working, with explicit guardrails so the agent doesn't redesign anything along the way.

## When to use it

- A working prototype needs real authentication.
- You're about to ask an AI builder (Replit Agent, Lovable, Cursor) to add auth and you want to keep your existing UI intact.
- The same shape applies to "add X feature without changing Y" requests beyond auth.

## Prompt (Replit Auth example — adapt for your platform)

```
Add user authentication and account management to this project using
Replit Auth and its built-in database WITHOUT changing the existing UI
flow or user experience.

CONTEXT:
- The UI and user flow are already implemented and working perfectly
- DO NOT modify existing UI components, layouts, or navigation flow
- Authentication should be transparently added as a layer beneath the
  current interface
- Use Replit Auth's built-in user storage instead of external databases

CRITICAL CONSTRAINT:
- PRESERVE all existing UI/UX exactly as is
- Only add authentication logic behind the scenes
- The user journey through the app should remain identical, just with
  auth checks added
- Do not redesign, restructure, or "improve" any existing interfaces

SUCCESS CRITERIA:
- Users can sign in using Replit Auth
- User data is stored and retrieved from Replit's built-in systems
- User sessions persist until explicit logout
- Protected routes redirect unauthenticated users
- User-specific data is properly isolated in Replit DB
- All auth operations have proper error handling
- THE EXISTING UI REMAINS COMPLETELY UNCHANGED
- Current user flow and experience are preserved exactly

Please implement this incrementally, testing each component before
moving to the next. If any change would require modifying the existing
UI, stop and ask for clarification first.
```

## Why this prompt works

It separates the goal (auth) from the constraint (don't touch the UI), states explicit success criteria, and tells the agent to stop and ask rather than improvise when the two collide.

The same shape (goal, hard constraints, success criteria, "stop and ask") transfers to almost any "add a feature to existing code" request. Swap "Replit Auth" for "Stripe billing" or "Postgres migration" and the structure still holds.

## Adapting to other platforms

- **Lovable:** replace "Replit Auth and its built-in database" with the auth provider you've wired up (Supabase Auth, Clerk).
- **Cursor / Claude Code on your own repo:** replace the platform-specific lines with your actual auth library and where the user table lives.
- **Generic builder:** the structure is what matters. Goal up top, "DO NOT" rules in the middle, explicit success criteria, "stop and ask" escape hatch.
