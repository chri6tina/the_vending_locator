# Location Page Development Checklist

## Quick Reference for Developers

### 🚀 Pre-Development
- [ ] Research location business landscape
- [ ] Identify 3-4 primary business sectors
- [ ] Find major employers and institutions
- [ ] Check population and business density
- [ ] Research local neighborhoods/suburbs for user names

### 📁 File Setup
- [ ] Create directory: `/vending-leads/[city]-[state]/`
- [ ] Create file: `page.tsx`
- [ ] Import all required components
- [ ] Set up basic component structure

### 🎯 Hero Section (Enhanced - Like Home Page)
- [ ] Active users counter (base + random fluctuation)
- [ ] 8 local neighborhood/suburb names that rotate every 3 seconds
- [ ] Page title: "Vending Machine Locations in [City], [State]"
- [ ] Compelling description with local industry focus
- [ ] CTA buttons linking to pricing and content sections
- [ ] Trust signals and social proof elements
- [ ] Warm-white background (NOT harsh blue)

### 💰 Pricing Section (Prominent & Early)
- [ ] Section ID: `id="pricing"`
- [ ] Heading: "Get [City] Vending Machine Leads"
- [ ] Location-specific description
- [ ] Include `<PricingTable />` component
- [ ] Position prominently after hero section

### 📝 Content Section
- [ ] Section ID: `id="[city]-content"`
- [ ] Main heading: "Why [City] is Perfect for Vending Machines"
- [ ] Business landscape description (2-3 paragraphs)
- [ ] Opportunities list (3-4 bullet points with coral dots)
- [ ] Local statistics and data

### 🔧 Required Components
- [ ] `<Header />`
- [ ] `<Footer />`
- [ ] `<PricingTable />`
- [ ] `<HotLeads />`
- [ ] `<VendingCourse />`
- [ ] `<ZipCodeModalWrapper />`

### 🎨 Content Customization
- [ ] Replace all placeholder text with location-specific content
- [ ] Include actual local company names
- [ ] Use accurate local statistics
- [ ] Emphasize local business strengths
- [ ] Maintain professional, trustworthy tone

### 🎭 Interactive Elements (Our Most Effective Features)
- [ ] Active users counter updates every 2-4 seconds
- [ ] Rotating names change every 3 seconds
- [ ] Trust signals display correctly
- [ ] Social proof elements work smoothly
- [ ] All animations and transitions function properly

### 🔍 SEO & Navigation
- [ ] Proper heading hierarchy (H1 → H2 → H3 → H4 → H5)
- [ ] Anchor links working correctly
- [ ] Internal navigation links functional
- [ ] Meta information optimized

### ✅ Quality Assurance
- [ ] Page loads without errors
- [ ] All components render correctly
- [ ] Responsive design works on all devices
- [ ] Navigation links function properly
- [ ] No placeholder content remains
- [ ] Interactive elements work smoothly
- [ ] Active users counter updates properly
- [ ] Rotating names change every 3 seconds

### 🔗 Integration
- [ ] Update state hub page to include new city
- [ ] Test navigation from main vending leads page
- [ ] Verify cross-references to other locations
- [ ] Check breadcrumb navigation

---

## Quick Copy-Paste Template

### Basic Structure
```typescript
'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function [City][State]VendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from [City]', 'Sarah in [Neighborhood]', 'David from [Area]', 'Lisa in [District]',
    'Tom in [Suburb]', 'Jennifer in [Region]', 'Robert from [Section]', 'Amanda in [Zone]'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Active users effect
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = [NUMBER] // 3-6 for small cities, 6-9 for large cities
      const fluctuation = Math.floor(Math.random() * 4) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 2000 + 2000)

    updateActiveUsers()
    return () => clearInterval(interval)
  }, [])

  // Rotating names effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [userNames.length])

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          {/* Hero content with active users, rotating names, trust signals */}
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
          {/* Pricing content */}
        </div>

        {/* Content Section */}
        <div id="[city]-content" className="py-16 sm:py-24 bg-warm-white">
          {/* Content */}
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
```

### Required Sections
1. **Hero Section** - Active users, rotating names, title, description, CTAs, trust signals
2. **Pricing Section** - Pricing table with location-specific messaging (prominent placement)
3. **Content Section** - Business landscape and opportunities
4. **HotLeads Component** - Lead generation
5. **VendingCourse Component** - Educational content

### Interactive Elements Setup
- **Active Users**: Base number + random fluctuation (3-6 for small cities, 6-9 for large cities)
- **Rotating Names**: 8 local neighborhood/suburb names that change every 3 seconds
- **Trust Signals**: Location-specific verification badges and ratings
- **Social Proof**: Real-time activity indicators

---

## Common Issues & Solutions

### ❌ Component Not Found
- Check import path: `@/components/[ComponentName]`
- Verify component exists in components directory
- Check component export statement

### ❌ Styling Issues
- Verify Tailwind CSS classes are correct
- Check for missing CSS variables
- Ensure responsive breakpoints are properly set
- **CRITICAL**: Use warm-white background, NOT harsh blue

### ❌ Navigation Problems
- Verify anchor IDs match link hrefs
- Check for typos in section IDs
- Ensure proper scroll behavior

### ❌ Performance Issues
- Check for unnecessary re-renders
- Verify useEffect dependencies
- Monitor component re-mounting

### ❌ Interactive Element Issues
- Verify useEffect intervals are set correctly
- Check state management for active users and names
- Ensure cleanup functions are properly implemented
- Test in different browsers for compatibility

---

## Key Success Factors

### 🎯 **What Makes Our Approach Work**
1. **Interactive Elements** - Active users counter and rotating names create engagement
2. **Professional Design** - Warm-white background with consistent styling
3. **Local Relevance** - Everything is city-specific and authentic
4. **Prominent Pricing** - Pricing section appears early and prominently
5. **Social Proof** - Real-time activity indicators build trust

### 🚫 **What NOT to Do**
- Don't use harsh blue backgrounds
- Don't create generic content
- Don't bury pricing deep in the page
- Don't skip interactive elements
- Don't use placeholder text

---

**Use this checklist for every new location page to ensure consistency and quality!**

**Remember**: Our recent implementation approach is the most effective - stick to it!
