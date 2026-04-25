# Artifice Website Redesign - Developer Handoff

## Goal
Build a simple, clear, fundraising-ready website that helps visitors understand Artifice and take action quickly.

## Core Priorities
1. Clear messaging
2. Visible donation/support flows
3. Lightweight CMS/editability
4. Fast mobile performance
5. Low-maintenance structure

## Suggested Stack
- Frontend: Next.js with static-first rendering
- CMS: Notion, Sanity, or MDX for fast v1
- Forms: Tally, Typeform, or simple backend form endpoint
- Payments:
  - Primary donation flow: off-site donor platform link
  - Recurring support: same off-site donor platform recurring link
  - Subscription: native newsletter capture plus Substack paid tier link
- Analytics:
  - Plausible or GA4
  - Track donate clicks, contact submissions, subscription clicks, event clicks

## Global Requirements
### Navigation
- Home
- About
- Programs
- Events
- Art Index
- Support
- Subscribe
- Persistent Donate button

### Footer
- Short mission text
- Donate
- Subscribe
- Contact
- Social links
- Newsletter/Substack links

### Responsive
- Mobile-first layout
- CTA buttons visible without excessive scrolling
- Donation CTA prioritized in mobile navigation

### Accessibility
- Semantic headings
- Alt text support
- Color contrast compliance
- Keyboard-accessible navigation
- Form labels and accessible validation states

### Performance
- Optimize and lazy-load images
- Avoid heavy animation
- Prefer static rendering and cached assets where possible

## Page Requirements
### Home
#### Modules
- Hero
- What we do
- Why Artifice
- Current focus
- Support pathways
- Social proof / momentum
- Footer CTA

#### Functional Needs
- Configurable CTA buttons
- Editable featured content blocks
- Editable hero image/documentation modules

### About
#### Modules
- Mission
- Vision
- Why now
- Team
- Contact

#### Functional Needs
- Editable team section
- Optional advisor section later

### Programs
#### Modules
- Overview
- Program categories
- Support CTA per program line

#### Functional Needs
- Reusable content blocks
- Ability to add/change program types later

### Events
#### Modules
- Upcoming
- Past
- Event cards

#### Functional Needs
- Event title
- Date
- Location
- Short description
- CTA link
- Optional image

### Art Index
#### Modules
- Explainer
- Why it matters
- Why support it
- Inquiry CTA

#### Functional Needs
- Static page acceptable for v1

### Support
#### Modules
- Donation options
- Subscription support
- Institutional support
- Advisory/board inquiry
- Contact form

#### Functional Needs
- Donation link (off-site)
- Recurring donation link (off-site)
- Inquiry form
- Optional downloadable deck later

### Subscribe
#### Modules
- Why subscribe
- What supporters get
- CTA to paid tier
- Relation to broader mission

## CMS Content Model
### Site Settings
- Nav links
- Footer copy
- Donate URL
- Recurring donate URL
- Subscribe URL
- Newsletter form URL
- Contact email
- Social links

### Pages
- Title
- Slug
- SEO title
- SEO description
- Body modules

### Events
- Title
- Date
- Status (upcoming/past)
- Description
- CTA label
- CTA URL
- Image

### Team Members
- Name
- Role
- Bio
- Image

### Homepage Featured Items
- Title
- Description
- Image
- Link

## Analytics Events
Track:
- `donate_button_click`
- `subscribe_click`
- `partner_inquiry_submit`
- `contact_submit`
- `event_click`
- `homepage_cta_click`

## MVP Definition
Launch with:
- 7 pages
- Editable homepage modules
- Working off-site donation and recurring donation links
- Working support/contact form
- Basic SEO metadata on all pages
- Analytics event tracking wired
- Mobile-ready responsive layout

## Open Questions (Tracked for Later)
- Should donation eventually move on-site (Stripe) after v1?
- Should Events stay manually updated or become CMS-driven immediately after launch?
- Does Art Index need an evolving data layer in phase 2?

## Recommendation
Do not overengineer v1. Ship a clean, legible site with strong support CTAs, straightforward CMS control, and fast performance.
