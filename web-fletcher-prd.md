# Web Fletcher - Product Requirements Document

## 1. Overview

**Product Name:** Web Fletcher

**Tagline:** Craft your web like a fletcher crafts his arrows.

**Vision:** Enable users to quickly generate full UI layouts and matching components in a consistent style using AI agents that understand modern design systems, remember chosen styles across sessions, and collaborate seamlessly.

**Target User:** Web developers and designers who want to rapidly prototype consistent UI designs with AI assistance.

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

## 3. Product Goals (MVP Phase)

### Primary Goals
1. Generate consistent UI layouts based on user-defined style preferences
2. Generate matching UI components in the same design system
3. Store and recall design context within a session
4. Provide both visual previews and copyable code

### Success Metrics
- User can generate a layout in < 2 minutes
- Generated components visually match the layout style
- Code output is production-ready or close to it
- Users report consistent design across multiple generations

---

## 4. Core Features (MVP)

### 4.1 Design Style Configuration
Users configure their design via a form with the following inputs:

| Input              | Type     | Options / Examples                          | Required |
| ------------------ | -------- | ------------------------------------------- | -------- |
| Color Scheme       | Enum     | Light, Dark, Auto, High Contrast, Pastel   | Yes      |
| Primary Color      | Enum     | Red, Blue, Green, Yellow, Purple, Pink, Teal, Orange | Yes |
| Tone               | Enum     | Modern Minimalist, Fun Playful, Professional Corporate, Luxury Premium, Retro Pixel, Brutalist | Yes |
| Font               | Enum     | Inter, Roboto, Open Sans, Poppins, Montserrat, JetBrains Mono, Fira Sans | Yes |
| Border Radius      | Enum     | None, Small, Medium, Large, Extra Large, Full | Yes |
| Spacing            | Enum     | Compact, Normal, Comfortable, Spacious     | Yes |
| Design Brief       | Text     | Free-form description (max 500 chars)      | No       |

**Data Model:** StyleContext (defined in `lib/models/style-context.model.ts`)

### 4.2 Layout Generation Agent
**Agent Name:** Layout Fletcher

**Input:** StyleContext object

**Output:** Semantic HTML/JSX with Tailwind CSS responsive layout

**Responsibility:**
- Generate page structure (header, nav, sections, footer, etc.)
- Ensure mobile-first responsive design
- Use CSS variables for abstract colors/fonts
- Match the provided style context exactly

**Prompt Template:** Located in `server/agents/layout-fletcher.v2.md` (JSX/Tailwind version)

### 4.3 Component Generation Agent
**Agent Name:** Component Fletcher

**Input:** StyleContext object + component description

**Output:** Reusable React component with Tailwind CSS

**Responsibility:**
- Craft small UI elements (buttons, cards, forms, modals, etc.)
- Ensure hover/focus states match the design tone
- Maintain consistency with layout style
- Provide brief design explanations

**Prompt Template:** Located in `server/agents/component-fletcher.v1.md`

### 4.4 Session Memory
- Store StyleContext in React component state (client-side)
- Allow users to save/load designs (future: persist to database)
- Pass context to every agent prompt

### 4.5 Result Output
- Live preview of generated layout/component
- Copyable code block (HTML + CSS or JSX + Tailwind)
- Option to generate matching components
- Design notes/explanation from the agent

---

## 5. User Workflows (MVP)

### Workflow 1: Generate a Layout
1. User navigates to home page
2. User fills out StyleContext form (color scheme, tone, font, etc.)
3. User optionally adds a design brief (e.g., "Landing page for a SaaS app")
4. User clicks "Fletch Layout"
5. System calls layout-fletcher agent with StyleContext
6. Generated layout appears in preview
7. User can copy code or refine settings

### Workflow 2: Generate a Component
1. User has an active StyleContext from Workflow 1
2. User describes desired component (e.g., "Primary CTA button")
3. User clicks "Generate Component"
4. System calls component-fletcher agent with StyleContext + description
5. Component appears in preview with matching style
6. User can copy code

