import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Big Bear Lake, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Big Bear Lake, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines big bear lake california, vending leads big bear lake california, vending locations big bear lake california, vending opportunities big bear lake california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/big-bear-lake-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Big Bear Lake, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Big Bear Lake, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/big-bear-lake-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Big Bear Lake, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Big Bear Lake, California. Find qualified businesses for vending machine placement."
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
