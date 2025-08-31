import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Lexington Kentucky - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Lexington Kentucky. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Lexington Kentucky, vending leads Vending Leads Lexington Kentucky, vending locations Vending Leads Lexington Kentucky, vending opportunities Vending Leads Lexington Kentucky",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lexington-kentucky"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Lexington Kentucky - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Lexington Kentucky. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lexington-kentucky",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Lexington Kentucky - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Lexington Kentucky. Find qualified businesses for vending machine placement."
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