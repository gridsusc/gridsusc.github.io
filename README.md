# GRIDS USC Official Website

This repository contains the source code for the official website of **Graduates Rising in Data Science (GRIDS)** at the University of Southern California (USC).

## Tech Stack
To keep maintenance as simple as possible, this website avoids complex build steps, JS frameworks, or Node dependencies. It is built entirely using:
- **Vanilla HTML5**
- **Vanilla CSS3** (utilizing CSS Grid, Flexbox, CSS Variables, and Glassmorphism effects)
- **Vanilla JavaScript** (for lightweight interactions like scrolling and tabs)

There is **no build process**. To preview your changes, simply open `index.html` in your web browser.

## Repository Structure
```
/
├── index.html          # The main single-page application structure
├── README.md           # Documentation for future maintainers
└── assets/
    ├── css/
    │   └── styles.css  # All global styles, utility classes, and component styling
    ├── js/
    │   └── script.js   # Interactivity (e.g., sticky nav, active tabs, modal behaviors)
    └── images/         # All static images, logos, and event graphics
```

## How to Make Updates

### 1. The Styles (CSS)
All styling logic is contained within `assets/css/styles.css`.
- **Global Variables:** Top of the CSS file contains `:root` color variables (e.g., `--bg-dark`, `--accent-violet`). Changing these will change the theme across the site.
- **Glassmorphism:** You'll see classes like `.glass-nav`, `.glass-footer`, and `.glass-sponsors-container`. These rely on `backdrop-filter: blur()`. If you need to adjust transparency or blur amounts, modify these specific classes.

### 2. Updating Sections (HTML)
- **Projects (Tabs):** The projects are handled by simple HTML tabs `#project-1`, `#project-2`, etc. To add a new project, add a new `<button data-target="project-N">` in the `.tabs-header` and a corresponding `<div class="tab-pane" id="project-N">` in the `.tabs-content`.
- **Partners / Sponsors Grid:** The sponsor section (`#collaborations`) uses a CSS Grid layout. To change the logos, simply replace the image `src` inside the `.sponsor-cell` divs.
- **Events Grid:** The `#events` section utilizes CSS Grid classes like `.card-span-2` and `.card-span-1` to dynamically size the bento-box styling.

### 3. Production Hardening
- SEO and Open Graph meta tags are included in the `<head>` of `index.html`. 
- Always ensure any new images added to `assets/images/` are compressed/optimized for the web to maintain fast load times, as we are not using an automated asset bundler.

## Deployment
This repository is deployed directly using **GitHub Pages**. 
Any changes merged or pushed to the main (or active Github Pages) branch will automatically be built and deployed by Github. 