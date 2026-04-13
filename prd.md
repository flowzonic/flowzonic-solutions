This is the finalized **Product Requirements Document (PRD)** for **Flowzonic Solution**. It incorporates the glossy white-and-purple aesthetic, the expanded home page content, individual service pages, and the Google Apps Script technical integration.

---

# 📄 Updated PRD: Flowzonic Solution Website

## 1. Project Overview
*   **Project Name:** Flowzonic Solution
*   **Mission:** A high-end agency website providing Web Development, Google Apps Script Automation, and Graphic Design.
*   **Visual Style:** "Glossy Modern" – White background base, soft purple mesh gradients, glassmorphic UI elements, and vibrant purple buttons.

---

## 2. Visual & Aesthetic Standards
*   **Primary Palette:** Pure White (#FFFFFF) & Soft Lavender (#F8F4FF).
*   **Accent Palette:** Electric Purple (#9D4EDD) & Deep Royal Purple (#240046).
*   **Design Language:** 
    *   **Glassmorphism:** All containers/cards use 40% opacity white with `backdrop-filter: blur(12px)`.
    *   **Corners:** Large border-radii (24px to 32px) for a "friendly tech" feel.
    *   **Shadows:** Soft, colored shadows (e.g., `rgba(157, 78, 221, 0.15)`).
    *   **Buttons:** "Pill-shaped" with a slight outer glow and hover-scaling effect.

---

## 3. Site Architecture (Sitemap)
1.  **Home Page:** High-content landing page (Expanded).
2.  **About Page:** Brand story and "The Flow" philosophy.
3.  **Services Page (Hub):** Overview of all offerings.
    *   *Web Development (Sub-page)*
    *   *Automation & Apps Script (Sub-page)*
    *   *Graphic Design (Sub-page)*
4.  **Blog Page:** Knowledge hub and expert articles.
5.  **Contact Page:** Lead capture and booking.

---

## 4. Detailed Page Requirements

### 4.1 Expanded Home Page
*   **Section 1: Hero Area**
    *   *Content:* Bold Headline ("Streamline Your Digital Flow"), Sub-headline, and Dual CTA buttons.
    *   *Visual:* 3D glossy floating purple ribbon or abstract "F" logo on the right.
*   **Section 2: The "Automation Engine" (Apps Script Highlight)**
    *   *Content:* Explain the transition from manual work to Google Workspace automation.
    *   *Visual:* A before/after split mockup showing a boring spreadsheet vs. a glossy purple automated dashboard.
*   **Section 3: Triple-Threat Service Grid**
    *   *Content:* Large glassmorphic cards for Web, Automation, and Design.
    *   *Visual:* Custom 3D icons for each (e.g., a purple code bracket, a glossy gear, a purple pen tool).
*   **Section 4: The Flow Process**
    *   *Content:* 3-step timeline (Discovery -> Scripting/Design -> Launch).
    *   *Visual:* A glowing purple gradient line connecting the stages.
*   **Section 5: Live Stats Section**
    *   *Content:* Data points (Hours saved, scripts written, sites launched).
    *   *Visual:* Large, bold numbers that count up when scrolled into view.
*   **Section 6: Portfolio Sneak-Peek**
    *   *Content:* Horizontal carousel of top 3 projects.
    *   *Visual:* High-quality mockups in white glossy laptop/phone frames.

### 4.2 Individual Service Pages
*   **Automation Page:** Must feature a list of Google Workspace tools you integrate (Sheets, Docs, Gmail, Drive) with glossy logo icons.
*   **Web Dev Page:** Showcase the tech stack icons (Next.js, React, etc.) in a "floating bubble" layout.
*   **Graphic Design Page:** A clean masonry grid gallery for portfolio images.

### 4.3 Blog Page
*   *Layout:* Minimalist cards with large feature images.
*   *Feature:* A "Search" bar with a purple glassmorphism effect.

---

## 5. Global Navigation & Footer

### 5.1 The Modern Header
*   **Design:** Floating Pill-shape, 10% from the top of the screen.
*   **Style:** `bg-white/70`, `backdrop-blur-md`, subtle purple bottom border.
*   **Feature:** Logo on the left, navigation center, "Book a Call" pill-button on the right.

### 5.2 The Modern Footer
*   **Design:** 4-column layout on a very light lavender background (#F8F4FF).
*   **Content:** 
    *   Col 1: Logo + "Made with Flow" tagline.
    *   Col 2: Services (Links to sub-pages).
    *   Col 3: Company (About, Blog, Contact).
    *   Col 4: Newsletter signup with a glossy white input field.
*   **Socials:** Rounded glossy purple icons (LinkedIn, X, Instagram).

---

## 6. Technical Requirements
*   **Frontend Stack:** React (Next.js).
*   **Animations:** Framer Motion for smooth "flowing" transitions.
*   **Automation Integration (The "Expert" Touch):**
    *   The Contact Form must be connected to a **Google Apps Script Web App**.
    *   **Logic:** Form Submit -> Save to Google Sheet -> Send Auto-Reply Email -> Trigger Slack Notification.
*   **Hosting:** Vercel (recommended) for fast global delivery.

---

## 7. Imagery & Asset Guidelines
*   **3D Assets:** Use high-gloss, soft-edge 3D renders (Purple/Lavender/White).
*   **Mockups:** Use "Clay" style mockups for devices to keep the look modern and minimalist.
*   **Gradients:** Use Mesh Gradients as background layers to ensure the site doesn't look like a "flat" white page.

---

## 8. Performance & SEO
*   **SEO:** Every service sub-page must have H1 tags containing keywords like "Google Apps Script Automation" and "Custom Web Development."
*   **Performance:** Image optimization (WebP format) to ensure the glossy images don't slow down the site.
*   **Responsiveness:** Header must collapse into a glossy mobile menu; all grids must stack vertically on mobile.

---
