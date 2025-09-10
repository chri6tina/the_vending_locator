import { Metadata } from 'next'
import PageClient from './pageClient'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  
  return {
    "title": "Vending Machine Business Blog - The Vending Locator",
    "description": "Expert insights, tips, and strategies for vending machine business success. Learn from industry professionals.",
    "keywords": "vending machine blog, vending business tips, vending industry insights, vending machine strategies",
    "alternates": {
      "canonical": `https://www.thevendinglocator.com/blog/${slug}`
    },
    "openGraph": {
      "title": "Vending Machine Business Blog - The Vending Locator",
      "description": "Expert insights, tips, and strategies for vending machine business success. Learn from industry professionals.",
      "url": `https://www.thevendinglocator.com/blog/${slug}`,
      "siteName": "The Vending Locator",
      "type": "website"
    },
    "twitter": {
      "card": "summary_large_image",
      "title": "Vending Machine Business Blog - The Vending Locator",
      "description": "Expert insights, tips, and strategies for vending machine business success. Learn from industry professionals."
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
}

export default function Page() {
  return <PageClient />
}