import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rehoboth Beach, Delaware - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rehoboth Beach, Delaware. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines rehoboth beach delaware, vending leads rehoboth beach delaware, vending locations rehoboth beach delaware, vending opportunities rehoboth beach delaware",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rehoboth-beach-delaware"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rehoboth Beach, Delaware - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rehoboth Beach, Delaware. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rehoboth-beach-delaware",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rehoboth Beach, Delaware - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rehoboth Beach, Delaware. Find qualified businesses for vending machine placement."
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
