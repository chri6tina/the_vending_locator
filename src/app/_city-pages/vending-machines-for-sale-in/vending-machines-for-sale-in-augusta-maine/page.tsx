import { Metadata } from 'next'
import AugustaPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-augusta-maine'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Augusta, Maine | Smart Coolers for the Capital City',
  description:
    'Equip Augusta, Maine with Haha AI smart coolers. Serve state government, hospitals, and universities with fresh grab-and-go and 24/7 support.',
  keywords:
    'Augusta vending machines for sale, smart vending Augusta ME, haha smart coolers Augusta, AI vending Maine, state government vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Augusta, Maine | Smart Coolers for the Capital City',
    description:
      'Launch AI-powered Haha smart coolers across Augusta’s government, healthcare, and logistics hubs with expert placement assistance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Augusta, Maine | Smart Coolers for the Capital City',
    description:
      'Deliver modern smart vending to Augusta workplaces. Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function AugustaMaineVendingPage() {
  return <AugustaPage />
}

