import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Bellevue, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Bellevue, Washington. Find qualified businesses for vending machine placement in this major tech hub and business center.",
  "keywords": "vending machines Bellevue Washington, vending leads Bellevue Washington, vending locations Bellevue Washington, vending opportunities Bellevue Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/bellevue-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Bellevue, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Bellevue, Washington. Find qualified businesses for vending machine placement in this major tech hub and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/bellevue-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Bellevue, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Bellevue, Washington. Find qualified businesses for vending machine placement in this major tech hub and business center."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
  }
}

import PageClient from './pageClient'

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BellevueWashingtonVendingLeadsPage() {
  return <PageClient />
}
