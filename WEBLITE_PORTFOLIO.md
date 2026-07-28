# WebLite Portfolio Dossier

**Repository analysed:** `crizma`
**Branch:** `claude/weblite-portfolio-extraction-3iixu9`
**Date of analysis:** 2026-07-28
**Purpose:** Source-of-truth reference for designing and building this project's entry on WebLite's public portfolio site, without needing access to this repository.

> **Accuracy note.** Every claim below is tagged **[Verified]**, **[Inferred]**, or **[Needs Owner Confirmation]**. No business results, traffic figures, conversion metrics, testimonials, or client requirements have been invented. Where the repository contains marketing copy that *states* a business fact (e.g. "30+ Projects Delivered"), it is recorded as *site copy*, not as a verified outcome.

---

## 0. Critical Orientation: This Repository Contains Two Sites

Before anything else, a reader must understand the repository's structure, because a naive scan will badly mis-describe this project. **[Verified]**

| Layer | Files | What it is |
|---|---|---|
| **A. The delivered site** (the portfolio subject) | `index.html`, `portfolio.html`, `get-hired.html`, `css/style.css`, `js/main.js`, `components/DotField/*`, `images/*.png`, `images/Project/*` | A hand-coded, framework-free static website. This is the work to showcase. |
| **B. Archived legacy site** (reference only) | `index_1.html` (379 KB), `css/style_1.css`, `css/style.min.css`, `css/style.min_1.css`, `css/content_elements.crush.css`, `css/styles.css`, `css/slick.css`, `css/print.css`, `css/classic-themes.min.css`, `css/bt_bb_masonry_portfolio_tiles.css`, every file in `js/` **except** `main.js`, every file in `fonts/` | A saved page-capture of the client's **previous WordPress site**. Not linked from the new site, not part of the deliverable. |

**Evidence for Layer B being the old site** **[Verified]**:
- `index_1.html` declares `data-bt-theme="Avantage 2.2.2"` and `<meta name="generator" content="WordPress 6.1.3">`.
- It contains 56 absolute links to the live production domain and RSS/comment feed URLs.
- It carries the commercial theme's unedited demo residue: a placeholder testimonial attributed to a fictional person at a fictional startup, newsletter copy still reading "KEEP UP TO DATE WITH AVANTAGE", a slogan "Think Avantage", and the theme vendor's own support email address.
- Git history confirms it: the first commit imported the entire WordPress capture (49 legacy images, 23 jQuery-era scripts, 60+ icon-font files); every subsequent commit builds the new hand-written site and a later commit deletes the legacy WordPress images.

**Conclusion:** This engagement was a **full rebuild replacing a WordPress/Avantage-theme site with a hand-coded static site**. **[Inferred — strongly supported by repo evidence; confirm with owner that WebLite performed the rebuild rather than inheriting it.]**

**Important caveat for any future work:** `index_1.html` loads `css/style.css`, but that filename in this repository now holds the *new* site's design system rather than the theme's original stylesheet. The archived page therefore will not render faithfully if opened. **[Verified]**

---

## 1. Project Identification

| Field | Value | Confidence |
|---|---|---|
| **Project type** | Corporate marketing / brochure website with a project gallery and a recruitment form | **[Verified]** |
| **Industry** | Medical & dental equipment distribution and supply (B2B healthcare) | **[Verified]** — site copy, brand assets, and gallery photography all confirm |
| **Sub-vertical** | Dental clinic & dental simulation-lab fit-out; medical consumables distribution; educational/simulation lab equipment | **[Verified]** — installation photography shows phantom-head dental simulation labs and multi-bay clinical training floors |
| **Market** | Egypt (Cairo and Mansoura offices referenced; universities named as customers) | **[Verified]** |
| **Pages / routes** | 3 static pages: home (`index.html`), portfolio gallery (`portfolio.html`), careers form (`get-hired.html`) | **[Verified]** |
| **Site model** | Fully static — no backend, no database, no CMS, no authentication | **[Verified]** |

### Primary Purpose

The site is built to do four things, in descending order of prominence in the markup: **[Inferred from structure, CTA placement, and copy]**

1. **Build institutional credibility.** Two logo marquees dominate the page — one of internationally recognised dental-equipment manufacturers the company distributes, one of eleven university customers. The section is literally titled "Our Historical Records".
2. **Generate leads.** The primary CTA "Get a Quote Now" appears in the hero; "Hire Us" is pinned in the navbar on every page; a third CTA repeats mid-page.
3. **Prove delivery capability.** A dedicated portfolio page presents 31 real installation photographs of completed dental labs and clinics in a lightbox gallery.
4. **Recruit.** A dedicated "Get Hired" page with a five-field application form, promoted by a persistent secondary navbar button.

Note that the site is *not* transactional — there is no cart, no pricing, no product catalogue. A `#catalogue` section exists in the markup but contains only a heading with no content beneath it. **[Verified]**

---

## 2. Portfolio Summary

### Short Description (34 words)

A hand-built, framework-free corporate site for a medical and dental equipment distributor, pairing a canvas-driven interactive cursor field and scroll-choreographed hero with a lightbox gallery of real clinical installations and a careers application flow.

### Full Case-Study Description (224 words)

This project replaced a template-driven WordPress site with a hand-written static build — no framework, no build step, no dependencies beyond two Google Fonts.

The home page opens on a scroll-choreographed hero: a sticky viewport holds position across roughly two-and-a-half screens of scroll while the headline, supporting copy, call-to-action pair and a manufacturer logo marquee reveal in sequence, each phase eased on a shared custom curve. Behind everything, a full-viewport HTML5 canvas renders a grid of brand-coloured dots that spring away from the cursor and are revealed only inside a soft radial halo travelling with it — the rest of the field stays invisible. The effect is masked out of the navbar, cards and map so it never interferes with reading, and it is switched off entirely on touch devices.

Below the fold, the company's story unfolds through animated accordions, dual infinite logo marquees, a team grid of glass-morphic cards, and an embedded map. A second page presents thirty-one real installation photographs in a CSS multi-column masonry grid feeding a custom lightbox with keyboard navigation and an image counter. A third page carries a recruitment application form.

What makes the project interesting is that all of this motion — the particle field, the scroll sequencing, the accordion easing, the lightbox — is written from scratch in vanilla JavaScript with no animation library at all.

---

## 3. Feature Extraction

Ordered by how much each would impress a prospective WebLite client.

### 3.1 Interactive cursor dot field (canvas) **[Verified]**
A full-viewport `<canvas>` overlay renders a grid of brand-red dots at roughly 17 px spacing. Dots are pushed outward from the cursor by an inverse-square falloff, eased toward their target each frame, and clamped to a hard circular boundary so a clean void always surrounds the pointer. A radial gradient composited with `destination-in` reveals dots only within ~190 px of the cursor; a second `destination-out` pass punches the field out of the navbar, every glass card and the map iframe.
**Why it matters:** it is the single most memorable interaction on the site, and it signals craft immediately — visitors notice it within a second of arriving. It also demonstrates that WebLite can write original real-time graphics rather than dropping in a library.

### 3.2 Scroll-choreographed sticky hero **[Verified]**
The hero occupies a 250 vh scroll container with a 100 vh sticky stage inside it. Scroll progress is measured against the container's bounding box and drives three reveal phases; the phases also reverse when the visitor scrolls back up.
**Why it matters:** turns the opening statement into a paced narrative rather than a static banner, and holds attention through the most important copy.

### 3.3 Installation gallery with custom lightbox **[Verified]**
Thirty-one real photographs of completed dental simulation labs and clinics, laid out in a CSS multi-column masonry grid (4 → 3 → 2 → 1 columns) with lazy loading. Clicking any image opens a full-screen lightbox with previous/next controls, an image counter, backdrop-click dismissal, `Escape` to close and arrow-key navigation.
**Why it matters:** this is the client's proof of delivery. For a B2B equipment supplier, photographs of finished institutional installations are the strongest possible trust signal.

### 3.4 Dual infinite brand marquees **[Verified]**
Two seamless CSS marquees — eight manufacturer logos in the hero, eleven university customer logos in the credibility section — each duplicated in the DOM and translated by exactly half their width, with a gradient mask fading both edges and a hover scale on individual logos.
**Why it matters:** borrowed credibility, presented continuously without consuming vertical space.

### 3.5 Animated accordion disclosure **[Verified]**
Two `<details>` accordions ("Our Core Services", "Why Choose Crizma") animate height, opacity and vertical offset together, then hand off to `height: auto` so content can reflow freely afterwards. The arrow indicator rotates on open.
**Why it matters:** keeps a long services narrative scannable without a wall of text.

### 3.6 Full-screen mobile navigation **[Verified]**
Below 768 px the inline nav and CTAs are replaced by a hamburger that morphs into an X and slides a blurred full-screen overlay panel in from the right, with body scroll locked, an explicit "Back" control, and auto-close on any link tap.

### 3.7 Careers application flow **[Verified]**
A dedicated page with a five-field form (name, email, phone, position, cover letter), properly labelled and using correct HTML5 input types with native `required` validation.
**Note:** the form does not submit anywhere — see §7.4.

### 3.8 Newsletter capture **[Verified]** — present in the footer of all three pages. Also non-submitting.

### 3.9 Embedded location map **[Verified]** — a lazy-loaded Google Maps iframe in a rounded, shadowed frame, with `referrerpolicy` set.

### 3.10 Click-spark micro-interaction **[Verified]** — every button spawns a radial-gradient spark at the exact click coordinate, scaling and fading over 500 ms via injected keyframes.

### 3.11 Scroll-reveal system **[Verified]** — an `IntersectionObserver` at a 12–15% threshold adds a `visible` class to elements, with four directional variants (`fade-up`, `fade-left`, `fade-right`, `scale-up`) and six stagger delays from 80 ms to 480 ms.

---

## 4. Technical Analysis

### Frontend **[Verified]**
| Aspect | Finding |
|---|---|
| Framework | **None.** Plain HTML5, hand-authored. |
| Language | Vanilla ES6+ JavaScript (arrow functions, `const`/`let`, template literals, IIFE module pattern). Zero transpilation. |
| Styling | Hand-written CSS3. Custom properties for the full design token set, CSS Grid, Flexbox, CSS multi-column, `backdrop-filter`, mask-image gradients, keyframe animations, `position: sticky`. |
| UI / component libraries | **None** in the delivered site. |
| Fonts | Google Fonts via CSS `@import` — Outfit (300/400/600/800) for headings, Inter (400/500/600) for body. |
| Build tooling | **None.** No `package.json`, no bundler, no lockfile, no transpiler, no CSS preprocessor. Files are served exactly as authored. |

