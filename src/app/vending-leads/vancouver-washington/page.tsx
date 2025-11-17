import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vancouver, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vancouver, Washington. Find qualified businesses for vending machine placement in this major suburban business and technology center.",
  "keywords": "vending machines Vancouver Washington, vending leads Vancouver Washington, vending locations Vancouver Washington, vending opportunities Vancouver Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/vancouver-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vancouver, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vancouver, Washington. Find qualified businesses for vending machine placement in this major suburban business and technology center.",
    "url": "https://www.thevendinglocator.com/vending-leads/vancouver-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vancouver, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vancouver, Washington. Find qualified businesses for vending machine placement in this major suburban business and technology center."
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
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VancouverWashingtonVendingLeadsPage() {
  return <PageClient />
}
