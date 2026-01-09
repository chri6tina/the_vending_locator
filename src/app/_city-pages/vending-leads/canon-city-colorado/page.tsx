import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Canon City, Colorado - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Canon City, Colorado. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines canon city colorado, vending leads canon city colorado, vending locations canon city colorado, vending opportunities canon city colorado",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/canon-city-colorado"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Canon City, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Canon City, Colorado. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/canon-city-colorado",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Canon City, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Canon City, Colorado. Find qualified businesses for vending machine placement."
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
