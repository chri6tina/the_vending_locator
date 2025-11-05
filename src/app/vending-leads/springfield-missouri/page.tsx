import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Springfield, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Springfield, Missouri. Find qualified businesses for vending machine placement in this major healthcare and education center.",
  "keywords": "vending machines Springfield Missouri, vending leads Springfield Missouri, vending locations Springfield Missouri, vending opportunities Springfield Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/springfield-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Springfield, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Springfield, Missouri. Find qualified businesses for vending machine placement in this major healthcare and education center.",
    "url": "https://www.thevendinglocator.com/vending-leads/springfield-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Springfield, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Springfield, Missouri. Find qualified businesses for vending machine placement in this major healthcare and education center."
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

export default function SpringfieldMissouriVendingLeadsPage() {
  return <PageClient />
}
