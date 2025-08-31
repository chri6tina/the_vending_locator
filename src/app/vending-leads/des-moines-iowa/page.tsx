import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Des Moines Iowa - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Des Moines Iowa. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Des Moines Iowa, vending leads Vending Leads Des Moines Iowa, vending locations Vending Leads Des Moines Iowa, vending opportunities Vending Leads Des Moines Iowa",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/des-moines-iowa"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Des Moines Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Des Moines Iowa. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/des-moines-iowa",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Des Moines Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Des Moines Iowa. Find qualified businesses for vending machine placement."
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