### Workflow 3: Iterate on Design
1. User adjusts StyleContext settings (e.g., changes tone from Modern Minimalist to Fun Playful)
2. User regenerates layout/components
3. All outputs automatically update to reflect new context

---

## 6. UI/UX Requirements

### 6.1 Page Structure
- **Header:** Logo, tagline, navigation
- **Main Content:** Card-based layout with form inputs
- **Tabs:** "Style Settings" and "Preview" tabs
- **Footer:** Attribution and copyright

### 6.2 Design System (Current App Style)
- **Color Palette:**
  - Background: #f8f5ef (warm beige)
  - Text: #2c2a24 (dark brown)
  - Accent: #7a5f3e (leather brown)
  - Borders: #d3c9b4, #e3d6c1
  - Card: #fffaf3 (cream)

- **Typography:**
  - Font family: Sans-serif system UI
  - Serif accents for branding

- **Spacing:** Generous, comfortable breathing room
- **Border Radius:** Medium (8px)
- **Components:** Cards, buttons, inputs, tabs, tooltips

### 6.3 Accessibility
- Proper heading hierarchy
- ARIA attributes where necessary
- Keyboard navigation support
- Color contrast compliance (WCAG AA minimum)

---

## 7. Technical Architecture

### 7.1 Tech Stack
| Layer              | Technology              |
| ------------------ | ----------------------- |
| Framework          | Next.js 16+             |
| Frontend Styling   | Tailwind CSS 4+         |
| Component Library  | Radix UI                |
| State Management   | React Context / Hooks   |
| LLM Integration    | OpenAI SDK              |
| Agents             | Markdown-based prompts  |
| Monospace Font     | JetBrains Mono          |

