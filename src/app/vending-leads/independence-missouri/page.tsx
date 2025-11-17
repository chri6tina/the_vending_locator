import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Independence, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Independence, Missouri. Find qualified businesses for vending machine placement in this major suburban business center.",
  "keywords": "vending machines Independence Missouri, vending leads Independence Missouri, vending locations Independence Missouri, vending opportunities Independence Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/independence-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Independence, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Independence, Missouri. Find qualified businesses for vending machine placement in this major suburban business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/independence-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Independence, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Independence, Missouri. Find qualified businesses for vending machine placement in this major suburban business center."
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

export default function IndependenceMissouriVendingLeadsPage() {
  return <PageClient />
}
