# Artificenyc.org Before/After Figma-Ready Spec

## Purpose
Design a simple, legible, fundraising-ready nonprofit website that answers three questions on every page:
- What is this?
- Why does it matter?
- What should I do next?

This document is a direct design handoff for v1.

## Before-State Audit (Current Live Site)
Reference baseline: [https://www.artificenyc.org/](https://www.artificenyc.org/)

### What is currently strong
- Distinct visual identity and mood.
- Clear evidence of cultural programming activity.
- Existing documentation and social links that can be reused as proof.

### Where clarity breaks
- Homepage language frames the org as "ECO SYSTEM / creative studio," not clearly as a nonprofit cultural organization.
- Primary nav does not prioritize support actions (no persistent Donate-first hierarchy).
- Messaging relies on insider terminology that reduces first-visit comprehension.
- No single clear funnel for donors, institutional supporters, or serious partners.

### Conversion friction (fundraising)
- Mission is not stated in direct, public-benefit language above the fold.
- Support paths are fragmented across generic contact and social destinations.
- There is no clear "support ladder" (donate, subscribe, partner, major support).

## Global Design Principles
- Prioritize clarity, legitimacy, and conversion over novelty.
- Keep hierarchy simple and consistent across all pages.
- Use strong typography, generous spacing, and clean editorial layouts.
- Use program documentation as proof, not decoration.
- Avoid experimental interaction patterns that reduce comprehension.

## Global Components
### Primary Nav
- Home
- About
- Programs
- Events
- Art Index
- Support
- Subscribe
- Persistent CTA: Donate

### Footer
- One-line mission statement
- Donate
- Subscribe
- Contact
- Social links
- Newsletter/Substack links

### CTA Hierarchy
- Primary: Donate
- Secondary: Explore Programs, Subscribe
- Tertiary: Partner With Us, Contact

## Responsive + Accessibility Requirements
- Mobile-first layout.
- Mobile nav keeps Donate highly visible.
- Semantic heading structure (one H1 per page).
- Keyboard-accessible navigation and controls.
- Alt text support on all meaningful images.
- Color contrast compliant.
- Form fields with explicit labels and clear error states.

## Homepage Spec
### Page Goal
Immediate comprehension plus direct support actions.

### Section 1: Hero
#### Content
- H1: clear one-sentence value proposition.
- Two-line subhead explaining programs, publishing, and shared resources.
- CTA 1: Donate.
- CTA 2: Explore Programs.
- CTA 3: Subscribe.

#### Layout
- Left: copy and buttons.
- Right: hero image or rotating program documentation.

#### Design Notes
- Keep text block short.
- All CTAs visible above fold on desktop and mobile.

### Section 2: What We Do
#### Goal
Show distinct but connected program lines.

#### Modules (4 cards)
- Public Programs
- Editorial
- Community
- Art Index

Each card includes title, 1-2 sentence description, and link.

### Section 3: Why Artifice
#### Goal
Frame long-term infrastructure vision beyond single events.

#### Content
- Short paragraph.
- Optional three-pillar row:
  - Artist-centered
  - Public-facing
  - Community-supported

### Section 4: Current Focus
#### Goal
Signal momentum and current activity.

#### Cards
- Public programming
- Interviews/editorial distribution
- Community town halls
- Art Index development

### Section 5: Support Pathways
#### Goal
Convert interest into clear action.

#### Support Tiles
- Make a donation
- Subscribe
- Fund a program
- Partner with us

Each tile includes one-line explanation plus CTA.

### Section 6: Credibility / Momentum
#### Goal
Build trust through proof.

#### Content Options (pick one for v1)
- Collaborator names/logos
- Recent artists
- Program metrics
- Featured documentation

### Section 7: Partner CTA
#### Goal
Capture institutional and larger support interest.

#### Content
- Headline for initiative-specific support.
- One short paragraph.
- CTA: Contact Us.

### Section 8: Footer
- Short mission line.
- Donate, Subscribe, Contact, Instagram, Substack.

## About Page Spec
### Page Goal
Establish legitimacy and organizational intent in plain language.

### Sections
1. Mission
2. Vision
3. Why now
4. How Artifice works
5. Team
6. Contact

### Functional Notes
- Team module should support easy additions and reordering.
- Advisor section can be toggled on later.

## Programs Page Spec
### Page Goal
Explain connected program model and why support matters.

### Sections
1. Intro (single framing paragraph)
2. Public Programs
3. Editorial / Interviews
4. Town Halls
5. Art Index
6. Support this work CTA

### Functional Notes
- Program blocks should be reusable and easy to expand.
- Add/edit program lines without layout changes.

## Events Page Spec
### Page Goal
Make event activity legible and current.

### Sections
1. Upcoming events
2. Past events
3. Documentation
4. Subscribe / Donate CTA band

### Event Card Fields (display)
- Title
- Date
- Location
- Short description
- CTA label + URL
- Optional image

## Art Index Page Spec
### Page Goal
Explain the resource clearly and invite aligned support.

### Sections
1. What it is
2. Why it matters
3. Why open access matters
4. Why support is needed
5. Inquiry CTA

### Functional Notes
- Static page is acceptable for v1.

## Support Page Spec
### Page Goal
Centralize all support paths and capture high-intent inquiries.

### Sections
1. Why support Artifice
2. One-time donations
3. Recurring support
4. Paid subscription
5. Institutional/program support
6. Advisory/board interest
7. Contact form

### Form Fields
- Name
- Email
- Organization
- Area of interest
- Message

## Subscribe Page Spec
### Page Goal
Convert lightweight interest into recurring support.

### Sections
1. Why subscribe
2. What subscribers receive
3. Paid tier link
4. How subscription supports the broader mission

## Figma Frame List (Desktop + Mobile)
- Home
- About
- Programs
- Events
- Art Index
- Support
- Subscribe
- Global components page (Nav, Footer, Buttons, Form elements, Event card, Support tile)

## Definition of Done for Design Handoff
- Seven page templates complete in desktop and mobile.
- All sections mapped with clear hierarchy and CTA priority.
- Global nav/footer are consistent across templates.
- Donate is visually persistent and never deprioritized.
- Components are reusable and named for developer handoff.
- Copy placeholders are production-ready, not lorem ipsum.

## v1 Constraint
Keep v1 intentionally simple:
- 6-7 pages max
- one clear donate path everywhere
- one clear serious-support contact path
- fast to launch and easy to maintain
