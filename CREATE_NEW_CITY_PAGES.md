# How to Create New City Pages

This guide explains how to quickly create new city pages to increase your locations.

## Quick Start

### Option 1: Using the Node Script (Recommended)

```bash
# Create a single city page
node scripts/create_specific_city_pages.js <city-slug>

# Examples:
node scripts/create_specific_city_pages.js orlando-florida
node scripts/create_specific_city_pages.js phoenix-arizona
node scripts/create_specific_city_pages.js seattle-washington
```

### Option 2: Using the Helper Scripts

**On Mac/Linux:**
```bash
chmod +x scripts/create_new_city.sh
./scripts/create_new_city.sh orlando-florida
```

**On Windows:**
```cmd
scripts\create_new_city.bat orlando-florida
```

## City Slug Format

City slugs should follow this format: `city-state`

Examples:
- ✅ `orlando-florida`
- ✅ `phoenix-arizona`
- ✅ `seattle-washington`
- ✅ `boston-massachusetts`
- ❌ `orlando` (missing state)
- ❌ `Orlando-Florida` (wrong casing)

## What Gets Created

When you run the script, it creates:

1. **Directory Structure:**
   ```
   src/app/vending-leads/<city-slug>/
   ├── page.tsx (the main page file)
   └── head.tsx (canonical URL)
   ```

2. **Page Features:**
   - ✅ Professional Tyler-style template
   - ✅ Hero section with city-specific data
   - ✅ Active users counter
   - ✅ Social proof elements
   - ✅ Business landscape section
   - ✅ Pricing table integration
   - ✅ Hot leads section
   - ✅ Vending course section
   - ✅ Comprehensive FAQ section
   - ✅ Mobile-responsive design
   - ✅ SEO-optimized

## Auto-Generated Content

The script automatically generates:

1. **City Data:**
   - Population estimates
   - Business counts
   - Industry numbers
   - Verified locations
   - Rating

2. **Business Landscape:**
   - Healthcare opportunities
   - Education institutions
   - Manufacturing
   - Retail locations
   - Office buildings
   - Transportation hubs

3. **FAQs:**
   - Location types
   - Lead delivery time
   - Market advantages
   - Support options
   - Industry best practices
   - Customization options
   - ROI expectations

## Customizing City-Specific Data

After creating a city page, you can customize the city data:

```typescript
const cityData = {
  name: 'Orlando',
  state: 'Florida',
  population: '309,154',
  businesses: '45,000+',
  industries: '12',
  verifiedLocations: '300-500',
  rating: '4.8/5',
  description: 'Orlando is a thriving tourism and entertainment hub...',
  majorEmployers: [
    'Walt Disney World',
    'Universal Studios',
    'AdventHealth Orlando',
    'Lockheed Martin',
    'Orlando Health'
  ]
}
```

## Multiple Cities at Once

You can create multiple city pages in one command:

```bash
node scripts/create_specific_city_pages.js orlando-florida phoenix-arizona seattle-washington
```

## Bulk Creation

For creating many cities at once, create a list file:

```bash
# Create cities.txt with one city per line:
# orlando-florida
# phoenix-arizona
# seattle-washington

# Then run:
cat cities.txt | xargs -I {} node scripts/create_specific_city_pages.js {}
```

## Verification

After creating city pages, verify they work:

1. **Check the file exists:**
   ```bash
   ls src/app/vending-leads/<city-slug>/page.tsx
   ```

2. **Test locally:**
   ```bash
   npm run dev
   # Visit: http://localhost:3000/vending-leads/<city-slug>
   ```

3. **Check for errors:**
   ```bash
   npm run build
   ```

## Template Compliance

All created pages follow the Tyler-style template with:
- Minimal, clean design
- Consistent color scheme (navy, warm whites)
- Professional business focus
- All required sections
- SEO optimization
- Mobile responsiveness

## Tracking New Cities

New city pages are automatically tracked in:
- `NEW_CITY_PAGES.txt` - List of new page files
- `NEW_CITY_PAGES.md` - Documentation

## Next Steps After Creation

1. **Customize Data:**
   - Update population, businesses, industries
   - Add city-specific major employers
   - Customize business landscape descriptions

2. **SEO Enhancement:**
   - Add city-specific keywords
   - Optimize meta descriptions
   - Include local landmarks

3. **Test & Deploy:**
   - Run build to check for errors
   - Test all page sections
   - Deploy to production

## Need Help?

If you encounter any issues:
1. Check the city slug format
2. Ensure the directory doesn't already exist
3. Verify Node.js is installed
4. Check for permission errors

## Examples of Popular Cities to Add

Consider adding these high-traffic cities:

**Florida:**
- `orlando-florida`
- `tampa-florida`
- `jacksonville-florida`

**California:**
- `san-jose-california`
- `oakland-california`
- `sacramento-california`

**Texas:**
- `houston-texas`
- `san-antonio-texas`
- `fort-worth-texas`

**New York:**
- `buffalo-new-york`
- `rochester-new-york`
- `albany-new-york`

Happy city page creating! 🎉

