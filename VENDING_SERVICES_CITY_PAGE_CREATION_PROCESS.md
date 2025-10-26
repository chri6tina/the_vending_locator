# Vending Services City Page Creation Process

*Last Updated: October 26, 2025*

## Overview
This document provides a complete, step-by-step process for creating new vending-services city pages. Follow this process to ensure consistency, avoid errors, and maintain SEO optimization across all vending-services pages.

---

## Table of Contents
1. [Template Standards](#template-standards)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Process](#step-by-step-process)
4. [Script Template Structure](#script-template-structure)
5. [Common Errors and Solutions](#common-errors-and-solutions)
6. [Verification Checklist](#verification-checklist)
7. [Technical Details](#technical-details)

---

## Template Standards

### Official Template
**Template Location:** `src/app/vending-services/boca-raton-florida/pageClient.tsx`

This is the **gold standard** template that all new vending-services city pages should follow.

### Required Sections (In Order)
1. **Breadcrumb Navigation** - Home → Vending Services → State → City
2. **Hero Section** with:
   - City-specific headline
   - Description highlighting local industries
   - Contact form (name, phone, email, employees, zipcode)
   - "Get Free Services" submit button
   - Success modal popup after submission
3. **Benefits Section** - 3 value propositions
4. **How We Help** - 4-step process section
5. **What to Expect** - 6 detailed information cards
6. **FAQ Section** - 10-12 city-specific questions
7. **No Cities Subsection** - City pages don't show sub-cities (empty array)

### Design Standards
- **Color Palette**: Navy, Coral, Warm White, Stone, Chocolate (from globals.css)
- **Icons**: Heroicons only (no emojis)
- **Typography**: Playfair Display (headings), Inter (body)
- **Animations**: Framer Motion with consistent timing
- **Form**: Formspree integration (@https://formspree.io/f/xjkpkrak)

---

## Prerequisites

Before creating new city pages, ensure:

1. ✅ **states.ts is updated** with the cities for the target state
2. ✅ **City research is complete** - unique industries/features for each city
3. ✅ **State page exists** at `/vending-services/{state-slug}`
4. ✅ **Template is reviewed** - familiarize yourself with Boca Raton template

---

## Step-by-Step Process

### Step 1: Identify Cities to Create

Check `src/data/states.ts` for the target state's cities:

```typescript
{
  name: 'California',
  slug: 'california',
  cities: [
    { name: 'Los Angeles', slug: 'los-angeles-california' },
    { name: 'San Diego', slug: 'san-diego-california' },
    // ... etc
  ]
}
```

**Note:** These cities are already in states.ts for vending-leads. We'll use the same cities for vending-services.

### Step 2: Create Generation Script

Create a temporary script: `scripts/create_{state}_vending_services_cities.js`

**Script Requirements:**
- Read the Boca Raton (or latest city) template as base
- Include city-specific data (unique industries, employee ranges)
- Replace city/state variables dynamically
- Create both `page.tsx` and `pageClient.tsx` for each city
- Ensure proper escaping of apostrophes in FAQ content

### Step 3: Run the Script

```bash
node scripts/create_{state}_vending_services_cities.js
```

**Expected Output:**
```
✓ Created Los Angeles vending-services page
✓ Created San Diego vending-services page
...
✅ All XX vending-services city pages created!
```

### Step 4: Update State Page

Update the state page at `src/app/vending-services/{state-slug}/pageClient.tsx`:

**Find:**
```typescript
// State cities - will be populated when city pages are created
const cities: { name: string; slug: string }[] = [
  // Cities will be added here once pages are created
]
```

**Replace with:**
```typescript
// {State} cities with vending services
const cities = [
  { name: 'City Name', slug: 'city-slug' },
  { name: 'City Name 2', slug: 'city-slug-2' },
  // ... all cities
]
```

### Step 5: Add to Sitemap

Update `src/app/sitemap.ts`:

**Find the state entry:**
```typescript
{ url: 'https://www.thevendinglocator.com/vending-services/{state}', ... },
```

**Add city URLs after it:**
```typescript
{ url: 'https://www.thevendinglocator.com/vending-services/{state}', ... },

// {State} Vending Services Cities
{ url: 'https://www.thevendinglocator.com/vending-services/{city-slug}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
{ url: 'https://www.thevendinglocator.com/vending-services/{city-slug-2}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
// ... all cities
```

### Step 6: Update Main Vending Services Page

Update `src/app/vending-services/pageClient.tsx`:

**Find:**
```typescript
const statesWithServicesCities = ['florida'] // Add more as we create them
```

**Add the new state:**
```typescript
const statesWithServicesCities = ['florida', 'california', 'texas'] // Add more as we create them
```

### Step 7: Delete Temporary Script

```bash
rm scripts/create_{state}_vending_services_cities.js
```

### Step 8: Test Locally

1. Clear Next.js cache: `Remove-Item -Path ".next" -Recurse -Force`
2. Start dev server: `npm run dev`
3. Test sample pages:
   - Main page: `http://localhost:3001/vending-services`
   - State page: `http://localhost:3001/vending-services/{state-slug}`
   - City pages: `http://localhost:3001/vending-services/{city-slug}`
4. Verify:
   - No syntax errors
   - Forms submit correctly
   - Success modal appears
   - All links work
   - FAQs are unique and city-specific

### Step 9: Commit and Push

```bash
git add -A
git commit -m "Add XX {State} vending-services city pages with unique content"
git push origin main
```

---

## Script Template Structure

### Required City Data Object

```javascript
const cities = [
  { 
    name: 'City Name',
    slug: 'city-slug',
    feature: 'unique industry or characteristic',  // e.g., 'tech startups and corporate offices'
    employees: '30-50'  // typical employee range for businesses
  },
  // ... more cities
];
```

**IMPORTANT:** The script template handles the `userNames` array automatically - you do NOT need to include it in the city data objects.

### page.tsx Template

```typescript
import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in {City}, {State} - Get Free Installation & Service",
  description: "Get professional vending machine services for your {City}, {State} business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services {City}, vending machines {City} {State}, vending operators {City}, break room vending {City}",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/{city-slug}"
  },
  openGraph: {
    title: "Vending Machine Services in {City}, {State} - Get Free Installation & Service",
    description: "Get professional vending machine services for your {City}, {State} business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/{city-slug}",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in {City}, {State} - Get Free Installation & Service",
    description: "Get professional vending machine services for your {City}, {State} business."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function {CityName}ServicesPage() {
  return <PageClient />
}
```

### pageClient.tsx Template

Use the Boca Raton template as base, with these key replacements:

1. **Component Name:** `{CityName}{StateAbbrev}VendingServicesPage`
2. **City/State Variables:**
   ```typescript
   const cityDisplayName = '{City Name}';
   const stateDisplayName = '{State Name}'
   ```
3. **Hero Headline:** "Vending Machine Services in {City}, {State}"
4. **Hero Description:** Mention city's unique feature
5. **Breadcrumb:** Link to state page, then show city name
6. **FAQs:** Must be unique and city-specific (NOT generic)
7. **Sub-Cities:** Always empty array `const subCities: { name: string; slug: string }[] = []`

### Script Replacement Logic

Key replacements from Alabama template:

```javascript
// Replace state references
content = content.replace(/AlabamaVendingServicesPage/g, `{City}{State}VendingServicesPage`);
content = content.replace(/const stateDisplayName = 'Alabama'/g, 
  `const cityDisplayName = '{City}';\n  const stateDisplayName = '{State}'`);

// Replace hero content
content = content.replace(
  /Vending Machine Services in\{' '\}\s*<span className="text-navy">\{stateDisplayName\}<\/span>/g, 
  `Vending Machine Services in\{' '\}\n                    <span className="text-navy">{cityDisplayName}, {State}</span>`
);

// Update breadcrumb
content = content.replace(
  /<span className="text-charcoal font-medium">\{stateDisplayName\}<\/span>/g,
  `<Link href="/vending-services/{state-slug}" className="hover:text-navy transition-colors">\n                {State}\n              </Link>\n              <span>/</span>\n              <span className="text-charcoal font-medium">{cityDisplayName}</span>`
);

// Add feature mention in hero description
content = content.replace(
  /professional vending machine operators serving \{cityDisplayName\}, {State}\./g,
  `professional vending machine operators serving {cityDisplayName}'s {feature}.`
);
```

---

## Common Errors and Solutions

### Error 1: Syntax Error - Unescaped Apostrophes

**Error Message:**
```
Error: × Expected ',', got 's'
```

**Cause:** Apostrophes in FAQ questions/answers not escaped (e.g., "What's", "city's")

**Solution:**
- Always escape apostrophes in string literals: `What\'s`, `city\'s`
- Or use backticks for template literals (but ensure proper escaping)
- Run a final check for all unescaped apostrophes before committing

### Error 2: Duplicate Array Brackets

**Error Message:**
```
Error: × Expression expected
const subCities: { name: string; slug: string }[] = [][] = [
```

**Cause:** Script replacement creating `[][] =` instead of just `[] =`

**Solution:**
Replace:
```javascript
content = content.replace(/const cities.*\[\]/g, 'const subCities: { name: string; slug: string }[] = [][]')
```

With:
```javascript
content = content.replace(/const cities.*\[\]/g, 'const subCities: { name: string; slug: string }[] = []')
```

### Error 3: MODULE_NOT_FOUND for webpack chunks

**Error Message:**
```
Module not found: Can't resolve './8948.js'
```

**Cause:** Next.js webpack cache out of sync after mass file creation

**Solution:**
```bash
Remove-Item -Path ".next" -Recurse -Force
npm run dev
```

### Error 4: 404s on City Pages

**Cause:** City links showing on main page but pages don't exist

**Solution:**
Ensure state is added to whitelist in `src/app/vending-services/pageClient.tsx`:
```typescript
const statesWithServicesCities = ['florida', 'california', 'texas']
```

### Error 5: Duplicate Content Issues

**Cause:** FAQs are too generic and similar across cities

**Solution:**
- Each city must have unique FAQ content
- Reference specific local industries, employers, neighborhoods
- Use city name throughout FAQ answers
- Vary question order and phrasing
- Add city-specific statistics or features

---

## Verification Checklist

Before committing, verify EACH city page has:

### File Structure
- [ ] `page.tsx` exists with correct metadata
- [ ] `pageClient.tsx` exists with correct component
- [ ] Both files in correct directory: `src/app/vending-services/{city-slug}/`

### Content
- [ ] City name appears in title and description
- [ ] Breadcrumb links correctly (Home → Vending Services → State → City)
- [ ] Hero has city-specific description
- [ ] FAQs are unique and city-specific (not copy-paste)
- [ ] No sub-cities showing (array is empty)
- [ ] Form submits to Formspree correctly
- [ ] Success modal appears after form submission

### Technical
- [ ] No syntax errors (apostrophes escaped)
- [ ] No duplicate array brackets
- [ ] Component name is unique
- [ ] cityDisplayName and stateDisplayName are correct
- [ ] All imports present

### SEO
- [ ] Canonical URL is correct
- [ ] Title is unique and city-specific
- [ ] Meta description is unique
- [ ] OpenGraph data is complete
- [ ] Added to sitemap.ts

### Integration
- [ ] State page updated with cities array
- [ ] Main vending-services page updated with state in whitelist
- [ ] All links tested (no 404s)
- [ ] Dev server runs without errors

---

## Technical Details

### File Paths
```
src/
  app/
    vending-services/
      page.tsx                    # Main directory page
      pageClient.tsx              # Main directory client
      {state-slug}/
        page.tsx                  # State page metadata
        pageClient.tsx            # State page client
      {city-slug}/
        page.tsx                  # City page metadata
        pageClient.tsx            # City page client
  data/
    states.ts                     # Shared state/city data
```

### Component Hierarchy
```
VendingServicesDirectory (main page)
├── StateVendingServicesPage (e.g., FloridaVendingServicesPage)
│   └── CityVendingServicesPage (e.g., MiamiFloridaVendingServicesPage)
```

### URL Structure
```
/vending-services                              # Main directory
/vending-services/{state-slug}                 # State page
/vending-services/{city-slug}                  # City page
```

### Form Integration
- **Provider:** Formspree
- **Endpoint:** https://formspree.io/f/xjkpkrak
- **Fields:** name, phone, email, employees, zipcode
- **Success:** Shows modal, hides form
- **Button Text:** "Get Free Services"

### State Management
```typescript
const [formSubmitted, setFormSubmitted] = useState(false)
const [isSubmitting, setIsSubmitting] = useState(false)
const [showSuccessModal, setShowSuccessModal] = useState(false)
```

### Styling Classes
- **Container:** `container mx-auto px-4`
- **Section:** `py-16 bg-warm-white border-t border-gray-200`
- **Heading:** `text-3xl font-playfair font-bold text-chocolate`
- **Button (Primary):** `bg-navy hover:bg-navy/90 text-white py-3.5 px-6 rounded-lg`
- **Button (Secondary):** `border border-navy text-navy hover:bg-navy/5`

---

## Example: Creating California Cities

### 1. Check states.ts
California already has cities defined for vending-leads, use those same cities.

### 2. Research City Features
- Los Angeles: entertainment industry and corporate offices
- San Diego: biotech and military installations
- San Francisco: tech startups and financial services
- etc.

### 3. Create Script
```javascript
const cities = [
  { name: 'Los Angeles', slug: 'los-angeles-california', feature: 'entertainment industry and corporate offices', employees: '50-100' },
  { name: 'San Diego', slug: 'san-diego-california', feature: 'biotech and military installations', employees: '30-75' },
  // ... etc
];
```

### 4. Run Script
```bash
node scripts/create_california_vending_services_cities.js
```

### 5. Update Files
- Update `/vending-services/california/pageClient.tsx` with cities array
- Add URLs to `sitemap.ts`
- Add 'california' to whitelist in main vending-services page

### 6. Test & Commit
```bash
Remove-Item -Path ".next" -Recurse -Force
npm run dev
# Test pages
git add -A
git commit -m "Add XX California vending-services city pages with unique content"
git push origin main
```

---

## Quick Reference

### Commands
```bash
# Create pages
node scripts/create_{state}_vending_services_cities.js

# Clear cache
Remove-Item -Path ".next" -Recurse -Force

# Test
npm run dev

# Commit
git add -A
git commit -m "Add XX {State} vending-services city pages"
git push origin main
```

### Files to Update (Every Time)
1. Create city pages via script
2. Update state page cities array
3. Update sitemap.ts
4. Update main page whitelist
5. Delete script
6. Test
7. Commit & push

---

*This process ensures consistency, prevents errors, and maintains SEO optimization across all vending-services city pages.*

