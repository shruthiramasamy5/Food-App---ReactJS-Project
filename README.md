# OrderUK — Food Delivery App (React + React Router)

A multi-page food delivery web application built with React and React Router, featuring a restaurant landing page with menu browsing, offers, reviews, and client-side routing between Home, Offers, Restaurants, and Track Order pages.

## Features
- Restaurant hero banner with delivery info and opening hours
- Category tabs (Burgers, Fries, Cold Drinks)
- Special offers carousel
- Menu sections with reusable food cards (image, title, price)
- Restaurant info section (delivery, restaurant details, opening hours)
- Location/map section
- Customer reviews section
- Similar restaurants brand grid
- Client-side routing via React Router (`/`, `/offers`, `/restaurants`, `/track-order`)
- Responsive footer with quick links and contact info

## Project Structure
src/
├── main.jsx                → App entry point, wraps App in BrowserRouter
├── App.jsx                 → Root component, renders AppRoutes
├── App.css                 → Global styles (grid layouts, cards, navbar, hero, footer)
├── router/
│   └── AppRoutes.jsx       → Route definitions (Home, Offers, Restaurants, TrackOrder)
├── pages/
│   ├── Home.jsx             → Main landing page composing all sections
│   ├── Offers.jsx           → Offers page (placeholder)
│   ├── Restaurants.jsx      → Restaurants page (placeholder)
│   └── TrackOrder.jsx       → Track order page (placeholder)
├── components/
│   ├── Navbar.jsx           → Navigation bar with React Router links
│   ├── Hero.jsx              → Restaurant banner with delivery details
│   ├── CategoryTabs.jsx      → Burgers / Fries / Cold Drinks tab buttons
│   ├── OfferSection.jsx      → Special offers grid
│   ├── FoodSection.jsx       → Wrapper rendering a grid of FoodCards
│   ├── FoodCard.jsx          → Individual food item card
│   ├── InfoSection.jsx       → Delivery/restaurant/hours info cards
│   ├── MapSection.jsx        → Location map image
│   ├── ReviewSection.jsx     → Customer review cards
│   ├── BrandSection.jsx      → Similar restaurant logos grid
│   └── Footer.jsx            → Footer with quick links & contact
└── data/
└── foodData.js           → Static burgers, fries, and drinks menu data

## Tech Stack
- React (functional components, props)
- React Router DOM (`BrowserRouter`, `Routes`, `Route`, `Link`)
- Plain CSS (CSS Grid/Flexbox layouts)

## How to Run
1. Clone the repository
git clone <repo-url>
2. Install dependencies
npm install
3. Start the development server
npm run dev
4. Open in browser
http://localhost:5173

## Routes
| Path | Page |
|------|------|
| `/` | Home — full restaurant landing page |
| `/offers` | Offers page |
| `/restaurants` | Restaurants page |
| `/track-order` | Track Order page |

## Author
Shruthika R — 717824Y150
