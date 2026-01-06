import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in St. Louis, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in St. Louis, Missouri. Find qualified businesses for vending machine placement in this major metropolitan business hub.",
  "keywords": "vending machines St. Louis Missouri, vending leads St. Louis Missouri, vending locations St. Louis Missouri, vending opportunities St. Louis Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/st-louis-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in St. Louis, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in St. Louis, Missouri. Find qualified businesses for vending machine placement in this major metropolitan business hub.",
    "url": "https://www.thevendinglocator.com/vending-leads/st-louis-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in St. Louis, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in St. Louis, Missouri. Find qualified businesses for vending machine placement in this major metropolitan business hub."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


import PageClient from './pageClient'

// Generate on-demand to reduce build memory usage
export default function StLouisMissouriVendingLeadsPage() {
  return <PageClient />
}
