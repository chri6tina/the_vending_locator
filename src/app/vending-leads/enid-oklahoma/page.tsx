import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Enid, Oklahoma - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Enid, Oklahoma. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines enid oklahoma, vending leads enid oklahoma, vending locations enid oklahoma, vending opportunities enid oklahoma",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/enid-oklahoma"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Enid, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Enid, Oklahoma. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/enid-oklahoma",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Enid, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Enid, Oklahoma. Find qualified businesses for vending machine placement."
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
