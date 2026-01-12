import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Horn Lake, Mississippi - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Horn Lake, Mississippi. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Horn Lake Mississippi, vending leads Horn Lake Mississippi, vending locations Horn Lake Mississippi, vending opportunities Horn Lake Mississippi",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/horn-lake-mississippi"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Horn Lake, Mississippi - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Horn Lake, Mississippi. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/horn-lake-mississippi",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Horn Lake, Mississippi - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Horn Lake, Mississippi. Find qualified businesses for vending machine placement."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
