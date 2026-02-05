# SEO Roadmap (Living Document)

Last updated: 2026-02-04
Owner: The Vending Locator

## Goal
Make the current website best-in-class for Google SEO across all page types, with clear plans per template and local enrichment for city pages.

## Scope Overview (Templates)
We have different services and templates. Each has its own SEO strategy and requirements.

### 1) How-To-Start Guides
Template: `src/components/HowToStartCityTemplate.tsx`
Routes: `/how-to-start-a-vending-machine-business/[slug]`
Purpose: Top-of-funnel education, capture intent, promote course and hot leads.

### 2) Vending Leads (City)
Template: `src/components/VendingLeadsCityTemplate.tsx`
Routes: `/vending-leads/[slug]`
Purpose: Mid-funnel conversion to lead packages and location services.

### 3) Vending Services (City/State)
Templates:
- `src/components/VendingServicesCityTemplate.tsx`
- `src/components/VendingServicesStateTemplate.tsx`
Routes: `/vending-services/[slug]` and state variants
Purpose: Service discovery + leads.

### 4) Vending Companies (City)
Template: `src/components/VendingCompaniesCityTemplate.tsx`
Routes: `/vending-companies/[slug]`
Purpose: Directory-style pages, local discovery.

### 5) Tax Services / EIN & LLC
Templates:
- `src/app/tax-services/*`
- `src/app/ein-llc/*`
Purpose: Service conversion and compliance support.

### 6) Hot Leads Marketplace
Template: `src/components/HotLeadsMarketplace.tsx`
Routes: `/hot-leads`, `/marketplace`
Purpose: Direct lead sales and subscription.

### 7) Other Services
Examples: `vending-website-rental`, `bookkeeping-kpis`, etc.
Purpose: Specialized conversions.

## Roadmap (High Priority)

### A) Template Health (All)
- Ensure each template has unique, structured headings.
- Confirm canonical URLs and metadata per page.
- Add structured data where appropriate (FAQ, HowTo, Article, LocalBusiness).
- Enforce internal linking between related templates.
- Ensure pages load quickly and pass Core Web Vitals.

### B) City/Locale Enrichment (By Template)
- Build a consistent city data layer (permit notes, demand drivers, neighborhoods, seasonal notes, extra FAQs).
- Expand `src/data/cityInfo.ts` gradually with unique local content.
- Avoid thin pages: each city must contain unique local text beyond template defaults.

### C) Conversion Paths (By Template)
- Ensure a primary CTA + secondary CTA per page.
- Keep CTA labels consistent across templates but relevant to the template’s goal.
- Minimize friction in lead capture and subscription flows.

### D) Technical SEO
- XML sitemap coverage for all indexable routes.
- Robots and canonical rules verified.
- Fix any duplicate canonical or missing metadata issues.
- Ensure noindex for thin or duplicate test pages.

## Technical SEO & Tracking Plan

### 1) Indexation & Crawl
- Confirm all primary templates are in XML sitemap.
- Ensure canonical URLs are set on all city pages.
- Check for accidental noindex in any template.
- Validate robots rules for staging/test routes.

### 2) Structured Data
- How-To pages: Article + FAQ JSON-LD on all cities.
- Vending Leads: Product/Offer or Service schema where applicable.
- Company directory pages: LocalBusiness schema when data supports it.
- EIN/Tax Services: Service schema + FAQ.

### 3) Core Web Vitals
- Audit LCP/CLS on top pages.
- Avoid heavy client-only components above the fold.
- Defer non-critical animations below hero.

### 4) Internal Linking
- Each template links to related services (without mixing copy).
- Add “related city” links to avoid orphan city pages.

### 5) Analytics & Conversion Tracking
- Track CTA clicks by template.
- Track form submissions by template (hot leads, tax, contact).
- Track scroll depth on long-form guides.

### Tracking Status
- CTA tracking: TODO
- Form submission tracking: TODO
- Scroll depth tracking: TODO

## Baseline SEO Checklist (Per Template)
Use this checklist to audit each template and apply fixes consistently.

