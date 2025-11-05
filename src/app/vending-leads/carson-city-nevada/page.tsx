import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Carson City, Nevada - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Carson City, Nevada. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Carson City Nevada, vending leads Carson City Nevada, vending locations Carson City Nevada, vending opportunities Carson City Nevada",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/carson-city-nevada"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Carson City, Nevada - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Carson City, Nevada. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/carson-city-nevada",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Carson City, Nevada - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Carson City, Nevada. Find qualified businesses for vending machine placement."
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