### Backend **[Verified]**
**None.** No server framework, no runtime, no API routes, no serverless functions, no form handler. All three forms intercept submission client-side and display a browser `alert()`.

### Database / Storage **[Verified]**
**None.** No database, no ORM, no `localStorage`, no `sessionStorage`, no cookies set by site code. All content is hard-coded in HTML.

### Authentication **[Verified]**
**None.** No login, no session handling, no admin area, no protected routes.

### CMS **[Verified]**
**None in the delivered site.** Content is edited by hand in the HTML. (The *archived legacy* site was WordPress 6.1.3 — see §0.)

### 3D / Graphics **[Verified]**
| Technology | Present? | Detail |
|---|---|---|
| Three.js / React Three Fiber / WebGL | **No** | No 3D anywhere in the repository. |
| **HTML5 Canvas 2D** | **Yes** | The cursor dot field. Uses `createLinearGradient`, `createRadialGradient`, `globalCompositeOperation` (`destination-in`, `destination-out`), batched single-path arc rendering, `requestAnimationFrame`, and device-pixel-ratio scaling capped at 2. |
| SVG | Partial | A radial-gradient glow layer in the React component; an inline chevron icon in the mobile nav. |
| GSAP / Framer Motion / anime.js | **No** | All motion is CSS transitions/keyframes plus hand-written rAF loops. |

### The React artifact **[Verified]**
`components/DotField/DotField.jsx` is a 286-line React component (hooks: `useEffect`, `useRef`, `memo`) implementing a more configurable version of the dot field — 13 tuning props, an optional sparkle mode, sine-wave displacement, velocity-based physics as an alternative to bulge-only mode, and an SVG glow that tracks the cursor. **It is not imported anywhere and cannot run**: the repository has no React dependency, no bundler and no `package.json`. The shipped site instead contains a hand-ported vanilla-JS version inlined in `index.html`, which adds the exclusion-rect masking the React version lacks.
**[Inferred]** The component was almost certainly prototyped in a React environment and then ported down to vanilla to keep the site dependency-free. **[Needs Owner Confirmation]** whether the React version is intended for reuse in future projects.

### Legacy stack, for context **[Verified]**
WordPress 6.1.3 · Avantage commercial theme 2.2.2 (BoldThemes) · jQuery + jQuery Migrate · Slick carousel · Magnific Popup · Masonry + imagesLoaded · fancySelect / jquery.dd · Contact Form 7 · Google Maps JavaScript API · 60+ icon webfonts (FontAwesome 4 & 5, Pe-icon-7-stroke, and ~30 themed icon sets).

### Hosting / deployment **[Verified: absent]**
No deployment configuration of any kind — no `netlify.toml`, `vercel.json`, `CNAME`, GitHub Actions workflow, Dockerfile, `.nojekyll`, `robots.txt` or `sitemap.xml`. The site is pure static files and could be hosted anywhere, but the repository records no chosen target. **[Needs Owner Confirmation]**

### Third-party services **[Verified]**
Google Fonts (stylesheet) and Google Maps (iframe embed) only. No analytics, no tag manager, no pixels, no chat widget, no error tracking, no CDN.

---

## 5. Design & UX Analysis

### Overall visual direction
Restrained corporate-clinical modernism with a single high-saturation accent. The palette is deliberately near-monochrome — white and off-white surfaces, near-black type — so that the brand crimson carries every point of emphasis: section eyebrows, headings, the accent bar that wipes across card tops on hover, button fills, focus borders, and the cursor particle field itself. The result reads as clean and medical without feeling sterile. **[Verified]**

### Colour system **[Verified]**
Fully tokenised via CSS custom properties:

| Token | Value | Role |
|---|---|---|
| `--brand-red` | `#b73235` | Primary accent |
| `--brand-red-hover` | `#d13a3e` | Hover / gradient terminus |
| `--text-primary` | `#191919` | Headings, body |
| `--text-secondary` | `#555555` | Supporting copy |
| `--bg-primary` | `#ffffff` | Page |
| `--bg-secondary` | `#f8f9fa` | Alternating bands, footer |
| `--nav-bg` | `rgba(255,255,255,0.85)` | Translucent navbar |
| `--glass-border` | `rgba(0,0,0,0.1)` | Hairline dividers |

A complete **dark theme token set exists** under `[data-theme="dark"]`, and a `.theme-toggle` component is fully styled — but **no toggle control exists in any page's markup and no script ever sets the attribute**, so dark mode is unreachable. **[Verified]** This is either scope that was cut or work left unfinished. **[Needs Owner Confirmation]**

### Typography **[Verified]**
Two-family system. **Outfit** at weight 800 for all headings, plus 600 for buttons and eyebrow labels — a geometric sans with tight 1.2 line-height that gives headlines a confident, compact mass. **Inter** at 400–600 for body copy at 1.6–1.9 line-height for comfortable reading. Eyebrow labels are uppercase at 2 px letter-spacing in brand red — a consistent motif opening nearly every section. Hero H1 runs 4.5 rem desktop, stepping to 2.4 rem then 1.9 rem on smaller screens.

### Layout style **[Verified]**
Full-width alternating bands at 8 rem vertical rhythm (4 rem mobile), each with a centred header block. Content sits in auto-fitting grids with a 280 px minimum track. The "Why Choose Crizma" block switches to centred flex-wrap so five cards resolve as 3 + 2 centred rather than an awkward 3 + 2 left-aligned grid — a small but deliberate compositional fix. Section boundaries are marked with 1 px hairlines and a barely-there 2% white wash rather than hard colour blocks.

### Navigation **[Verified]**
Fixed glass navbar — 12 px backdrop blur, 85% white, hairline bottom border — that compresses its padding and gains a soft shadow past 50 px of scroll. Links are absolutely centred independent of the logo and CTA cluster, each with a brand-red underline that wipes in from the left on hover. Two persistent CTAs sit at the right: outline "Get Hired", filled "Hire Us". Below 768 px both nav and CTAs are hidden and replaced by the morphing hamburger and full-screen overlay panel.

### Animation & motion **[Verified]**
A single easing curve — `cubic-bezier(0.16, 1, 0.3, 1)`, a strong ease-out — governs nearly all motion, which is what makes the site feel coherent rather than busy. Durations sit in a tight 0.3–0.8 s band. The motion inventory: canvas particle field, three-phase hero sequencing, staggered scroll reveals, two infinite marquees, accordion height/opacity/offset, card lift with accent-bar wipe, nav underline wipe, click spark, hamburger morph, mobile panel slide, lightbox fade, gallery image zoom, and an 8-second pulsing radial gradient behind the hero.

### Interaction patterns **[Verified]**
- Cards lift 10 px, brighten, gain a shadow and a red bar wipes across their top edge.
- Gallery tiles scale 1.04 and dim slightly, with an expand glyph fading in at the corner.
- Buttons lift 2 px with an intensifying red glow.
- Every button emits a spark at the click point.
- The site forces `cursor: default` globally with explicit overrides for links, buttons, text inputs and the zoom-in gallery — an unusual, deliberate choice to suppress I-beam cursors and keep the pointer visually clean under the particle field.

### Mobile / responsive design **[Verified]**
Three breakpoints — 1200 px (gallery 4→3 columns), 768 px (the main transformation), 480 px (final type and column compression). At 768 px: nav collapses to the overlay, hero scroll container shortens from 250 vh to 200 vh, hero buttons stack full-width in a 300 px column, all card grids drop to a single column, card hover-lift is disabled (correct — it is meaningless on touch), the footer stacks, and marquee logos shrink from 80 px to 74 px then 59 px. The canvas particle field is disabled twice over: once by a `(hover: none), (pointer: coarse)` media query, and again by a JS capability check that prevents the canvas from ever being created. That belt-and-braces approach is good practice — it saves the animation frame budget on mobile entirely rather than merely hiding the result. Hero reveal phases are also force-shown on mobile so short-scroll devices never strand content invisible.

### Brand integration **[Verified]**
The client's crimson is extracted into the token system and applied consistently across accents, the particle gradient, and hover states. The logo is scaled up 1.8× from a fixed 45 px height slot at desktop (1.3× on mobile) with a left transform origin. Manufacturer and university logos are presented at uniform 80 px height with a subtle opacity treatment so they read as a set rather than a collage.

### Content hierarchy **[Verified]**
Consistently three-tiered: uppercase red eyebrow → large heading → supporting paragraph, then content. Applied to nearly every section, giving the page a predictable scanning rhythm.

### The distinctive part
Two things separate this from a competent template build. First, the **cursor field's compositing**: rather than simply drawing dots, it draws the whole grid, masks it to a travelling halo with `destination-in`, then subtracts the navbar, cards and map with `destination-out` and cached bounding rectangles refreshed on scroll. The dots visibly flow *around* interface elements. Second, the **hero's scroll choreography**, which converts the opening statement from a static banner into a three-beat paced reveal that also plays in reverse.

---

## 6. Complexity & Standout Engineering

### 6.1 Real-time canvas particle field with compositing-based masking
**Challenge:** render several thousand animated dots at 60 fps while (a) revealing only a soft halo around the cursor, (b) keeping them off UI elements, (c) never blocking clicks, and (d) not draining mobile batteries.

**Implementation** **[Verified]**:
- Dot grid rebuilt on resize with symmetric edge padding from the modulo remainder.
- Motion uses an inverse-square falloff (`t²` where `t = 1 - distance/radius`) scaled by an *engagement* value that itself lags cursor speed through a low-pass filter (`speed += (delta - speed) * 0.5` sampled every 20 ms, then `engagement += (target - engagement) * 0.06`). Cursor speed therefore modulates displacement smoothly instead of snapping.
- A baseline engagement floor of 0.35 keeps a visible void around a stationary cursor, so the effect never looks dead.
- A hard radial clamp normalises any dot inside the inner radius back onto the circle, guaranteeing a perfect circular void regardless of grid alignment.
- **All dots are batched into a single `Path2D` sequence and filled once per frame** with one shared linear gradient — one fill call per frame instead of thousands.
- `destination-in` with a three-stop radial gradient produces the halo reveal; `destination-out` with cached rects subtracts UI regions.
- Exclusion rectangles are cached and only recomputed on scroll and resize, never per frame — avoiding thousands of layout-thrashing `getBoundingClientRect()` calls per second.
- DPR is capped at 2, bounding the pixel budget on high-density displays.
- The entire IIFE returns early on non-fine-pointer devices, so the canvas is never even inserted into the DOM on touch.

### 6.2 Scroll-driven sticky hero sequencing
**Challenge:** sequence three content phases against scroll position, reversibly, without a scroll library, without layout thrash, and degrading sensibly on short screens.

