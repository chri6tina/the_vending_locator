import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Nampa, Idaho - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Nampa, Idaho. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Nampa Idaho, vending leads Nampa Idaho, vending locations Nampa Idaho, vending opportunities Nampa Idaho",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/nampa-idaho"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Nampa, Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Nampa, Idaho. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/nampa-idaho",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Nampa, Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Nampa, Idaho. Find qualified businesses for vending machine placement."
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