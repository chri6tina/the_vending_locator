import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Forsyth, Georgia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Forsyth, Georgia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines forsyth georgia, vending leads forsyth georgia, vending locations forsyth georgia, vending opportunities forsyth georgia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/forsyth-georgia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Forsyth, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Forsyth, Georgia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/forsyth-georgia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Forsyth, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Forsyth, Georgia. Find qualified businesses for vending machine placement."
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
