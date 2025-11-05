import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Everett, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Everett, Washington. Find qualified businesses for vending machine placement in this major aerospace and manufacturing center.",
  "keywords": "vending machines Everett Washington, vending leads Everett Washington, vending locations Everett Washington, vending opportunities Everett Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/everett-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Everett, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Everett, Washington. Find qualified businesses for vending machine placement in this major aerospace and manufacturing center.",
    "url": "https://www.thevendinglocator.com/vending-leads/everett-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Everett, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Everett, Washington. Find qualified businesses for vending machine placement in this major aerospace and manufacturing center."
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

export default function EverettWashingtonVendingLeadsPage() {
  return <PageClient />
}
