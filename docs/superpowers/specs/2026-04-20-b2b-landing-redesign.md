# B2B Landing Page Redesign — Aora AI Agents

**Date:** 2026-04-20  
**Project:** launch-ui  
**Type:** Landing page optimization for B2B SaaS

---

## Context

Aora provides AI agents for sales automation targeting small and medium businesses in Kazakhstan. The service includes:
- AI agent implementation (60-80k KZT setup)
- Custom CRM (optional, 50-60k KZT)
- Monthly recurring costs (hosting ~1,050 KZT/month + ~0.4 KZT per conversation)

**Target industries:** Educational centers, clinics, flower shops, e-commerce (no primary focus — equal priority)

**Current challenge:** The landing page uses a generic template structure. We need to optimize it for B2B positioning with industry-specific messaging while maintaining a universal appeal.

---

## Design Decisions

### 1. Positioning Strategy: Hybrid Approach
**Decision:** Universal messaging in Hero + industry-specific cases in dedicated section

**Why:** With 4 equal-priority industries, we can't pick one primary audience. A hybrid approach lets each visitor see themselves in the product without fragmenting the site or complicating development.

**How it works:**
- Hero and Problem/Solution sections use universal B2B language
- New "Industry Cases" section shows concrete examples for each vertical
- Visitors self-select their relevant use case

### 2. Pricing Model: Package-Based
**Decision:** Two tiered packages with included conversation limits + CRM as optional addon

**Why:** Standard for B2B SaaS. Easier for customers to understand than usage-based pricing. Reduces friction in decision-making.

**Packages:**
- **Start:** 65,000 KZT setup + 5,000 KZT/month (up to 500 conversations)
- **Business:** 75,000 KZT setup + 12,000 KZT/month (up to 2,000 conversations)
- **CRM addon:** +55,000 KZT (one-time)

### 3. Landing Structure: Optimized (Option B)
**Decision:** Add critical B2B elements (social proof, industry cases), remove irrelevant content (template stats), keep proven structure

**Why:** Balances implementation speed with conversion optimization. Adds high-impact sections without requiring extensive content creation like testimonials or video demos.

---

## Landing Page Structure

### 1. Navbar
**Status:** No changes  
**Current implementation works well**

---

### 2. Hero
**Changes:**
- **Headline:** "AI-агенты для автоматизации продаж" (keep)
- **Subheadline:** Update to "Обрабатывайте заявки 24/7 и увеличивайте продажи без найма новых сотрудников"
- **Mockup:** Replace generic dashboard screenshot with real AI agent conversation interface
- **CTAs:** 
  - Primary: "Получить консультацию" → #pricing
  - Secondary: "Посмотреть кейсы" (variant: glow) → #industry-cases

**Why:** More specific value proposition. Real product screenshot builds credibility. Secondary CTA guides visitors to industry-specific content.

---

### 3. Social Proof (NEW)
**Position:** After Hero  
**Purpose:** Build trust immediately after value proposition

**Content:**
- **Headline:** "Нам доверяют"
- **Display:** 4-6 client logos OR industry icons if no clients yet
- **Fallback approach:** If no client logos available, show "Работаем с" + 4 industry icons (GraduationCap, Stethoscope, Flower, ShoppingCart)

**Component:** Use existing `Logos` component from template, update content

---

### 4. Problem
**Status:** No changes  
**Current content effectively describes pain points:**
- Lost leads due to slow response
- Overwhelmed staff
- Missed sales opportunities

---

### 5. Solution
**Status:** No changes  
**Current three-point solution is clear:**
- AI Sales Agent (24/7 qualification)
- Automatic booking
- Fast implementation

---

### 6. Industry Cases (NEW)
**Position:** After Solution  
**Purpose:** Show concrete value for each target vertical

**Headline:** "Как это работает в вашей нише"

**Structure:** 4 cards in 2x2 grid (mobile: 1 column)

