# ST-SPACE Website Implementation Plan

## Product direction

Build a complete, production-ready corporate website for ST-SPACE Facilities Management Services using the supplied repository assets and verified company information. The site should position ST-SPACE as a reliable facilities, property and project-support partner serving commercial, residential and institutional spaces in Ghana, with qualified enquiries as the primary conversion goal.

## Design system

### Candidate styles

- **Editorial Operations Ledger** (0.05): premium facilities-management editorial design with architectural scale, thin rules, dense utility labels and measured gold accents.
- **Monolithic Corporate Grid** (0.07): heavier engineering-company presentation with modular panels and bold block typography.
- **Quiet Hospitality Utility** (0.06): calmer, more spacious property-services presentation with softer imagery and restrained interface chrome.

**Chosen style: Editorial Operations Ledger.**

- **Design movement:** premium international facilities-management and engineering editorial design, translated for a Ghanaian operating context.
- **Core principles:** command attention with scale; show operational credibility through real supplied imagery; use structure before decoration; make every page lead toward a consultation.
- **Color philosophy:** near-black and charcoal create authority and technical focus; metallic gold signals the ST-SPACE identity and highlights decisions without turning the page into a novelty gold theme; white carries the information hierarchy.
- **Layout paradigm:** asymmetric two-column compositions, offset image crops, wide statement bands and content rails instead of centered card grids.
- **Signature elements:** thin gold rules; numbered operational labels; circular “space / priority” marks echoing the supplied flyer without reproducing it.
- **Interaction philosophy:** purposeful motion only—navigation, focus, hover and image transitions should feel precise and calm, with reduced-motion support.
- **Animation:** use CSS transitions for links, buttons and image crops; no autoplay video backgrounds; videos are opt-in and loaded with metadata only.
- **Typography system:** Manrope for display and navigation; Inter for body copy; uppercase labels with generous tracking; short, assertive headlines.
- **Brand essence:** a dependable facilities partner for owners, operators and institutions who need their spaces safe, efficient and ready to perform. Personality: measured, capable, responsible.
- **Brand voice:** direct, specific and operational. Example lines: “We manage the conditions that keep your work moving.” / “Bring us the space. We’ll bring the operating discipline.”
- **Wordmark and logo:** use the supplied ST-SPACE logo derivative generated from the original repository artwork; preserve the supplied mark and wordmark rather than recreating it.
- **Signature brand color:** metallic gold `#D99B20`, with bright gold `#F5BC38` reserved for emphasis.

## Implementation approach

- Next.js 16 App Router, TypeScript, Tailwind CSS 4, React Server Components by default, `lucide-react` icons, `next/image`, `next/font` and a small number of client components for navigation and forms.
- Centralize public business information, navigation, services, industries, process steps and form configuration in `src/config/site.ts`. Application behavior must not depend on scattered literals or environment-variable settings.
- Use shared components for Header, Footer, WhatsApp action, breadcrumbs, section intros, service cards and CTA bands.
- Use static route content for all public pages so meaningful HTML and metadata are present on first response.
- Use a single validated `/api/quote` route as the real form submission mechanism. It validates the payload, rejects the honeypot, and forwards the enquiry to the configured FormSubmit AJAX endpoint. Document that the recipient must complete FormSubmit activation before live enquiries are delivered.
- Use only supplied/derived repository imagery. Treat project imagery as “supplied project imagery” unless approved client/project details are available; do not create names, testimonials or outcomes.
- Keep original uploaded files and the extracted archive in the repository; use optimized WebP derivatives and a compressed, opt-in video in the web experience.
- Add `sitemap.ts`, `robots.ts`, route-level metadata, Open Graph/Twitter metadata, Organization/WebSite JSON-LD and Service/BreadcrumbList JSON-LD where relevant. The public origin is kept in `src/config/site.ts` and is set only after the Vercel URL is verified.
- Add the Webdev route manifest at `public/manus-routes.json`, plus a custom 404 page and a no-store API route.

## Project structure

```text
src/
  app/
    api/quote/route.ts
    about/page.tsx
    contact/page.tsx
    industries/page.tsx
    projects/page.tsx
    request-a-quote/page.tsx
    services/page.tsx
    services/[service]/page.tsx
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Breadcrumbs.tsx
    ContactStrip.tsx
    Footer.tsx
    Header.tsx
    JsonLd.tsx
    QuoteForm.tsx
    SectionIntro.tsx
    ServiceCard.tsx
    WhatsAppButton.tsx
  config/site.ts
  lib/metadata.ts
public/
  images/{branding,hero,facilities,maintenance,projects}/
  videos/
  manus-routes.json
```

## Content and safety constraints

Use the flyer’s supplied positioning, services, differentiators, contacts and locations exactly where provided. Do not invent establishment dates, certifications, awards, client names, coordinates, opening hours, ratings, testimonials or quantified results. Preserve the supplied email address `ayusuffirstnmae@yahoo.com` and flag it for client confirmation in the final report.
