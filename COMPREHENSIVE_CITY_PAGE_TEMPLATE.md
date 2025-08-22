# 🏙️ COMPREHENSIVE CITY PAGE TEMPLATE
## Based on Mansfield, Texas Excellence Standards

**This template ensures every new vending-leads city page is comprehensive, location-specific, and matches our upgraded structure and hero section.**

---

## 📋 **REQUIRED PAGE STRUCTURE**

### **1. 🎯 HERO SECTION (Must Match Home Page Style)**
```tsx
{/* Hero Section - MUST match home page background (warm-white, NOT harsh blue) */}
<div className="bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      
      {/* Active Users Counter Pill */}
      <div className="mb-6 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-chocolate">
            <span className="font-bold text-coral">{activeUsers}</span> {cityName} vendors are choosing plans right now
          </span>
        </div>
        <div className="mt-2 text-xs text-chocolate/70">
          Including {userNames[currentUserIndex]}
        </div>
      </div>

      {/* Recent Purchase Notification */}
      <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg shadow-sm max-w-sm mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-800 font-medium">
            <span className="font-semibold">{recentPurchases[currentPurchaseIndex].name}</span> from {recentPurchases[currentPurchaseIndex].location} just purchased the{' '}
            <span className="font-bold text-green-700">{recentPurchases[currentPurchaseIndex].plan}</span>
          </span>
        </div>
        <div className="mt-1 text-xs text-green-600 text-center">
          {recentPurchases[currentPurchaseIndex].time}
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0">
        Vending Machine Locations<br />in {cityName}, {stateName}
      </h1>
      
      {/* City-Specific Value Proposition */}
      <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-8 sm:leading-9 text-chocolate/70 px-4 sm:px-0 max-w-3xl mx-auto">
        {citySpecificValueProposition}
      </p>

      {/* Trust/Feature Badges */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <CheckBadgeIcon className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-chocolate">{verifiedLocationsCount}+ Verified Locations</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-chocolate">4.9/5 Rating</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <ClockIcon className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-chocolate">Quality Research</span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
        <Link
          href="/hot-leads"
          className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Get Hot Leads
        </Link>
        <Link
          href="#pricing"
          className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
        >
          View Pricing →
        </Link>
      </div>

      {/* Social Proof */}
      <div className="mt-6 sm:mt-8 px-4 sm:px-0">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex -space-x-2">
            {/* Add 3-4 user avatars */}
          </div>
          <span className="text-sm text-chocolate/70">
            Trusted by {vendorCount}+ vending operators in {cityName}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### **2. 💰 PRICING SECTION (Must be Prominent & Early)**
```tsx
{/* Pricing Section - MUST appear immediately after hero */}
<div id="pricing" className="bg-cream py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
        Choose Your Plan
      </h2>
      <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
        Get access to qualified vending machine locations in {cityName} with flexible pricing options. No long-term contracts, just results that help you grow your business.
      </p>
    </div>
    
    {/* Use PricingTable component */}
    <PricingTable />
  </div>
</div>
```

### **3. 🏢 BUSINESS LANDSCAPE SECTION**
```tsx
{/* Business Landscape Section */}
<div className="bg-white py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
        {cityName} Business Landscape
      </h2>
      <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
        {cityName} is a {businessTypeDescription} offering vending opportunities across multiple thriving industries.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Industry Cards - Use Heroicons */}
      <div className="bg-cream rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <BuildingOfficeIcon className="w-8 h-8 text-navy" />
        </div>
        <h3 className="text-xl font-semibold text-chocolate mb-3">Healthcare</h3>
        <p className="text-stone text-sm">
          Hospitals, medical centers, and healthcare facilities with 24/7 operations.
        </p>
      </div>
      
      {/* Add 5 more industry cards with different icons */}
    </div>
  </div>
</div>
```

### **4. 🔥 HOT LEADS SECTION**
```tsx
{/* Hot Leads Section */}
<div className="bg-cream py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
        Hot Location Leads
      </h2>
      <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
        Get immediate access to pre-verified vending machine locations. These are ready-to-place locations that have been personally researched and verified.
      </p>
    </div>
    
    {/* Use HotLeads component */}
    <HotLeads />
  </div>
</div>
```

### **5. 📚 VENDING COURSE SECTION**
```tsx
{/* Vending Course Section */}
<div className="bg-white py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
        Looking for a How-to-Start Guide?
      </h2>
      <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
        Get our comprehensive guide: "How to Start a Vending Machine Company in 2025" with scripts, legal templates, and supplier discounts.
      </p>
    </div>
    
    {/* Use VendingCourse component */}
    <VendingCourse />
  </div>