**Content per card:**
1. **Educational Centers**
   - Icon: `<GraduationCap />`
   - Problem: "Родители звонят в нерабочее время, менеджеры не успевают обрабатывать заявки"
   - Solution: "AI-агент отвечает на вопросы о курсах, записывает на пробные занятия, отправляет расписание"
   - Result: "+40% записей на пробные уроки"

2. **Clinics & Medical Centers**
   - Icon: `<Stethoscope />` (from lucide-react)
   - Problem: "Пациенты не дозваниваются, теряются записи, администратор перегружен"
   - Solution: "AI-агент записывает на прием 24/7, напоминает о визитах, отвечает на частые вопросы"
   - Result: "+35% заполняемость расписания"

3. **Flower Shops**
   - Icon: `<Flower />` (from lucide-react)
   - Problem: "Пик заказов перед праздниками, не успеваете отвечать всем клиентам"
   - Solution: "AI-агент принимает заказы, уточняет детали доставки, предлагает букеты"
   - Result: "+50% обработанных заказов в пиковые дни"

4. **E-commerce**
   - Icon: `<ShoppingCart />`
   - Problem: "Клиенты бросают корзины, не получив ответ на вопрос о товаре"
   - Solution: "AI-агент консультирует по товарам, помогает с выбором, возвращает брошенные корзины"
   - Result: "+25% конверсия из корзины в заказ"

**Component:** Create new `components/sections/industry-cases/default.tsx` based on existing `Item` pattern

---

### 7. Items (Services)
**Changes:** Reduce from 8 to 6 cards

**Keep:**
1. Квалификация лидов (ScanFaceIcon)
2. Проактивные CTA (RocketIcon)
3. Booking Flow (MonitorSmartphoneIcon)
4. Re-engagement (FastForwardIcon)
5. WhatsApp / Telegram (LanguagesIcon)
6. 24/7 поддержка (EclipseIcon)

**Remove:**
- "Без CRM-кастомизации" — no longer a differentiator since CRM is now optional addon
- "Для малого бизнеса" — redundant, obvious from context

**Why:** Focus on core value props. 6 cards fit better in 2x3 or 3x2 grid.

---

### 8. Stats
**Decision:** Remove this section

**Why:** Current content shows template metrics (Figma downloads, GitHub stars) that are irrelevant to Aora's business.

**Future consideration:** Can be re-added later with real metrics:
- Total conversations processed
- Average conversion increase
- Average response time
- Number of active clients

---

### 9. Pricing
**Complete redesign to package model**

**Headline:** "Выберите подходящий тариф"  
**Subheadline:** "Все тарифы включают настройку, интеграцию с мессенджерами и техподдержку"

**Package 1: "Старт"**
- Icon: `<User />`
- Setup: 65,000 ₸
- Monthly: 5,000 ₸/мес
- Features:
  - До 500 диалогов/мес
  - Интеграция WhatsApp или Telegram (на выбор)
  - Базовая аналитика
  - Email поддержка
- CTA: "Начать" (variant: default)

**Package 2: "Бизнес"** (recommended)
- Icon: `<Users />`
- Setup: 75,000 ₸
- Monthly: 12,000 ₸/мес
- Features:
  - До 2000 диалогов/мес
  - Интеграция WhatsApp + Telegram (оба)
  - Расширенная аналитика
  - Приоритетная поддержка
  - Обучение команды
- CTA: "Выбрать" (variant: glow-brand)
- Badge: "Популярный" or "Рекомендуем"

**CRM Addon (below packages):**
- Display as separate card or note below packages
- Price: +55,000 ₸ (разовая настройка)
- Description: "Адаптируем CRM под ваши бизнес-процессы"

**Component:** Update existing `components/sections/pricing/default.tsx`

---

### 10. FAQ
**Update questions to match new pricing model**

**New questions:**
1. **Сколько времени занимает внедрение?**
   - Answer: "От 3 до 7 рабочих дней в зависимости от сложности интеграции"

