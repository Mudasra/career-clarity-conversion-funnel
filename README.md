# CareerClarity, Lead Generation Funnel

A conversion-focused, multi-page lead generation funnel built for career coaches. Designed to capture high-quality leads, build trust, and convert visitors into booked strategy calls — not just a nice-looking website, but a revenue-driven system.

---

## What This Is

This is a complete frontend funnel system built with React 18. It takes a visitor from first impression to booked call across three pages, with persistent state, simulated CRM integration, form validation, and smooth animations throughout.

**Live funnel flow:**

```
Landing Page  →  Email Capture  →  Thank You Page  →  Book a Call
(Attention)       (Commitment)       (Momentum)         (Conversion)
```

---

## Pages

### `/` — Landing Page
The entry point. Built to convert cold traffic into leads.

- Pain-driven hero headline targeting mid-career professionals who feel stuck or underpaid
- Floating value card showing exactly what's inside the free plan
- Social proof stats (2,400+ professionals, 94% clarity rate, 3.2× salary increase)
- 6 benefit cards breaking down the 7-day plan day by day
- 4 objection-handling cards addressing the most common hesitations
- Email sequence preview so leads know what they're signing up for
- 4 testimonial cards with real-outcome data (not vague praise)
- Email capture form with name (optional) + email (required), react-hook-form validation, and a simulated CRM call on submit

### `/thank-you` — Thank You Page
Confirms submission and pushes toward the next step.

- Personalized confirmation using the submitted name from Redux state
- Email sequence preview (3 emails, Day 0 / Day 2 / Day 7)
- Strong CTA to book a free 30-minute strategy call
- Urgency indicator (limited spots per week, randomly generated 3–5)
- Protected route — redirects to `/` if visited without submitting

### `/book-call` — Call Booking Page
The final conversion step. Filters serious leads and books calls.

- 3-question qualification form (current job, biggest challenge, 90-day goal, timeline)
- Mock time slot picker grouped by day with visual selection state
- Booking confirmation modal with generated booking ID
- Sidebar with trust signals: what happens on the call, a mini-testimonial, and 4 metric cards
- All answers stored in Redux and persisted to localStorage

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| State | Redux Toolkit |
| Forms | react-hook-form |
| Styling | Tailwind CSS v3 |
| Fonts | Playfair Display + DM Sans (Google Fonts) |
| Build | Vite |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash

# 1. Clone the Repo
git clone https://github.com/Mudasra/career-clarity-conversion-funnel
cd career-clarity-conversion-funnel

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Then open http://localhost:5173.

---

## License

Built as a client deliverable. All rights reserved.