- Metadata: unique title, meta description, canonical URL, OG/Twitter tags.
- Heading structure: one H1, logical H2/H3 hierarchy.
- Internal links: at least 2-3 relevant cross-template links.
- Content depth: unique local info beyond template defaults.
- Structured data: FAQ/HowTo/Article/LocalBusiness where relevant.
- CTA clarity: primary + secondary CTA, above fold and near bottom.
- Performance: avoid heavy client work, ensure quick LCP/CLS.

## Audit Log (Template Baseline)
Status markers: TODO → IN PROGRESS → DONE.

### How-To-Start Guides
- Metadata review: IN PROGRESS
- Heading structure: TODO
- Structured data: TODO
- City enrichment gaps: TODO
- Internal linking: TODO

### Vending Leads (City)
- Metadata review: TODO
- Heading structure: TODO
- Structured data: TODO
- City enrichment gaps: TODO
- Internal linking: TODO

### Vending Services (City/State)
- Metadata review: TODO
- Heading structure: TODO
- Structured data: TODO
- City enrichment gaps: TODO
- Internal linking: TODO

### Vending Companies (City)
- Metadata review: TODO
- Heading structure: TODO
- Structured data: TODO
- City enrichment gaps: TODO
- Internal linking: TODO

### Tax Services / EIN & LLC
- Metadata review: TODO
- Heading structure: TODO
- Structured data: TODO
- Internal linking: TODO

### Hot Leads Marketplace
- Metadata review: TODO
- Heading structure: TODO
- Structured data: TODO
- Internal linking: TODO

## Detailed Template Plans

### 1) How-To-Start Guides
Goals:
- Rank for “how to start a vending machine business in [city]”.
- Capture email and lead interest.

Planned Updates:
- Expand `cityInfo` for each city (permits, demand drivers, neighborhoods, seasonal notes, unique FAQ).
- Add local-specific examples (top industries, known business zones).
- Add a short “local compliance checklist” block per city.
- Integrate JSON-LD for Article + FAQ across all cities.

### 2) Vending Leads (City)
Goals:
- Rank for “vending machine locations in [city]”.
- Drive lead package conversions.

Planned Updates:
- City-specific lead market stats and industries.
- Unique FAQs about placements and outreach for each city.
- Add “placement timeline” block and “results expectations”.

### 3) Vending Services (City/State)
Goals:
- Rank for “vending services in [city] / [state]”.
- Capture service inquiries.

Planned Updates:
- Local service footprint details and coverage notes.
- City-specific business types served.
- Customer testimonials and local trust signals.

### 4) Vending Companies (City)
Goals:
- Rank for “vending companies in [city]”.
- Provide credible directory-style content.

Planned Updates:
- Add local market overview and key industry hubs.
- Highlight service types offered (snack, beverage, micro-market).
- Add structured FAQ for vendor comparison.

### 5) Tax Services / EIN & LLC
Goals:
- Rank for compliance-related queries.
- Convert to service checkout.

Planned Updates:
- State-level fee details and timelines.
- Local compliance FAQs per state.
- Clarify scope and support levels.

### 6) Hot Leads Marketplace
Goals:
- Rank for “vending leads”, “vending locations for sale”.
- Drive lead subscription and purchases.

Planned Updates:
- Add structured data for product listings.
- Improve filtering and search relevance.
- Add trust badges and refund policy details.

## Metrics & Tracking
- Track organic traffic by template.
- Track conversion events by template (CTA clicks, subscriptions).
- Monitor keyword rankings for top cities.

## Next Actions (Start Here)
1. Create a baseline checklist for each template and audit top 25 pages.
2. Enrich 10 highest-traffic city pages with unique local content.
3. Add FAQ + Article structured data to all How-To pages.
4. Verify internal links between related templates.

## City/Locale Enrichment Plan (All Templates)
Purpose: reduce thin/duplicate risk by adding unique, local content per city/state.

### Data Sources (Internal Only)
- `src/data/cityInfo.ts` for how-to enrichment.
- Template-specific overrides (e.g., vending leads city overrides).
- Do NOT reuse copy across different services.

