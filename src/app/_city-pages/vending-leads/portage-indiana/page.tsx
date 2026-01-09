import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Portage, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Portage, Indiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines portage indiana, vending leads portage indiana, vending locations portage indiana, vending opportunities portage indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/portage-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Portage, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Portage, Indiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/portage-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Portage, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Portage, Indiana. Find qualified businesses for vending machine placement."
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default function CityPage() {
  return <PageClient />
}