**Implementation** **[Verified]**: a 250 vh container with a 100 vh sticky child; progress derived from the container's `getBoundingClientRect().top` negated; thresholds at 25% and 70% of viewport height to show, 10% and 55% to hide — **deliberately asymmetric thresholds creating hysteresis**, so a visitor hovering near a boundary does not see the content flicker on and off. `js/main.js` guards the handler with a `requestAnimationFrame` tick-lock and registers it `{ passive: true }`. On mobile the sequencing is bypassed entirely and all phases are force-shown.

### 6.3 Accordion height animation with reflow handoff
**Challenge:** CSS cannot transition to or from `height: auto`, yet the content must reflow freely once open.

**Implementation** **[Verified]**: on open, height is pinned to `0`, a forced reflow is triggered by reading `offsetHeight`, height is set to the measured `scrollHeight` alongside opacity and transform, and after the 480 ms transition a timeout swaps height to `auto`. On close the sequence runs in reverse — pin the current `scrollHeight`, force reflow, animate to zero — with the `open` attribute removed only after the animation completes so `<details>` does not snap shut mid-transition. This is the correct, well-known solution to a problem many implementations get visibly wrong.

### 6.4 Lightbox with progressive-enhancement fallback for HEIC
**Challenge:** six gallery photographs are Apple HEIC files, which most browsers cannot decode.

**Implementation** **[Verified]**: HEIC items ship hidden with an `onerror` handler, and a `load` listener reveals them *and rebuilds the lightbox source array* if the browser turns out to support the format. The lightbox itself indexes sources by resolved `src` rather than DOM position, so the navigation sequence and counter stay correct when the set changes size at runtime. Modulo arithmetic gives wrap-around navigation, and keyboard handling covers `Escape`, `ArrowLeft` and `ArrowRight` with body scroll locked while open.

### 6.5 CSS multi-column masonry
**Challenge:** masonry layout for 31 photographs of wildly varying aspect ratios (portrait 738×1600 through panoramic 1600×738) without JavaScript.

**Implementation** **[Verified]**: native CSS `columns` with `break-inside: avoid`, stepping 4 → 3 → 2 → 1 across breakpoints. Zero layout JavaScript, which is a meaningful contrast with the legacy site — that one shipped both jQuery Masonry *and* standalone Masonry *and* imagesLoaded to achieve the same result.

### What this project does **not** demonstrate
For honest positioning: there is **no** backend, database, authentication, admin dashboard, e-commerce, search or filtering, multilingual architecture, 3D/WebGL, or API integration beyond an embedded map. This project's engineering story is *front-end craft and original interaction code*, not full-stack systems work.

---

## 7. Implementation Notes, Gaps and Defects

Recorded so the portfolio build does not showcase something broken, and so WebLite can fix these before publishing. All **[Verified]**.

### 7.1 Two manufacturer logos have swapped alt text
`images/5.png` is the **Amann Girrbach** logo but is labelled `alt="Dürr Dental"`; `images/6.png` is the **Dürr Dental** logo but is labelled `alt="Amann Girrbach"`. Confirmed by opening both files. A screen-reader user and every search engine receive the wrong brand names. One-line fix.

### 7.2 Navigation labels do not match their targets
In the navbar and mobile menu, **"About" links to `#services`** and **"Portfolio" links to `#about`**. Clicking "Portfolio" lands on the historical-records band, not the portfolio page — which lives at `portfolio.html` and is only reachable from a mid-page button. On `get-hired.html` the "Portfolio" link points at `index.html#portfolio`, an anchor that does not exist anywhere.

### 7.3 Empty catalogue section
`#catalogue` renders a heading ("Our Catalogue") with 5 rem of padding and no content. It will read as a broken or unfinished section to any visitor.

### 7.4 No form submits anywhere
All three forms (`newsletter` ×3 pages, careers application) call `preventDefault()` and show an `alert()`. There is no endpoint, no mail service, no form-backend integration. Additionally, the click-spark handler in `js/main.js` intercepts any `type="submit"` button, calls `preventDefault()`, and fires its own generic *"Action Triggered … (In a real app, this would process your request!)"* alert — so on the careers page the developer-placeholder message is what an applicant actually sees, not the page's intended confirmation. **Any lead or application submitted today is silently lost.** This is the single most commercially significant gap.

### 7.5 Image payload is very large
Loading the home page pulls roughly **11.4 MB of imagery**. The main culprits are four logo files at **6250×4419 px** (1.8–2.9 MB each) rendered at 80 px tall — roughly 78× more pixels per axis than needed. The gallery page adds a further 3.2 MB across 31 JPEGs. Lazy loading is applied (23 images on the home page, 37 on the gallery) but the hero marquee logos load eagerly. No `width`/`height` attributes anywhere, so layout shift is unmitigated. No responsive `srcset`, no modern formats (WebP/AVIF).

### 7.6 Six gallery images are undeliverable
The `.HEIC` files total 12.4 MB and will fail to render in most browsers, so ~28% of the gallery's storage serves images almost nobody sees.

### 7.7 Team headshots are JPEGs with `.png` extensions
`yousief.png`, `mahrous.png`, `salah.png`, `lotfi.png` all carry JFIF/JPEG magic bytes. Harmless in practice but indicates the assets were renamed rather than converted.

### 7.8 SEO is minimal
Each page has a `<title>` and `<meta name="description">` — and nothing else. No Open Graph tags, no Twitter cards, no canonical URLs, no favicon, no `robots.txt`, no `sitemap.xml`, no JSON-LD structured data (a `LocalBusiness` / `MedicalBusiness` schema would be a natural fit for a company with two physical offices). Shared links will render with no preview image or card.

### 7.9 Accessibility gaps
- Only one ARIA attribute exists across the entire site (`aria-label="Open menu"` on the hamburger). No `aria-expanded` state, no `aria-controls`.
- The mobile overlay does not trap focus; the lightbox neither traps focus nor returns focus to the trigger on close, and its `role`/`aria-modal` semantics are absent.
- Gallery items are `<div>`s with click handlers — not keyboard-focusable and not reachable by tab. Arrow-key navigation only works once the lightbox is already open, which a keyboard user cannot achieve.
- All 31 gallery images share the identical alt text `"Project"`; all 11 university logos share `"University"`.
- **No `prefers-reduced-motion` handling anywhere**, despite this being one of the most motion-dense sites imaginable — the particle field, marquees, pulsing gradient and hero sequencing all run regardless of the user's stated preference. This is the most significant accessibility gap.
- Buttons rely on a 3 px vertical translate for hover feedback with no visible focus ring defined.

### 7.10 Duplicated scroll logic
`js/main.js` and the inline script in `index.html` both implement the hero sequencing and both instantiate an `IntersectionObserver` over `.fade-up`. Two independent scroll listeners and two observers run simultaneously on the home page. Functionally harmless — the second `visible` class-add is a no-op — but it doubles the scroll-handler work and means a future edit to one copy silently diverges from the other.

### 7.11 Legacy artifacts inflate the repository
The archived WordPress capture accounts for the bulk of the repository: a 1.39 MB stylesheet, a 1.07 MB stylesheet, ~450 KB of jQuery-era JavaScript, and ~130 icon-font files, none of which the delivered site loads.

---

## 8. Privacy-Safe Portfolio Version

> Use this version publicly unless and until the owner confirms the client permits attribution.

### Anonymous Project Title
**Medical & Dental Equipment Distributor — Corporate Website**

*(Alternatives: "Dental Equipment & Simulation Lab Supplier", "Healthcare Equipment Distribution Group", "Medical Supply & Clinical Fit-Out Company")*

### Industry
Medical & Dental Equipment Distribution — B2B Healthcare Supply

### Anonymous Short Description (38 words)
A hand-built corporate website for a medical and dental equipment distributor, combining a canvas-driven interactive cursor field, a scroll-choreographed hero, and a lightbox gallery of completed clinical installations — all written without a single framework or animation library.

### Anonymous Full Description (202 words)

A complete rebuild for a medical and dental equipment distributor, replacing an off-the-shelf WordPress theme with a hand-written static site carrying no framework, no build step and no runtime dependencies.

The home page opens on a scroll-choreographed hero: a sticky stage holds position across two-and-a-half screens of scroll while the headline, supporting copy, calls to action and a partner-brand marquee reveal in sequence. Behind it, a full-viewport canvas renders a grid of brand-coloured dots that spring away from the cursor and appear only inside a soft halo travelling with it. The field is composited out of the navigation, cards and embedded map so it never competes with content, and it is disabled outright on touch devices to protect the mobile frame budget.

The story continues through animated accordions, twin infinite logo marquees establishing manufacturer partnerships and institutional customers, a team grid of glass-morphic cards, and a location map. A dedicated gallery page presents dozens of real installation photographs in a responsive multi-column masonry grid feeding a custom lightbox with keyboard navigation, wrap-around paging and an image counter. A third page carries a recruitment application flow.

Every piece of motion is original vanilla JavaScript and CSS — no animation library is loaded anywhere.

### Anonymous Feature List
- Interactive canvas cursor field with compositing-based reveal masking
- Scroll-choreographed sticky hero with reversible multi-phase reveals
- Responsive masonry gallery of completed installations
- Custom lightbox with keyboard navigation, wrap-around paging and image counter
- Twin infinite partner and client logo marquees with edge-fade masking
- Animated accordion service disclosures
- Glass-morphic card system with hover elevation and accent-wipe
- Full-screen mobile navigation with morphing hamburger
- Scroll-reveal animation system with directional and staggered variants
- Recruitment application form with native HTML5 validation
- Newsletter capture
- Embedded location map
- Click-spark button micro-interactions
- Fully responsive across three breakpoints with motion disabled on touch

### Anonymisation checklist — what must be removed
| Item | Where it appears | Action |
|---|---|---|
| Company name (appears ~20× across pages: title tags, nav logo alt, headings, body copy, footer, team bios) | All three pages | Replace with generic descriptor |
| Domain name | Legacy snapshot (56 absolute URLs), footer email | Remove |
| Email addresses (2 distinct client addresses) | Footers, legacy snapshot | Remove |
| Phone numbers (7+ distinct numbers across current and legacy) | Footers, legacy header | Remove |
| Office street addresses (Cairo district + landmark; Mansoura street) | Legacy snapshot | Remove |
| Google Maps embed CID | `index.html` map iframe | **Remove — the CID resolves directly to the business's exact listing and address** |
| Four named executives with photographs, titles and biographies | Home page team section | **Remove or blur — these are identifiable private individuals** |
| Client logo wordmark | `images/logo.png`, rendered in every page header | Remove or replace with a neutral placeholder |
| **Hardcoded Google Maps API key** | `index_1.html` | **See §8.1 — treat as a live credential** |

### 8.1 ⚠️ Credential exposure — requires action independent of the portfolio

