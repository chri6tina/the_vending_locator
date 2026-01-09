import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mableton, Georgia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mableton, Georgia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines mableton georgia, vending leads mableton georgia, vending locations mableton georgia, vending opportunities mableton georgia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mableton-georgia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mableton, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mableton, Georgia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mableton-georgia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mableton, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mableton, Georgia. Find qualified businesses for vending machine placement."
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
