# RK High School - Modern Education Platform

A premium, interactive, and fully responsive school website built with **React, Vite, and Tailwind CSS**.
Designed with a "Physics Wallah (PW) Style" aesthetic, focusing on trust, clarity, and a modern digital experience.

---

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 🎨 Master UI Design System

This project strictly adheres to the following **Master Design Rules**. Any contributions must follow these guidelines to maintain brand consistency.

### 1. Global Typography & Headings
*   **Primary Font**: Sans-serif (Inter / Poppins).
*   **Heading Color**: **Indigo** (`text-indigo-600` / `#6366F1`) is the strict standard for main headings.
*   **Style**: Bold, clean, and professional. No random colors.

### 2. The "PW-Style" Card System
All cards verify to the `PWCard` or `PWStyleCard` standard:
*   **Shape**: `rounded-3xl` (Large rounded corners).
*   **Background**: White with a subtle **jalidar (dotted)** pattern.
*   **Overlay**: Soft gradient (Indigo/Purple/Green).
*   **Interaction**:
    *   Hover: Slight lift (`-translate-y-1`).
    *   Shadow: `shadow-xl` on hover.
    *   Arrow: Icons animate on hover.
*   **Function**: Every card must be clickable and link to a valid route.

### 3. Navigation & Routing
*   **Scroll Behavior**: Pages **MUST** open from the top (`ScrollToTop.jsx` active).
*   **Smooth Scroll**: Internal section links use smooth scrolling (`SlideSection.jsx`).
*   **Structure**:
    *   **Academics**: Pre-Primary to Sr. Secondary.
    *   **Departments**: Science, Commerce, Arts.
    *   **Facilities**: Labs, Library, Sports.
    *   **Student Life**: Activities, Clubs, Events.
    *   **Gallery**: Photos, Videos.
    *   **Notices**: Board, Circulars.
    *   **Contact**: Map, Forms.

### 4. Color Palette
*   **Primary**: Indigo (`#6366F1`) - *Trust, Brand, Headings*.
*   **Secondary/Accent**: Green (`#22C55E`) - *Success, CTAs*.
*   **Background**: Slate (`#F1F5F9`) - *Clean, Modern*.
*   **Text**: Slate Dark (`#020617` / `#334155`) - *Readability*.
*   **Footer**: Deep Dark (`#020617`).

---

## 📂 Project Structure

```
src/
├── components/          # Reusable UI Components
│   ├── home/            # Home page specific segments (Hero, Stats, etc.)
│   ├── layout/          # Navbar, Footer
│   ├── shared/          # Buttons, Cards, Inputs
│   └── [sections]/      # Segmented components for specific pages
├── pages/               # Main Page Views (Assembled from components)
├── router/              # AppRouter.jsx (Central Route Management)
└── assets/              # Images, Icons
```

---

## 🛠 Tech Stack

*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM (v6)
*   **Animations**: Framer Motion
*   **Icons**: Lucide React

---

## 📢 Development Philosophy
> "A website should feel like a premium digital campus—reachable, professional, and inspiring."

*   **Responsive**: Mobile-first approach.
*   **Performance**: Optimized assets and code splitting.
*   **Maintainability**: Clean JSX, segmented components, no inline CSS.

---

© 2025 RK High School. All Rights Reserved.
