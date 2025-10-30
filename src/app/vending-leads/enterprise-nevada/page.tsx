import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Enterprise, Nevada - The Vending Locator",
  "description": "Get verified vending machine leads in Enterprise, Nevada, part of the Las Vegas metro area. Access 250-400 qualified locations with 221,000+ population.",
  "keywords": "vending machines enterprise nevada, vending leads enterprise nevada, las vegas metro vending, vending locations enterprise, vending opportunities nevada",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/enterprise-nevada"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Enterprise, Nevada - The Vending Locator",
    "description": "Get verified vending machine leads in Enterprise, Nevada, part of the Las Vegas metro area. Access 250-400 qualified locations with 221,000+ population.",
    "url": "https://www.thevendinglocator.com/vending-leads/enterprise-nevada",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Enterprise, Nevada - The Vending Locator",
    "description": "Get verified vending machine leads in Enterprise, Nevada, part of the Las Vegas metro area. Access 250-400 qualified locations with 221,000+ population."
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
