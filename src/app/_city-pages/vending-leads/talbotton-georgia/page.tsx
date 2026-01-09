import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Talbotton, Georgia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Talbotton, Georgia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines talbotton georgia, vending leads talbotton georgia, vending locations talbotton georgia, vending opportunities talbotton georgia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/talbotton-georgia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Talbotton, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Talbotton, Georgia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/talbotton-georgia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Talbotton, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Talbotton, Georgia. Find qualified businesses for vending machine placement."
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
