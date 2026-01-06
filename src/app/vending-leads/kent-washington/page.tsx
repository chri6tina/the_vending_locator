import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Kent, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Kent, Washington. Find qualified businesses for vending machine placement in this major suburban business and distribution center.",
  "keywords": "vending machines Kent Washington, vending leads Kent Washington, vending locations Kent Washington, vending opportunities Kent Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/kent-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Kent, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kent, Washington. Find qualified businesses for vending machine placement in this major suburban business and distribution center.",
    "url": "https://www.thevendinglocator.com/vending-leads/kent-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Kent, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kent, Washington. Find qualified businesses for vending machine placement in this major suburban business and distribution center."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


import PageClient from './pageClient'

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export default function KentWashingtonVendingLeadsPage() {
  return <PageClient />
}