2. **Можно ли интегрировать с нашей текущей CRM?**
   - Answer: "Да, мы интегрируемся с популярными CRM или предлагаем нашу кастомную систему"

3. **Что входит в ежемесячную плату?**
   - Answer: "Хостинг, обработка диалогов в рамках лимита тарифа, техподдержка и обновления"

4. **Что если превысим лимит диалогов?**
   - Answer: "Дополнительные диалоги тарифицируются по 0.4 ₸ за переписку или можно перейти на старший тариф"

5. **Можно ли переключиться между тарифами?**
   - Answer: "Да, вы можете изменить тариф в любой момент"

6. **Какие мессенджеры поддерживаются?**
   - Answer: "WhatsApp и Telegram. Интеграция с другими мессенджерами — по запросу"

**Component:** Update `components/sections/faq/default.tsx`

---

### 11. CTA
**Status:** No changes  
**Current "Готовы автоматизировать продажи?" works well**

---

### 12. Footer
**Status:** No changes  
**Standard footer structure is appropriate**

---

## Page Flow Summary

```
Navbar
  ↓
Hero (universal value prop + real product screenshot)
  ↓
Social Proof (build trust)
  ↓
Problem (pain points)
  ↓
Solution (how we solve it)
  ↓
Industry Cases (show yourself in the product) ← NEW
  ↓
Items/Services (6 key features)
  ↓
[Stats removed]
  ↓
Pricing (2 packages + CRM addon)
  ↓
FAQ (updated for new model)
  ↓
CTA (final conversion push)
  ↓
Footer
```

---

## Files to Create

1. `components/sections/industry-cases/default.tsx` — new section for vertical-specific examples
2. Update `components/sections/pricing/default.tsx` — package-based pricing
3. Update `components/sections/faq/default.tsx` — new questions
4. Update `components/sections/hero/default.tsx` — new subheadline, CTAs
5. Update `components/sections/items/default.tsx` — reduce to 6 items
6. Create `components/sections/social-proof/default.tsx` OR reuse existing Logos component
7. Update `app/page.tsx` — add industry-cases, social-proof, remove stats

---

## Files to Modify

- `app/page.tsx` — update section order, add new sections, remove Stats
- `components/sections/hero/default.tsx` — update copy and CTAs
- `components/sections/items/default.tsx` — reduce from 8 to 6 items
- `components/sections/pricing/default.tsx` — complete redesign for packages
- `components/sections/faq/default.tsx` — update questions

---

## Content Requirements

### Immediate needs:
- Real AI agent conversation screenshot for Hero mockup
- Client logos (4-6) OR use industry icons as fallback

### Nice to have (can add later):
- Real metrics for Stats section (if re-added)
- Customer testimonials
- Video demo

---

## Design Principles

1. **Clarity over cleverness** — B2B buyers want clear value, not creative copy
2. **Show, don't tell** — Industry cases demonstrate value better than feature lists
3. **Reduce friction** — Package pricing is easier to understand than usage-based
4. **Build trust early** — Social proof right after Hero
5. **Guide the journey** — Secondary CTA in Hero points to industry cases for self-selection

---

## Success Metrics (Post-Launch)

Track these to validate design decisions:
- Conversion rate to consultation booking
- Time on page / scroll depth
- Click-through rate on "Посмотреть кейсы" CTA
- Package selection distribution (Start vs Business)
- FAQ section engagement

---

## Implementation Notes

- All new components should follow existing Launch UI patterns (Section, Item, etc.)
- Maintain responsive design (mobile-first)
- Keep existing animations and transitions
- Use existing color system and typography
- Ensure accessibility (WCAG compliance)

---

## Future Enhancements (Out of Scope)

These can be added in future iterations:
- Testimonials section with customer quotes
- Video demo of AI agent in action
- Interactive pricing calculator
- Live chat widget
- A/B testing different Hero headlines
- Separate landing pages per industry (if one vertical dominates)
