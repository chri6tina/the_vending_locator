import { Metadata } from 'next'
import ButtePage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-butte-montana'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Butte, Montana | AI Smart Coolers for Mining & Montana Tech',
  description:
    'Install Haha AI smart coolers across Butte, Montana. Serve mining operations, Montana Tech, and regional healthcare with premium vending and 24/7 support.',
  keywords:
    'Butte vending machines for sale, smart vending Butte MT, haha smart coolers Butte, AI vending Montana, mining vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Butte, Montana | AI Smart Coolers for Mining & Montana Tech',
    description:
      'Deliver AI-powered Haha smart coolers to Butte mining sites, campuses, and healthcare facilities with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Butte, Montana | AI Smart Coolers for Mining & Montana Tech',
    description:
      'Modernise Butte vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const revalidate = 3600

export default function ButteMontanaVendingPage() {
  return <ButtePage />
}
