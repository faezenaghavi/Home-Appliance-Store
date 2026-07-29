# Novira Store — Premium Home Appliances E-Commerce

A premium Next.js e-commerce website for electronic home appliances, inspired by the WEAVE air purifier brand design.

## Design System

### Color Palette
- **Dark**: `#1a1a1a` — Primary dark backgrounds (hero, footer, specs section)
- **Light/Cream**: `#f5f0eb` — Light section backgrounds
- **Accent (Gray)**: `#808080` — Primary accent for CTAs, highlights, badges
- **Muted**: `#8a8a8a` — Secondary text
- **Border**: `#e5e0db` — Subtle borders

### Typography
- **Display**: Playfair Display — Headings, brand name, section titles
- **Body**: Inter — Body text, navigation, buttons

### Key Design Elements
- Rounded corners (2xl-3xl) on all cards and buttons
- Soft shadows for depth
- Glassmorphism effects on hero overlays
- Smooth scroll-triggered animations
- Parallax mouse-tracking on hero
- Premium product photography aesthetic

## Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure
```
app/
  components/       # Reusable components (Navbar, Footer, ProductCard, etc.)
  sections/         # Page sections (Hero, About, Features, Products, etc.)
  hooks/            # Custom React hooks (scroll animations, counters)
  types/            # TypeScript type definitions
  data/             # Static data (products, FAQs, testimonials)
  globals.css       # Global styles and Tailwind directives
  layout.tsx        # Root layout
  page.tsx          # Home page
public/
  images/           # Product and lifestyle images
```

## Features
- Responsive design (mobile, tablet, desktop)
- Scroll-triggered animations with Intersection Observer
- Animated counters
- Interactive FAQ accordion
- Product cards with color selection
- Parallax mouse-tracking hero
- Newsletter subscription form
- Premium glassmorphism UI elements
