# BizConnect | Discover Local Businesses 🌐

BizConnect is a responsive, modern web platform designed to showcase verified local small and medium enterprises (SMEs) across **Port Harcourt** and **Bonny Island**. The application features an interactive layout that includes dynamic business directory grids, custom filters, and seamless map integrations to connect users with trusted local services.

---

## ✨ Features

* **Dynamic Directory Grid:** Features customized business cards built dynamically from database arrays with hover effects and clean typography.
* **Custom Filtering System:** Users can fluidly filter businesses instantly by specific category types and geographic locations.
* **Interactive Leaflet Map Node:** Automatically traces and visualizes business coordinates on an interactive local map layout.
* **Theme Toggling UI:** Includes a minimal, one-click dark/light mode vector icon switcher seamlessly anchored into the global sticky navigation header.
* **Premium Interactive Modals:** Detailed views pull comprehensive asset data fields (category, full address, phone metrics, and status badges) without layout distortion.
* **Fully Responsive Mobile Design:** Auto-fits perfectly across ultra-compact viewport boundaries (like mobile screens) using advanced fluid box models.

---

## 🛠️ Tech Stack & Architecture

* **HTML5:** Semantic architecture layout structures.
* **CSS3 (Custom Properties):** Custom variables for smooth light/dark mode transitions, fluid flex/grid utilities, and custom media query breakpoints.
* **Vanilla JavaScript (ES6+):** Dynamic innerHTML element injectors, custom modular click listeners, state tracking, and array tracing handlers (`.find()`, `.filter()`).
* **Leaflet.js API:** Geographic layout map mapping node.
* **FontAwesome Icons:** Scalable vector graphics for the theme engine UI indicators and detail panel components.
* **Google Fonts:** Styled with the premium 'Poppins' sans-serif family weight sets.

---

## 📂 Project Directory Structure

```text
├── index.html        # Main landing viewport panel, header navigation, and modal layers
├── css/
│   └── style.css     # Global theme systems, responsive media breakpoints, and layouts
└── js/
    ├── apps.js       # Search logic filters, theme engines, and modal click tracer controls
    └── businesses.js # Central local database containing the target business profile arrays