**`index_1.html` contains a hardcoded Google Maps JavaScript API key** (a 39-character `AIza…` string), inherited from the WordPress page capture. **[Verified]**

This is a real credential sitting in the repository, not a portfolio problem. Recommended handling, in order:
1. **Rotate or delete the key** in the Google Cloud console. Assume it is compromised — page-capture files circulate freely and it may be exposed elsewhere.
2. Apply HTTP-referrer restrictions and per-API scoping to any replacement key.
3. Remove `index_1.html` from the working tree; note that scrubbing it from git history requires a rewrite, which is only worth doing if the repository is or will become public.
4. **Never include this file, or any excerpt of it, in portfolio materials.**

Note that the *delivered* site does not use an API key at all — it embeds a keyless maps iframe. The exposure is entirely confined to the legacy artifact.

### 8.2 Asset-by-asset privacy flags

| Asset | Contains | Risk | Recommendation |
|---|---|---|---|
| `images/logo.png` | Client wordmark, 1920×960 | **High** — appears in every page header, so *any* screenshot showing the navbar identifies the client | Blur, crop out, or replace with a placeholder mark before publishing any screenshot |
| `images/yousief.png`, `mahrous.png`, `salah.png`, `lotfi.png` | Photographic headshots of four named, identifiable individuals | **High — personally identifying** | Exclude the team section from portfolio visuals, or blur faces and redact names |
| `images/Project/*.jpg` (31 files) | Real dental simulation labs and clinical training floors | **Low–Medium** — no client branding visible in the sampled images; some frames show bay numbering, room signage and interior architecture that could identify the *institution* | Usable with review. Check each frame for legible signage before publishing; the wide interior shots are the strongest and cleanest |
| `images/Project/*.HEIC` (6 files) | Apple-camera originals carrying EXIF metadata | **Medium** — no GPS markers detected in a byte-level scan, but the check was not exhaustive and Apple EXIF often carries capture timestamps and device identifiers | Strip all metadata before any publication; do not rely on the negative scan result |
| `images/1–4.png`, `7–13.png` | Eleven university logos (one confirmed as an identifiable Egyptian private university) | **Medium** — third-party trademarks; also identifies the client's customer base | Blur or omit the university marquee from portfolio visuals |
| `images/dentsply.png`, `wassermann.png`, `futudent.png`, `air-techniques.png`, `frasaco.png`, `baisch.png`, `5.png`, `6.png` | Eight international manufacturer trademarks | **Low–Medium** — trademark usage, not client-identifying | Generally acceptable in a design context; blur if the client's distribution relationships are considered commercially sensitive |
| `index_1.html` | Legacy site: API key, addresses, phone numbers, plus the theme vendor's unedited demo content including a fabricated testimonial | **High** | Never publish. Do not use as "before" imagery without heavy redaction |

### 8.3 A content-integrity note
The portfolio page displays three statistics as site copy: "30+ Projects Delivered", "11+ University Partners", "100% Client Satisfaction". The middle figure is corroborated within the repository (eleven university logos are present). **The other two are unverifiable from the repository and must not be repeated in WebLite's own portfolio as facts.** They are the client's marketing claims, not WebLite's measured outcomes. If the gallery count is useful, "31 installation photographs" is directly verifiable.

---

## 9. Portfolio Visuals — Capture Plan

*No captures have been made. This is a plan only.*

**Blanket privacy rule for every item below:** the fixed navbar containing the client wordmark is present on every page at every scroll position. Either blur the logo in post, or serve the site locally with a placeholder logo before capturing.

### Recommendation 1 — Hero with cursor field active ⭐ *lead visual*
- **Page/Route:** `index.html`, top of page
- **Viewport:** Desktop (2560×1440 preferred; the effect needs room)
- **What to capture:** Still frame with the cursor parked over empty space beside the headline, so the dot halo and its clean circular void are both fully visible against the white background.
- **Why:** This is the project's signature. It communicates "custom-built, not a template" in a single frame and is the strongest possible thumbnail.
- **Privacy:** Navbar logo. Headline text names the client — recompose to crop the logo, or overlay generic headline copy.

### Recommendation 2 — Cursor field in motion 🎬 *lead clip*
- **Page/Route:** `index.html`, hero
- **Viewport:** Desktop
- **Format:** 6–10 s silent MP4 or high-quality GIF
- **What to capture:** Slow, deliberate cursor sweeps across the hero — pause, accelerate, change direction — to show the speed-driven engagement ramp, the springy trailing settle, and the dots visibly parting around the navbar and cards.
- **Why:** The interaction is fundamentally temporal. A still cannot convey the spring physics or the exclusion masking, which are the two hardest parts of the implementation.
- **Privacy:** As above.

### Recommendation 3 — Hero scroll choreography 🎬
- **Page/Route:** `index.html`, scrolling through the 250 vh hero container
- **Viewport:** Desktop
- **Format:** 8–12 s clip
- **What to capture:** A steady scroll through all three reveal phases, then a partial scroll back up to show the reversal.
- **Why:** Demonstrates scroll-driven storytelling — a capability clients associate with expensive agency work.
- **Privacy:** Navbar logo; hero copy names the client — consider substituting placeholder copy locally.

### Recommendation 4 — Gallery masonry grid ⭐
- **Page/Route:** `portfolio.html`, gallery section
- **Viewport:** Desktop at 4-column, plus a Mobile capture at 1-column for a paired before/after
- **What to capture:** Full-width grid showing 12–16 tiles, with one tile mid-hover (scaled, dimmed, expand glyph visible).
- **Why:** The clinical installation photography is genuinely striking — clean whites, oranges and blues in large architectural spaces. It is the most visually rich screen in the project and proves the site handles real content volume.
- **Privacy:** Navbar logo. Review the selected tiles for legible room signage.

### Recommendation 5 — Lightbox open ⭐
- **Page/Route:** `portfolio.html` with lightbox active
- **Viewport:** Desktop
- **What to capture:** A wide panoramic installation shot at full size against the 94%-black backdrop, with the close control, both navigation arrows and the "n / 31" counter all visible.
- **Why:** Showcases custom UI work *and* the client's best photograph simultaneously. High contrast makes it an excellent portfolio still.
- **Privacy:** The navbar is hidden behind the overlay — **this is the cleanest capture available and needs the least redaction.** Choose a frame with no signage.

### Recommendation 6 — Accordion open/close 🎬
- **Page/Route:** `index.html`, services section
- **Viewport:** Desktop
- **Format:** 5–7 s clip
- **What to capture:** Open "Our Core Services" so the card grid drops in, then open "Why Choose Crizma" to show the 3 + 2 centred flex resolution, then close one.
- **Why:** The height-plus-opacity-plus-offset motion reads as premium and demonstrates polished interaction detail.
- **Privacy:** Card copy contains the client name in at least one heading — crop or overlay.

### Recommendation 7 — Logo marquee 🎬
- **Page/Route:** `index.html`, hero marquee and/or the university marquee
- **Viewport:** Desktop
- **Format:** 5 s loop
- **What to capture:** The seamless scroll with edge fades clearly visible.
- **Why:** Shows the credibility-building device and confirms the mask/loop is genuinely seamless.
- **Privacy:** ⚠️ **Highest-scrutiny item.** Manufacturer trademarks and identifiable university marks. Consider replacing logos with neutral placeholder shapes locally, which still demonstrates the motion technique perfectly.

### Recommendation 8 — Mobile navigation transformation 🎬
- **Page/Route:** `index.html` at 375×812
- **Viewport:** Mobile
- **Format:** 4–6 s clip
- **What to capture:** Tap the hamburger; bars morph into an X as the blurred full-screen panel slides in from the right; tap a link; panel slides out.
- **Why:** Responsive craft evidence. Client-facing decision-makers browse on phones and respond to this.
- **Privacy:** Logo visible in the collapsed navbar; menu labels are generic.

### Recommendation 9 — Responsive comparison ⭐
- **Page/Route:** `index.html` team section, or `portfolio.html` gallery
- **Viewport:** Both — composite desktop 1440 and mobile 375 side by side
- **What to capture:** The same section at both widths, showing multi-column → single-column reflow.
- **Why:** The clearest way to communicate "Responsive Development" as a capability on a portfolio card.
- **Privacy:** If using the team section, **the four headshots and names must be blurred**. The gallery is the safer subject.

### Recommendation 10 — Glass card hover 🎬
- **Page/Route:** `index.html`, services or team grid
- **Viewport:** Desktop
- **Format:** 3–4 s clip
- **What to capture:** Cursor entering a card: 10 px lift, background brighten, shadow bloom, and the red accent bar wiping left-to-right across the top edge. Ideally with dots visibly excluded from the card interior.
- **Why:** Concentrates several signature details into one short, satisfying loop.
- **Privacy:** Use service cards, not team cards, to avoid headshots entirely.

**Suggested capture order if time is limited:** 1 → 5 → 4 → 2 → 9. Those five carry the whole story.

---

## 10. Portfolio Card

**Project Title:** Medical & Dental Equipment Distributor — Corporate Website

**Category:** Corporate Website / Interactive Experience

**One-Line Hook (11 words):**
Framework-free corporate site with a canvas cursor field and scroll-choreographed storytelling.

**Description (30 words):**
Hand-coded rebuild for a dental and medical equipment distributor. Interactive canvas particle field, scroll-sequenced hero, and a masonry gallery of clinical installations — every animation written from scratch, no libraries.

**Top 3 Features:**
1. Interactive canvas cursor field with compositing-based reveal masking
2. Scroll-choreographed sticky hero with reversible multi-phase reveals
3. Responsive masonry installation gallery with custom keyboard-navigable lightbox

**Technology Tags:**
`HTML5 Canvas` · `Vanilla JavaScript` · `CSS3` · `Responsive Design` · `Custom Animation` · `Glassmorphism` · `Zero Dependencies`

*(Deliberately omitted as meaningless or misleading to clients: `IntersectionObserver`, `Google Fonts`, `CSS Grid`. Do not tag React — the React component in the repository is unused and does not ship.)*

**Suggested Thumbnail:**
The hero cursor-field still (Recommendation 1) — dot halo mid-sweep against white, brand crimson dots reading as a distinctive graphic mark at card size. It is unlike anything else likely to appear in a portfolio grid, which is exactly what a thumbnail needs. Crop tight enough to exclude the client wordmark. **Fallback:** the open lightbox (Recommendation 5) if a photographic thumbnail suits the grid better.

**Suggested Interaction:**
On hover/focus, swap the static thumbnail for a muted, looping 4-second clip of the cursor field responding to motion (Recommendation 2), with the card's own title overlaying it. This makes the card itself demonstrate the interaction it advertises — the strongest possible argument for clicking through. On touch, autoplay the loop once when the card scrolls into view instead, since there is no hover state. Keep the loop under 1.5 MB and respect `prefers-reduced-motion` by holding the still frame — a detail worth getting right given that the source project misses it.

