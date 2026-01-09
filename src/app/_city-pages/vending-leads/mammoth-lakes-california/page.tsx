import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mammoth Lakes, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mammoth Lakes, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines mammoth lakes california, vending leads mammoth lakes california, vending locations mammoth lakes california, vending opportunities mammoth lakes california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mammoth-lakes-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mammoth Lakes, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mammoth Lakes, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mammoth-lakes-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mammoth Lakes, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mammoth Lakes, California. Find qualified businesses for vending machine placement."
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
