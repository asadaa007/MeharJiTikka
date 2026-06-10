# Mehar Ji Tikka Shop — Website (مہر جی تکہ شاپ)

A premium, modern, responsive single-page website for **Mehar Ji Tikka Shop**, Faisalabad's evening BBQ destination. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Cinematic parallax hero with animated smoke & charcoal sparks
- Signature specialties showcase with hover animations & quick order
- Immersive Live BBQ + Open-Air Dining parallax sections
- "Why People Love Us" feature grid
- Dynamic auto-playing reviews carousel
- Filterable masonry food gallery with lightbox & zoom
- Interactive menu modal (categories + items, no prices)
- Google Maps embed with directions / call / pickup actions
- WhatsApp floating button + sticky mobile call bar
- Scroll-reveal animations, glassmorphism, dark luxury theme
- SEO meta tags + LocalBusiness structured data

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **lucide-react** (icons)
- **yet-another-react-lightbox** (gallery lightbox)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Customization

Almost everything lives in `src/data/`:

| File | What to edit |
| --- | --- |
| `site.js` | Business name, phone, address, hours, social links, map query |
| `specialties.js` | Featured dishes (name, description, image, "popular" tag) |
| `menu.js` | Full menu categories & items |
| `reviews.js` | Customer reviews + review highlight tags |
| `gallery.js` | Gallery photos & categories |

### Swapping images / hero video

- Images use Unsplash placeholders — replace the `image` / `src` URLs in the data files (or drop local files into `src/assets/` and import them).
- For a **hero video**, open `src/components/Hero.jsx` and replace the `<img>` in the background layer with the commented `<video>` snippet, pointing to your `.mp4`.

### Colors

Brand colors are defined in `tailwind.config.js`:
`charcoal #1A1A1A`, `maroon #7A1F1F`, `fire #FF6B00`, `gold #D4AF37`, `night #0F0F0F`.

## Contact

Mehar Ji Tikka Shop · Abbas Chowk, Satayana Road, People's Colony No.1, Faisalabad · +92 321 7623880