### 7.2 Project Structure
```
web-fletcher/
├── app/
│   ├── api/
│   │   └── generate-layout/
│   │       └── route.ts
│   ├── sessions/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── server/
│   └── agents/
│       ├── layout-fletcher.v1.md
│       ├── layout-fletcher.v2.md
│       └── component-fletcher.v1.md
├── components/
│   ├── design/
│   │   ├── style-inputs/
│   │   ├── DesignConfigForm.tsx
│   │   ├── DesignTabs.tsx
│   │   └── output/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainContent.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Tooltip.tsx
│       ├── NoticeBox.tsx
│       └── LoadingSpinner.tsx
├── lib/
│   ├── enums/
│   ├── models/
│   │   └── style-context.model.ts
│   └── utils/
├── public/
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

### 7.3 API Endpoints
**POST /api/generate-layout**
- Request: StyleContext object
- Response: Generated layout HTML/JSX
- Error Handling: Return 400 for invalid context, 500 for API failures

---

## 8. Agent Specifications

### 8.1 Layout Fletcher Agent
**Purpose:** Generate complete page layouts

**Input Format:**
```json
{
  "colorScheme": "Light",
  "primaryColor": "Blue",
  "tone": "Modern, Minimalist",
  "font": "Inter",
  "borderRadius": "Medium",
  "spacing": "Normal",
  "designBrief": "Landing page for a productivity app"
}
```

**Output Format:**
- Semantic HTML or React JSX
- Tailwind CSS classes (no hardcoded colors)
- CSS variables for theme values
- Mobile-first responsive design
- 2-3 bullet points explaining design rationale

**Constraints:**
- StyleContext is authoritative; designBrief is secondary
- Use only provided style properties
- Never override styleContext values with designBrief suggestions

### 8.2 Component Fletcher Agent
**Purpose:** Generate reusable UI components

**Input Format:**
```json
{
  "componentType": "button",
  "componentDescription": "Primary CTA button",
  "styleContext": { ...StyleContext }
}
```

**Output Format:**
- React component (JSX)
- Tailwind CSS classes
- Props interface
- Hover/focus state styles
- 1-2 line design explanation

**Constraints:**
- Always match styleContext colors, spacing, radius
- Ensure hover/focus states feel responsive
- Prioritize accessibility (semantic HTML, ARIA)

---

## 9. Data Models

### 9.1 StyleContext
```typescript
interface StyleContext {
  colorScheme: ColorScheme;
  primaryColor: PrimaryColor;
  borderRadius: BorderRadius;
  tone: Tone;
  font: Font;
  spacing: Spacing;
  designBrief?: string;
}
```

**Enums Defined In:**
- `lib/enums/color-scheme.enum.ts`
- `lib/enums/primary-color.enum.ts`
- `lib/enums/border-radius.enum.ts`
- `lib/enums/tone.enum.ts`
- `lib/enums/font.enum.ts`
- `lib/enums/spacing.enum.ts`

---

## 10. Future Features (Phase 2+)

### 10.1 Persistent Memory
- Store design sessions in SQLite/Prisma database
- Allow users to save, load, and manage design history
- Support session sharing and collaboration

### 10.2 Agent Collaboration
- Layout agent provides context to component agent
- Components automatically align with layout style
- Bidirectional feedback loop

### 10.3 Visual Style Editor
- Interactive color picker
- Live font/spacing preview
- Tailwind theme customization UI
- Real-time design preview

### 10.4 AI Refinement Loop
- "Improve this design" button
- User feedback influences next generation
- A/B comparison of design variants

### 10.5 Export Options
- Export as Next.js component files
- Export as plain HTML + CSS
- Tailwind CSS snippet export
- Integration with design tools (Figma, etc.)

### 10.6 Design Marketplace
- Save and publish designs
- Community-driven design templates
- Reusable design system presets

---

## 11. Success Criteria

### MVP Launch
- [ ] StyleContext form fully functional
- [ ] Layout generation working end-to-end
- [ ] Generated code is valid HTML/JSX
- [ ] Designs respect style context in 95%+ of cases
- [ ] Preview rendering without errors
- [ ] Mobile-first responsive designs
- [ ] User can copy code to clipboard

### Post-Launch (Phase 2)
- [ ] Session persistence in database
- [ ] Component generation agent live
- [ ] Design refinement workflow tested
- [ ] 500+ active users in beta
- [ ] NPS score >= 40

---

## 12. Design Principles

1. **Consistency First:** All outputs respect the active style context without exception
2. **Accessibility Default:** Every generated component meets WCAG AA standards
3. **Code Quality:** Generated code is clean, semantic, and production-ready
4. **Simplicity:** UI is intuitive; users understand what they're configuring
5. **Transparency:** Design explanations help users learn design concepts
6. **Performance:** Generation completes in < 30 seconds

---

## 13. Timeline Estimate

| Phase | Duration | Deliverables |
| ----- | -------- | ------------ |
| MVP   | 4-6 weeks | StyleContext form, layout agent, preview UI |
| Alpha | 2-3 weeks | Component agent, bug fixes, user testing |
| Beta  | 2-4 weeks | Session persistence, refinements, marketing |
| Launch | N/A | Public release, documentation |

---

## 14. Open Questions & Decisions

- Should component generation support all UI types (buttons, cards, forms, modals, etc.) or start narrow?
- Should we support both HTML/CSS and JSX/Tailwind, or standardize on one?
- How should users provide feedback to refine generated designs?
- Should sessions auto-save or require explicit save action?
- What's the free vs. paid tier boundary (if any)?

---

## 15. Glossary

| Term | Definition |
| ---- | ---------- |
| **Fletcher** | Craftsperson who makes arrows; metaphor for crafting precise, consistent UI |
| **Fletch** | Verb: to generate/craft a design using Web Fletcher |
| **StyleContext** | JSON-like object containing all design settings for a session |
| **Design Brief** | Optional free-form description of layout purpose/structure |
| **Agent** | AI-powered system (Claude-based) that generates code based on prompts |
| **OSRS** | Old School RuneScape; cultural reference for the fletcher theme |

---

**Document Version:** 1.0
**Last Updated:** 2025
**Maintained By:** Project Lead