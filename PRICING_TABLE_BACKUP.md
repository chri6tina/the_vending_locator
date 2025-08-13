# Pricing Table Component - Working Backup

**File**: `src/components/PricingTable.tsx`  
**Date**: Current working version  
**Status**: ✅ Fully functional with modal integration and direct checkout options

## 🎯 Current Features

### **Mobile Cards**
- Responsive design with touch-friendly buttons
- "Get Started" buttons go directly to Stripe checkout
- "Need help?" option opens the modal for assistance
- Popular plan highlighting

### **Desktop Table**
- Header pricing buttons open modal (collect zip code + email)
- Feature rows are clickable and open modal
- Footer "Get Started" buttons go directly to Stripe
- "Need help?" option opens modal

### **Modal Integration**
- Collects zip code and email through Formspree
- Redirects to Stripe after form submission
- Mobile-optimized sizing (no scrolling needed)

## 📋 Current Plans Configuration

```typescript
const plans = [
  {
    name: 'Basic',
    price: '$19',
    period: '/month',
    description: 'Perfect for getting started with vending location research',
    location: '50+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/aEU2929ZcfvQ10IdQT',
    type: 'subscription' as const,
    deliveryTime: '5 Days',
    radius: '15 miles',
    features: [
      '50+ qualified locations per month',
      'Basic lead details (name, phone, address)',
      '15-mile radius search',
      '5-day delivery',
      'Email support',
      'Monthly database access'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Advanced features for growing vending operations',
    location: '100+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/4gwaFyfjw1F0gZG004',
    type: 'subscription' as const,
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '100+ qualified locations per month',
      'Enhanced lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Priority support',
      'Monthly database access'
    ]
  },
  {
    name: 'Start',
    price: '$129',
    period: '/month',
    description: 'Comprehensive package for serious vending entrepreneurs',
    location: '200+ Locations',
    popular: true,
    href: 'https://buy.stripe.com/3cs8xq2wKdnI6l24gl',
    type: 'subscription' as const,
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '200+ qualified locations per month',
      'Complete lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Vending eCourse included',
      'Cold call & email scripts',
      'Contract templates',
      'Priority support',
      'Monthly database access'
    ]
  },
  {
    name: 'Gold',
    price: '$899',
    period: '/month',
    description: 'Ultimate package with full business setup support',
    location: '300+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/dR614Y4ESgzU6l25kq',
    type: 'subscription' as const,
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '300+ qualified locations per month',
      'Complete lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Vending eCourse included',
      'Cold call & email scripts',
      'Contract templates',
      'Business plan template',
      'Priority support',
      'Dedicated account manager',
      'Monthly database access'
    ]
  },
]
```

## 🔗 Stripe Checkout URLs

- **Basic**: `https://buy.stripe.com/aEU2929ZcfvQ10IdQT`
- **Pro**: `https://buy.stripe.com/4gwaFyfjw1F0gZG004`
- **Start**: `https://buy.stripe.com/3cs8xq2wKdnI6l24gl`
- **Gold**: `https://buy.stripe.com/dR614Y4ESgzU6l25kq`

## 🎨 Key Styling Classes

### **Mobile Cards**
- Container: `bg-white rounded-2xl shadow-lg border-2 p-6`
- Popular plan: `border-navy bg-gradient-to-br from-navy/5 to-blue-50`
- Regular plan: `border-gray-200`
- CTA Button: `w-full py-3 px-6 rounded-lg font-semibold text-white`

### **Desktop Table**
- Container: `border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white`
- Header: `bg-gray-50`
- Pricing buttons: `bg-charcoal hover:bg-charcoal/90 text-white px-6 py-2 rounded-lg`
- Feature rows: `hover:bg-gray-50 transition-colors duration-150`

## 🔧 Key Functions

### **handlePlanClick(plan)**
- Opens modal with plan details
- Collects zip code and email
- Submits to Formspree
- Redirects to Stripe checkout

### **handleRowClick(planName)**
- Finds plan by name
- Calls handlePlanClick for modal

## 📱 Modal Integration

### **ZipCodeModal**
- Collects zip code and email
- Formspree endpoint: `https://formspree.io/f/xdkgqele`
- Mobile-optimized sizing
- Prevents body scroll when open

## 🚀 User Experience Flow

1. **Pricing Buttons** → Open modal (collect info + redirect to Stripe)
2. **Feature Row Clicks** → Open modal (collect info + redirect to Stripe)
3. **"Get Started" Buttons** → Direct to Stripe (fast checkout)
4. **"Need help?" Links** → Open modal (assistance)

## ⚠️ Important Notes

- **Modal must open first** for pricing buttons and feature rows to collect Formspree data
- **Direct checkout** only available through "Get Started" buttons
- **Mobile cards** have both options available
- **All Stripe URLs** are current and functional

## 🔄 Restore Instructions

If the pricing table gets corrupted or changed:

1. Copy the code from this backup
2. Replace the content in `src/components/PricingTable.tsx`
3. Ensure all imports and dependencies are intact
4. Test modal functionality and Stripe redirects

---

**Last Updated**: Current working version  
**Status**: ✅ Fully functional and tested
