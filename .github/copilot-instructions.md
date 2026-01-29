# Copilot Instructions

## 1) Architecture & entry points
- This is a Next.js App Router project with TypeScript.
- Global layout and metadata live in [app/layout.tsx](app/layout.tsx); the landing page is [app/page.tsx](app/page.tsx).
- Primary user flows:
  - New session: [app/new-session/page.tsx](app/new-session/page.tsx)
  - Sessions list: [app/sessions/page.tsx](app/sessions/page.tsx)
  - Session detail: [app/sessions/[sessionId]/page.tsx](app/sessions/[sessionId]/page.tsx)
- API routes are under [app/api/](app/api/), including layout generation at [app/api/generate-layout/route.ts](app/api/generate-layout/route.ts).
- UI components are organized under [components/](components/), with design inputs in [components/design/](components/design/) and output rendering in [components/output/](components/output/).

## 2) Feature scope (MVP vs Phase 2)
- **MVP scope (implemented or required next):** layout generation, design configuration, session management, output preview/code, and the remaining MVP gaps (auth, persistence, credits/monetization, analytics, and targeted landing pages).
- **Phase 2 scope:** component generation agent, design refinement loop, visual style editor, collaboration/sharing, and advanced analytics.
- When implementing new features, prioritize MVP gaps before Phase 2 unless explicitly requested.

## 3) Design system & UX tone
- Keep UI minimal, professional, and consistent with the current Tailwind setup and global styles in [app/globals.css](app/globals.css).
- Prefer existing UI components under [components/ui/](components/ui/) and layout primitives under [components/layout/](components/layout/).
- Maintain accessibility: clear focus states, sufficient contrast, and semantic HTML for generated layouts.
- When adding new UI, match the existing typography imports in [app/globals.css](app/globals.css); do not introduce new font providers unless required.

## 4) AI generation constraints
- For layout generation, follow the constraints in [server/agents/layout-fletcher.v1.md](server/agents/layout-fletcher.v1.md).
- The `styleContext` is authoritative; `designBrief` only guides structure and must never override other style choices.
- Output should be semantic HTML + a single CSS `<style>` block, mobile-first, using CSS variables for colors/fonts/spacing.
- Do not output alternate formats (Tailwind, JSX, CSS modules) unless explicitly requested.
- Provide 2–3 concise bullet points explaining layout logic below the code when generating layout output.

## 5) Session management & storage
- Sessions are stored client-side in `localStorage` via `SessionsStorageUtil` in [lib/utils/sessions-storage.util.ts](lib/utils/sessions-storage.util.ts).
- UI logic should use `useSessions()` from [lib/hooks/useSessions.ts](lib/hooks/useSessions.ts) to create, switch, update, rename, and delete sessions.
- Each session stores a `styleContext` and `generatedOutput`; keep these in sync when updating layouts.
- If you need persistence beyond `localStorage`, treat it as an MVP gap and keep changes scoped behind clear abstractions.

## 6) API & error-handling rules
- API routes live under [app/api/](app/api/) and should return JSON via `NextResponse` with explicit status codes.
- Validate request input early (JSON parse, schema checks, field length limits) and return 400-level errors for client issues.
- Keep timeouts and OpenAI error handling consistent with [app/api/generate-layout/route.ts](app/api/generate-layout/route.ts).
- Never log or return secrets (API keys, tokens); log only high-level error context.

## 7) Coding conventions & file structure
- Keep TypeScript types in [lib/models/](lib/models/) and enums/constants in [lib/enums/](lib/enums/) and [lib/constants/](lib/constants/).
- Place new UI building blocks in [components/ui/](components/ui/) and layout primitives in [components/layout/](components/layout/).
- Prefer hooks under [lib/hooks/](lib/hooks/) for shared client logic.
- Keep API routes isolated under [app/api/](app/api/) and avoid server logic in client components unless explicitly required.