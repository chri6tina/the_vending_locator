import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Springfield Illinois - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Springfield Illinois. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Springfield Illinois, vending leads Vending Leads Springfield Illinois, vending locations Vending Leads Springfield Illinois, vending opportunities Vending Leads Springfield Illinois",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/springfield-illinois"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Springfield Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Springfield Illinois. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/springfield-illinois",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Springfield Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Springfield Illinois. Find qualified businesses for vending machine placement."
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