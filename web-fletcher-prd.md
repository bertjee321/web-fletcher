# Web Fletcher - Product Requirements Document

## Table of Contents

1. [Overview](#1-overview)
2. [Core Problem & Solution](#2-core-problem--solution)
3. [Brand Identity & Theme](#3-brand-identity--theme)
4. [Product Goals](#4-product-goals)
5. [Core Features](#5-core-features)
   - [5.1 Design Style Configuration](#51-design-style-configuration--implemented)
   - [5.2 Layout Generation Agent](#52-layout-generation-agent--implemented)
   - [5.3 User Authentication](#53-user-authentication--mvp-requirement)
   - [5.4 Database & Persistence](#54-database--persistence--mvp-requirement)
   - [5.5 Credits & Monetization System](#55-credits--monetization-system--mvp-requirement)
   - [5.6 Usage Analytics](#56-usage-analytics--mvp-requirement)
   - [5.7 Use-Case Landing Pages](#57-use-case-landing-pages--mvp-requirement)
   - [5.8 Component Generation Agent](#58-component-generation-agent--phase-2-feature)
   - [5.9 Session Management](#59-session-management--implemented)
   - [5.10 Result Output](#510-result-output--implemented)
6. [User Workflows](#6-user-workflows)
7. [Current State & Gaps](#7-current-state--gaps)
   - [7.1 Implemented Features](#71-implemented-features-)
   - [7.2 Critical MVP Gaps](#72-critical-mvp-gaps-)
   - [7.3 Phase 2 Features (Deferred)](#73-phase-2-features-deferred-)
   - [7.4 Known Issues](#74-known-issues-)
8. [Roadmap & Priorities](#8-roadmap--priorities)
9. [Future Features (Detailed)](#9-future-features-detailed)
   - [9.1 Visual Style Editor](#91-visual-style-editor)
   - [9.2 Design Refinement Loop](#92-design-refinement-loop)
   - [9.3 Database Persistence](#93-database-persistence)
   - [9.4 Agent Collaboration](#94-agent-collaboration)
   - [9.5 Export Options](#95-export-options)
   - [9.6 Design Marketplace](#96-design-marketplace)
   - [9.7 Gamification System](#97-gamification-system)
   - [9.8 Additional Planned Features](#98-additional-planned-features)
10. [Success Criteria](#10-success-criteria)
11. [Design Principles](#11-design-principles)
12. [Technical Debt & Maintenance](#12-technical-debt--maintenance)
13. [User Stories](#13-user-stories)
14. [Open Questions & Decisions](#14-open-questions--decisions)
15. [Glossary](#15-glossary)
16. [Migration Notes](#16-migration-notes)

---

## 1. Overview

**Product Name:** Web Fletcher

**Tagline:** Craft your web like a fletcher crafts his arrows.

**Vision:** Enable users to quickly generate full UI layouts and matching components in a consistent style using AI agents that understand modern design systems, remember chosen styles across sessions, and collaborate seamlessly.

**Target User:** Web developers and designers who want to rapidly prototype consistent UI designs with AI assistance.

**Current Status:** Pre-MVP Phase - Core layout generation implemented, authentication and monetization pending

---

## 2. Core Problem & Solution

### Problem
- Creating consistent UI designs across layouts and components is time-consuming
- Maintaining style consistency as a design system evolves requires manual effort
- Rapid prototyping often sacrifices design coherence

### Solution
Web Fletcher provides an AI-powered design system where:
- Users define a design context once (colors, tone, typography, spacing, etc.)
- AI agents generate layouts and components that automatically respect that context
- All outputs share a unified visual language

---

## 3. Brand Identity & Theme

### OSRS-Inspired Branding
Web Fletcher draws inspiration from Old School RuneScape's fletching skill, where players craft precise, consistent arrows and bows.

| Element                 | Details                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Tagline**             | "Craft your web like a fletcher crafts his arrows."                                                                  |
| **Alt tagline (short)** | "Hand-crafted web design by AI."                                                                                     |
| **Emoji / Icon**        | 🏹 or 🪶 — the fletching feather                                                                                     |
| **Theme colors**        | Warm browns & golds (like OSRS logs + bowstring) or forest green & parchment beige                                   |
| **Typography vibe**     | Slightly serif (RuneScape-esque), but modern UI-friendly — e.g., *Playfair Display* for titles + *Inter* for body    |
| **Logo idea**           | A stylized feather or arrowhead with subtle "{ }" brackets worked in                                                 |

### Gamification Elements (Optional Enhancement)
To make the experience more engaging and memorable:

**Terminology:**
- "Fletch" = Generate/create a design
- "Fletcher" = The AI agent creating designs
- "Crafting" = The design generation process
- "XP" = Experience points for design generation
- "Level" = Mastery in a particular design style

**Gamification Features:**
- **Level System:** "You've gained +10 UI Consistency XP"
- **Achievement Unlocks:** "Fletch your first layout 🏹", "Consistency Master", "Style Explorer"
- **Skill Progression:** "Your design reached level 2 in Modern Minimalism"
- **Milestone Badges:** Award badges for consistency, accessibility, creativity, or usage streaks
- **Mastery Tracks:** Progress indicators for different design styles (Modern Minimalist Level 5, Brutalist Level 3, etc.)
- **Visual Feedback:** Subtle animations and celebratory messages for milestones
- **Optional Leaderboards:** Privacy-conscious, opt-in comparison with community

**Implementation Guidelines:**
- Gamification should be toggleable in user settings
- Never interfere with core functionality
- Subtle visual design - no distracting animations
- Privacy-first approach - all tracking is client-side by default
- Educational purpose - help users learn design principles through progression

These elements should enhance engagement without distracting from the professional tool nature of the product.

---

## 4. Product Goals

### MVP Goals (Current Focus)
1. ✅ Generate consistent UI layouts based on user-defined style preferences
2. 🚧 User authentication (email / magic link)
3. 🚧 Database persistence with user accounts
4. 🚧 Wallet/credits system for pay-as-you-go model
5. 🚧 Usage tracking and token logging
6. 🚧 Three use-case-specific landing pages for SEO
7. ✅ Provide both visual previews and copyable code
8. ✅ Store and recall design context within a session

### MVP Success Criteria
- [x] Layout generation working end-to-end
- [ ] User authentication functional (email/magic link)
- [ ] Database with users, wallet, and usage tables
- [ ] Credit-based payment system via Stripe
- [ ] Three landing pages deployed (indie devs, backend devs, agencies)
- [ ] Basic analytics dashboard (tokens, costs, model usage)
- [ ] 10+ paying users to validate business model

### Phase 2 Goals (Post-MVP)
1. Generate matching UI components in the same design system
2. Enable session sharing and collaboration
3. Implement design refinement workflow
4. Add component generation agent
5. Visual style editor with live preview
6. Advanced analytics and user insights

### Success Metrics
- User can generate a layout in < 2 minutes ✅
- Generated components visually match the layout style 🚧
- Code output is production-ready or close to it ✅
- Users report consistent design across multiple generations ✅
- Generation completes in < 30 seconds ✅
- Session recall works across browser sessions (future)

---

## 5. Core Features

### 5.1 Design Style Configuration ✅ IMPLEMENTED
Users configure their design via a form with the following inputs:

**Location:** `components/design/DesignConfigForm.tsx`

| Input              | Type     | Options / Examples                          | Required | Status |
| ------------------ | -------- | ------------------------------------------- | -------- | ------ |
| Color Scheme       | Enum     | Light, Dark, Auto, High Contrast, Pastel   | Yes      | ✅     |
| Primary Color      | Enum     | Red, Blue, Green, Yellow, Purple, Pink, Teal, Orange | Yes | ✅ |
| Tone               | Enum     | Modern Minimalist, Fun Playful, Professional Corporate, Luxury Premium, Retro Pixel, Brutalist | Yes | ✅ |
| Font               | Enum     | Inter, Roboto, Open Sans, Poppins, Montserrat, JetBrains Mono, Fira Sans | Yes | ✅ |
| Border Radius      | Enum     | None, Small, Medium, Large, Extra Large, Full | Yes   | ✅     |
| Spacing            | Enum     | Compact, Normal, Comfortable, Spacious     | Yes      | ✅     |
| Design Brief       | Text     | Free-form description (max 500 chars)      | No       | ✅     |

**Data Model:** StyleContext (defined in `lib/models/style-context.model.ts`)

**Implementation Details:**
- Strong typing via TypeScript enums
- Form validation with error messages
- Tooltip explanations for each option
- Responsive layout for mobile/tablet/desktop

### 5.2 Layout Generation Agent ✅ IMPLEMENTED
**Agent Name:** Layout Fletcher

**File Location:** `server/agents/layout-fletcher.v1.md` (currently active)

**Alternative:** `server/agents/layout-fletcher.v2.md` (JSX/Tailwind - not yet integrated)

**API Endpoint:** `POST /api/generate-layout`

**Input:** StyleContext object

**Output:** Semantic HTML with CSS variables and responsive layout

**Responsibility:**
- Generate page structure (header, nav, sections, footer, etc.)
- Ensure mobile-first responsive design
- Use CSS variables for abstract colors/fonts
- Match the provided style context exactly
- Provide design rationale and explanations

**Current Implementation:**
- HTML/CSS-first approach (v1)
- Semantic HTML structure
- CSS variables for theming
- Mobile-responsive design
- Design explanations included in output

**Planned Enhancement:**
- Switch to JSX/Tailwind approach (v2)
- Better component structure
- More modern styling patterns

### 5.3 User Authentication 🚧 MVP REQUIREMENT
**Status:** Not yet implemented - Critical for MVP

**Authentication Method:** Email magic link (passwordless)

**Features:**
- Email-based signup and login
- Magic link verification
- Session management with JWT
- User profile management
- Logout functionality

**Technology Stack:**
- NextAuth.js or custom implementation
- Email service (Resend, SendGrid, or AWS SES)
- Secure token generation
- Database integration for user sessions

**User Flow:**
1. User enters email address
2. System sends magic link to email
3. User clicks link to verify
4. System creates session and redirects to dashboard
5. Session persists across browser sessions

### 5.4 Database & Persistence 🚧 MVP REQUIREMENT
**Status:** Not yet implemented - Critical for MVP

**Required Tables:**

**Users:**
```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  wallet        Wallet?
  sessions      Session[]
  usageLogs     UsageLog[]
}
```

**Wallet:**
```prisma
model Wallet {
  id            String   @id @default(cuid())
  userId        String   @unique
  user          User     @relation(fields: [userId], references: [id])
  credits       Int      @default(0)
  transactions  Transaction[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

**Usage Logs:**
```prisma
model UsageLog {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  sessionId     String?
  modelUsed     String
  tokensUsed    Int
  creditsUsed   Int
  costUsd       Float
  createdAt     DateTime @default(now())
}
```

**Transactions:**
```prisma
model Transaction {
  id            String   @id @default(cuid())
  walletId      String
  wallet        Wallet   @relation(fields: [walletId], references: [id])
  amount        Float    // in EUR
  credits       Int
  type          String   // "purchase" | "refund" | "adjustment"
  stripeId      String?
  createdAt     DateTime @default(now())
}
```

### 5.5 Credits & Monetization System 🚧 MVP REQUIREMENT
**Status:** Not yet implemented - Critical for MVP

**Credit System:**
- Internal credits (not 1:1 with OpenAI tokens)
- Credits consumed per successful AI generation
- No cost during API failures or downtime

**Pricing Tiers:**
- €5 = 500 credits (entry point)
- €10 = 1,100 credits (10% bonus)
- €25 = 3,000 credits (20% bonus)

**Model Costs:**
- Basic layout: 10 credits per generation
- Advanced layout: 50 credits per generation
- (Component generation in Phase 2)

**Free Tier:**
- New users: 50 free credits
- 1-2 generations with best model
- Encourages sign-up and testing

**Payment Integration:**
- Stripe for payment processing
- Webhook handling for payment confirmation
- Automatic credit top-up on successful payment
- Transaction logging for audit trail

### 5.6 Usage Analytics 🚧 MVP REQUIREMENT
**Status:** Not yet implemented - Critical for MVP

**Track Per Week:**
- Total revenue (€)
- Total OpenAI costs (€)
- Number of paying users
- Average revenue per user (ARPU)
- Credits sold vs. credits used
- Conversion rate (free → paid)

**Track Per User:**
- Credits purchased
- Credits used
- Tokens consumed
- Cost per generation
- Profit/loss per user

**Admin Dashboard Requirements:**
- Real-time credit usage monitoring
- Cost vs. revenue tracking
- User activity heatmap
- Model usage distribution
- Abuse detection alerts

### 5.7 Use-Case Landing Pages 🚧 MVP REQUIREMENT
**Status:** Not yet implemented - Critical for MVP

Web Fletcher targets three specific use cases, each with its own landing page and positioning:

**Landing Page 1: Indie Developers / Side Projects**
- **URL:** `/for/indie-developers`
- **Headline:** "Turn Ideas Into UI in Minutes, Not Hours"
- **Target Audience:** Developers building side projects, MVPs, and personal apps
- **Key Messages:**
  - Speed over perfection
  - Removes design as a bottleneck
  - Experiment with multiple ideas quickly
  - Affordable pay-as-you-go pricing
- **Example Use Cases:**
  - SaaS landing page for MVP
  - Dashboard for side project
  - Blog layout for personal brand
- **CTA:** "Start Building Your Idea"

**Landing Page 2: Backend / Full-Stack Developers (Internal Tools)**
- **URL:** `/for/internal-tools`
- **Headline:** "Build Functional UIs for Internal Tools Without Design Headaches"
- **Target Audience:** Developers building admin panels, dashboards, and CRUD apps
- **Key Messages:**
  - Good enough UI, not pixel-perfect
  - Focus on business logic, not CSS
  - Admin panels and dashboards in minutes
  - Consistent design without design system overhead
- **Example Use Cases:**
  - Admin dashboard
  - Data entry forms
  - Analytics panel
  - User management interface
- **CTA:** "Generate Your Dashboard"

**Landing Page 3: Agencies / Freelancers (Prototyping & Pitches)**
- **URL:** `/for/agencies`
- **Headline:** "Win Clients Faster With Rapid Prototypes"
- **Target Audience:** Agencies and freelancers pitching to clients
- **Key Messages:**
  - Time savings = more pitches = more wins
  - Professional-looking prototypes instantly
  - Iterate faster based on client feedback
  - Impress clients with speed
- **Example Use Cases:**
  - Client pitch mockups
  - Proposal layouts
  - Quick design explorations
  - MVP prototypes
- **CTA:** "Create Your Prototype"

**Common Elements Across All Landing Pages:**
- Same product (Web Fletcher)
- Same features and capabilities
- Same pricing model
- Different hero images/examples per use case
- Testimonials from relevant user personas
- Link to main product page

**SEO Strategy:**
- Each page targets specific keywords:
  - Indie: "fast UI generation", "MVP design tool", "side project UI"
  - Internal Tools: "admin panel generator", "CRUD UI builder", "internal dashboard design"
  - Agencies: "rapid prototyping tool", "client mockup generator", "pitch design tool"
- Separate meta descriptions and titles per page
- Use case-specific structured data

### 5.8 Component Generation Agent 📋 PHASE 2 FEATURE
**Agent Name:** Component Fletcher

**File Location:** `server/agents/component-fletcher.v1.md`

**Status:** Prompt exists, but deferred to Phase 2 - Not required for MVP launch

**Rationale for Deferring:**
- MVP needs monetization infrastructure first
- Component generation is a premium feature that can drive Phase 2 upgrades
- Layout generation alone provides sufficient value for initial users
- Authentication and payment system are higher priority

### 5.9 Session Management ✅ IMPLEMENTED
**Hook:** `useSessions` (custom React hook)

**Storage:** Client-side localStorage via `SessionsStorageUtil`

**Features Implemented:**
- Create new sessions with custom names
- Store StyleContext in session
- Store generated layout output
- View all sessions at `/sessions`
- View individual session details at `/sessions/[sessionId]`
- Generate unique session IDs

**Current Limitations:**
- Client-side only (no cross-device persistence)
- No user authentication
- No session sharing capabilities
- No version history within sessions
- Storage limited by localStorage capacity (~5-10MB)

**Planned Enhancements (Phase 2):**
- Database persistence (SQLite/Prisma)
- User authentication (NextAuth)
- Session sharing via unique URLs
- Session versioning and history
- Cloud sync across devices
- Collaborative sessions

### 5.10 Result Output ✅ IMPLEMENTED
**Components:**
- `GeneratedOutput.tsx` - Code display with syntax highlighting
- `LayoutPreview.tsx` - Live iframe preview

**Features:**
- Syntax-highlighted code display (VS Code Dark+ theme)
- Expand/collapse for long code blocks
- Copy to clipboard functionality
- Download as HTML file
- Sandboxed iframe rendering for security
- Mobile-responsive layout

**Design Rationale Display:**
- Agent-provided explanations
- Design decision breakdowns
- Best practice highlights

---

## 6. User Workflows

### Workflow 1: New User Onboarding 🚧 MVP WORKFLOW
1. User lands on use-case-specific page (e.g., `/for/indie-developers`)
2. User clicks "Start Building" CTA
3. System prompts for email address
4. System sends magic link to email
5. User clicks link, account created automatically
6. User receives 50 free credits
7. User redirected to style configuration form
8. User generates first layout using free credits
9. System shows credit balance and top-up prompt

### Workflow 2: Generate a Layout ✅ IMPLEMENTED (needs auth integration)
1. User navigates to home page or clicks "New Session"
2. **System checks authentication status**
3. **System checks credit balance**
4. User fills out StyleContext form (color scheme, tone, font, etc.)
5. User optionally adds a design brief
6. User clicks "Generate Layout" or "Fletch Layout"
7. **System deducts credits before API call**
8. System calls layout-fletcher agent with StyleContext
9. **System logs tokens used and cost**
10. Loading state displays during generation
11. Generated layout appears in split view (code + preview)
12. **System updates credit balance**
13. User can copy code, download file, or adjust settings
14. Session is automatically saved to database

### Workflow 3: Purchase Credits 🚧 MVP WORKFLOW
1. User clicks "Add Credits" button
2. System shows pricing tiers (€5, €10, €25)
3. User selects tier and clicks "Purchase"
4. Stripe checkout modal opens
5. User completes payment
6. Stripe webhook confirms payment
7. System adds credits to user wallet
8. User receives confirmation email
9. Transaction logged in database

### Workflow 4: Manage Sessions ✅ IMPLEMENTED (needs database migration)
1. User navigates to `/sessions`
2. User views list of all saved sessions
3. User clicks on session to view details
4. User can view StyleContext and generated output
5. User can create new session or continue existing one

### Workflow 5: Monitor Usage (Admin) 🚧 MVP WORKFLOW
1. Admin logs into dashboard
2. Admin views real-time credit usage
3. Admin checks cost vs. revenue metrics
4. Admin identifies high-usage users
5. Admin reviews abuse detection alerts
6. Admin adjusts pricing or limits if needed

---

## 7. Current State & Gaps

### 7.1 Implemented Features ✅
1. **Design Configuration System** - Complete form with all inputs
2. **Layout Generation Agent** - Working HTML/CSS generation
3. **Session Management** - localStorage-based persistence
4. **Output Visualization** - Code view and live preview
5. **UI Component Library** - Consistent design system
6. **Page Structure** - Landing, sessions, session detail, 404
7. **Accessibility** - WCAG AA compliance

### 7.2 Critical MVP Gaps 🚧
1. **User Authentication** - No email magic link system
2. **Database Persistence** - Still using localStorage only
3. **Credit System** - No wallet or payment processing
4. **Usage Tracking** - No token/cost logging
5. **Analytics Dashboard** - No admin metrics view
6. **Use-Case Landing Pages** - Only generic landing page exists
7. **Stripe Integration** - No payment processing

### 7.3 Phase 2 Features (Deferred) 📋
1. **Component Generation** - Prompt exists but no API/UI integration
2. **Session Sharing** - Can't share designs with others
3. **Design Refinement** - No iteration workflow
4. **Agent Collaboration** - No context sharing between agents
5. **Visual Style Editor** - No interactive design tweaking

### 7.4 Known Issues 🐛
1. **Limited Error Handling** - Basic error messages, could be more helpful
2. **No Session Versioning** - Can't track history within a session
3. **Single Layout Format** - Only HTML/CSS v1, not using Tailwind/JSX v2
4. **No Analytics** - Can't track generation success rates or patterns
5. **Limited Agent Context** - Agents don't see previous generations
6. **No Export Options** - Can't export as framework components
7. **No Design Validation** - No accessibility or best practice checks

---

## 8. Roadmap & Priorities

### Phase 1: Complete MVP (Current - Next 4-6 Weeks)
**Goal:** Launch with monetization, auth, and use-case landing pages

| Priority | Feature                        | Effort | Status |
| -------- | ------------------------------ | ------ | ------ |
| 🔴 HIGH  | User authentication (magic link)| High   | 🚧     |
| 🔴 HIGH  | Database schema & migration     | High   | 🚧     |
| 🔴 HIGH  | Credit wallet system            | High   | 🚧     |
| 🔴 HIGH  | Stripe payment integration      | High   | 🚧     |
| 🔴 HIGH  | Usage tracking & logging        | Medium | 🚧     |
| 🔴 HIGH  | Landing page: Indie developers  | Medium | 🚧     |
| 🔴 HIGH  | Landing page: Internal tools    | Medium | 🚧     |
| 🔴 HIGH  | Landing page: Agencies          | Medium | 🚧     |
| 🟡 MED   | Admin analytics dashboard       | Medium | 🚧     |
| 🟡 MED   | Email notifications (magic link)| Low    | 🚧     |
| 🟡 MED   | Migrate localStorage to DB      | Medium | 🚧     |
| 🟢 LOW   | Enhanced error messages         | Low    | 📋     |
| 🟢 LOW   | Mobile-responsive form layout   | Low    | 📋     |

### Phase 2: Feature Expansion (6-12 Weeks Post-MVP)
**Goal:** Add component generation and design refinement

| Priority | Feature                        | Effort | Benefits                    |
| -------- | ------------------------------ | ------ | --------------------------- |
| 🔴 HIGH  | Component Fletcher API endpoint| Medium | New revenue stream          |
| 🔴 HIGH  | Component generation UI        | Medium | Enhanced user value         |
| 🟡 MED   | Design refinement workflow     | Medium | Improved iterations         |
| 🟡 MED   | Session sharing via URLs       | Medium | Collaboration, showcase     |
| 🟡 MED   | Session versioning & history   | Medium | Design iteration tracking   |
| 🟡 MED   | Subscription pricing tier      | Low    | Predictable revenue         |
| 🟢 LOW   | Switch to Layout v2 (Tailwind) | Medium | Modern output format        |

### Phase 3: Differentiation (12-24 Weeks)
**Goal:** Unique features that set Web Fletcher apart

| Priority | Feature                        | Effort | Benefits                    |
| -------- | ------------------------------ | ------ | --------------------------- |
| 🔴 HIGH  | Visual style editor            | High   | Interactive design tweaking |
| 🔴 HIGH  | Agent collaboration system     | High   | Consistent cross-agent designs |
| 🟡 MED   | Multiple export formats        | Medium | Framework flexibility       |
| 🟡 MED   | Design system documentation    | Medium | Auto-generated style guides |
| 🟡 MED   | A/B design comparison          | Medium | Design exploration          |
| 🟢 LOW   | Accessibility checker          | Medium | WCAG compliance validation  |
| 🟢 LOW   | Design critique AI             | Low    | Educational feedback        |

### Phase 4: Scale & Community (24+ Weeks)
**Goal:** Build ecosystem and community features

| Priority | Feature                        | Effort | Benefits                    |
| -------- | ------------------------------ | ------ | --------------------------- |
| 🟡 MED   | Design marketplace             | High   | Community templates         |
| 🟡 MED   | Template library               | Medium | Pre-made style contexts     |
| 🟡 MED   | Gamification system            | Medium | Engagement and fun          |
| 🟢 LOW   | Real-time collaboration        | High   | Team workspaces             |
| 🟢 LOW   | Integration APIs               | High   | Extensibility               |
| 🟢 LOW   | CLI tool                       | Medium | Developer workflow          |
| 🟢 LOW   | VSCode extension               | High   | IDE integration             |

---

## 9. Future Features (Detailed)

### 9.1 Visual Style Editor
**Status:** Planned for Phase 3

**Features:**
- Live color picker with real-time preview
- Interactive spacing controls (slider-based)
- Border radius visual adjuster
- Font pairing suggestions from AI
- Custom Tailwind theme export
- CSS variable preview and editing
- Design token generation

**User Value:**
- More intuitive than form-based configuration
- Immediate visual feedback
- Explore design variations quickly
- Export custom themes for projects

### 9.2 Design Refinement Loop
**Status:** Planned for Phase 2

**Features:**
- "Improve this design" button with AI suggestions
- "Regenerate" button for alternative versions
- Side-by-side A/B comparison view
- Like/dislike feedback system
- Iterative refinement with context memory
- Design evolution history timeline
- Rollback to previous versions

**User Value:**
- Explore design variations without starting over
- Learn what works through comparison
- Refine toward ideal design iteratively

### 9.3 Database Persistence
**Status:** Planned for Phase 2

**Technology:** Prisma + SQLite (or PostgreSQL)

**Features:**
- User accounts with authentication
- Cloud-synced sessions across devices
- Session sharing via unique URLs
- Version control for designs
- Collaborative sessions (real-time or async)
- Session privacy controls
- Export session data

**Migration Path:**
1. Define Prisma schema
2. Create migration scripts
3. Add NextAuth for authentication
4. Migrate localStorage data on login
5. Add sync conflict resolution

### 9.4 Agent Collaboration
**Status:** Planned for Phase 3

**Architecture:**
- Shared context object between agents
- Layout agent passes structural hints to component agent
- Component agent suggests layout improvements
- Multi-turn conversation between agents
- Conflict resolution when agents disagree

**Example Flow:**
1. User generates layout with Layout Fletcher
2. Layout agent analyzes structure, creates layoutContext
3. User requests button component
4. Component Fletcher receives StyleContext + layoutContext
5. Component automatically matches layout's visual style
6. Component suggests layout improvements if needed

### 9.5 Export Options
**Status:** Planned for Phase 3

**Formats:**
- Next.js component files (.tsx)
- React component files (.jsx)
- Vue component files (.vue)
- Svelte component files (.svelte)
- Plain HTML + CSS
- Tailwind config snippet
- CSS variables file
- Design tokens (JSON/YAML)
- Figma plugin integration (future)
- GitHub Gist automatic upload

### 9.6 Design Marketplace
**Status:** Planned for Phase 4

**Features:**
- Publish design templates
- Browse community designs
- Fork and remix others' styles
- Rating and review system
- Tag-based search
- Style context presets library
- Monetization options for premium templates
- License management

### 9.7 Gamification System
**Status:** Optional enhancement, Phase 4

**Features:**
- XP points for design generation
- Level system per design style (Modern Minimalist Level 5, etc.)
- Achievement badges (First Layout, Consistency Streak, Style Master)
- Milestone celebrations (subtle animations)
- Progress visualization
- Optional leaderboards (privacy-first)
- Design challenges and prompts
- Skill progression tracking

**Implementation:**
- Client-side by default (privacy-first)
- Toggleable in settings
- Opt-in for community features
- No paywalls or artificial limitations
- Educational focus, not addictive mechanics

### 9.8 Additional Planned Features

**Accessibility Checker:**
- WCAG compliance validation
- Color contrast analyzer
- Screen reader preview
- Keyboard navigation testing
- Automated suggestions for improvements

**Design System Documentation Generator:**
- Auto-generate style guide from StyleContext
- Color palette documentation with hex codes
- Typography scale visualization
- Component usage examples
- Export as Markdown or HTML

**Responsive Preview Modes:**
- Mobile/tablet/desktop toggle
- Custom breakpoint testing
- Device frame overlays
- Screenshot export at multiple sizes
- Rotation and orientation testing

**Code Transformation Tools:**
- Convert HTML/CSS → JSX/Tailwind
- Convert Tailwind → CSS Modules
- Convert React → Vue/Svelte
- Framework-agnostic output options

---

## 10. Success Criteria

### MVP Launch Criteria 🚧
- [x] StyleContext form fully functional
- [x] Layout generation working end-to-end
- [x] Generated code is valid HTML/CSS
- [x] Designs respect style context in 95%+ of cases
- [x] Preview rendering without errors
- [x] Mobile-first responsive designs
- [x] User can copy code to clipboard
- [ ] Email magic link authentication
- [ ] Database with users, wallet, usage tables
- [ ] Stripe payment integration
- [ ] Credit system functional
- [ ] Usage tracking and logging
- [ ] Admin analytics dashboard
- [ ] Three use-case landing pages deployed
- [ ] 10+ paying users acquired
- [ ] Positive unit economics (revenue > costs)

### Post-MVP Success Metrics (Phase 2)
- [ ] Component generation agent live
- [ ] 50+ paying users
- [ ] Average revenue per user (ARPU) > €15/month
- [ ] < 5% support requests due to billing
- [ ] 10%+ week-over-week growth
- [ ] Session sharing functional
- [ ] Design refinement workflow tested
- [ ] NPS score >= 40
- [ ] 70%+ of generated code used in production
- [ ] < 10% error rate in generation

### Long-term Success Metrics (Phase 3+)
- [ ] 10,000+ registered users
- [ ] 100,000+ designs generated
- [ ] Design marketplace with 100+ templates
- [ ] Community engagement (comments, shares)
- [ ] Revenue from premium features (if applicable)
- [ ] Integration partnerships (Figma, VSCode, etc.)

---

## 11. Design Principles

1. **Consistency First:** All outputs respect the active style context without exception
2. **Accessibility Default:** Every generated component meets WCAG AA standards
3. **Code Quality:** Generated code is clean, semantic, and production-ready
4. **Simplicity:** UI is intuitive; users understand what they're configuring
5. **Transparency:** Design explanations help users learn design concepts
6. **Performance:** Generation completes in < 30 seconds (target: < 15 seconds)
7. **Personality:** Balance professional functionality with memorable, warm branding
8. **Privacy:** User data stays private; no tracking without consent
9. **Progressive Enhancement:** Core features work without JavaScript
10. **Mobile-First:** Responsive design from the ground up

---

## 12. Technical Debt & Maintenance

### Current Technical Debt
1. **localStorage Limitations** - Will hit capacity limits with many sessions
2. **No Error Boundary** - React errors can crash entire app
3. **Limited TypeScript Coverage** - Some components use `any` types
4. **No Unit Tests** - No automated testing yet
5. **No E2E Tests** - No integration testing
6. **Hardcoded API Keys** - Should use environment variables
7. **No Monitoring** - No error tracking or analytics
8. **Large Bundle Size** - Could optimize with code splitting

### Maintenance Plan
- **Weekly:** Monitor user feedback, fix critical bugs
- **Bi-weekly:** Review and refactor code, add tests
- **Monthly:** Update dependencies, security audit
- **Quarterly:** Performance optimization, technical debt reduction

---

## 13. User Stories

### MVP Phase (Current)

| Role       | Task                                                  | Benefit                   | Status |
| ---------- | ----------------------------------------------------- | ------------------------- | ------ |
| 👤 User    | Sign up with my email address (magic link).          | Quick, passwordless access| 🚧     |
| 👤 User    | Receive 50 free credits to test the product.         | Risk-free trial           | 🚧     |
| 👤 User    | Purchase credits via Stripe (€5/€10/€25).            | Pay-as-you-go flexibility | 🚧     |
| 👤 User    | See my credit balance before generating.             | Cost awareness            | 🚧     |
| 👤 User    | Know how many credits a generation will cost.        | Budget control            | 🚧     |
| 👩‍🎨 User | Set my design style so AI keeps consistency.          | Consistent look & feel    | ✅     |
| 👩‍🎨 User | Generate a layout based on my style.                  | Fast prototyping          | ✅     |
| 👩‍🎨 User | View design explanations from AI agents.              | Learn design principles   | ✅     |
| 👩‍🎨 User | Copy generated code to use in my project.             | Quick implementation      | ✅     |
| 👩‍🎨 User | Download generated code as a file.                    | Easy file management      | ✅     |
| 👩‍🎨 User | Preview design in a live view.                        | Visual validation         | ✅     |
| 👩‍🎨 User | View all my saved sessions (now in database).         | Session management        | 🚧     |
| 👤 User    | Access my sessions from any device.                   | Cross-device workflow     | 🚧     |
| 🧑‍💼 Admin| Monitor credit usage and costs in real-time.          | Financial oversight       | 🚧     |
| 🧑‍💼 Admin| View tokens used per user and per model.              | Cost optimization         | 🚧     |
| 🧑‍💼 Admin| Identify abuse or unusual usage patterns.             | Fraud prevention          | 🚧     |

### Phase 2 (Component Generation & Sharing)

| Role       | Task                                                  | Benefit                   | Status |
| ---------- | ----------------------------------------------------- | ------------------------- | ------ |
| 👩‍🎨 User | Generate additional components in same style.         | Consistent design         | 📋     |
| 👩‍🎨 User | Share my session with teammates via URL.              | Collaboration             | 📋     |
| 👩‍🎨 User | View version history of my designs.                   | Track design evolution    | 📋     |
| 👩‍🎨 User | Revert to a previous version.                         | Undo mistakes             | 📋     |
| 👩‍🎨 User | Get AI suggestions to improve my design.              | Learning and refinement   | 📋     |

### Phase 3 (Advanced Features)

| Role       | Task                                                  | Benefit                   | Status |
| ---------- | ----------------------------------------------------- | ------------------------- | ------ |
| 👩‍🎨 User | Fine-tune outputs based on my preferences.            | Personalization           | 📋     |
| 👩‍🎨 User | Export my components into my project.                 | Efficiency                | 📋     |
| 👩‍🎨 User | Compare different styles on the same layout.          | Experimentation           | 📋     |
| 👩‍🎨 User | Get AI suggestions to improve my design.              | Learning and refinement   | 📋     |
| 👩‍🎨 User | Adjust colors visually with a picker.                 | Intuitive customization   | 📋     |

### Phase 4 (Community)

| Role       | Task                                                  | Benefit                   | Status |
| ---------- | ----------------------------------------------------- | ------------------------- | ------ |
| 👩‍🎨 User | Share my design templates with others.                | Community contribution    | 📋     |
| 👩‍🎨 User | Browse and remix community designs.                   | Inspiration and learning  | 📋     |
| 👩‍🎨 User | Track my design generation progress.                  | Motivation and engagement | 📋     |
| 👩‍🎨 User | Earn badges for design consistency.                   | Gamification fun          | 📋     |

---

## 14. Open Questions & Decisions

**Priority for Next Sprint:**
- Which authentication provider: NextAuth (self-hosted) vs. Magic.link (hosted)?
- Database choice: PostgreSQL (Supabase) vs. PlanetScale vs. Neon?
- Email service: Resend vs. SendGrid vs. AWS SES?
- Should free credits expire after 30 days to prevent abuse?
- What's the minimum viable admin dashboard? (prioritize metrics)
- Should landing pages be in Next.js or separate static sites?

**MVP Scope Decisions:**
- ✅ Component generation deferred to Phase 2
- ✅ Three landing pages required for MVP
- ✅ Authentication via email magic link (no social login initially)
- ✅ Credits system with Stripe pay-as-you-go
- ✅ Admin dashboard with basic analytics
- ❓ Should we allow guest users with session-only storage?
- ❓ Minimum credits per purchase to reduce transaction fees?

**Business Model:**
- Free tier: 50 credits (enough for 5 basic or 1 advanced layout)
- Should free credits refill monthly or be one-time only?
- Target ARPU: €10-15/month per active user
- Markup on OpenAI costs: 3x minimum (adjust based on data)

**Technical Decisions:**
- ✅ Start with passwordless authentication (email magic link)
- ✅ Stripe for payments (industry standard, great docs)
- ✅ PostgreSQL via Supabase (scalable, auth built-in)
- ❓ Use Supabase Auth or custom JWT implementation?
- ❓ Prisma ORM or raw SQL queries?

**Launch Strategy:**
- Beta launch to friends & family first (10-20 people)
- Collect feedback before public launch
- Soft launch to indie dev communities (Reddit, Twitter, Indie Hackers)
- Goal: 50 sign-ups in first week, 10 paying users in first month

---

## 15. Glossary

| Term | Definition |
| ---- | ---------- |
| **Fletcher** | Craftsperson who makes arrows; metaphor for crafting precise, consistent UI |
| **Fletch** | Verb: to generate/craft a design using Web Fletcher |
| **StyleContext** | JSON-like object containing all design settings for a session (colors, fonts, spacing, etc.) |
| **Design Brief** | Optional free-form description of layout purpose/structure (max 500 chars) |
| **Agent** | AI-powered system (GPT-4 based) that generates code based on prompts and context |
| **Layout Fletcher** | Agent responsible for generating complete page layouts |
| **Component Fletcher** | Agent responsible for generating individual UI components |
| **OSRS** | Old School RuneScape; cultural reference for the fletcher theme and visual inspiration |
| **Session** | A saved design configuration with StyleContext and generated outputs |
| **XP** | Experience Points - gamification term for tracking design generation activity |
| **Mastery Track** | Progression system for different design styles (Modern Minimalist, Brutalist, etc.) |

---

## 16. Migration Notes

**From project-notes.md:**
This PRD now incorporates all content from `project-notes.md`, including:
- Complete brand identity and OSRS theme details
- Gamification concepts with terminology and examples
- Visual personality guidelines
- Repository structure conventions
- "Fun lore" concepts for user engagement
- All brainstorming and ideation content

The `project-notes.md` file can now be safely archived or deleted, as this PRD serves as the single source of truth for project requirements and planning.

---

**From monetization.md:**
This PRD now incorporates the MVP definition from `monetization.md`:
- User authentication (email/magic link) is now a core MVP requirement
- Database persistence with users, wallet, and usage tables is prioritized
- Credit-based payment system is part of MVP scope
- Basic analytics dashboard is required before launch
- Three use-case landing pages are essential for SEO and positioning
- Component generation has been deferred to Phase 2

The previous "MVP = Layout + Components" has been replaced with "MVP = Layout + Auth + Monetization + Landing Pages" to align with business viability requirements.

---

**Document Version:** 3.0
**Last Updated:** January, 2026
**Status:** Living Document - Updated to align MVP with monetization requirements
**Maintained By:** Project Lead

**Next Review:** After MVP completion (Authentication + Credits + Landing Pages implemented)