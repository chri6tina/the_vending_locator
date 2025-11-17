import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Montpelier, Vermont - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Montpelier, Vermont. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines montpelier vermont, vending leads montpelier vermont, vending locations montpelier vermont, vending opportunities montpelier vermont",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/montpelier-vermont"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Montpelier, Vermont - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Montpelier, Vermont. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/montpelier-vermont",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Montpelier, Vermont - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Montpelier, Vermont. Find qualified businesses for vending machine placement."
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
