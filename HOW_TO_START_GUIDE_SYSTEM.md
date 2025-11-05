# How to Start a Vending Machine Business - City Guide System

## Overview

This system creates city-specific "How to Start a Vending Machine Business" guide pages that integrate seamlessly with your vending course. Each page provides:

- Step-by-step guidance for starting a vending business in that specific city
- Local permit and licensing requirements
- Startup cost breakdowns
- Best location recommendations
- City-specific demand drivers and neighborhoods
- FAQ section
- Integration with your VendingCourse component
- Links to browse vending locations in that city

## Directory Structure

```
src/app/how-to-start-a-vending-machine-business/
├── [slug]/                    # Dynamic route (fallback)
│   └── page.tsx
├── jacksonville-florida/      # Example city page
│   ├── page.tsx
│   └── pageClient.tsx
├── miami-florida/
│   ├── page.tsx
│   └── pageClient.tsx
└── ... (more cities)
```

## Creating New City Pages

### Method 1: Single City

```bash
node scripts/create_how_to_start_city_pages.js <city-slug> <CityName> <StateName>
```

**Example:**
```bash
node scripts/create_how_to_start_city_pages.js miami-florida Miami Florida
```

### Method 2: Batch Creation

Edit `scripts/create_how_to_start_batch.js` to add cities, then run:

```bash
node scripts/create_how_to_start_batch.js
```

The batch script includes pre-configured cities for:
- Florida (Miami, Tampa, Orlando, etc.)
- Texas (Houston, Dallas, Austin, etc.)
- California (Los Angeles, San Francisco, San Diego, etc.)
- Other major cities across the US

## Customizing City Data

### Default Data

New cities use generic templates for:
- Permit information
- Demand drivers
- Neighborhoods

### Adding City-Specific Data

Edit `scripts/create_how_to_start_city_pages.js` and add to the `cityInfo` object:

```javascript
const cityInfo = {
  'miami-florida': {
    permitInfo: {
      salesTax: 'Florida requires...',
      healthPermit: 'Contact Miami-Dade...',
      businessLicense: 'Register your LLC...',
      additionalNotes: 'Special considerations...'
    },
    demandDrivers: [
      'Port of Miami and cruise terminals',
      'Downtown office towers',
      // ... more specific drivers
    ],
    neighborhoods: [
      'Downtown Miami',
      'Brickell',
      'Wynwood',
      // ... more neighborhoods
    ]
  }
};
```

Then regenerate the page using the single city script.

## Page Features

### 1. Hero Section
- Eye-catching gradient header
- City name prominently displayed
- CTA buttons for vending course and step-by-step guide

### 2. Quick Overview
- 4 key metrics: startup cost, revenue potential, ROI timeline, ideal location size
- Visual icons for each metric

### 3. Step-by-Step Guide
- 6 detailed steps to launch a vending business
- City-specific guidance where applicable
- Icon-based visual hierarchy

### 4. Permits & Compliance
- Sales tax permit requirements
- Health permit details
- Business registration info
- Additional local considerations

### 5. Startup Costs Breakdown
- Itemized cost list
- Total estimated range
- Clear pricing expectations

### 6. Best Locations
- High-demand target markets specific to the city
- Key neighborhoods and areas
- Pro tips for location selection

### 7. Vending Course Integration
- Full VendingCourse component
- Highlights your comprehensive business course
- Gumroad purchase link

### 8. FAQ Section
- 8 common questions
- City-specific answers where relevant
- Covers permits, costs, locations, profit potential

### 9. CTA Section
- Two clear calls to action:
  - Get the Vending Course
  - Browse [City] Locations

## SEO Optimization

Each page includes:
- Dynamic metadata (title, description, keywords)
- Open Graph tags for social sharing
- Twitter card meta tags
- Canonical URL
- Proper robots directives
- Breadcrumb navigation

**Example metadata:**
```
Title: How to Start a Vending Machine Business in Jacksonville, Florida (2025 Guide)
Description: Complete guide to starting a vending machine business in Jacksonville, FL...
URL: /how-to-start-a-vending-machine-business/jacksonville-florida
```

## Sitemap Integration

The sitemap (`src/app/sitemap.ts`) automatically includes:
- All created "How to Start" city pages
- Guide index page
- Only includes pages that actually exist (filtered)

The system scans the directory and only adds pages with `page.tsx` files to prevent 404s.

## Linking Structure

### From Guide Index
The guide directory page (`/guide/pageClient.tsx`) includes an expandable directory of all states and cities with links to each "How to Start" page.

### From City Pages
Each "How to Start" page links back to:
- Homepage
- Guide index
- "How to Start" main page
- Vending leads for that city
- Vending course (Gumroad)

### Breadcrumb Navigation
```
Home / Guides / How to Start / [City, State]
```

## Design System

The pages use your existing design tokens:
- **Colors:** Navy, Coral, Charcoal, Stone, Cream, Warm White
- **Typography:** Playfair Display for headings, system fonts for body
- **Components:** VendingCourse, Header, Footer
- **Icons:** HeroIcons outline set
- **Animations:** Framer Motion for scroll reveals

## Content Strategy

### Voice & Tone
- Professional but approachable
- Action-oriented
- City-specific where possible
- Educational and helpful

### Call to Action Hierarchy
1. **Primary:** Get the Vending Course (Gumroad)
2. **Secondary:** Browse Vending Locations
3. **Tertiary:** View Step-by-Step Guide

## Maintenance

### Adding New Cities
Run the batch script quarterly to add new cities as your vending-leads and vending-services pages expand.

### Updating Content
To update content across all pages, modify the templates in:
- `scripts/create_how_to_start_city_pages.js`
- Then regenerate affected pages

### Quality Assurance
Before deploying new pages:
1. ✅ Check metadata (title, description)
2. ✅ Verify city-specific data accuracy
3. ✅ Test all links
4. ✅ Review mobile responsiveness
5. ✅ Confirm Gumroad link works
6. ✅ Check breadcrumb navigation

## Analytics & Tracking

Recommended events to track:
- Page views by city
- Vending course CTA clicks
- Browse locations CTA clicks
- Scroll depth
- Time on page

## Next Steps

1. **Review Jacksonville page:** `/how-to-start-a-vending-machine-business/jacksonville-florida`
2. **Test locally:** Verify all links and CTAs work
3. **Create more cities:** Run the batch script for your priority markets
4. **Customize city data:** Add specific details for major markets
5. **Deploy:** Push to production and monitor performance

## Files Created

- ✅ `src/app/how-to-start-a-vending-machine-business/jacksonville-florida/page.tsx`
- ✅ `src/app/how-to-start-a-vending-machine-business/jacksonville-florida/pageClient.tsx`
- ✅ `scripts/create_how_to_start_city_pages.js`
- ✅ `scripts/create_how_to_start_batch.js`
- ✅ Updated `src/app/sitemap.ts`

## Support

The system is designed to scale to hundreds of cities. Each page is:
- Fully SEO-optimized
- Mobile-responsive
- Fast-loading
- Conversion-focused

---

**Ready to scale your vending guide content!** 🚀

