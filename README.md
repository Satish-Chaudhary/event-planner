# Ethereal Gatherings | Bespoke Event Management Ecosystem

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Where Vision Meets Precision."**  
> A dual-ecosystem platform designed for the ultra-luxury event planning industry. Ethereal Gatherings combines a cinematic, high-conversion landing page with a robust, data-driven management portal for event orchestrators.

---

## 🏛️ Project Architecture

The system is split into two distinct environments to serve different user needs:

### 1. The Brand Experience (Landing Page)
A high-end, immersive web experience built to "wow" potential clients through motion and micro-typography.
- **Cinematic Hero**: 4K video background with advanced CSS mask-spotlight effects.
- **Fluid Motion**: Powered by **GSAP** and **ScrollTrigger** for horizontal scrolling galleries and magnetic interactions.
- **Smooth Navigation**: Custom **Lenis** smooth-scrolling integration for a buttery software feel.
- **Service Marquees**: Dynamic hover-reveals showing the aesthetic soul of each offering.

### 2. The Management Portal (`/portal`)
A professional-grade backend module for orchestrating complex events in real-time.
- **Executive Dashboard**: Real-time budget utilization charts and guest RSVP summaries.
- **Planning Module**: 
  - **Budget Tracker**: Fine-grained financial management with status-aware categorization.
  - **Mood Board**: Cinematic inspiration grid with high-definition visual elements.
- **Organizing Module**: Comprehensive Guest List Manager with real-time search and filter capabilities.
- **Management Module**:
  - **Visual Itinerary**: A vertical timeline with "Live Now" status indicators for day-of coordination.
  - **Master Checklist**: Phase-based orchestration (Morning, Mid-day, Pre-ceremony).

---

## � Tech Stack

- **Frontend Core**: React 18 + Vite (HMR enabled)
- **State Management**: React Context API (EventDataContext)
- **Routing**: React Router 6 (Declarative Sub-routing)
- **Animations**: GSAP (GreenSock), Framer Motion
- **Styling**: Vanilla CSS (Modular Architecture)
- **Icons**: Lucide React
- **Performance**: Native Lazy Loading + Lenis Smooth Scroll

---

## 🛠️ Modular Style System

We utilize a hybrid styling approach to maintain speed and scalability:
- `App.css` / `index.css`: Global typography and landing page specifics.
- `portal.css`: Shared core for the management app (Design tokens & layout).
- **Module-Specific CSS**: Each portal page (`Dashboard.css`, `Planning.css`, etc.) is fully isolated to prevent style leakage and ensure maintainable code.

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Satish-Chaudhary/event-planner.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy: "Quiet Luxury"
The design language is informed by architectural minimalism:
- **Palette**: Deep Charcoal (`#0F0F0F`), Champagne Gold (`#C9A66B`), and Ethereal Ink (`#EAEAEA`).
- **Typography**: A dialogue between **Playfair Display** (Heritage/Luxury) and **Manrope** (Modern Precision).
- **Interactions**: Soft easing, magnetic buttons, and glassmorphism.

---

## � License
Published under the MIT License. Developed with precision by **Julian Thorne & The Ethereal Team**.