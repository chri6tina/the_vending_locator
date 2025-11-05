# Vercel Build Optimization Guide

## Problem
Your build takes 20+ minutes because you have **1,123+ city pages** that Next.js is trying to statically generate at build time.

## Solutions

### Option 1: Use ISR (Incremental Static Regeneration) ⭐ RECOMMENDED

Add this to your dynamic city pages to build on-demand instead of at build time:

**For State Pages** (`src/app/vending-services/[state]/page.tsx`):
```typescript
// Add this export
export const revalidate = 3600 // Revalidate every hour

// Limit static generation to top 10 states only
export async function generateStaticParams() {
  const topStates = [
    'california',
    'texas', 
    'florida',
    'new-york',
    'pennsylvania',
    'illinois',
    'ohio',
    'georgia',
    'north-carolina',
    'michigan'
  ]
  
  return topStates.map(state => ({ state }))
}

// This is critical - tells Next.js to generate others on-demand
export const dynamicParams = true
```

**For City Pages** (vending-services and how-to-start):
```typescript
// Add these exports
export const revalidate = 3600 // Revalidate every hour
export const dynamicParams = true // Generate on first visit

// Only pre-build top 20 cities
export async function generateStaticParams() {
  // Return empty array or top 20 cities only
  return []
  // This means: Build NOTHING at build time, generate on-demand
}
```

### Option 2: Set Vercel Build Limits

Add to `vercel.json`:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "maxDuration": 300
      }
    }
  ]
}
```

### Option 3: Partial Pre-rendering

Update `next.config.js`:
```javascript
const nextConfig = {
  // ... existing config
  experimental: {
    ppr: true, // Partial Pre-rendering (Next.js 14+)
  },
  // Only output static pages for the most important routes
  output: 'standalone',
}
```

### Option 4: Build Only Top Pages

Create `scripts/optimize-build.js`:
```javascript
// Set environment variable to limit static generation
process.env.BUILD_LIMIT = '50' // Only build top 50 pages
```

Then in your `generateStaticParams`:
```typescript
export async function generateStaticParams() {
  const limit = process.env.BUILD_LIMIT ? parseInt(process.env.BUILD_LIMIT) : 1000
  
  // Return only top N cities
  return topCities.slice(0, limit).map(city => ({ 
    slug: city 
  }))
}
```

## Quick Fix for Immediate Results

**Do this NOW:**

1. **Add to each dynamic page:**
```typescript
export const revalidate = 3600
export const dynamicParams = true
```

2. **Limit generateStaticParams:**
```typescript
export async function generateStaticParams() {
  return [] // Build nothing, generate on-demand
}
```

3. **Update next.config.js** (already done above)

## Expected Results

**Before:** 20 minutes, 1,123 pages built
**After:** 2-3 minutes, top 10-20 pages built, rest generated on first visit

## How It Works

1. **Build Time:** Only builds top 10-20 most important pages
2. **First Visit:** When someone visits a page not pre-built, Next.js generates it on-demand
3. **Cache:** Generated pages are cached for 1 hour (revalidate: 3600)
4. **Updates:** Pages automatically regenerate after 1 hour if traffic

## Trade-offs

✅ **Pros:**
- 90% faster builds (2-3 min instead of 20 min)
- Lower build costs
- Still get SEO benefits (pages are static once generated)
- Automatic updates via revalidation

⚠️ **Cons:**
- First visitor to a new city page waits 1-2 seconds for generation
- Subsequent visitors get instant cached version

## Vercel Recommendations

Vercel recommends:
- Build < 100 pages statically
- Use ISR for everything else
- Set revalidate based on how often content changes

## Next Steps

1. ✅ Update next.config.js (done)
2. Add `revalidate` and `dynamicParams` to city pages
3. Limit `generateStaticParams` to return empty array or top 20 cities
4. Redeploy and watch build time drop to 2-3 minutes!

## Files to Update

Priority files:
1. `src/app/vending-services/[state]/pageClient.tsx`
2. `src/app/vending-services/[state]/[city]/page.tsx`
3. `src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx`

Add these exports to each:
```typescript
export const revalidate = 3600
export const dynamicParams = true
export async function generateStaticParams() {
  return [] // Or return top 20 only
}
```



