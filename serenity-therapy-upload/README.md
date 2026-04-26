# Serenity Mind Wellness

Professional website for a mental health therapy practice, built with Next.js and Tailwind CSS.

## Features

- **7 pages**: Home, About, Services, Testimonials, FAQ, Contact, Book Appointment
- **Mock booking system**: 3-step appointment flow with custom calendar picker
- **Contact form**: Client-side validation with success confirmation
- **FAQ accordion**: Expandable Q&A section
- **Responsive**: Mobile-first design with hamburger navigation
- **SEO**: Sitemap, robots.txt, structured metadata per page
- **Accessible**: Skip-to-content link, ARIA labels, semantic HTML, focus states

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Zero additional runtime dependencies

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/            # Pages and layouts (App Router)
├── components/     # Reusable UI components
│   ├── layout/     # Header, Footer
│   ├── ui/         # Button, Card, SectionHeading
│   ├── home/       # Hero, Features, ServicesPreview, CTABanner
│   ├── book/       # CalendarPicker, TimeSlots, BookingConfirmation
│   ├── contact/    # ContactForm
│   └── faq/        # FAQList (accordion)
└── data/           # Static content (services, team, testimonials, FAQ)
```

## Deployment

Deploy to [Vercel](https://vercel.com) for the best Next.js experience:

```bash
npx vercel
```

Or connect this repo to Vercel via the dashboard for automatic deployments on push.