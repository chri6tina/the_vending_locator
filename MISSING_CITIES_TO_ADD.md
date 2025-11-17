# Missing Major Cities - Vending Leads Pages

**Date:** Generated automatically  
**Total Missing:** 26 major cities

## Summary

These are major US cities (typically 50K+ population) that are **not yet** in `src/data/states.ts` and therefore don't have vending-leads pages created.

## Missing Cities by State

### Arizona (2 cities)
- **Yuma** (`yuma-arizona`) - ~100K population, agricultural hub
- **Flagstaff** (`flagstaff-arizona`) - ~75K population, university town, tourism

### Florida (6 cities)
- **Palm Coast** (`palm-coast-florida`) - ~90K population, fast-growing coastal city
- **Largo** (`largo-florida`) - ~85K population, Tampa Bay area
- **Boynton Beach** (`boynton-beach-florida`) - ~80K population, South Florida
- **Plantation** (`plantation-florida`) - ~95K population, Fort Lauderdale metro
- **Davie** (`davie-florida`) - ~105K population, Fort Lauderdale metro
- **Sunrise** (`sunrise-florida`) - ~95K population, Fort Lauderdale metro

### Massachusetts (4 cities)
- **Quincy** (`quincy-massachusetts`) - ~100K population, Boston metro
- **Lynn** (`lynn-massachusetts`) - ~100K population, Boston metro
- **Newton** (`newton-massachusetts`) - ~90K population, Boston metro
- **Lawrence** (`lawrence-massachusetts`) - ~90K population, Merrimack Valley

### Michigan (1 city)
- **Ann Arbor** (`ann-arbor-michigan`) - ~125K population, University of Michigan, tech hub

### New York (3 cities)
- **White Plains** (`white-plains-new-york`) - ~60K population, Westchester County, business hub
- **Mount Vernon** (`mount-vernon-new-york`) - ~70K population, Westchester County
- **New Rochelle** (`new-rochelle-new-york`) - ~80K population, Westchester County

### North Carolina (3 cities)
- **Concord** (`concord-north-carolina`) - ~90K population, Charlotte metro
- **Gastonia** (`gastonia-north-carolina`) - ~80K population, Charlotte metro
- **Asheville** (`asheville-north-carolina`) - ~95K population, mountain tourism, craft beer hub

### Pennsylvania (1 city)
- **Harrisburg** (`harrisburg-pennsylvania`) - ~50K population, state capital, metro area ~600K

### Texas (4 cities)
- **Brownsville** (`brownsville-texas`) - ~185K population, border city, Rio Grande Valley
- **Pasadena** (`pasadena-texas`) - ~150K population, Houston metro
- **Odessa** (`odessa-texas`) - ~115K population, Permian Basin oil industry
- **Midland** (`midland-texas`) - ~135K population, Permian Basin oil industry

### Washington (2 cities)
- **Yakima** (`yakima-washington`) - ~100K population, agricultural hub, wine country
- **Bellingham** (`bellingham-washington`) - ~90K population, Western Washington University, port city

## Priority Recommendations

### High Priority (Large Population + Economic Activity)
1. **Ann Arbor, Michigan** - 125K, major university, tech hub
2. **Brownsville, Texas** - 185K, border economy
3. **Pasadena, Texas** - 150K, Houston metro
4. **Midland, Texas** - 135K, oil industry
5. **Odessa, Texas** - 115K, oil industry
6. **Quincy, Massachusetts** - 100K, Boston metro
7. **Lynn, Massachusetts** - 100K, Boston metro
8. **Yakima, Washington** - 100K, agricultural hub
9. **Asheville, North Carolina** - 95K, tourism, craft industry
10. **Davie, Florida** - 105K, Fort Lauderdale metro

### Medium Priority (Good Market Potential)
- All remaining Florida cities (strong tourism/business)
- Massachusetts cities (Boston metro area)
- New York cities (Westchester County business hub)
- North Carolina cities (Charlotte metro growth)

### Lower Priority (Smaller but Still Valuable)
- Arizona cities (smaller markets but growing)
- Washington cities (regional markets)
- Pennsylvania (Harrisburg - smaller but capital)

## How to Add These Cities

### Step 1: Add to states.ts
Edit `src/data/states.ts` and add the cities to their respective states:

```typescript
{
  name: 'Arizona',
  slug: 'arizona',
  cities: [
    // ... existing cities ...
    { name: 'Yuma', slug: 'yuma-arizona' },
    { name: 'Flagstaff', slug: 'flagstaff-arizona' },
  ]
}
```

### Step 2: Create the Pages
Run the creation script for all missing cities:

```bash
node scripts/create_specific_city_pages.js \
  yuma-arizona flagstaff-arizona \
  palm-coast-florida largo-florida boynton-beach-florida plantation-florida davie-florida sunrise-florida \
  quincy-massachusetts lynn-massachusetts newton-massachusetts lawrence-massachusetts \
  ann-arbor-michigan \
  white-plains-new-york mount-vernon-new-york new-rochelle-new-york \
  concord-north-carolina gastonia-north-carolina asheville-north-carolina \
  harrisburg-pennsylvania \
  brownsville-texas pasadena-texas odessa-texas midland-texas \
  yakima-washington bellingham-washington
```

Or create them one state at a time:

```bash
# Texas cities
node scripts/create_specific_city_pages.js brownsville-texas pasadena-texas odessa-texas midland-texas

# Florida cities
node scripts/create_specific_city_pages.js palm-coast-florida largo-florida boynton-beach-florida plantation-florida davie-florida sunrise-florida

# Massachusetts cities
node scripts/create_specific_city_pages.js quincy-massachusetts lynn-massachusetts newton-massachusetts lawrence-massachusetts
```

### Step 3: Verify
- Check that pages were created
- Verify pages render correctly
- Test on the live site

## Notes

- All cities listed have populations of 50K+ and represent significant market opportunities
- Priority should be given to larger cities and those with strong business/economic activity
- These cities will help expand geographic coverage and market reach
- Each city page follows the Manchester, New Hampshire template structure

