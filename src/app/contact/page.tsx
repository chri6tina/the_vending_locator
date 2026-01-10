import { Metadata } from 'next'
import { Suspense } from 'react'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Contact The Vending Locator - Get Vending Machine Support",
  "description": "Contact our expert team for vending machine business support, questions, and guidance.",
  "keywords": "contact vending locator, vending machine support, vending business help, vending consultation",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/contact"
  },
  "openGraph": {
    "title": "Contact The Vending Locator - Get Vending Machine Support",
    "description": "Contact our expert team for vending machine business support, questions, and guidance.",
    "url": "https://www.thevendinglocator.com/contact",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Contact The Vending Locator - Get Vending Machine Support",
    "description": "Contact our expert team for vending machine business support, questions, and guidance."
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
    <Suspense fallback={<div>Loading...</div>}>
      <PageClient />
    </Suspense>
  )
}