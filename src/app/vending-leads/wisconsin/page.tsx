import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Wisconsin - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Wisconsin. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Wisconsin, vending leads Wisconsin, vending locations Wisconsin, vending opportunities Wisconsin",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/wisconsin"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Wisconsin. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/wisconsin",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Wisconsin. Find qualified businesses for vending machine placement."
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