import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Gallup New, Mexico - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Gallup New, Mexico. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines gallup new mexico, vending leads gallup new mexico, vending locations gallup new mexico, vending opportunities gallup new mexico",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/gallup-new-mexico"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Gallup New, Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gallup New, Mexico. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/gallup-new-mexico",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Gallup New, Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gallup New, Mexico. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}
