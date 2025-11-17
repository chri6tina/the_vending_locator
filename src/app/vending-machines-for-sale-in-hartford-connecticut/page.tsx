import { Metadata } from 'next'
import HartfordPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-hartford-connecticut'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Hartford, Connecticut | AI Smart Coolers for Insurance & Healthcare',
  description:
    'Deliver Haha AI smart vending machines across Hartford, Connecticut. Support insurance headquarters, Hartford Hospital, UConn Health, and downtown innovation hubs with 24/7 operator support.',
  keywords:
    'Hartford vending machines for sale, smart vending Hartford CT, haha smart coolers Connecticut, insurance campus vending Hartford, Hartford Hospital vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Hartford, Connecticut | AI Smart Coolers for Insurance & Healthcare',
    description:
      'Provide AI-powered Haha smart coolers to Hartford insurance towers, hospitals, and universities with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Hartford, Connecticut | AI Smart Coolers for Insurance & Healthcare',
    description:
      'Modernise Hartford vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function HartfordConnecticutVendingPage() {
  return <HartfordPage />
}