### Enrichment Fields (Minimum per City)
How-To:
- permitNotes
- demandDrivers (4+)
- neighborhoods/corridors (5+)
- seasonalNote
- extraFaqs (2+)

Vending Leads:
- market stats (population, businesses, industries)
- location type mix (office, healthcare, logistics, etc.)
- outreach notes and placement timeline
- FAQs (2+)

Vending Services:
- service footprint
- business types served
- response time / service cadence
- local trust signals

Vending Companies:
- local market overview
- service types offered
- vendor comparison FAQ (2+)

Tax/EIN & LLC:
- state fee/timeline details
- state compliance FAQ (2+)

### Batch Strategy
- Batch 1: top traffic cities (10)
- Batch 2: next 25 cities
- Batch 3: remaining cities by region

### Batch 1 Candidate List (Draft)
- how-to: jacksonville-florida, miami-florida, orlando-florida, houston-texas, dallas-texas
- vending-leads: miami-florida, houston-texas, atlanta-georgia
- vending-services: miami-florida, orlando-florida
- vending-companies: houston-texas, dallas-texas

### Progress Log (City Enrichment)
Status markers: TODO → IN PROGRESS → DONE.

Batch 1:
- how-to: jacksonville-florida (baseline) — DONE
- how-to: miami-florida — DONE
- how-to: orlando-florida — DONE
- how-to: houston-texas — DONE
- how-to: dallas-texas — DONE

Batch 2:
- how-to: tampa-florida — DONE
- how-to: atlanta-georgia — DONE
- how-to: chicago-illinois — DONE
- how-to: phoenix-arizona — DONE
- how-to: denver-colorado — DONE

Batch 3:
- how-to: new-york-new-york — DONE
- how-to: los-angeles-california — DONE
- how-to: san-diego-california — DONE
- how-to: las-vegas-nevada — DONE
- how-to: minneapolis-minnesota — DONE

Batch 4:
- how-to: boston-massachusetts — DONE
- how-to: san-francisco-california — DONE
- how-to: san-jose-california — DONE
- how-to: philadelphia-pennsylvania — DONE
- how-to: austin-texas — DONE

Batch 5:
- how-to: miami-beach-florida — DONE
- how-to: charlotte-north-carolina — DONE
- how-to: nashville-tennessee — DONE
- how-to: portland-oregon — DONE
- how-to: san-antonio-texas — DONE

Batch 6:
- how-to: baltimore-maryland — DONE
- how-to: detroit-michigan — DONE
- how-to: st-louis-missouri — DONE
- how-to: cleveland-ohio — DONE
- how-to: columbus-ohio — DONE

Batch 7:
- how-to: raleigh-north-carolina — DONE
- how-to: richmond-virginia — DONE
- how-to: pittsburgh-pennsylvania — DONE
- how-to: sacramento-california — DONE
- how-to: salt-lake-city-utah — DONE

Batch 8:
- how-to: cincinnati-ohio — DONE
- how-to: kansas-city-missouri — DONE
- how-to: indianapolis-indiana — DONE
- how-to: buffalo-new-york — DONE
- how-to: oklahoma-city-oklahoma — DONE

Batch 9:
- how-to: louisville-kentucky — DONE
- how-to: memphis-tennessee — DONE
- how-to: new-orleans-louisiana — DONE
- how-to: jackson-mississippi — DONE
- how-to: omaha-nebraska — DONE

Batch 10:
- how-to: hartford-connecticut — DONE
- how-to: charleston-south-carolina — DONE
- how-to: albuquerque-new-mexico — DONE
- how-to: tucson-arizona — DONE
- how-to: riverside-california — DONE

## Latest Progress
- Deployed: unified How-To template and multi-city enrichment batches 1–10.
- Updated checkout success copy for support guidance.

## Notes / Decisions Log
- Keep services separate; do not mix copy between templates.
- Jacksonville is the baseline for How-To styling and structure.
- Use `cityInfo.ts` as the primary source for local enrichment.