---

## 11. Case Study Page Structure

### Overview
A complete website rebuild for a medical and dental equipment distributor serving clinics, hospitals, universities and healthcare professionals. The delivered site is three hand-coded static pages — a narrative home page, an installation gallery, and a recruitment page — replacing a previous WordPress build running a commercial off-the-shelf theme. The new site carries no framework, no build pipeline and no runtime dependencies beyond two webfonts.

### The Experience
A visitor arrives to a moving field of brand-coloured dots that follows their cursor, parting around the navigation and content cards, revealed only inside a soft travelling halo. As they scroll, the hero holds its position while the company's proposition assembles itself in three timed beats, closing with an endlessly scrolling band of manufacturer partner logos.

Further down, services expand from animated accordions. A second marquee presents university customers under the heading "Our Historical Records". Team members appear as glass cards that lift and take a red accent stripe on hover. A location map sits in a rounded, shadowed frame.

From there, visitors can enter a dedicated gallery of installation photography laid out in a responsive masonry grid — clicking any image opens a full-screen lightbox navigable by arrow keys or on-screen controls, with a running counter and wrap-around paging. A separate page carries a job application form.

### Key Features
- Real-time canvas particle field responding to cursor position and velocity
- Scroll-choreographed sticky hero with reversible three-phase reveal
- Masonry photography gallery with a custom lightbox
- Twin infinite logo marquees with gradient edge-fade masking
- Animated accordion service disclosures
- Glass-morphic card system with hover elevation and accent-wipe
- Full-screen mobile navigation with morphing hamburger control
- Directional scroll-reveal system with staggered timing
- Recruitment application form with native HTML5 validation
- Embedded location map

### Design
A restrained, clinical palette — white and near-white surfaces, near-black type — that concentrates all visual energy in a single crimson accent applied to section eyebrows, headings, hover states, button fills and the particle field itself. Typography pairs a geometric sans at heavy weight for headlines with a neutral text face at generous line-height for body copy, with uppercase letter-spaced eyebrow labels opening nearly every section.

The detail that makes it cohere is a single shared easing curve governing essentially every transition on the site — a strong ease-out in a tight 0.3–0.8 s band. Across a dozen distinct animated behaviours, everything decelerates the same way, which is why a page with this much motion still reads as calm rather than restless.

Glassmorphism is used with restraint: a blurred translucent navbar that compresses on scroll, subtly tinted cards with hairline borders, and a blurred full-screen mobile menu. Surfaces stay light and airy rather than heavy.

### Engineering
The centrepiece is the cursor field, and its difficulty is not drawing dots but *compositing* them. The full grid is rendered in a single batched path with one gradient fill per frame; a radial gradient composited with `destination-in` limits visibility to a halo around the cursor; a second `destination-out` pass subtracts the navbar, every card and the map from cached bounding rectangles refreshed only on scroll and resize. Displacement follows an inverse-square falloff scaled by a low-pass-filtered cursor speed, so the field responds to *how* the visitor moves, not just where. A hard radial clamp guarantees a perfect circular void regardless of grid alignment. Device pixel ratio is capped, and on touch devices the canvas is never created at all.

The hero's scroll sequencing uses deliberately asymmetric show and hide thresholds, creating hysteresis so content cannot flicker at a boundary. The accordion solves the classic `height: auto` transition problem correctly — pin, force reflow, animate, then hand off to `auto`. The lightbox indexes by resolved source rather than DOM position, so it stays correct even when six HEIC images progressively reveal themselves on browsers that can decode them.

All of it is vanilla JavaScript. No animation library, no scroll library, no layout library — a notable contrast with the previous build, which loaded jQuery, jQuery Migrate, two separate Masonry implementations, a carousel, a popup library and more than sixty icon webfonts.

### Responsive Experience
Three breakpoints reshape the site. At 1200 px the gallery steps from four columns to three. At 768 px the transformation is comprehensive: inline navigation and CTAs give way to a morphing hamburger and a blurred full-screen panel; the hero's scroll container shortens and its phase sequencing is bypassed so nothing can strand off-screen; buttons stack full-width; every card grid becomes a single column; hover-lift is disabled because it has no meaning on touch; the footer stacks; type and logo sizes step down. At 480 px headline sizes and the gallery compress once more to a single column.

The particle field is disabled on touch devices twice over — once by a pointer-capability media query and once by a JavaScript guard that prevents the canvas from ever being inserted into the DOM. The animation frame budget is spent only where the interaction actually exists.

### Technology
Hand-authored HTML5 · CSS3 with custom-property design tokens, Grid, Flexbox, multi-column, `backdrop-filter` and mask gradients · Vanilla ES6 JavaScript · HTML5 Canvas 2D with composite-operation masking · IntersectionObserver · CSS `position: sticky` scroll choreography · Google Fonts (Outfit + Inter) · Google Maps embed · **no framework, no bundler, no dependencies**

### Gallery Plan
Lead with the cursor-field clip, since it is the only element that cannot be understood from a still. Follow with the hero scroll-choreography clip to establish the narrative structure. Then the masonry gallery still and the open lightbox still, which together carry the client's installation photography — the most visually arresting content in the project. Close with the responsive desktop/mobile comparison and the mobile navigation clip to evidence the responsive craft. The accordion and glass-card hover clips are strong supporting material if the layout has room. Full specifications in §9.

> **Sections deliberately omitted:** no "Challenge", "Client Brief", "Results" or "Impact" section appears here, because the repository contains no evidence supporting any of them. See §13 for what to ask the owner in order to write them truthfully.

---

## 12. Capability Tags

**Demonstrated — [Verified]:**
- Web Design
- Web Development
- Responsive Development
- UI/UX
- Interactive Experiences
- Animation
- Corporate Websites
- Custom Front-End Development
- Canvas / Generative Graphics
- Motion Design
- Website Redesign & Migration *(rebuild replacing a WordPress theme site — **[Inferred]**, confirm WebLite performed it)*
- Zero-Dependency / Lightweight Builds
- Healthcare & Medical Sector Websites
- Photo Gallery & Lightbox Systems

**Partially demonstrated — flag honestly:**
- **Lead Generation** — the funnel is designed (persistent CTAs, quote requests, careers flow) but no form actually delivers a submission (§7.4). Claim only after the forms are wired.
- **SEO** — titles and meta descriptions only; no Open Graph, structured data, sitemap or canonicals. Do **not** claim SEO as a capability from this project.
- **Performance Optimization** — lazy loading, DPR capping, rAF tick-locking, cached rects and pointer-gated animation are all genuine optimisations, but they sit alongside an 11.4 MB image payload. Do **not** claim performance optimisation from this project.

**Explicitly NOT demonstrated — do not tag:**
E-Commerce · Product Catalogs · Restaurant Websites · Pharmaceutical Websites · Multilingual Websites · API Integration · Database Development · Custom Web Applications · 3D Web Experiences · Authentication · Admin Dashboards · Booking Systems · Search & Filtering · CMS Development

---

## 13. Evidence & Confidence Summary

### Verified — directly supported by repository code, assets or git history
- Three static pages; no framework, no build system, no `package.json`
- No backend, database, authentication, CMS, or e-commerce
- Canvas 2D particle field with composite masking, spring easing, DPR capping and pointer gating
- 250 vh sticky hero with hysteresis-based scroll sequencing
- CSS multi-column masonry gallery of 31 JPEGs plus 6 undeliverable HEIC files
- Custom lightbox with keyboard navigation, counter, wrap-around and source-array rebuilding
- Two infinite CSS marquees; animated accordions; glass cards; full-screen mobile navigation
- Design tokens, typography pairing, and the single shared easing curve
- Dark-theme tokens defined but unreachable — no toggle exists
- Orphan React `DotField` component that cannot execute in this repository
- Legacy WordPress 6.1.3 / Avantage 2.2.2 capture committed as `index_1.html` plus ~130 supporting files
- Hardcoded Google Maps API key in the legacy file
- All defects catalogued in §7, each confirmed against the specific file and line

### Inferred — strongly suggested by the implementation but not documented
- The engagement was a redesign replacing the WordPress site *(legacy capture committed first, new site built on top, same brand copy and team carried across)*
- The React component was prototyped first and hand-ported to vanilla to keep the site dependency-free
- Primary business goals are credibility, lead generation, delivery proof and recruitment *(read from CTA prominence, section ordering and copy)*
- The empty `#catalogue` section and unreachable dark mode represent either cut scope or unfinished work

### Needs Owner Confirmation — not determinable from the repository
Everything in the section below.

---

## Questions for WebLite

**Scope and authorship**
1. Did WebLite build this site, or inherit and extend it? Several early commits carry non-descriptive messages ("commit1", "commit2", "fixes", "DELETE") that suggest more than one contributor.
2. Was the legacy WordPress site also WebLite's work, or a predecessor's? This determines whether the case study can be framed as a redesign WebLite owns end to end.
3. Which specific parts did WebLite author versus receive? Particularly: the canvas dot field, the React `DotField` component, and the copywriting.
4. Was the React `DotField` component built for this project or brought in from a WebLite component library? If it is reusable internal tooling, that is worth saying.

**Client permissions**
5. Is the client's identity permitted to be public, or must the anonymised version be used?
6. Are screenshots of the site permitted publicly?
7. Are the installation photographs cleared for publication? They depict third-party institutional facilities — did the client obtain rights, and do those rights extend to WebLite's portfolio?
8. Is there permission to display the university and manufacturer logos, or should they be blurred?
9. Do the four team members consent to their photographs and names appearing in WebLite's portfolio? If not, that section must be excluded entirely.

**Project context**
10. What problem did the client originally want solved? *(The repository shows what was built, never why.)*
11. What was the project timeline, and what was the team size?
12. Was there a defined brief or scope document, and did the delivered site meet it?
13. Were branding, logo and colour palette supplied by the client or created by WebLite? The crimson is applied with real discipline, and if WebLite set that system it belongs in the design section.
14. Who supplied the installation photography and the team headshots?

**Status and completeness**
15. **Is the site currently live, and at what URL?** No deployment configuration exists in the repository.
16. **Are the forms meant to be functional?** No form submits anywhere today, so every lead and job application is silently lost (§7.4). Is a backend planned, out of scope, or was this overlooked?
17. Was the empty `#catalogue` section cut from scope, or is a product catalogue still planned?
18. Was dark mode cut from scope? The full token set and toggle styling exist but nothing activates them.
19. Are the nav-link mismatches and swapped logo alt text known issues (§7.1, §7.2)?
20. Is `index_1.html` intentionally retained as a reference, or should it be removed? **Either way, the API key inside it needs rotating (§8.1).**

