import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Coeur Dalene Idaho - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Coeur Dalene Idaho. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Coeur Dalene Idaho, vending leads Vending Leads Coeur Dalene Idaho, vending locations Vending Leads Coeur Dalene Idaho, vending opportunities Vending Leads Coeur Dalene Idaho",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/coeur-dalene-idaho"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Coeur Dalene Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Coeur Dalene Idaho. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/coeur-dalene-idaho",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Coeur Dalene Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Coeur Dalene Idaho. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}