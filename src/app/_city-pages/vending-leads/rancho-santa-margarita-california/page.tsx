import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rancho Santa Margarita, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rancho Santa Margarita, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines rancho santa margarita california, vending leads rancho santa margarita california, vending locations rancho santa margarita california, vending opportunities rancho santa margarita california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rancho-santa-margarita-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rancho Santa Margarita, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rancho Santa Margarita, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rancho-santa-margarita-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rancho Santa Margarita, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rancho Santa Margarita, California. Find qualified businesses for vending machine placement."
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