**Positioning**
21. Did the project produce measurable business results — enquiry volume, ranking changes, engagement? Nothing in the repository speaks to outcomes, and none will be claimed without evidence.
22. Are client testimonials available? *(Note: the only testimonial in the repository is unedited demo content from the commercial theme and must never be used.)*
23. Should this be positioned as a design-led project, an engineering-led project, or a rebuild story? The repository supports all three framings; the choice affects which visuals lead.
24. Is there budget or appetite to fix §7's defects before publishing? Roughly a day of work — wiring the forms, resizing four images, fixing the alt text and nav links, filling or removing the catalogue section, and adding `prefers-reduced-motion` — would materially raise this from a Standard to a Featured project.

---

## 14. Portfolio Strength Score

| Dimension | Score | Reasoning |
|---|---|---|
| **Visual Design** | **7 / 10** | Genuinely polished and disciplined. The near-monochrome palette with a single crimson accent, the Outfit/Inter pairing, and above all the one-easing-curve rule produce a cohesive, premium result. Held back by the empty catalogue section, the emoji used as service icons where custom icons would suit the register better, and unreachable dark mode. |
| **Technical Complexity** | **5 / 10** | Honest middle. No backend, database, authentication, framework or 3D. But the canvas field's composite masking, cached-rect exclusion and filtered velocity response, the hysteresis scroll sequencing, and the correct `height: auto` accordion handoff are all non-trivial code that many agencies would reach for a library to avoid writing. High craft, moderate systems complexity. |
| **Interactivity** | **7 / 10** | Dense and varied: particle field, scroll choreography, accordions, marquees, lightbox with keyboard support, spark micro-interactions, mobile panel. Points deducted because the interactions are presentational — nothing is stateful, and no form actually does anything. |
| **Business Value** | **6 / 10** | The commercial architecture is sound: persistent CTAs, credibility marquees, a real proof-of-delivery gallery, a recruitment funnel. But **no form submits anywhere**, so the lead-generation machinery is disconnected. That single defect is what separates a 6 from an 8. |
| **Portfolio Appeal** | **7 / 10** | Two strong hooks — an interaction unlike anything else likely to sit in WebLite's grid, and striking real-world installation photography. It photographs and records well. Held back by needing anonymisation and by the visible rough edges. |
| **Overall** | **6.4 / 10** | |

### Recommendation: **Standard Project** — with a clear route to Featured

Include it prominently, but not as the flagship. The reasoning:

**Why not Featured today.** A featured slot should survive scrutiny from a prospective client who clicks through and explores. This one has visible defects — an empty section, mislabelled navigation, forms that quietly discard submissions — and an 11.4 MB home page. It also lacks the systems depth (backend, database, custom application logic) that usually justifies top billing.

**Why not Supporting.** The cursor field alone is more distinctive than most agency portfolio pieces. It is original, technically interesting, immediately legible as craft, and demonstrably not a template. Burying it would waste WebLite's most eye-catching interaction.

**The route to Featured** is short and concrete, roughly a day of work: wire the forms to a form service, resize the four oversized logos, fix the swapped alt text and nav-link targets, fill or remove the catalogue section, and add a `prefers-reduced-motion` block. That package would lift Business Value to 8 and Portfolio Appeal to 8, making a Featured slot defensible.

**How to position it.** Lead with the interaction, not the industry. "Framework-free corporate site with a custom canvas cursor field" is a far stronger hook than "medical equipment distributor website", and it is the honest description of where the work went. Pair it in the grid with a project that has backend depth, so the two together show range.

---

## 15. Machine-Readable Data

