import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Laguna Woods, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Laguna Woods, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines laguna woods california, vending leads laguna woods california, vending locations laguna woods california, vending opportunities laguna woods california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/laguna-woods-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Laguna Woods, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Laguna Woods, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/laguna-woods-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Laguna Woods, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Laguna Woods, California. Find qualified businesses for vending machine placement."
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
