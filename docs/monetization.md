# Web Fletcher – Summary & MVP Approach

## Table of Contents

1. [Open source / repository](#1-open-source--repository)
2. [Product & target audience](#2-product--target-audience)
3. [Business model](#3-business-model)
4. [Credits & models](#4-credits--models)
5. [Costs & abuse prevention](#5-costs--abuse-prevention)
6. [MVP scope](#6-mvp-scope)
7. [Legal / OpenAI](#7-legal--openai)
8. [Terms of Service – structure](#8-terms-of-service--structure)
9. [Privacy Policy – structure](#9-privacy-policy--structure)
10. [Individual vs company](#10-individual-vs-company)
11. [Core decision](#core-decision)
12. [Pricing strategy (beginner-friendly)](#11-pricing-strategy-beginner-friendly)
13. [Refund & support policy](#12-refund--support-policy)
14. [Launch & validation strategy](#13-launch--validation-strategy)
15. [Financial tracking (bare minimum)](#14-financial-tracking-bare-minimum)
16. [Common beginner mistakes to avoid](#15-common-beginner-mistakes-to-avoid)
17. [Growth indicators (when to scale)](#16-growth-indicators-when-to-scale)
18. [Payment & payout logistics](#17-payment--payout-logistics)
19. [Emergency procedures](#18-emergency-procedures)

---

## 1. Open source / repository

- Current public repo can be deleted
- No forks = practically no risk
- Create new **private repo**
- No LICENSE needed as long as repo is private
- Add LICENSE only when (re)open-sourcing

---

## 2. Product & target audience

- AI tool for generating web designs
- Output: vanilla HTML/CSS (later JSX / Tailwind)
- Target audience: developers who struggle with design
- Output doesn't need to be perfect
- Developer fine-tunes themselves (colors, spacing, radius, etc.)
- Value: quickly create designs for multiple ideas

---

## 3. Business model

- **Pay-as-you-go via wallet/credits** (no subscriptions)
- User tops up wallet with euros
- Credits are consumed per AI response
- Only costs for successful responses
- No risk during downtime → user doesn't lose money

---

## 4. Credits & models

- Own internal credits (not 1:1 OpenAI tokens)
- Different models = different credit costs
- Free users:
  - small starting credit
  - 1–2 times access to best model

- Paid users:
  - wallet-based
  - access to multiple/better models

---

## 5. Costs & abuse prevention

- All OpenAI calls through backend
- Per request:
  - check balance
  - check model access
  - log tokens & credits

- Hard stop when balance = 0
- Max loss per user = wallet balance

---

## 6. MVP scope

- Authentication (email / magic link)
- Database:
  - users
  - wallet / credits
  - usage / token logs

- Basic analytics:
  - tokens per user
  - costs per user
  - model usage

- No SLA, no enterprise features

---

## 7. Legal / OpenAI

- Commercial use of OpenAI API is permitted
- Output is owned by the user
- You're selling a service, not OpenAI itself
- GDPR applies even as an individual

---

## 8. Terms of Service – structure

- Service is provided as-is
- No guarantee on quality of AI output
- User remains responsible for generated code
- Usage limits and fair use
- Payments via Stripe
- Service may change or stop
- Limitation of liability

---

## 9. Privacy Policy – structure

- Data collected:
  - account information
  - usage data
  - payments (via Stripe)

- AI prompts are forwarded to OpenAI
- No sale of data
- Only sharing with necessary third parties
- GDPR rights: access, correction, deletion

---

## 10. Individual vs company

- MVP + early users: individual is fine
- Personal liability
- When growing / structural revenue: start company
- Keep cash flows separated

---

## 11. Core decision

> First a controlled MVP with credits, limits and measurements. Learn from user data before scaling up, adjusting prices or formalizing.

---

## 12. Pricing strategy (beginner-friendly)

- **Start conservative**: Better to price too low and increase later
- Initial credit pricing example:
  - €5 = 500 credits (entry point)
  - €10 = 1,100 credits (10% bonus)
  - €25 = 3,000 credits (20% bonus)
- Model costs example:
  - Basic model: 10 credits per generation
  - Advanced model: 50 credits per generation
- Track your actual OpenAI costs + desired margin (e.g., 3x markup)
- **Never go below cost** – track per-user profitability
- Adjust prices every 1-2 months based on data

---

## 13. Refund & support policy

- **No refunds on used credits** (digital goods consumed immediately)
- Refunds allowed for:
  - Unused wallet balance (within 14 days)
  - Technical errors that consumed credits unfairly
- Keep refund window short (7-14 days)
- Log all credit transactions for dispute resolution
- Simple email support initially (no live chat)

---

## 14. Launch & validation strategy

**Phase 1: Friends & Family (Week 1-2)**
- 5-10 people test for free
- Focus on bugs and UX, not monetization
- Get feedback on credit pricing perception

**Phase 2: Soft Launch (Week 3-4)**
- 25-50 early adopters
- Generous free credits (let them fully test)
- Survey: "Would you pay for this? How much?"
- Validate if people actually use it repeatedly

**Phase 3: Public MVP (Month 2)**
- Open to anyone
- Real pricing active
- Monitor: conversion rate, churn, avg. spend
- Goal: 10 paying users to validate model

---

## 15. Financial tracking (bare minimum)

**Track weekly:**
- Total revenue (€)
- Total OpenAI costs (€)
- Number of paying users
- Average revenue per user (ARPU)
- Credits sold vs. credits used

**Simple spreadsheet columns:**
- Date | User ID | Credits purchased (€) | Credits used | OpenAI cost | Profit/Loss

**Red flags to watch:**
- Users buying but not using (product problem)
- Credits used > credits purchased (pricing problem)
- One user consuming 50%+ of costs (abuse risk)

---

## 16. Common beginner mistakes to avoid

- ❌ Offering unlimited plans (unpredictable costs)
- ❌ Complex pricing tiers (confusing for users)
- ❌ Free tier too generous (no conversion to paid)
- ❌ No monitoring of per-user costs (profit blindness)
- ❌ Auto-refills without user consent (chargebacks)
- ❌ Forgetting VAT/taxes in pricing calculations
- ✅ Keep it simple: credits in, credits out, monitor everything

---

## 17. Growth indicators (when to scale)

**Stay in MVP phase until:**
- 50+ paying users
- Positive unit economics (revenue > costs per user)
- <5% support requests due to billing issues
- Consistent week-over-week growth (10%+)

**Then consider:**
- Adding subscription option (predictable revenue)
- Team/enterprise features
- Formalizing as company
- Raising prices for new users (grandfather existing)

---

## 18. Payment & payout logistics

**Stripe setup:**
- Use Stripe test mode during development
- Minimum payout: €10 (reduces transaction fees)
- Set up automatic payouts (weekly/monthly)
- Enable webhooks for payment confirmation
- Save payment receipts for users (legal requirement)

**Tax considerations:**
- Track all revenue (even €1)
- EU users: VAT reverse-charge if B2B
- Non-EU users: usually no VAT
- Keep invoices/receipts for 7+ years
- Consider accounting software when revenue > €1000/month

---

## 19. Emergency procedures

**If costs spike unexpectedly:**
1. Pause new credit purchases immediately
2. Investigate: bot attack? Bug? Abuse?
3. Notify affected users
4. Issue credits back if it was your error

**If OpenAI API goes down:**
- User credits are safe (not consumed)
- Show clear error message
- No refunds needed (pay-per-success model)

**If you need to shut down:**
- 30-day notice to users
- Refund all unused wallet balances
- Provide export of user's generated designs
- Archive database securely

## 20. Pay-as-you-go flow
# Minimal Architecture / Flow for Pay-As-You-Go AI Web App

### 20.1 User Authentication (NextAuth + Magic Link)

```
User submits email
       ↓
NextAuth creates VerificationToken
       ↓
Email magic link sent → User clicks
       ↓
User row created (if new) + Session row created
       ↓
Client stores session in secure cookie
```

### 20.2 Frontend Session Management

```
Client-side React
  ├─ useSession() hook → knows if logged in
  └─ Conditional rendering: LoggedIn / NotLoggedIn
```

### 20.3 Design Session Creation

```
User creates new design session (UI form)
       ↓
Frontend sends POST to /api/design-sessions
       ↓
Server-side API
  ├─ getServerSession() → verify logged-in user
  └─ prisma.designSession.create({ userId: session.user.id, content })
       ↓
Design session stored in DB linked to user
```

### 20.4 OpenAI API Usage & Pay-As-You-Go

```
Frontend requests AI action
       ↓
Server-side API endpoint
  ├─ getServerSession() → verify logged-in user
  ├─ Check user balance / credits
  │     └─ If insufficient → return error / redirect to payment
  ├─ Deduct credits from user balance
  ├─ Call OpenAI API with secure server-side key
  └─ Store result in DB (optional) → return to frontend
```

### 20.5 Payments (Stripe example)

```
User wants more credits → clicks Buy Credits
       ↓
Frontend redirects to Stripe Checkout
       ↓
Stripe returns success / webhook to backend
       ↓
Server updates user balance in DB
```

### 20.6 Optional Enhancements

* Rate limiting per user to avoid abuse
* Optional OAuth login providers
* Admin dashboard for usage / payments
* Logging / error tracking

### Notes

* All sensitive operations happen server-side
* Session management uses secure cookies, not localStorage
* LocalStorage can be used temporarily for unsaved design sessions, then synced to DB once logged in
* Magic links are sufficient for low-risk MVP; MFA can be added later
