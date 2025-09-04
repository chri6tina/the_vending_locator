import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tuscaloosa, Alabama - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tuscaloosa, Alabama. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Tuscaloosa Alabama, vending leads Tuscaloosa Alabama, vending locations Tuscaloosa Alabama, vending opportunities Tuscaloosa Alabama",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tuscaloosa-alabama"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tuscaloosa, Alabama - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tuscaloosa, Alabama. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tuscaloosa-alabama",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tuscaloosa, Alabama - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tuscaloosa, Alabama. Find qualified businesses for vending machine placement."
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