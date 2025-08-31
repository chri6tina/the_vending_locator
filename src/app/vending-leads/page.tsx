import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads - The Vending Locator",
  "description": "Get verified vending machine leads and locations throughout Vending Leads. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads, vending leads Vending Leads, vending locations Vending Leads, vending opportunities Vending Leads",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads - The Vending Locator",
    "description": "Get verified vending machine leads and locations throughout Vending Leads. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads - The Vending Locator",
    "description": "Get verified vending machine leads and locations throughout Vending Leads. Find qualified businesses for vending machine placement."
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

export default function Page() {
  return (
    <div>
      <h1>Vending Machine Leads in Vending Leads - The Vending Locator</h1>
      <p>Get verified vending machine leads and locations throughout Vending Leads. Find qualified businesses for vending machine placement.</p>
    </div>
  )
}