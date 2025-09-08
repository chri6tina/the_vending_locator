import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Honolulu, Hawaii - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Honolulu, Hawaii. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Honolulu Hawaii, vending leads Honolulu Hawaii, vending locations Honolulu Hawaii, vending opportunities Honolulu Hawaii",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/honolulu-hawaii"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Honolulu, Hawaii - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Honolulu, Hawaii. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/honolulu-hawaii",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Honolulu, Hawaii - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Honolulu, Hawaii. Find qualified businesses for vending machine placement."
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

