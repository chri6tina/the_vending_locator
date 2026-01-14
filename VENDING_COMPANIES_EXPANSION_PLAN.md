# Vending Companies Expansion Plan

## Goal
Expand from 6 placeholder pages to hundreds of real vending company pages with verified, researched data.

## Research Strategy

### Data Sources (Priority Order)
1. **Google Maps API / Places API**
   - Search: "vending machine companies [city]"
   - Search: "vending services [city]"
   - Search: "office vending [city]"
   - Get: Business name, address, phone, website, reviews, hours

2. **Yelp API**
   - Search vending companies by city
   - Get ratings, reviews, contact info

3. **Yellow Pages / Superpages**
   - Business directory searches
   - Phone numbers and addresses

4. **BBB (Better Business Bureau)**
   - Verified business listings
   - Ratings and accreditation

5. **State Business Registrations**
   - Verify business licenses
   - Get official business names

6. **Company Websites**
   - Verify existence
   - Extract service areas
   - Get machine types offered

### Required Company Data Fields

```typescript
interface VendingCompany {
  // Basic Info
  name: string                    // Official business name
  slug: string                    // URL-friendly slug
  city: string
  state: string
  stateAbbr: string
  
  // Contact Info
  address: string                 // Full street address
  phone?: string                  // Primary phone number
  website?: string                // Company website URL
  email?: string                  // Contact email (if public)
  
  // Business Details
  description: string             // What they do
  services: string[]              // e.g., ["Snack Machines", "Beverage Machines", "Coffee Service"]
  serviceArea: string[]           // Cities/areas they serve
  machineTypes: string[]          // Types of machines they offer
  
  // Verification
  verified: boolean               // Manually verified?
  verifiedDate?: string           // When verified
  source: string                  // Where data came from
  
  // Social Proof
  rating?: number                 // Google/Yelp rating (1-5)
  reviewCount?: number            // Number of reviews
  yearsInBusiness?: number        // Years operating
  
  // Additional
  specialties?: string[]          // e.g., ["Office Break Rooms", "Healthcare Facilities"]
  revenueShare?: string           // e.g., "50/50 split" or "Commission-based"
  minimumCommitment?: string       // e.g., "No minimum" or "12 months"
}
```

## Implementation Steps

### Phase 1: Research & Data Collection (Manual Start)
1. **Start with Top 50 Cities**
   - Focus on major metros first
   - Use Google Maps manually to find companies
   - Create CSV/spreadsheet with verified data

2. **Data Collection Template**
   ```
   City, State, Company Name, Address, Phone, Website, Services, Rating, Notes
   ```

3. **Verification Checklist**
   - [ ] Company exists (Google Maps listing)
   - [ ] Phone number works (test call or verify format)
   - [ ] Website exists and is active
   - [ ] Company actually does vending (not just related business)
   - [ ] Service area includes target city
   - [ ] Business is still active (not closed)

### Phase 2: Script Development
1. **Create Research Script**
   - Use Google Places API (requires API key)
   - Or scrape Google Maps (respectful, rate-limited)
   - Validate and clean data

2. **Create Page Generator**
   - Template based on verified company data
   - Generate page.tsx and pageClient.tsx
   - Include SEO optimization

### Phase 3: Page Structure

Each company page should include:
- Company name and location
- Contact information (phone, address, website)
- Services offered
- Service area coverage
- Machine types available
- Ratings/reviews (if available)
- "Request Quote" CTA
- Related companies in same city
- Link to city's vending-leads page

## Quality Standards

### Must Have (Required)
- ✅ Real, verified business name
- ✅ Valid address (can verify on Google Maps)
- ✅ Working phone number OR website
- ✅ Confirmed they offer vending services
- ✅ Service area includes the city

### Should Have (Preferred)
- ⭐ Website URL
- ⭐ Google/Yelp rating
- ⭐ Years in business
- ⭐ Specific services listed
- ⭐ Machine types offered

### Nice to Have (Optional)
- 💡 Email address
- 💡 Social media links
- 💡 Customer reviews
- 💡 Revenue share details
- 💡 Minimum commitment info

## Research Tools & APIs

### Free Options
1. **Google Maps** (Manual)
   - Search and verify manually
   - Copy business details
   - Time-consuming but accurate

2. **Yelp** (Manual)
   - Search vending companies
   - Get ratings and reviews

### Paid Options (Better Scale)
1. **Google Places API**
   - $0.017 per request
   - Accurate, up-to-date data
   - Requires API key setup

2. **Yelp Fusion API**
   - Free tier available
   - Good for ratings/reviews

3. **DataForSEO Places API**
   - Alternative to Google
   - Good coverage

## Starting Strategy

### Week 1: Manual Research (Top 20 Cities)
- Pick 20 major cities
- Manually research 3-5 companies per city
- Create verified dataset
- Build page templates

### Week 2: Script Development
- Create data collection script
- Build page generator
- Test on verified data

### Week 3: Scale Up
- Expand to 50 cities
- Use script for data collection
- Manual verification spot-checks

### Week 4: Full Rollout
- Expand to all cities with vending-leads pages
- Automated page generation
- Quality assurance checks

## Example Research Process

For "Austin, Texas":

1. **Google Maps Search**: "vending machine companies Austin TX"
   - Find: "Austin Vending Services"
   - Verify: Has Google listing, phone, website
   - Check: Website confirms vending services
   - Note: Serves Austin metro area

2. **Yelp Search**: "vending Austin"
   - Find: "Central Texas Vending"
   - Verify: Active business, has reviews
   - Check: Services include office vending

3. **Website Research**
   - Visit company websites
   - Extract service areas
   - Note machine types
   - Get contact forms/emails

4. **Data Entry**
   - Add to spreadsheet
   - Verify all fields
   - Mark as verified

## Next Steps

1. **Create Research Spreadsheet**
   - Template with all fields
   - Start with 5 cities manually

2. **Build Page Template**
   - Based on verified company structure
   - Include all required sections

3. **Create Generator Script**
   - Reads verified data
   - Generates pages
   - Validates data quality

4. **Start Research**
   - Begin with major metros
   - Verify each company
   - Build quality dataset

---

**Key Principle**: Quality over quantity. Better to have 100 verified companies than 1000 unverified ones.
