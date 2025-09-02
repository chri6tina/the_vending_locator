import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tacoma, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tacoma, Washington. Find qualified businesses for vending machine placement in this major port city and industrial center.",
  "keywords": "vending machines Tacoma Washington, vending leads Tacoma Washington, vending locations Tacoma Washington, vending opportunities Tacoma Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tacoma-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tacoma, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tacoma, Washington. Find qualified businesses for vending machine placement in this major port city and industrial center.",
    "url": "https://www.thevendinglocator.com/vending-leads/tacoma-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tacoma, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tacoma, Washington. Find qualified businesses for vending machine placement in this major port city and industrial center."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
  }
}

import PageClient from './pageClient'

export default function TacomaWashingtonVendingLeadsPage() {
  return <PageClient />
}
