# Artificenyc.org Website v1 PRD

## Product Summary
Artificenyc.org v1 is a fundraising-ready nonprofit website focused on immediate comprehension and clear action pathways. The product must make Artifice legible to first-time visitors and convert support intent into donations, subscriptions, and partner inquiries.

## Problem Statement
The current site experience is visually distinct but unclear for nonprofit fundraising:
- messaging reads as creative-studio language instead of public-benefit framing
- support actions are not prioritized
- donor and partner conversion paths are fragmented

## Goals
1. Clarify what Artifice is and why it matters.
2. Make support actions visible and easy on every page.
3. Launch a maintainable v1 with lightweight content editing.
4. Ensure strong mobile performance and accessibility.

## Non-Goals (v1)
- Complex custom CMS development
- Heavy animation or experimental UX patterns
- Art Index database platform buildout

## Target Users
- First-time visitors discovering Artifice
- Individual donors
- Institutional supporters and partners
- Community members tracking programs/events

## Information Architecture
- Home
- About
- Programs
- Events
- Art Index
- Support
- Subscribe

Global UI requirements:
- persistent primary CTA: `Donate`
- footer with mission line + Donate + Subscribe + Contact + socials + newsletter links

## Functional Requirements
### Home
- Hero with H1, subhead, CTAs (`Donate`, `Explore Programs`, `Subscribe`)
- What We Do (4 modules: Public Programs, Editorial, Community, Art Index)
- Why Artifice section
- Current Focus cards
- Support pathways tiles
- Credibility/Momentum module
- Partner CTA

### About
- Mission, Vision, Why Now, Team, Contact

### Programs
- Program overview
- Program line modules
- Support CTA per line

### Events
- Upcoming + Past sections
- Event cards with title/date/location/description/CTA/image

### Art Index
- Explainer, value proposition, support rationale, inquiry CTA

### Support
- One-time + recurring donation links (off-site)
- Subscription support
- Institutional support and advisory/board inquiry
- Contact form (Name, Email, Organization, Area of interest, Message)

### Subscribe
- Why subscribe
- What supporters get
- Native newsletter path + paid Substack path

## Content Requirements
- Use clear, direct, public-facing language.
- Avoid insider terminology on first-touch pages.
- Keep CTA vocabulary consistent across pages.
- Include higher-end homepage copy variant for funder-facing contexts.

## Integrations
- Donations: off-site donor platform links (one-time + recurring)
- Subscription: native newsletter capture + Substack paid tier
- Forms: Tally/Typeform or simple backend endpoint
- Analytics: Plausible or GA4

## CMS / Editability Requirements
Preferred: lightweight CMS or MDX-driven content.

Required editable entities:
- Site settings (nav, footer, URLs, contact, socials)
- Pages (title, slug, SEO title/description, modules)
- Events (title/date/status/description/CTA/image)
- Team members (name/role/bio/image)
- Homepage featured items (title/description/image/link)

## Analytics Events
- `donate_button_click`
- `subscribe_click`
- `partner_inquiry_submit`
- `contact_submit`
- `event_click`
- `homepage_cta_click`

## Accessibility Requirements
- Semantic heading structure (single H1 per page)
- Keyboard-accessible navigation and controls
- Accessible form labels and validation states
- WCAG-compliant color contrast
- Alt text support for meaningful media

## Performance Requirements
- Static-first rendering where possible
- Optimized images and lazy loading
- Minimal JS and no heavy animation dependencies

## Success Metrics
- Increase donation CTA click-through rate
- Increase subscription click-through rate
- Increase partner inquiry submissions
- Reduce bounce on homepage for first-time visitors

## MVP Acceptance Criteria
- All 7 pages shipped and responsive
- Persistent Donate CTA present and functional
- Off-site one-time and recurring donation links live
- Contact/support form live
- Analytics events firing for defined actions
- SEO title/description present for all pages
- Content and section structure matches approved specs

## Delivery Artifacts (Source Docs)
- `before-after-developer-handoff.md`
- `before-after-figma-spec.md`
- `before-after-full-copy.md`

## Recommended Build Approach
Keep v1 simple and fast:
1. Implement IA + global components.
2. Implement page templates and content modules.
3. Wire support paths and analytics.
4. QA for clarity, consistency, accessibility, and performance.
5. Launch and iterate from real usage data.
