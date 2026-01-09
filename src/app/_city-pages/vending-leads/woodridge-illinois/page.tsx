import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Woodridge, Illinois - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Woodridge, Illinois. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines woodridge illinois, vending leads woodridge illinois, vending locations woodridge illinois, vending opportunities woodridge illinois",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/woodridge-illinois"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Woodridge, Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Woodridge, Illinois. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/woodridge-illinois",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Woodridge, Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Woodridge, Illinois. Find qualified businesses for vending machine placement."
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
