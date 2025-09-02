import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in O'Fallon, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in O'Fallon, Missouri. Find qualified businesses for vending machine placement in this major suburban business and technology center.",
  "keywords": "vending machines O'Fallon Missouri, vending leads O'Fallon Missouri, vending locations O'Fallon Missouri, vending opportunities O'Fallon Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/ofallon-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in O'Fallon, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in O'Fallon, Missouri. Find qualified businesses for vending machine placement in this major suburban business and technology center.",
    "url": "https://www.thevendinglocator.com/vending-leads/ofallon-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in O'Fallon, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in O'Fallon, Missouri. Find qualified businesses for vending machine placement in this major suburban business and technology center."
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

export default function OFallonMissouriVendingLeadsPage() {
  return <PageClient />
}
