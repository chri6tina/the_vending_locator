# Vending Companies Research Guide

## Overview
This guide helps you research and collect **REAL** vending company data to expand our directory from 6 placeholder pages to hundreds of verified company pages.

## Research Process

### Step 1: Choose a City
Start with major metropolitan areas. For example:
- Austin, Texas
- Houston, Texas  
- Dallas, Texas
- Phoenix, Arizona
- Los Angeles, California

### Step 2: Search for Companies

#### Google Maps Search
1. Go to Google Maps
2. Search: `"vending machine companies" [city] [state]`
3. Also try:
   - `"vending services" [city]`
   - `"office vending" [city]`
   - `"break room vending" [city]`

#### What to Look For
- ✅ Companies that specifically offer vending services
- ✅ Companies with Google Business listings
- ✅ Companies with websites
- ✅ Companies with phone numbers
- ✅ Companies with reviews/ratings

#### What to Avoid
- ❌ Companies that only sell machines (not service)
- ❌ Companies that are closed/permanently closed
- ❌ Companies with no contact information
- ❌ Companies that don't serve the target city

### Step 3: Verify Each Company

For each potential company, verify:

1. **Business Exists**
   - [ ] Has Google Maps listing
   - [ ] Business is active (not closed)
   - [ ] Has recent activity/reviews

2. **Contact Information**
   - [ ] Phone number exists and is valid format
   - [ ] OR website exists and is active
   - [ ] Address is complete and accurate

3. **Services Offered**
   - [ ] Website or listing confirms vending services
   - [ ] Serves the target city/area
   - [ ] Offers actual vending (not just related services)

4. **Additional Info** (if available)
   - [ ] Rating/reviews
   - [ ] Years in business
   - [ ] Types of machines offered
   - [ ] Service areas listed

### Step 4: Collect Data

Use the CSV template (`vending_companies_research_template.csv`) to record:

#### Required Fields
- **Company Name**: Official business name (exactly as listed)
- **City/State**: Target city and state
- **Address**: Full street address
- **Phone OR Website**: At least one must be present
- **Description**: 1-2 sentences about what they do
- **Services**: Comma-separated list (e.g., "Snack Machines, Beverage Machines, Coffee Service")
- **Service Areas**: Cities/areas they serve (must include target city)
- **Machine Types**: Types of machines offered
- **Source**: Where you found them (Google Maps, Yelp, etc.)
- **Verified**: Mark as TRUE only after verification

#### Optional Fields (Fill if Available)
- Email address
- Rating (1-5 stars)
- Review count
- Years in business
- Specialties
- Revenue share model
- Minimum commitment

### Step 5: Quality Checklist

Before marking a company as verified, ensure:

- [ ] Company name is accurate and complete
- [ ] Address can be verified on Google Maps
- [ ] Phone number format is correct (or website is valid)
- [ ] Company actually offers vending services (not just related)
- [ ] Service area includes the target city
- [ ] Business appears to be active
- [ ] At least 3 services listed
- [ ] At least 2 machine types listed

## Example Research Session

### City: Austin, Texas

**Search 1**: Google Maps → "vending machine companies Austin Texas"

**Found**: "Austin Vending Services"
- ✅ Has Google listing
- ✅ Address: 1234 Main St, Austin, TX 78701
- ✅ Phone: (512) 555-1234
- ✅ Website: https://austinvending.com
- ✅ Website confirms: Snack machines, beverage machines, coffee service
- ✅ Service area: Austin metro area
- ✅ Rating: 4.5 stars, 23 reviews
- ✅ Years in business: 8 years

**Data Entry**:
```
Company Name: Austin Vending Services
Address: 1234 Main St, Austin, TX 78701
Phone: (512) 555-1234
Website: https://austinvending.com
Description: Professional vending services for Austin area businesses, offering snack machines, beverages, and coffee service.
Services: Snack Machines, Beverage Machines, Coffee Service, Break Room Solutions
Service Areas: Austin, Round Rock, Cedar Park, Pflugerville
Machine Types: Snack Vending Machines, Beverage Vending Machines, Coffee Machines
Rating: 4.5
Review Count: 23
Years in Business: 8
Source: Google Maps
Verified: TRUE
```

## Research Tips

### Finding More Companies
1. **Check Related Businesses**: Look at "People also search for" on Google Maps
2. **Yelp Search**: Search Yelp for "vending" in the city
3. **Yellow Pages**: Use online directories
4. **LinkedIn**: Search for vending companies in the area
5. **Local Business Directories**: Check city-specific directories

### Verifying Information
1. **Cross-reference**: Check multiple sources (Google, Yelp, website)
2. **Call if Needed**: For important companies, verify phone works
3. **Check Website**: Visit company website to confirm services
4. **Look for Reviews**: Reviews can confirm they're active and provide services

### Common Issues to Watch For
- **Duplicate Listings**: Same company listed multiple times
- **Outdated Info**: Phone numbers or addresses that have changed
- **Wrong Category**: Business listed as vending but doesn't actually do it
- **Service Area Mismatch**: Company doesn't actually serve the target city

## Data Quality Standards

### Minimum Requirements (Must Have)
- ✅ Real company name
- ✅ Valid address (verifiable on Google Maps)
- ✅ Phone number OR website
- ✅ Confirmed vending services
- ✅ Service area includes target city
- ✅ At least 3 services listed
- ✅ At least 2 machine types listed

### Preferred (Should Have)
- ⭐ Website URL
- ⭐ Rating/reviews
- ⭐ Years in business
- ⭐ Email address

### Bonus (Nice to Have)
- 💡 Revenue share details
- 💡 Minimum commitment info
- 💡 Specialties listed
- 💡 Social media links

## Next Steps After Research

1. **Validate Data**: Run validation script on CSV
2. **Convert to JSON**: Convert CSV to JSON format
3. **Generate Pages**: Use JSON to generate company pages
4. **Review Pages**: Check generated pages for accuracy
5. **Deploy**: Push to production

## Resources

### Research Tools
- Google Maps: https://maps.google.com
- Yelp: https://www.yelp.com
- Yellow Pages: https://www.yellowpages.com
- BBB: https://www.bbb.org

### Search Queries
- `"vending machine companies" [city] [state]`
- `"vending services" [city]`
- `"office vending" [city]`
- `"break room vending" [city]`
- `"micro market" [city]`
- `"vending operator" [city]`

---

**Remember**: Quality over quantity. Better to have 50 verified companies than 500 unverified ones.
