import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Corona, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Corona, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines corona california, vending leads corona california, vending locations corona california, vending opportunities corona california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/corona-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Corona, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Corona, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/corona-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Corona, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Corona, California. Find qualified businesses for vending machine placement."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CityPage() {
  return <PageClient />
}
