import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in East Chicago, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in East Chicago, Indiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines east chicago indiana, vending leads east chicago indiana, vending locations east chicago indiana, vending opportunities east chicago indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/east-chicago-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in East Chicago, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in East Chicago, Indiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/east-chicago-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in East Chicago, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in East Chicago, Indiana. Find qualified businesses for vending machine placement."
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