```json
{
  "anonymousTitle": "Medical & Dental Equipment Distributor — Corporate Website",
  "projectType": "Corporate marketing website with project gallery and recruitment form",
  "industry": "Medical & Dental Equipment Distribution (B2B Healthcare Supply)",
  "shortDescription": "A hand-built corporate website for a medical and dental equipment distributor, combining a canvas-driven interactive cursor field, a scroll-choreographed hero, and a lightbox gallery of completed clinical installations — all written without a single framework or animation library.",
  "longDescription": "A complete rebuild for a medical and dental equipment distributor, replacing an off-the-shelf WordPress theme with a hand-written static site carrying no framework, no build step and no runtime dependencies. The home page opens on a scroll-choreographed hero: a sticky stage holds position across two-and-a-half screens of scroll while the headline, supporting copy, calls to action and a partner-brand marquee reveal in sequence. Behind it, a full-viewport canvas renders a grid of brand-coloured dots that spring away from the cursor and appear only inside a soft halo travelling with it. The field is composited out of the navigation, cards and embedded map so it never competes with content, and it is disabled outright on touch devices to protect the mobile frame budget. The story continues through animated accordions, twin infinite logo marquees establishing manufacturer partnerships and institutional customers, a team grid of glass-morphic cards, and a location map. A dedicated gallery page presents dozens of real installation photographs in a responsive multi-column masonry grid feeding a custom lightbox with keyboard navigation, wrap-around paging and an image counter. A third page carries a recruitment application flow. Every piece of motion is original vanilla JavaScript and CSS — no animation library is loaded anywhere.",
  "pageCount": 3,
  "pages": ["Home", "Portfolio gallery", "Careers application"],
  "features": [
    {
      "name": "Interactive canvas cursor field",
      "description": "Full-viewport HTML5 canvas rendering a grid of brand-coloured dots that spring away from the cursor with inverse-square falloff, revealed only inside a soft radial halo and composited out of the navbar, cards and map.",
      "value": "The site's signature interaction; signals custom craft within a second of arrival and proves original real-time graphics capability.",
      "confidence": "verified"
    },
    {
      "name": "Scroll-choreographed sticky hero",
      "description": "A 250vh scroll container with a 100vh sticky stage sequencing three content phases against scroll progress, reversible on scroll-up, with asymmetric thresholds preventing flicker.",
      "value": "Turns the opening statement into a paced narrative rather than a static banner.",
      "confidence": "verified"
    },
    {
      "name": "Masonry installation gallery",
      "description": "Thirty-one real photographs of completed dental simulation labs and clinics in a CSS multi-column masonry grid stepping 4 to 3 to 2 to 1 columns, with lazy loading.",
      "value": "Proof of delivery; for a B2B equipment supplier, photographs of finished institutional installations are the strongest trust signal.",
      "confidence": "verified"
    },
    {
      "name": "Custom lightbox",
      "description": "Full-screen image viewer with previous/next controls, image counter, backdrop dismissal, Escape and arrow-key handling, wrap-around paging, and a source array that rebuilds when progressively-enhanced images load.",
      "value": "Lets visitors examine installation work closely without leaving the page.",
      "confidence": "verified"
    },
    {
      "name": "Twin infinite logo marquees",
      "description": "Two seamless CSS marquees — eight manufacturer logos and eleven institutional customer logos — each duplicated in the DOM and translated by half their width, with gradient edge-fade masking and per-logo hover scale.",
      "value": "Borrowed credibility presented continuously without consuming vertical space.",
      "confidence": "verified"
    },
    {
      "name": "Animated accordion disclosures",
      "description": "Details elements animating height, opacity and vertical offset together, then handing off to height auto so content reflows freely, with a rotating arrow indicator.",
      "value": "Keeps a long services narrative scannable without a wall of text.",
      "confidence": "verified"
    },
    {
      "name": "Full-screen mobile navigation",
      "description": "Below 768px, a hamburger morphs into an X and slides a blurred full-screen overlay in from the right, with body scroll locked, an explicit back control and auto-close on link tap.",
      "value": "Responsive craft that decision-makers browsing on phones notice directly.",
      "confidence": "verified"
    },
    {
      "name": "Scroll-reveal animation system",
      "description": "IntersectionObserver-driven reveals with four directional variants and six stagger delays from 80ms to 480ms, all on a shared easing curve.",
      "value": "Gives the page a consistent, controlled reading rhythm.",
      "confidence": "verified"
    },
    {
      "name": "Glass-morphic card system",
      "description": "Translucent bordered cards that lift ten pixels, brighten, gain a shadow and take a brand accent bar wiping across their top edge on hover, disabled on touch.",
      "value": "Consistent premium surface treatment across services, benefits and team sections.",
      "confidence": "verified"
    },
    {
      "name": "Recruitment application form",
      "description": "Dedicated careers page with a five-field application form using correct HTML5 input types, associated labels and native required validation.",
      "value": "Recruitment funnel alongside the sales funnel.",
      "confidence": "verified-but-non-functional"
    },
    {
      "name": "Newsletter capture",
      "description": "Email capture form in the footer of all three pages.",
      "value": "Ongoing audience contact.",
      "confidence": "verified-but-non-functional"
    },
    {
      "name": "Embedded location map",
      "description": "Lazy-loaded keyless map iframe in a rounded, shadowed frame with a referrer policy set.",
      "value": "Physical-premises credibility for a distributor with regional offices.",
      "confidence": "verified"
    },
    {
      "name": "Click-spark micro-interaction",
      "description": "Every button spawns a radial-gradient spark at the exact click coordinate, scaling and fading over 500ms via injected keyframes.",
      "value": "Tactile feedback detail that makes the interface feel responsive.",
      "confidence": "verified"
    }
  ],
  "technologies": {
    "frontend": ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)"],
    "framework": null,
    "styling": ["Hand-written CSS3", "CSS custom properties", "CSS Grid", "Flexbox", "CSS multi-column", "backdrop-filter", "mask-image gradients", "CSS keyframe animations", "position sticky"],
    "uiLibraries": [],
    "backend": null,
    "apis": ["Google Maps embed (iframe, keyless)"],
    "database": null,
    "authentication": null,
    "cms": null,
    "graphics": ["HTML5 Canvas 2D API", "globalCompositeOperation masking", "SVG radial gradient (in unused React component)"],
    "threeDimensional": null,
    "animationLibraries": [],
    "browserApis": ["IntersectionObserver", "requestAnimationFrame", "matchMedia", "Canvas 2D"],
    "fonts": ["Outfit (Google Fonts)", "Inter (Google Fonts)"],
    "buildTooling": null,
    "packageManager": null,
    "hosting": "not-configured-in-repository",
    "analytics": null,
    "legacyStackArchivedOnly": ["WordPress 6.1.3", "Avantage theme 2.2.2", "jQuery", "jQuery Migrate", "Slick carousel", "Magnific Popup", "Masonry", "imagesLoaded", "Contact Form 7", "Google Maps JavaScript API"],
    "unusedArtifacts": ["React component DotField.jsx — present but not imported, not runnable, no React dependency in repository"]
  },
  "capabilities": [
    "Web Design",
    "Web Development",
    "Responsive Development",
    "UI/UX",
    "Interactive Experiences",
    "Animation",
    "Corporate Websites",
    "Custom Front-End Development",
    "Canvas / Generative Graphics",
    "Motion Design",
    "Website Redesign & Migration",
    "Zero-Dependency / Lightweight Builds",
    "Healthcare & Medical Sector Websites",
    "Photo Gallery & Lightbox Systems"
  ],
  "capabilitiesNotDemonstrated": [
    "E-Commerce",
    "Product Catalogs",
    "Multilingual Websites",
    "API Integration",
    "Database Development",
    "Custom Web Applications",
    "3D Web Experiences",
    "Authentication",
    "Admin Dashboards",
    "Booking Systems",
    "Search & Filtering",
    "CMS Development",
    "SEO",
    "Performance Optimization"
  ],
  "designHighlights": [
    "Near-monochrome clinical palette concentrating all visual energy in a single crimson accent applied to eyebrows, headings, hover states, button fills and the particle field",
    "One shared easing curve governs essentially every transition across a dozen animated behaviours, which is why a motion-dense page still reads as calm",
    "Two-family typography: a geometric sans at weight 800 for headings paired with a neutral text face at 400 to 600 for body copy at generous line-height",
    "Uppercase letter-spaced eyebrow labels in brand red opening nearly every section, creating a predictable scanning rhythm",
    "Restrained glassmorphism: blurred translucent navbar that compresses on scroll, subtly tinted hairline-bordered cards, blurred full-screen mobile menu",
    "Fully tokenised design system in CSS custom properties, including a complete dark theme that is defined but never activated",
    "Deliberate global cursor suppression with explicit overrides, keeping the pointer visually clean beneath the particle field",
    "Centred flex-wrap layout resolving a five-card group as three-plus-two centred rather than an unbalanced grid",
    "Alternating full-width content bands at consistent vertical rhythm with hairline dividers rather than hard colour blocks"
  ],
  "engineeringHighlights": [
    "Canvas particle field batching every dot into a single path filled once per frame with one shared gradient, instead of thousands of individual draw calls",
    "Two-stage composite masking: destination-in radial gradient for the cursor-halo reveal, destination-out for subtracting navbar, cards and map from the field",
    "Exclusion rectangles cached and recomputed only on scroll and resize, avoiding thousands of layout-thrashing bounding-rect reads per second",
    "Cursor speed passed through a low-pass filter driving an engagement value, so displacement responds to how the visitor moves rather than only where",
    "Hard radial clamp normalising dots inside the inner radius onto the circle, guaranteeing a perfect circular void regardless of grid alignment",
    "Device pixel ratio capped at 2 and the entire canvas gated behind a fine-pointer capability check, so it is never created on touch devices",
    "Sticky hero scroll sequencing with deliberately asymmetric show and hide thresholds creating hysteresis that prevents boundary flicker",
    "Scroll handlers registered passive and guarded by a requestAnimationFrame tick-lock",
    "Accordion solving the height-auto transition problem correctly: pin height, force reflow, animate, then hand off to auto after the transition",
    "Lightbox indexing by resolved image source rather than DOM position, so navigation and counter stay correct when the visible set changes size at runtime",
    "Progressive-enhancement fallback revealing HEIC images and rebuilding the lightbox source array only on browsers that can decode them",
    "CSS multi-column masonry handling 31 images from portrait to panoramic with zero layout JavaScript, replacing three separate layout libraries used by the legacy site"
  ],
  "visualRecommendations": [
    {
      "id": 1,
      "route": "index.html",
      "section": "Hero",
      "viewport": "Desktop",
      "format": "Still",
      "capture": "Cursor parked beside the headline so the dot halo and its clean circular void are both fully visible against white.",
      "why": "The project's signature; communicates custom-built rather than templated in a single frame. Strongest thumbnail candidate.",
      "privacy": "Navbar logo present; headline names the client. Crop or substitute placeholder copy.",
      "priority": "lead"
    },
    {
      "id": 2,
      "route": "index.html",
      "section": "Hero",
      "viewport": "Desktop",
      "format": "Clip 6-10s",
      "capture": "Slow deliberate cursor sweeps with pauses and direction changes, showing the speed-driven engagement ramp, springy settle, and dots parting around navbar and cards.",
      "why": "The interaction is temporal; a still cannot convey spring physics or exclusion masking.",
      "privacy": "Navbar logo present.",
      "priority": "lead"
    },
    {
      "id": 3,
      "route": "index.html",
      "section": "Hero scroll container",
      "viewport": "Desktop",
      "format": "Clip 8-12s",
      "capture": "Steady scroll through all three reveal phases, then partial scroll back up to show reversal.",
      "why": "Demonstrates scroll-driven storytelling, a capability clients associate with premium agency work.",
      "privacy": "Navbar logo and client-naming hero copy.",
      "priority": "high"
    },
    {
      "id": 4,
      "route": "portfolio.html",
      "section": "Gallery grid",
      "viewport": "Desktop and Mobile",
      "format": "Still",
      "capture": "Full-width four-column grid showing 12-16 tiles with one mid-hover, plus a paired single-column mobile capture.",
      "why": "Most visually rich screen in the project; proves the site handles real content volume.",
      "privacy": "Navbar logo; review tiles for legible room signage.",
      "priority": "lead"
    },
    {
      "id": 5,
      "route": "portfolio.html",
      "section": "Lightbox open",
      "viewport": "Desktop",
      "format": "Still",
      "capture": "Wide panoramic installation shot at full size on the near-black backdrop with close control, both arrows and the counter visible.",
      "why": "Showcases custom UI work and the client's best photography simultaneously; high contrast makes an excellent still.",
      "privacy": "Cleanest available capture — navbar is hidden behind the overlay. Choose a frame with no signage.",
      "priority": "lead"
    },
    {
      "id": 6,
      "route": "index.html",
      "section": "Services accordions",
      "viewport": "Desktop",
      "format": "Clip 5-7s",
      "capture": "Open the first accordion so the card grid drops in, then the second to show the three-plus-two centred resolution, then close one.",
      "why": "Height-plus-opacity-plus-offset motion reads as premium and shows interaction polish.",
      "privacy": "Card copy contains the client name in a heading; crop or overlay.",
      "priority": "medium"
    },
    {
      "id": 7,
      "route": "index.html",
      "section": "Logo marquees",
      "viewport": "Desktop",
      "format": "Clip 5s loop",
      "capture": "Seamless scroll with edge fades clearly visible.",
      "why": "Shows the credibility device and confirms the loop is genuinely seamless.",
      "privacy": "Highest scrutiny — manufacturer trademarks and identifiable institutional marks. Consider substituting placeholder shapes locally.",
      "priority": "medium"
    },
    {
      "id": 8,
      "route": "index.html",
      "section": "Mobile navigation",
      "viewport": "Mobile 375x812",
      "format": "Clip 4-6s",
      "capture": "Hamburger tap, bars morphing to an X, blurred panel sliding in from the right, link tap, panel sliding out.",
      "why": "Responsive craft evidence; client decision-makers browse on phones.",
      "privacy": "Logo visible in collapsed navbar; menu labels are generic.",
      "priority": "high"
    },
    {
      "id": 9,
      "route": "index.html or portfolio.html",
      "section": "Team grid or gallery",
      "viewport": "Both, composited side by side",
      "format": "Still",
      "capture": "Same section at 1440 and 375 showing multi-column to single-column reflow.",
      "why": "Clearest way to communicate Responsive Development as a portfolio capability.",
      "privacy": "If using the team section the four headshots and names must be blurred; the gallery is the safer subject.",
      "priority": "high"
    },
    {
      "id": 10,
      "route": "index.html",
      "section": "Service or team card grid",
      "viewport": "Desktop",
      "format": "Clip 3-4s",
      "capture": "Cursor entering a card: ten-pixel lift, background brighten, shadow bloom, red accent bar wiping across the top edge, ideally with dots visibly excluded from the card interior.",
      "why": "Concentrates several signature details into one short satisfying loop.",
      "privacy": "Use service cards, not team cards, to avoid headshots.",
      "priority": "medium"
    }
  ],
  "privacyWarnings": [
    {
      "severity": "critical",
      "type": "credential-exposure",
      "location": "index_1.html (archived legacy WordPress page capture)",
      "detail": "A hardcoded Google Maps JavaScript API key is present in the archived legacy file, inherited from the WordPress capture. This is a live credential in the repository, independent of any portfolio concern.",
      "action": "Rotate or delete the key in the Google Cloud console and treat it as compromised. Apply referrer restrictions and API scoping to any replacement. Remove the file from the working tree. Never include this file or any excerpt of it in portfolio materials. The delivered site itself uses a keyless map embed and is unaffected."
    },
    {
      "severity": "high",
      "type": "client-identity",
      "location": "All three pages — title tags, navbar logo, headings, body copy, footer, team biographies",
      "detail": "The client company name appears roughly twenty times across the delivered site.",
      "action": "Use the anonymised title and descriptions unless the owner confirms attribution is permitted."
    },
    {
      "severity": "high",
      "type": "client-logo-in-every-screenshot",
      "location": "images/logo.png rendered in the fixed navbar on every page at every scroll position",
      "detail": "Any screenshot showing the navbar identifies the client. The only exception is the open lightbox, whose overlay covers the navbar.",
      "action": "Blur the logo in post, crop it out, or serve the site locally with a placeholder mark before capturing."
    },
    {
      "severity": "high",
      "type": "personally-identifying-information",
      "location": "images/yousief.png, images/mahrous.png, images/salah.png, images/lotfi.png and the home page team section",
      "detail": "Photographic headshots of four named, identifiable individuals with job titles and biographies.",
      "action": "Exclude the team section from portfolio visuals, or blur faces and redact names. Confirm individual consent before any publication."
    },
    {
      "severity": "high",
      "type": "location-disclosure",
      "location": "index.html map iframe",
      "detail": "The embedded map uses a Google Business Profile CID that resolves directly to the business's exact listing and street address.",
      "action": "Remove the CID from any published code excerpt and do not screenshot the map section without redaction."
    },
    {
      "severity": "medium",
      "type": "contact-details",
      "location": "Footers of all three pages and throughout the legacy snapshot",
      "detail": "Three phone numbers and one email address in the delivered footers; seven or more phone numbers, two email addresses, and two office street addresses including a district and a landmark reference in the legacy snapshot.",
      "action": "Redact from all published screenshots and code excerpts."
    },
    {
      "severity": "medium",
      "type": "third-party-trademarks",
      "location": "images/1-4.png, images/7-13.png (eleven institutional customer logos)",
      "detail": "Identifiable third-party institutional marks that also disclose the client's customer base.",
      "action": "Blur or omit the customer marquee from portfolio visuals, or substitute placeholder shapes when capturing the marquee motion."
    },
    {
      "severity": "medium",
      "type": "third-party-trademarks",
      "location": "images/dentsply.png, wassermann.png, futudent.png, air-techniques.png, frasaco.png, baisch.png, 5.png, 6.png",
      "detail": "Eight international manufacturer trademarks displayed as distribution partners.",
      "action": "Generally acceptable in a design context; blur if the client's distribution relationships are commercially sensitive."
    },
    {
      "severity": "medium",
      "type": "image-metadata",
      "location": "images/Project/*.HEIC (six files)",
      "detail": "Apple camera originals carrying EXIF metadata. A byte-level scan detected no GPS markers, but the check was not exhaustive and Apple EXIF commonly carries capture timestamps and device identifiers.",
      "action": "Strip all metadata before any publication. Do not rely on the negative scan result."
    },
    {
      "severity": "medium",
      "type": "third-party-facility-imagery",
      "location": "images/Project/*.jpg (31 files)",
      "detail": "Photographs of real institutional dental facilities. No client branding was visible in the sampled images, but some frames show bay numbering, room signage and distinctive interior architecture that could identify the institution.",
      "action": "Review each selected frame for legible signage before publishing. Confirm the client holds publication rights and that those rights extend to WebLite's portfolio."
    },
    {
      "severity": "low",
      "type": "content-integrity",
      "location": "portfolio.html statistics bar",
      "detail": "Two of the three displayed statistics are unverifiable from the repository and are the client's own marketing claims, not measured outcomes.",
      "action": "Do not repeat these figures as facts in WebLite's portfolio. The gallery image count is directly verifiable if a concrete number is wanted."
    },
    {
      "severity": "low",
      "type": "fabricated-content-in-legacy-file",
      "location": "index_1.html",
      "detail": "The archived legacy page contains an unedited placeholder testimonial from the commercial theme's demo content, attributed to a fictional person at a fictional company.",
      "action": "Never present this or any legacy testimonial as a real client testimonial."
    }
  ],
  "knownDefects": [
    "Two manufacturer logo images carry each other's alt text, so screen readers and search engines receive the wrong brand names",
    "Navbar labels do not match their targets: About links to the services section and Portfolio links to the about section; the careers page links to a Portfolio anchor that does not exist",
    "The catalogue section renders a heading with no content beneath it",
    "No form submits anywhere — all three forms preventDefault and show a browser alert, so every lead and job application is silently lost. The click-spark handler additionally intercepts submit buttons and shows a developer-placeholder message instead of the intended confirmation",
    "Home page loads approximately 11.4 MB of imagery, including four logo files at 6250 by 4419 pixels rendered at 80 pixels tall; gallery page adds 3.2 MB",
    "Six gallery images are HEIC files totalling 12.4 MB that most browsers cannot decode",
    "Four team headshots are JPEG data saved with .png extensions",
    "SEO is limited to title and meta description — no Open Graph, Twitter cards, canonical URLs, favicon, robots.txt, sitemap or structured data",
    "Only one ARIA attribute exists site-wide; no aria-expanded, no focus trapping in the mobile menu or lightbox, gallery tiles are non-focusable divs, and all gallery and customer-logo images share identical generic alt text",
    "No prefers-reduced-motion handling anywhere despite very high motion density — the most significant accessibility gap",
    "No width or height attributes on images, leaving cumulative layout shift unmitigated",
    "Hero sequencing and the IntersectionObserver are implemented twice — once in main.js and once inline in index.html — so two scroll listeners and two observers run simultaneously on the home page",
    "Dark theme tokens and toggle styling exist but no toggle control is present in any page and nothing sets the theme attribute, making dark mode unreachable",
    "The React DotField component is present but unimported and unrunnable — the repository has no React dependency, bundler or package.json",
    "The archived legacy page references css/style.css, which in this repository holds the new site's design system rather than the theme's original stylesheet, so the archived page will not render faithfully"
  ],
  "portfolioScores": {
    "visualDesign": 7,
    "technicalComplexity": 5,
    "interactivity": 7,
    "businessValue": 6,
    "portfolioAppeal": 7,
    "overall": 6.4
  },
  "recommendedTier": "Standard Project",
  "tierRationale": "Include prominently but not as the flagship. The cursor field is more distinctive than most agency portfolio pieces and the installation photography is genuinely striking, which rules out a supporting slot. But visible defects — an empty section, mislabelled navigation, forms that silently discard submissions — and an 11.4 MB home page would not survive scrutiny from a prospective client clicking through, and the project lacks the systems depth that usually justifies top billing. Roughly a day of remediation would make a Featured slot defensible. Position it by leading with the interaction rather than the industry.",
  "cardContent": {
    "title": "Medical & Dental Equipment Distributor — Corporate Website",
    "category": "Corporate Website / Interactive Experience",
    "hook": "Framework-free corporate site with a canvas cursor field and scroll-choreographed storytelling.",
    "description": "Hand-coded rebuild for a dental and medical equipment distributor. Interactive canvas particle field, scroll-sequenced hero, and a masonry gallery of clinical installations — every animation written from scratch, no libraries.",
    "topFeatures": [
      "Interactive canvas cursor field with compositing-based reveal masking",
      "Scroll-choreographed sticky hero with reversible multi-phase reveals",
      "Responsive masonry installation gallery with custom keyboard-navigable lightbox"
    ],
    "technologyTags": ["HTML5 Canvas", "Vanilla JavaScript", "CSS3", "Responsive Design", "Custom Animation", "Glassmorphism", "Zero Dependencies"],
    "suggestedThumbnail": "The hero cursor-field still — dot halo mid-sweep against white, brand crimson dots reading as a distinctive graphic mark at card size. Crop tight enough to exclude the client wordmark. Fallback: the open lightbox if a photographic thumbnail suits the grid better.",
    "suggestedInteraction": "On hover or focus, swap the static thumbnail for a muted looping four-second clip of the cursor field responding to motion, with the card title overlaid, so the card itself demonstrates the interaction it advertises. On touch, autoplay the loop once when the card scrolls into view. Keep the loop under 1.5 MB and hold the still frame under prefers-reduced-motion."
  },
  "ownerQuestions": [
    "Did WebLite build this site, or inherit and extend it? Several early commits carry non-descriptive messages suggesting more than one contributor.",
    "Was the legacy WordPress site also WebLite's work, or a predecessor's? This determines whether the case study can be framed as a redesign WebLite owns end to end.",
    "Which specific parts did WebLite author versus receive — particularly the canvas dot field, the React component, and the copywriting?",
    "Was the React DotField component built for this project or brought in from a WebLite component library? If it is reusable internal tooling, that is worth saying.",
    "Is the client's identity permitted to be public, or must the anonymised version be used?",
    "Are screenshots of the site permitted publicly?",
    "Are the installation photographs cleared for publication? They depict third-party institutional facilities — did the client obtain rights, and do those rights extend to WebLite's portfolio?",
    "Is there permission to display the institutional and manufacturer logos, or should they be blurred?",
    "Do the four team members consent to their photographs and names appearing in WebLite's portfolio? If not, that section must be excluded entirely.",
    "What problem did the client originally want solved? The repository shows what was built, never why.",
    "What was the project timeline, and what was the team size?",
    "Was there a defined brief or scope document, and did the delivered site meet it?",
    "Were branding, logo and colour palette supplied by the client or created by WebLite? If WebLite set the colour system, that belongs in the design section.",
    "Who supplied the installation photography and the team headshots?",
    "Is the site currently live, and at what URL? No deployment configuration exists in the repository.",
    "Are the forms meant to be functional? No form submits anywhere today, so every lead and job application is silently lost. Is a backend planned, out of scope, or was this overlooked?",
    "Was the empty catalogue section cut from scope, or is a product catalogue still planned?",
    "Was dark mode cut from scope? The full token set and toggle styling exist but nothing activates them.",
    "Are the navigation-link mismatches and swapped logo alt text known issues?",
    "Is the archived legacy page intentionally retained as a reference, or should it be removed? Either way the API key inside it needs rotating.",
    "Did the project produce measurable business results — enquiry volume, ranking changes, engagement? Nothing in the repository speaks to outcomes and none will be claimed without evidence.",
    "Are client testimonials available? The only testimonial in the repository is unedited demo content from the commercial theme and must never be used.",
    "Should this be positioned as a design-led project, an engineering-led project, or a rebuild story? The repository supports all three framings and the choice affects which visuals lead.",
    "Is there budget or appetite to fix the catalogued defects before publishing? Roughly a day of work would materially raise this from a Standard to a Featured project."
  ],
  "evidenceSummary": {
    "verified": [
      "Three static pages with no framework, build system or package.json",
      "No backend, database, authentication, CMS or e-commerce",
      "Canvas 2D particle field with composite masking, spring easing, DPR capping and pointer gating",
      "250vh sticky hero with hysteresis-based scroll sequencing",
      "CSS multi-column masonry gallery of 31 JPEGs plus 6 undeliverable HEIC files",
      "Custom lightbox with keyboard navigation, counter, wrap-around and source-array rebuilding",
      "Two infinite CSS marquees, animated accordions, glass cards, full-screen mobile navigation",
      "Design tokens, typography pairing and a single shared easing curve across all motion",
      "Dark-theme tokens defined but unreachable — no toggle exists",
      "Orphan React DotField component that cannot execute in this repository",
      "Legacy WordPress 6.1.3 and Avantage 2.2.2 page capture committed alongside roughly 130 supporting files",
      "Hardcoded Google Maps API key in the legacy file",
      "All catalogued defects confirmed against specific files and lines"
    ],
    "inferred": [
      "The engagement was a redesign replacing the WordPress site — the legacy capture was committed first, the new site was built on top, and the same brand copy and team carried across",
      "The React component was prototyped first and hand-ported to vanilla to keep the site dependency-free",
      "Primary business goals are credibility, lead generation, delivery proof and recruitment, read from CTA prominence, section ordering and copy",
      "The empty catalogue section and unreachable dark mode represent either cut scope or unfinished work"
    ],
    "needsOwnerConfirmation": [
      "Whether WebLite authored the work and which parts",
      "Client permission for attribution, screenshots, photography and third-party logos",
      "Consent of the four named individuals whose photographs appear",
      "Original brief, timeline, team size and scope",
      "Whether the site is live and where it is hosted",
      "Whether non-functional forms are intended, planned or overlooked",
      "Whether the catalogue section and dark mode were cut from scope",
      "Any measurable business outcomes or genuine testimonials"
    ]
  }
}
```

---

*Dossier generated from static analysis of the repository at commit `fc3bae5`. No files were modified, executed, or installed during analysis; the only file created is this one. Nothing in this document was inferred from the README, which contains only the project name.*