</div>
```

### **6. ❓ FAQ SECTION (Location-Specific)**
```tsx
{/* FAQ Section */}
<div className="bg-cream py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
        Get answers to common questions about vending machine opportunities in {cityName}.
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto space-y-6">
      {/* FAQ Item 1 */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-chocolate mb-3">
          What types of businesses are best for vending machines in {cityName}?
        </h3>
        <p className="text-stone text-sm leading-relaxed">
          {cityName} offers diverse opportunities including {specificBusinessTypes}. The {businessEnvironment} provides excellent placement opportunities.
        </p>
      </div>
      
      {/* Add 6-8 more FAQ items specific to the city */}
    </div>
  </div>
</div>
```

---

## 🎨 **REQUIRED IMPORTS & COMPONENTS**

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon,
  BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon,
  ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, UsersIcon,
  MapPinIcon, CurrencyDollarIcon, SparklesIcon, MusicalNoteIcon
} from '@heroicons/react/24/solid'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
```

---

## 📊 **REQUIRED STATE VARIABLES**

```tsx
export default function {CityName}{StateName}VendingLeadsPage() {
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(0)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState<Set<number>>(new Set())
  
  // Recent purchases
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0)
  const [usedPurchases, setUsedPurchases] = useState<Set<number>>(new Set())
  
  // User names array (expand with 1000+ names)
  const [userNames, setUserNames] = useState([
    'Mike from Texas', 'Sarah in Florida', 'John from California',
    // ... expand to 1000+ names
  ])
  
  // Recent purchases array
  const [recentPurchases, setRecentPurchases] = useState([
    { name: 'Mike R.', location: 'Texas', plan: 'Pro Plan', time: '2 minutes ago' },
    { name: 'Sarah L.', location: 'Florida', plan: 'Start Plan', time: '5 minutes ago' },
    // ... expand to 10+ purchases
  ])
  
  // City-specific data
  const cityData = {
    name: '{CityName}',
    state: '{StateName}',
    population: '{Population}',
    businessCount: '{BusinessCount}',
    verifiedLocations: '{VerifiedLocations}',
    vendorCount: '{VendorCount}',
    // ... other city-specific data
  }
```

---

## 🎯 **CONTENT REQUIREMENTS**

### **Minimum Content Standards:**
- **1,500+ Words**: Substantial, valuable content
- **City-Specific Everything**: No generic content allowed
- **Real Business Names**: Actual companies and facilities
- **Local Statistics**: Population, business counts, economic data
- **Industry-Specific Icons**: Use appropriate Heroicons for each industry
- **Location-Specific FAQs**: Questions about vending in that specific city

### **Content Uniqueness Rules:**
- **NO Duplicate Content**: Each city must have completely different text
- **Local Keywords**: City-specific business terms and locations
- **Unique Insights**: Different data, statistics, and opportunities
- **Local Business Names**: Real companies and facilities in that city

### **SEO Requirements:**
- **Local Keywords**: Include city name, state, local landmarks
- **Business Types**: Specific industries and company types
- **Geographic Terms**: Neighborhoods, districts, areas
- **Vending Terms**: Location-specific vending opportunities

---

## 🚀 **IMPLEMENTATION CHECKLIST**

### **Before Creating Page:**
- [ ] Research city demographics and business landscape
- [ ] Identify major industries and employers
- [ ] Find real business names and facilities
- [ ] Research local vending regulations
- [ ] Identify unique city characteristics

### **During Creation:**
- [ ] Use exact template structure above
- [ ] Include all required sections
- [ ] Use city-specific content only
- [ ] Include appropriate Heroicons
- [ ] Add location-specific FAQs
- [ ] Use PricingTable, HotLeads, VendingCourse components

### **After Creation:**
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Validate content uniqueness
- [ ] Test all interactive elements
- [ ] Update sitemap.ts
- [ ] Add to homepage featured cities

---

## 📝 **EXAMPLE CITY-SPECIFIC CONTENT**

### **Value Proposition Examples:**
- **Austin, TX**: "Technology hub with growing healthcare and education sectors"
- **Miami, FL**: "Tourism destination with international business presence"
- **Denver, CO**: "Mountain city with healthcare and aerospace industries"
- **Seattle, WA**: "Tech capital with healthcare and maritime operations"

### **Industry Focus Examples:**
- **Healthcare**: Hospitals, medical centers, clinics
- **Technology**: Tech companies, startups, innovation hubs
- **Education**: Universities, colleges, schools
- **Manufacturing**: Industrial facilities, factories
- **Tourism**: Hotels, attractions, entertainment venues
- **Government**: Federal, state, local offices

---

## ⚠️ **CRITICAL REMINDERS**

1. **Hero Section MUST match home page**: Warm-white background, same styling
2. **Pricing Section MUST be prominent**: Early in page flow, after hero
3. **NO Generic Content**: Everything must be city-specific
4. **Use Required Components**: PricingTable, HotLeads, VendingCourse
5. **Include All Sections**: Hero, Pricing, Business Landscape, Hot Leads, Course, FAQ
6. **Mobile Responsive**: Test on all device sizes
7. **SEO Optimized**: Local keywords, unique content, proper structure

---

**This template ensures every new city page meets the Mansfield, Texas excellence standard and provides comprehensive, valuable content for each specific location.** 🎯
