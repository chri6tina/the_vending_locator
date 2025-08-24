# 🏗️ Comprehensive City Page Template

## 📋 **Required Structure & Components**

### **1. Hero Section (CRITICAL - Must be centered)**
```tsx
<section className="relative py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center"> {/* MUST have text-center */}
      {/* Active Users Counter Pill */}
      <motion.div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <UsersIcon className="w-4 h-4 mr-2" />
        <span className="animate-pulse">{activeUsers} people</span>
        <span className="ml-2">are currently viewing vending locations</span>
      </motion.div>

      {/* Recent Purchase Notification */}
      <motion.div className="hidden sm:block bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto"> {/* MUST have mx-auto */}
        {/* Notification content */}
      </motion.div>

      {/* Main Headline */}
      <motion.h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight">
        Vending Machine Locations in{' '}
        <span className="text-navy">{cityData.name}, {cityData.state}</span>
      </motion.h1>

      {/* City-Specific Value Proposition */}
      <motion.p className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"> {/* MUST have mx-auto */}
        {/* Description */}
      </motion.p>

      {/* Trust/Feature Badges */}
      <motion.div className="flex flex-wrap gap-4 mb-8 justify-center"> {/* MUST have justify-center */}
        {/* Badge items */}
      </motion.div>

      {/* CTA Buttons (CRITICAL - Must be properly styled and visible) */}
      <motion.div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center"> {/* MUST have justify-center items-center */}
        <Link 
          href="/pricing"
          className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
        >
          View Pricing Plans
        </Link>
        <Link 
          href="/hot-leads"
          className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
        >
          Get Hot Leads
        </Link>
      </motion.div>

      {/* Social Proof Stats */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"> {/* MUST have mx-auto */}
        {/* Stats */}
      </motion.div>
    </div>
  </div>
</section>
```

### **2. Required Imports**
```tsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
```

### **3. Required State Variables**
```tsx
// Active users counter
const [activeUsers, setActiveUsers] = useState(28) // Start at realistic number (22-45)
const [currentUserIndex, setCurrentUserIndex] = useState(0)
const [usedNames, setUsedNames] = useState(new Set())
const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0)
const [usedPurchases, setUsedPurchases] = useState(new Set())

// City-specific data
const cityData = {
  name: 'City Name',
  state: 'State Name',
  population: 'XXX,XXX',
  businesses: 'XX,XXX+',
  industries: 'X',
  verifiedLocations: 'XXX+',
  rating: 'X.X/X',
  description: 'City-specific description'
}
```

### **4. Required useEffect Hooks**
```tsx
// Active users counter effect
useEffect(() => {
  const interval = setInterval(() => {
    setActiveUsers(prev => {
      const change = Math.floor(Math.random() * 3) - 1
      const newValue = prev + change
      return Math.max(25, Math.min(42, newValue)) // Adjust range based on city size
    })
  }, 4000)
  return () => clearInterval(interval)
}, [])

// Smart rotation of user names and recent purchases
// (Include the smart rotation logic from the template)
```

### **5. Required Components (In Order)**
1. **Breadcrumb Navigation** - Home → Vending Leads → State → City
2. **Hero Section** - With active users counter, recent purchases, trust badges
3. **Pricing Section** - `<PricingTable />` component
4. **Business Landscape** - 6 industry cards with Heroicons (NO EMOJIS)
5. **Hot Leads Section** - `<HotLeads />` component
6. **Vending Course Section** - `<VendingCourse />` component
7. **FAQ Section** - 8 city-specific questions
8. **Mobile Recent Purchase Notification** - For mobile users

### **6. Business Landscape Requirements**
```tsx
// MUST use Heroicons, NOT emojis
{[
  {
    title: 'Healthcare',
    description: 'Description with city-specific details',
    icon: BuildingOfficeIcon, // NOT 🏥
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  // ... other industries
].map((industry, index) => (
  <div className={`${industry.bgColor} p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
    <div className={`${industry.color} mb-4`}>
      <industry.icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-semibold text-charcoal mb-3">{industry.title}</h3>
    <p className="text-stone leading-relaxed">{industry.description}</p>
  </div>
))}
```

## 🚨 **Critical Requirements (Must Follow)**

### **Centering Requirements:**
- ✅ Hero section MUST have `text-center` class
- ✅ All content containers MUST have `mx-auto` for horizontal centering
- ✅ Trust badges MUST have `justify-center`
- ✅ CTA buttons MUST have `justify-center items-center`
- ✅ Stats grid MUST have `mx-auto`

### **Button Styling Requirements:**
- ✅ Both CTA buttons MUST be clearly visible
- ✅ Use `min-w-[200px]` for consistent button width
- ✅ Use `text-center` on buttons
- ✅ Use proper brand colors: `bg-navy` and `bg-coral`
- ✅ Include hover effects and shadows

### **Icon Requirements:**
- ✅ Use Heroicons ONLY, NO emojis
- ✅ Import all required icons from `@heroicons/react/24/solid`
- ✅ Use proper icon sizing: `className="w-12 h-12"`

### **Counter Requirements:**
- ✅ Active users counter MUST start at realistic number (22-45)
- ✅ Counter MUST fluctuate every 4 seconds
- ✅ Use green background: `bg-green-100 text-green-800`

## 📱 **Mobile Considerations:**
- ✅ Include mobile-specific recent purchase notification
- ✅ Ensure all sections are mobile-responsive
- ✅ Test button visibility on mobile devices

## 🔍 **Quality Checklist:**
- [ ] Hero section is perfectly centered
- [ ] Both CTA buttons are clearly visible
- [ ] Active users counter starts at realistic number
- [ ] All emojis replaced with Heroicons
- [ ] Breadcrumb navigation included
- [ ] All required components present
- [ ] FAQ has 8 city-specific questions
- [ ] Mobile notification included
- [ ] Proper spacing and typography
- [ ] Hover effects and animations working

This template ensures consistency across all city pages and prevents the centering and button visibility issues we just fixed.
