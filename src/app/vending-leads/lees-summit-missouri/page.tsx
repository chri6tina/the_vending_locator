import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement in this major suburban business and education center.",
  "keywords": "vending machines Lee's Summit Missouri, vending leads Lee's Summit Missouri, vending locations Lee's Summit Missouri, vending opportunities Lee's Summit Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lees-summit-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement in this major suburban business and education center.",
    "url": "https://www.thevendinglocator.com/vending-leads/lees-summit-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement in this major suburban business and education center."
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

export default function LeesSummitMissouriVendingLeadsPage() {
  return <PageClient />
}
