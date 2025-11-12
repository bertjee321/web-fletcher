# 🎨 AI Design Generator App (Concept Doc)

## 1. 💡 Concept & Ideas

### 🎯 **Goal**

Let users quickly generate full UI layouts and matching components in a consistent style using AI agents that:

* understand modern design systems (Tailwind, CSS, React)
* remember the chosen style and tone across sessions
* collaborate (e.g., layout agent + component agent)

### 🔮 **Core Ideas**

| Concept                       | Description                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 🎨 **Design Memory Sessions** | Each user starts a “design session” that stores color palette, tone, typography, etc., so all generated components share a style. |
| 🧩 **Specialized Agents**     | One agent handles layouts (macro), another handles components (micro). Both use the same style context.                           |
| 🗂️ **Visual + Code Output**  | Output includes live rendered previews *and* code snippets (HTML/JSX + Tailwind).                                                 |
| 🧠 **Shared Style Context**   | All agents access a shared JSON-like style context that describes the active design language.                                     |
| 🔄 **Iterative Improvement**  | Users can give feedback to refine results while maintaining the same design context.                                              |

---

## 2. 🚀 MVP (Minimum Viable Product)

> 🎯 Goal: “Generate a consistent UI layout + matching components with a single click.”

### **MVP Features**

1. **Agent Setup**

   * Two agents: `layout-creator.md` and `component-creator.md`
   * Both receive a shared `styleContext` object
   * Layout agent: generates page structure
   * Component agent: generates small UI parts (buttons, cards, forms)

2. **Session Memory**

   * Stored client-side (React state or localStorage)
   * Contains: styleSettings, componentHistory, layoutContext
   * Passed to every agent prompt as system context

3. **Style Selector UI**

   * Simple form where users can set:

     * Color palette (light, dark, brand color)
     * Style theme (modern, minimal, brutalist, etc.)
     * Tone (fun, professional, luxury)
     * Optional free text: “Describe your desired style”

4. **Result Output**

   * Live preview of layout or component
   * Copyable code block
   * “Generate matching component” button

---

### **User Stories (MVP)**

| Role       | Task                                          | Benefit                |
| ---------- | --------------------------------------------- | ---------------------- |
| 👩‍🎨 User | Set my design style so AI keeps consistency.  | Consistent look & feel |
| 👩‍🎨 User | Generate a layout based on my style.          | Fast prototyping       |
| 👩‍🎨 User | Generate additional components in same style. | Consistent design      |
| 👩‍🎨 User | See previous results during the session.      | Iterative workflow     |

---

## 3. 🌱 “More & Better” (Next Phases)

### **Future Features**

| Category                   | Feature                                               | Description                             |
| -------------------------- | ----------------------------------------------------- | --------------------------------------- |
| 🧠 **Persistent Memory**   | Store sessions in a DB (SQLite/Prisma)                | Keep style context between visits       |
| 🤝 **Agent Collaboration** | Layout ↔ Component context exchange                   | Components align perfectly with layouts |
| 🎨 **Visual Style Editor** | Live color/font/spacing editor                        | Adjust Tailwind theme visually          |
| 🔄 **AI Refinement Loop**  | “Improve this design” button                          | AI enhances previous outputs            |
| ❤️ **Feedback System**     | Like/dislike feedback affects next prompt             | Adaptive design generation              |
| 💾 **Export Options**      | Export as Next.js component / HTML / Tailwind snippet | Ready-to-use code                       |
| 🧩 **Design Marketplace**  | Save and share generated designs                      | Community-driven extension              |

---

### **User Stories (Future Phases)**

| Role       | Task                                         | Benefit               |
| ---------- | -------------------------------------------- | --------------------- |
| 👩‍🎨 User | Save my design style for later sessions.     | Persistent creativity |
| 👩‍🎨 User | Fine-tune outputs based on my preferences.   | Personalization       |
| 👩‍🎨 User | Export my components into my project.        | Efficiency            |
| 👩‍🎨 User | Compare different styles on the same layout. | Experimentation       |

---

## ⚙️ Tech Stack Suggestion (Solo Dev)

| Layer                    | Tool                        |
| ------------------------ | --------------------------- |
| Framework                | **Next.js**                 |
| Styling                  | **Tailwind CSS**            |
| State / Memory           | `zustand` or React Context  |
| LLM                      | **OpenAI SDK (GPT-5)**      |
| File-based agents        | Markdown files in `/agents` |
| Data persistence (later) | SQLite / Prisma / Supabase  |

---

you’re “fletching” (crafting) precise, consistent web components, just like in OSRS when you craft the perfect bow.
It has that **OSRS nostalgia** *and* modern dev-tool energy.

---

## 🏹 Brand Identity Ideas

| Element                 | Idea                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Tagline**             | “Craft your web like a fletcher crafts his arrows.”                                                               |
| **Alt tagline (short)** | “Hand-crafted web design by AI.”                                                                                  |
| **Emoji / Icon**        | 🏹 or 🪶 — the fletching feather                                                                                  |
| **Theme colors**        | Warm browns & golds (like OSRS logs + bowstring) or forest green & parchment beige                                |
| **Typography vibe**     | Slightly serif (RuneScape-esque), but modern UI-friendly — e.g., *Playfair Display* for titles + *Inter* for body |
| **Logo idea**           | A stylized feather or arrowhead with subtle “{ }” brackets worked in                                              |

---

### 🧩 **Repo setup**

| File / Folder                   | Purpose                                     |
| ------------------------------- | ------------------------------------------- |
| `/agents/layout-fletcher.md`    | Generates layout structure                  |
| `/agents/component-fletcher.md` | Crafts consistent components                |
| `/app/`                         | Next.js frontend (your Tailwind playground) |
| `/api/`                         | OpenAI agent logic                          |

---

## 💬 Fun “Lore” (to play with the theme)

You could even make the UI slightly gamified —
e.g.:

* “Fletch your first layout 🏹”
* “You’ve gained +10 UI Consistency XP”
* “Your design reached level 2 in Modern Minimalism”

Makes it stand out and feel fun, especially for devs who get the reference.

---

Would you like me to help you **draft a short README.md** for your new repo (like an open-source landing page for *Web-Fletcher*)?
I can make it in a RuneScape-flavored but still professional tone.
